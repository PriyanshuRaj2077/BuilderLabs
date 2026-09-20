'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Sparkles, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

function AuthPageInner() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('error') === 'auth_failed') {
      setErrorMsg('Google sign-in failed. Please try again.');
    }
  }, [searchParams]);

  const handleGoogleSignIn = async () => {
    setErrorMsg('');
    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/api/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
      }
      // On success, browser is redirected to Google — no need to setLoading(false)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Authentication service error';
      setErrorMsg(msg);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md fin-canvas p-8 shadow-xl">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-yellow-badge-bg)] border border-[var(--accent-yellow-badge-border)] text-[var(--accent-yellow)] mb-3">
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Welcome to SuchakAI
            </h1>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Sign in to access your personalized scheme dashboard and saved benefits
            </p>
          </div>

          {/* Error message */}
          {errorMsg && (
            <div className="mb-5 rounded-2xl bg-red-500/10 p-3.5 border border-red-500/30 flex items-start gap-2 text-xs text-red-600 dark:text-red-300">
              <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Trust badges */}
          <div className="mb-6 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] p-4">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="h-4 w-4 text-green-500 shrink-0" />
              <span className="text-xs font-semibold text-[var(--text-primary)]">Secure Sign-In</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              We use Google OAuth — your password is never shared with SuchakAI. Your data is
              protected and we only access your name and email.
            </p>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            id="google-signin-btn"
            className="w-full flex items-center justify-center gap-3 rounded-full border border-[var(--border-subtle)] bg-white dark:bg-zinc-900 py-3 px-4 text-sm font-semibold text-zinc-800 dark:text-zinc-100 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin text-zinc-400" />
                <span>Redirecting to Google...</span>
              </>
            ) : (
              <>
                {/* Google SVG Logo */}
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </button>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="flex-1 h-px bg-[var(--border-subtle)]" />
            <span className="text-[11px] text-[var(--text-muted)]">or</span>
            <div className="flex-1 h-px bg-[var(--border-subtle)]" />
          </div>

          {/* Guest Mode */}
          <div className="text-center">
            <Link
              href="/onboarding"
              className="text-[11px] text-[var(--text-muted)] hover:text-[var(--text-secondary)] underline transition-colors"
            >
              Continue as Guest (No login required)
            </Link>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-center text-[10px] text-[var(--text-muted)] leading-relaxed">
            By continuing, you agree to SuchakAI&apos;s terms. Your information is used solely to
            personalise government scheme recommendations.
          </p>
        </div>
      </main>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={null}>
      <AuthPageInner />
    </Suspense>
  );
}
