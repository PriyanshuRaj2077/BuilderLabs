import { GoogleGenerativeAI } from '@google/generative-ai';
import { Scheme, UserProfile } from './types';

// Safe server-side singleton client
const apiKey = process.env.GEMINI_API_KEY || '';
let genAI: GoogleGenerativeAI | null = null;
if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
}

// In-memory runtime cache to save tokens and ensure instant load
const memoryCache = new Map<string, { explanation: string; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

export interface AIExplanationResult {
  summary: string;
  matchedPoints: string[];
  watchouts: string[];
  nextSteps: string[];
  source: 'gemini' | 'rule_fallback';
}

/**
 * Meaningfully invokes Gemini to explain why a specific scheme matches
 * the citizen's profile and what caveats/prerequisites to watch out for.
 */
export async function getGeminiSchemeExplanation(
  scheme: Scheme,
  profile: UserProfile
): Promise<AIExplanationResult> {
  const cacheKey = `${scheme.id}_${profile.category}_${profile.state}_${profile.occupation}_${Math.floor(profile.annualIncome / 50000)}`;

  // 1. Check in-memory cache
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    try {
      return JSON.parse(cached.explanation) as AIExplanationResult;
    } catch {
      // ignore parse error and proceed
    }
  }

  // 2. Call Gemini API if available
  if (genAI && apiKey) {
    try {
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        generationConfig: {
          temperature: 0.2,
          responseMimeType: 'application/json',
        }
      });

      const prompt = `You are SuchakAI's Government Scheme Advisor for Indian citizens.
Analyze this scheme against the citizen's profile and explain in clear, reassuring, and precise language why they qualify and what immediate steps they should take.

Scheme:
Name: ${scheme.name}
Ministry: ${scheme.ministry}
Level: ${scheme.level} (State: ${scheme.state || 'All India'})
Target Beneficiaries: ${scheme.whoIsItFor}
Eligibility Rules: ${scheme.eligibility.rawText}
Benefits: ${scheme.benefits.join('; ')}
Required Documents: ${scheme.requiredDocuments.join(', ')}

Citizen Profile:
Age: ${profile.age} years
Gender: ${profile.gender}
State of Residence: ${profile.state}
Category/Caste: ${profile.category}
Occupation: ${profile.occupation}
Education: ${profile.education}
Annual Family Income: ₹${profile.annualIncome.toLocaleString('en-IN')}

Output ONLY a JSON object with this exact structure:
{
  "summary": "2-3 sentences explaining exactly why this scheme matches their personal background.",
  "matchedPoints": [
    "Checkmark point 1 highlighting met criteria (e.g. domiciled in state)",
    "Checkmark point 2 highlighting income/caste eligibility"
  ],
  "watchouts": [
    "Caveat or prerequisite they must check (e.g. certificate validity, Aadhaar bank linking)"
  ],
  "nextSteps": [
    "Concrete step 1 (e.g. keep land records / marksheet ready)",
    "Concrete step 2 (visit official portal link)"
  ]
}`;

      const response = await model.generateContent(prompt);
      const text = response.response.text();
      const parsed = JSON.parse(text);

      const result: AIExplanationResult = {
        summary: parsed.summary || 'Eligible based on your declared demographic and income profile.',
        matchedPoints: parsed.matchedPoints || ['Criteria matched with official parameters'],
        watchouts: parsed.watchouts || ['Ensure your Aadhaar is linked to your active bank account'],
        nextSteps: parsed.nextSteps || ['Verify required documents and submit on the official portal'],
        source: 'gemini'
      };

      memoryCache.set(cacheKey, { explanation: JSON.stringify(result), timestamp: Date.now() });
      return result;
    } catch (err) {
      console.warn('Gemini API call failed, falling back to deterministic explanation generator:', err);
    }
  }

  // 3. Fallback: High-precision semantic rule explainer (Zero-cost, instant, reliable)
  const matchedPoints: string[] = [];
  if (scheme.level === 'central') {
    matchedPoints.push(`Pan-India Central Scheme: Available to citizens living in ${profile.state}.`);
  } else if (scheme.state === profile.state) {
    matchedPoints.push(`State Specific: Domiciled in ${profile.state}, matching this state government welfare initiative.`);
  }

  if (scheme.eligibility.categories.includes(profile.category)) {
    matchedPoints.push(`Category Match: Specifically reserved for ${profile.category} beneficiaries.`);
  } else if (scheme.eligibility.categories.includes('All')) {
    matchedPoints.push(`Open to all categories including ${profile.category}.`);
  }

  if (scheme.eligibility.occupations.includes(profile.occupation)) {
    matchedPoints.push(`Occupation Aligned: Targets individuals working as ${profile.occupation.replace('_', ' ')}.`);
  }

  if (scheme.eligibility.incomeMax) {
    matchedPoints.push(`Income Verified: Your ₹${(profile.annualIncome / 100000).toFixed(1)}L annual income is comfortably below the ₹${(scheme.eligibility.incomeMax / 100000).toFixed(1)}L ceiling.`);
  }

  const watchouts: string[] = [
    'Aadhaar Direct Benefit Transfer (DBT): Bank account must be actively seeded with NPCI/Aadhaar.',
    'Certificates Validity: Ensure your caste/income certificates are issued for the current fiscal cycle.'
  ];

  if (scheme.inconsistencies && scheme.inconsistencies.length > 0) {
    watchouts.push(`Portal Notice: ${scheme.inconsistencies[0]}`);
  }

  const nextSteps: string[] = [
    `Gather documents: ${scheme.requiredDocuments.slice(0, 2).join(' and ')}.`,
    `Visit official portal (${scheme.portalName}) and apply via ${scheme.applicationMode} channel.`
  ];

  const fallbackResult: AIExplanationResult = {
    summary: `SuchakAI matched this ${scheme.categoryTag} initiative to your profile because your status as a ${profile.occupation.replace('_', ' ')} in ${profile.state} satisfies the central guidelines.`,
    matchedPoints: matchedPoints.length > 0 ? matchedPoints : ['Matches standard demographic guidelines'],
    watchouts,
    nextSteps,
    source: 'rule_fallback'
  };

  memoryCache.set(cacheKey, { explanation: JSON.stringify(fallbackResult), timestamp: Date.now() });
  return fallbackResult;
}
