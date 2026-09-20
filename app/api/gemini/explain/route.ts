import { NextRequest, NextResponse } from 'next/server';
import { getGeminiSchemeExplanation } from '@/lib/gemini';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { UserProfile } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const { schemeId, profile }: { schemeId: string; profile: UserProfile } = await req.json();

    if (!schemeId || !profile) {
      return NextResponse.json(
        { error: 'Scheme ID and citizen profile are required.' },
        { status: 400 }
      );
    }

    const scheme = SEED_SCHEMES.find((s) => s.id === schemeId || s.slug === schemeId);
    if (!scheme) {
      return NextResponse.json({ error: 'Scheme not found.' }, { status: 404 });
    }

    const explanation = await getGeminiSchemeExplanation(scheme, profile);

    return NextResponse.json({
      schemeId: scheme.id,
      schemeName: scheme.name,
      explanation,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to generate explanation';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
