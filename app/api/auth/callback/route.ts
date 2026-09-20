import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/onboarding';

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data?.user) {
      // Upsert profile for new Google sign-in users
      try {
        const { data: existingProfile } = await supabase
          .from('profiles')
          .select('id, is_onboarded')
          .eq('id', data.user.id)
          .single();

        if (!existingProfile) {
          // New user — create initial profile
          await supabase.from('profiles').upsert({
            id: data.user.id,
            full_name:
              data.user.user_metadata?.full_name ||
              data.user.user_metadata?.name ||
              'Citizen',
            state: 'Maharashtra',
            age: 24,
            gender: 'female',
            category: 'General',
            occupation: 'job_seeker',
            education_level: 'undergraduate',
            annual_income: 250000,
            is_rural: false,
            has_disability: false,
            interests: [],
            is_onboarded: false,
          });
          return NextResponse.redirect(`${origin}/onboarding`);
        }

        // Existing user — go to dashboard or onboarding based on status
        const redirectTo = existingProfile.is_onboarded ? '/dashboard' : '/onboarding';
        return NextResponse.redirect(`${origin}${redirectTo}`);
      } catch {
        return NextResponse.redirect(`${origin}/onboarding`);
      }
    }
  }

  // Auth failed — redirect to auth page with error
  return NextResponse.redirect(`${origin}/auth?error=auth_failed`);
}
