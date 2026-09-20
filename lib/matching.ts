import { UserProfile, Scheme, SchemeMatchResult } from './types';

/**
 * 6-Factor Deterministic Matching Algorithm
 * 1. State / Scope Match (Weight: 25%)
 * 2. Caste / Category Match (Weight: 20%)
 * 3. Occupation Match (Weight: 20%)
 * 4. Income Proximity & Ceiling (Weight: 15%)
 * 5. Age & Gender Feasibility (Weight: 10%)
 * 6. Scheme Urgency & Popularity (Weight: 10%)
 */
export function evaluateSchemeEligibility(
  scheme: Scheme,
  profile: UserProfile
): SchemeMatchResult {
  const breakdown = {
    stateMatched: false,
    ageMatched: false,
    genderMatched: false,
    categoryMatched: false,
    occupationMatched: false,
    incomeMatched: false,
  };

  const cautionNotes: string[] = [];

  // 1. State Eligibility
  if (scheme.level === 'central') {
    breakdown.stateMatched = true;
  } else if (!scheme.state || scheme.state === 'All India' || scheme.state === profile.state) {
    breakdown.stateMatched = true;
  } else {
    breakdown.stateMatched = false;
    cautionNotes.push(`Scheme is exclusive to residents of ${scheme.state}, but your profile state is ${profile.state}.`);
  }

  // 2. Age Check
  const ageMin = scheme.eligibility.ageMin ?? 0;
  const ageMax = scheme.eligibility.ageMax ?? 120;
  if (profile.age >= ageMin && profile.age <= ageMax) {
    breakdown.ageMatched = true;
  } else {
    breakdown.ageMatched = false;
    cautionNotes.push(`Age limit is ${ageMin} to ${ageMax} years (your age: ${profile.age}).`);
  }

  // 3. Gender Check
  const reqGender = scheme.eligibility.gender ?? 'all';
  if (reqGender === 'all' || reqGender === profile.gender) {
    breakdown.genderMatched = true;
  } else {
    breakdown.genderMatched = false;
    cautionNotes.push(`Designated exclusively for ${reqGender} beneficiaries.`);
  }

  // 4. Category Check
  const categories = scheme.eligibility.categories;
  if (categories.includes('All') || categories.includes(profile.category)) {
    breakdown.categoryMatched = true;
  } else {
    breakdown.categoryMatched = false;
    cautionNotes.push(`Reserved for ${categories.join(', ')} categories (your category: ${profile.category}).`);
  }

  // 5. Occupation Check
  const occupations = scheme.eligibility.occupations;
  if (occupations.length === 0 || occupations.includes(profile.occupation)) {
    breakdown.occupationMatched = true;
  } else {
    breakdown.occupationMatched = false;
    cautionNotes.push(`Aimed at ${occupations.map(o => o.replace('_', ' ')).join(', ')} (your status: ${profile.occupation.replace('_', ' ')}).`);
  }

  // 6. Income Check
  const maxIncome = scheme.eligibility.incomeMax;
  if (!maxIncome || profile.annualIncome <= maxIncome) {
    breakdown.incomeMatched = true;
  } else {
    breakdown.incomeMatched = false;
    cautionNotes.push(`Annual family income ceiling is ₹${maxIncome.toLocaleString('en-IN')} (your income: ₹${profile.annualIncome.toLocaleString('en-IN')}).`);
  }

  // Calculate Weighted Match Score
  let score = 0;

  // State: 25 pts
  if (scheme.level === 'central') {
    score += 22; // High base for central schemes
  } else if (scheme.state === profile.state) {
    score += 25; // Full marks for state-specific local match!
  } else {
    score += 0;
  }

  // Category: 20 pts
  if (categories.includes(profile.category) && !categories.includes('All')) {
    score += 20; // Specific affirmative target
  } else if (categories.includes('All')) {
    score += 15;
  } else {
    score += 0;
  }

  // Occupation: 20 pts
  if (occupations.includes(profile.occupation)) {
    score += 20;
  } else {
    score += 4; // Minimal general benefit if broad
  }

  // Income: 15 pts
  if (!maxIncome) {
    score += 12;
  } else if (profile.annualIncome <= maxIncome) {
    // Closer to lower brackets gets higher urgency score
    const ratio = profile.annualIncome / maxIncome;
    score += ratio < 0.6 ? 15 : 12;
  } else {
    score += 0;
  }

  // Age & Gender: 10 pts
  if (breakdown.ageMatched && breakdown.genderMatched) {
    score += 10;
  } else if (breakdown.ageMatched || breakdown.genderMatched) {
    score += 5;
  }

  // Bonus for Status & Interest Affinity: 10 pts
  if (scheme.status === 'active') score += 5;
  if (profile.interests.some(interest => scheme.categoryTag.toLowerCase().includes(interest.toLowerCase().slice(0, 5)))) {
    score += 5;
  }

  // Hard gating: If state or category or gender is completely incompatible, cap score
  const isEligible = breakdown.stateMatched && breakdown.ageMatched && breakdown.genderMatched && breakdown.incomeMatched;
  const finalScore = Math.min(100, Math.max(0, isEligible ? score : Math.min(score, 38)));

  // Generate clear plain-language explanation
  let whyItMatches = '';
  if (isEligible) {
    const reasons: string[] = [];
    if (scheme.state === profile.state) reasons.push(`domiciled in ${profile.state}`);
    if (categories.includes(profile.category)) reasons.push(`belonging to ${profile.category} category`);
    if (occupations.includes(profile.occupation)) reasons.push(`current role as ${profile.occupation.replace('_', ' ')}`);
    if (maxIncome && profile.annualIncome <= maxIncome) reasons.push(`annual income within ₹${(maxIncome/100000).toFixed(1)}L ceiling`);

    whyItMatches = reasons.length > 0 
      ? `Strongly recommended based on your ${reasons.join(', ')}.`
      : `Matches your broad demographic and occupation profile under ${scheme.level.replace('_', ' ')} guidelines.`;
  } else {
    whyItMatches = cautionNotes.length > 0
      ? `May not be directly accessible: ${cautionNotes[0]}`
      : `Does not strictly align with your current demographic eligibility requirements.`;
  }

  return {
    scheme,
    matchScore: finalScore,
    isEligible,
    whyItMatches,
    breakdown,
    cautionNotes: cautionNotes.length > 0 ? cautionNotes : undefined
  };
}

/**
 * Filter & Rank list of schemes for a given user profile
 */
export function rankSchemesForProfile(
  schemes: Scheme[],
  profile: UserProfile
): SchemeMatchResult[] {
  return schemes
    .map(scheme => evaluateSchemeEligibility(scheme, profile))
    .sort((a, b) => b.matchScore - a.matchScore);
}
