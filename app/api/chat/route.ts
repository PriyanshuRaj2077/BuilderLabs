import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { UserProfile } from '@/lib/types';
import { rankSchemesForProfile } from '@/lib/matching';

// Helper to get or instantiate GoogleGenerativeAI client dynamically
function getGenAI(): GoogleGenerativeAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenerativeAI(apiKey);
}

// In-memory conversation memory per session (in production, use database)
const conversationMemory = new Map<string, Array<{ role: string; content: string }>>();

interface ChatRequest {
  message: string;
  profile: UserProfile;
  conversationId: string;
}

/**
 * POST /api/chat
 * Handles personalized scheme questions using Gemini AI
 */
export async function POST(req: NextRequest) {
  try {
    const { message, profile, conversationId } = (await req.json()) as ChatRequest;

    if (!message || !profile || !conversationId) {
      return NextResponse.json(
        { error: 'Message, profile, and conversationId are required' },
        { status: 400 }
      );
    }

    // 1. Get relevant schemes for this user
    const rankedSchemes = rankSchemesForProfile(SEED_SCHEMES, profile);
    const eligibleSchemes = rankedSchemes.filter(r => r.isEligible).slice(0, 10);
    const topSchemeNames = eligibleSchemes.map(r => r.scheme.name).join(', ');

    // 2. Prepare conversation history
    let conversationHistory = conversationMemory.get(conversationId) || [];

    // 3. Build context prompt
    const contextPrompt = `You are SuchakAI, a friendly and knowledgeable assistant helping Indian citizens understand government schemes and subsidies.

User Profile:
- Name: ${profile.name}
- Age: ${profile.age} years
- State: ${profile.state}
- Category: ${profile.category}
- Occupation: ${profile.occupation}
- Education: ${profile.education}
- Annual Income: ₹${profile.annualIncome.toLocaleString('en-IN')}
- Eligible for: ${topSchemeNames || 'No schemes currently matched'}

Your instructions:
1. Provide personalized advice based on their specific profile and eligible schemes
2. Focus on practical steps: what documents they need, where to apply, application deadlines
3. Be encouraging but honest about eligibility constraints
4. If they ask about a scheme they don't qualify for, gently explain why and suggest alternatives
5. Always cite specific scheme names from their eligible list when relevant
6. Keep responses concise (under 150 words) and easy to understand
7. Use checkmarks (✓) for positive points and (⚠️) for important caveats
8. Provide direct links to application portals when available
9. If you don't have specific information, suggest they verify on the official scheme portal

User's question: "${message}"`;

    // 4. Try Gemini API if available
    const genAI = getGenAI();
    if (genAI) {
      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        // Build conversation with history
        const chat = model.startChat({
          history: conversationHistory.map(msg => ({
            role: msg.role as 'user' | 'model',
            parts: [{ text: msg.content }],
          })),
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          },
        });

        const response = await chat.sendMessage(contextPrompt);
        const responseText = response.response.text();

        // Update conversation memory
        conversationHistory = [
          ...conversationHistory,
          { role: 'user', content: message },
          { role: 'model', content: responseText },
        ];

        // Keep only last 10 exchanges (20 messages) in memory
        if (conversationHistory.length > 20) {
          conversationHistory = conversationHistory.slice(-20);
        }

        conversationMemory.set(conversationId, conversationHistory);

        return NextResponse.json({
          response: responseText,
          source: 'gemini',
          schemes: eligibleSchemes.map(r => ({
            name: r.scheme.name,
            matchScore: r.matchScore,
          })),
        });
      } catch (geminiErr) {
        console.warn('Gemini API failed, falling back to rule-based response:', geminiErr);
      }
    }

    // 5. Fallback: Rule-based personalized response
    const fallbackResponse = generateRuleBasedResponse(message, profile, eligibleSchemes);

    // Update conversation memory with fallback
    conversationHistory = [
      ...conversationHistory,
      { role: 'user', content: message },
      { role: 'model', content: fallbackResponse },
    ];

    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }

    conversationMemory.set(conversationId, conversationHistory);

    return NextResponse.json({
      response: fallbackResponse,
      source: 'rule_fallback',
      schemes: eligibleSchemes.map(r => ({
        name: r.scheme.name,
        matchScore: r.matchScore,
      })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * Rule-based intelligent response generator for questions about schemes
 */
function generateRuleBasedResponse(
  question: string,
  profile: UserProfile,
  eligibleSchemes: any[]
): string {
  const q = question.toLowerCase();

  // Helper to find scheme mentioned in question
  const findMentionedScheme = () => {
    const lowerQuestion = q.toLowerCase();
    for (const eligibleScheme of eligibleSchemes) {
      const schemeName = eligibleScheme.scheme.name.toLowerCase();
      if (lowerQuestion.includes(schemeName)) {
        return eligibleScheme.scheme;
      }
    }
    return null;
  };

  // PATTERN 1: List eligible schemes (which/what schemes, eligible, list, show, find)
  if (
    (q.includes('which') || q.includes('what') || q.includes('list') || q.includes('show') || q.includes('find')) &&
    (q.includes('scheme') || q.includes('yojana') || q.includes('eligible') || q.includes('apply') || q.includes('match') || q.includes('can i'))
  ) {
    const count = eligibleSchemes.length;
    if (count === 0) {
      return `I found no schemes matching your profile yet. But don't worry! You could become eligible for more schemes by:\n✓ Increasing your skills (for employment schemes)\n✓ Starting a business (for entrepreneurship schemes)\n✓ Moving to a state with more schemes for your category\n\nVisit our Opportunities page to explore all available schemes!`;
    }

    const topSchemes = eligibleSchemes.slice(0, 3);
    const schemeList = topSchemes
      .map(
        r =>
          `• ${r.scheme.name} (Score: ${r.matchScore}%)`
      )
      .join('\n');

    return `Great question! You're currently eligible for ${count} schemes based on your ${profile.occupation} status in ${profile.state}. Here are your top 3:\n\n${schemeList}\n\n✓ All match your income level (₹${(profile.annualIncome / 100000).toFixed(1)}L) and ${profile.category} category.\n\nClick on each scheme card for detailed eligibility & application steps!`;
  }

  // PATTERN 2: About a specific scheme (tell me about X, is X good, details about X, more info on X)
  const mentionedScheme = findMentionedScheme();
  if ((q.includes('about') || q.includes('tell') || q.includes('details') || q.includes('info') || q.includes('more') || q.includes('good for') || q.includes('suit')) && mentionedScheme) {
    const matchResult = eligibleSchemes.find(r => r.scheme.id === mentionedScheme.id);
    const isEligible = matchResult ? matchResult.isEligible : false;

    return `**${mentionedScheme.name}**\n\n📋 Benefits: ${mentionedScheme.benefits.slice(0, 2).join(', ')}\n💰 Amount: ${mentionedScheme.benefitAmount || 'Varies'}\n📝 Documents: ${mentionedScheme.requiredDocuments.slice(0, 2).join(', ')}\n🌐 Apply via: ${mentionedScheme.portalName}\n\n${isEligible ? '✓ You are eligible for this scheme!' : '⚠️ You may not currently qualify. Check eligibility details.'}\n\nVisit **${mentionedScheme.officialUrl}** for more information.`;
  }

  // PATTERN 3: How to apply (apply, register, submit, process, procedure, steps)
  if (q.includes('how') && (q.includes('apply') || q.includes('register') || q.includes('submit') || q.includes('process') || q.includes('procedure') || q.includes('steps'))) {
    if (eligibleSchemes.length === 0) {
      return `To apply for any scheme, you generally need:\n✓ Aadhaar Card\n✓ Income/Category Certificate\n✓ State domicile proof\n✓ Bank account linked to Aadhaar\n\nVisit the official scheme portal for exact documents. Which scheme are you interested in?`;
    }

    const topScheme = eligibleSchemes[0].scheme;
    return `To apply for **${topScheme.name}**:\n\n✓ Documents needed: ${topScheme.requiredDocuments.slice(0, 3).join(', ')}\n✓ Mode: ${topScheme.applicationMode}\n✓ Portal: ${topScheme.portalName}\n\nVisit **${topScheme.officialUrl}** to start your application!\n\n⚠️ Keep your ${profile.state} domicile & category certificate ready.`;
  }

  // PATTERN 4: Benefits/amount (benefit, how much, money, amount, get, receive, provide)
  if (q.includes('benefit') || q.includes('how much') || q.includes('amount') || q.includes('money') || q.includes('get') || q.includes('receive')) {
    if (eligibleSchemes.length === 0) {
      return `Different schemes offer different benefits:\n💰 Cash transfers (₹2,000-₹12,000/year)\n🎓 Scholarships (tuition fee waivers)\n🏠 Subsidized loans (up to ₹10 lakhs)\n🏥 Health insurance coverage\n\nExplore schemes in your category to see what benefits align with your needs!`;
    }

    const topScheme = eligibleSchemes[0].scheme;
    return `**${topScheme.name}** offers:\n\n${topScheme.benefits.slice(0, 2).map((b: string) => `✓ ${b}`).join('\n')}\n\nBenefit amount: ${topScheme.benefitAmount || 'Varies by category'}\n\nYou qualify because:\n✓ Domiciled in ${profile.state}\n✓ Occupation: ${profile.occupation.replace('_', ' ')}\n✓ Income: ₹${(profile.annualIncome / 100000).toFixed(1)}L (within limits)`;
  }

  // PATTERN 5: Deadlines (deadline, when, date, time, soon, last date, closing)
  if (q.includes('deadline') || q.includes('when') || q.includes('date') || q.includes('time') || q.includes('soon') || q.includes('last date') || q.includes('closing')) {
    const withDeadlines = eligibleSchemes.filter(r => r.scheme.deadline);
    if (withDeadlines.length === 0) {
      return `Most schemes accept applications year-round, but some have seasonal deadlines:\n\n✓ Check individual scheme pages for exact dates\n✓ Apply early to avoid last-minute issues\n✓ Set calendar reminders for deadlines\n\nReady to apply? Pick a scheme from your eligible list!`;
    }

    const deadlineSchemes = withDeadlines
      .slice(0, 2)
      .map(r => `• ${r.scheme.name}: ${r.scheme.deadline}`)
      .join('\n');

    return `Here are upcoming deadlines for your eligible schemes:\n\n${deadlineSchemes}\n\n⚠️ Don't miss out! Apply soon to secure your benefits.`;
  }

  // PATTERN 6: Eligibility/requirements (requirement, eligibility, qualify, who can, am i, section, criteria)
  if (q.includes('requirement') || q.includes('eligibility') || q.includes('qualify') || q.includes('who can') || q.includes('am i') || q.includes('section') || q.includes('criteria')) {
    if (eligibleSchemes.length === 0) {
      return `Your current profile:\n✓ Age: ${profile.age} years\n✓ State: ${profile.state}\n✓ Category: ${profile.category}\n✓ Occupation: ${profile.occupation.replace('_', ' ')}\n✓ Income: ₹${(profile.annualIncome / 100000).toFixed(1)}L\n\nNo schemes matched yet. Try updating your profile or exploring broader categories!`;
    }

    const topScheme = eligibleSchemes[0].scheme;
    return `You're eligible for **${topScheme.name}** because:\n\n✓ Age requirement: ${topScheme.eligibility.ageMin || 'No minimum'}-${topScheme.eligibility.ageMax || 'No maximum'} (You: ${profile.age})\n✓ Category: Includes ${profile.category}\n✓ Occupation: Covers ${profile.occupation.replace('_', ' ')}\n✓ Income ceiling: ₹${(topScheme.eligibility.incomeMax ? topScheme.eligibility.incomeMax / 100000 : 'No')}L (You: ₹${(profile.annualIncome / 100000).toFixed(1)}L)`;
  }

  // PATTERN 7: Documents needed (document, paper, certificate, require, needed, need, aadhaar)
  if (q.includes('document') || q.includes('paper') || q.includes('certificate') || q.includes('require') || q.includes('needed') || q.includes('aadhaar')) {
    if (eligibleSchemes.length === 0) {
      return `Common documents needed for scheme applications:\n✓ Aadhaar Card\n✓ Income Certificate\n✓ Category/Caste Certificate\n✓ Bank Account Details\n✓ Residence Proof\n\nVisit the official scheme portal to see exact requirements.`;
    }

    const topScheme = eligibleSchemes[0].scheme;
    return `For **${topScheme.name}**, you'll need:\n\n${topScheme.requiredDocuments.slice(0, 4).map((doc: string) => `✓ ${doc}`).join('\n')}\n\n⚠️ Ensure all documents are verified and issued in the current fiscal year.\n\nUpload them at: **${topScheme.portalName}**`;
  }

  // Default: Show personalized scheme summary instead of generic message
  if (eligibleSchemes.length > 0) {
    const topSchemes = eligibleSchemes.slice(0, 2);
    const schemeList = topSchemes
      .map(r => `• ${r.scheme.name} (${r.matchScore}% match)`)
      .join('\n');

    return `I understand you're looking for information about government schemes!\n\nBased on your profile as a ${profile.age}-year-old ${profile.occupation.replace('_', ' ')} in ${profile.state}, I can help with:\n\n${schemeList}\n\nYou can ask me:\n✓ "Tell me about [scheme name]"\n✓ "How do I apply?"\n✓ "What documents do I need?"\n✓ "What benefits will I get?"\n\nWhat would you like to know?`;
  }

  // Final fallback
  return `I'm here to help you discover and understand government schemes suited to your profile as a ${profile.age}-year-old ${profile.occupation.replace('_', ' ')} in ${profile.state}.\n\nYou can ask me:\n✓ "Which schemes am I eligible for?"\n✓ "Tell me about [specific scheme]"\n✓ "How do I apply?"\n✓ "What benefits will I get?"\n✓ "What documents do I need?"\n\nWhat would you like to know?`;
}
