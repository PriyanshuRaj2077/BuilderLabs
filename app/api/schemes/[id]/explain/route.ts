import { NextRequest, NextResponse } from 'next/server';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { getGeminiSchemeExplanation } from '@/lib/gemini';
import { UserProfile } from '@/lib/types';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const profile: UserProfile = body.profile;

    const scheme = SEED_SCHEMES.find(s => s.id === id || s.slug === id);
    if (!scheme) {
      return NextResponse.json({ error: 'Scheme not found' }, { status: 404 });
    }

    if (!profile) {
      return NextResponse.json({ error: 'User profile is required' }, { status: 400 });
    }

    const explanation = await getGeminiSchemeExplanation(scheme, profile);

    return NextResponse.json({
      schemeId: scheme.id,
      schemeName: scheme.name,
      explanation
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
