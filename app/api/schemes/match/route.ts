import { NextRequest, NextResponse } from 'next/server';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { rankSchemesForProfile } from '@/lib/matching';
import { UserProfile } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const profile: UserProfile = await req.json();

    if (!profile || !profile.state || typeof profile.age !== 'number') {
      return NextResponse.json(
        { error: 'Valid user profile is required' },
        { status: 400 }
      );
    }

    // Rank schemes deterministically
    const ranked = rankSchemesForProfile(SEED_SCHEMES, profile);

    return NextResponse.json({
      totalAnalyzed: SEED_SCHEMES.length,
      matchedCount: ranked.filter(r => r.isEligible).length,
      results: ranked
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
