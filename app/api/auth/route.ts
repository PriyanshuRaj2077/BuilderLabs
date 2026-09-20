import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { action, email, password, fullName } = await req.json();
    const supabase = await createClient();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    if (action === 'signup') {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName || 'Citizen',
          },
        },
      });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      // Automatically create or upsert profile in public.profiles table
      if (data?.user) {
        try {
          await supabase.from('profiles').upsert({
            id: data.user.id,
            full_name: fullName || 'Citizen',
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
        } catch (profileErr) {
          console.warn('Could not insert initial profile row:', profileErr);
        }
      }

      // Check if user requires email confirmation
      const needsEmailConfirm = data.user && (!data.session);

      return NextResponse.json({
        success: true,
        user: data.user,
        needsEmailConfirm,
        message: needsEmailConfirm
          ? 'Confirmation email sent! Please check your inbox (or spam) and click the link to verify before logging in.'
          : 'Account created successfully! Redirecting...',
      });
    }

    if (action === 'signin') {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.toLowerCase().includes('email not confirmed')) {
          return NextResponse.json(
            {
              error:
                'Email not confirmed yet! Please click the confirmation link sent to your email inbox (or spam folder) to activate your account.',
            },
            { status: 400 }
          );
        }
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        user: data.user,
        message: 'Signed in successfully! Opening dashboard...',
      });
    }

    return NextResponse.json({ error: 'Invalid action.' }, { status: 400 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Authentication service error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
