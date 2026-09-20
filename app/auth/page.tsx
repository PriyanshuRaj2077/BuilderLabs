'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Sparkles, Mail, Lock, ArrowRight, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const supabase = createClient();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    try {
      if (isSignUp) {
        // Sign Up
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) {
          setErrorMsg(error.message);
        } else {
          setSuccessMsg('Account created successfully! Redirecting to setup your citizen profile...');
          setTimeout(() => {
            router.push('/onboarding');
          }, 1200);
        }
      } else {
        // Sign In
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrorMsg(error.message);
        } else {
          setSuccessMsg('Signed in successfully! Opening dashboard...');
          setTimeout(() => {
            router.push('/dashboard');
          }, 800);
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Authentication failed';
      setErrorMsg(msg);
    } finally {
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
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff451a]/15 text-[#ff451a] mb-3">
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {isSignUp ? 'Create Citizen Account' : 'Welcome to SuchakAI'}
            </h1>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              {isSignUp
                ? 'Sign up to receive personalized government scheme discovery and tracking'
                : 'Sign in to access your personalized scheme dashboard and saved benefits'}
            </p>
          </div>

          {/* Feedback messages */}
          {errorMsg && (
            <div className="mb-5 rounded-2xl bg-red-500/10 p-3.5 border border-red-500/30 flex items-start gap-2 text-xs text-red-600 dark:text-red-300">
              <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-5 rounded-2xl parrot-badge p-3.5 flex items-start gap-2 text-xs">
              <ShieldCheck className="h-4 w-4 text-[#22e55e] shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleAuth} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] px-3.5 py-2.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#ff451a]"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="citizen@example.com"
                  className="w-full rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] pl-10 pr-4 py-2.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#ff451a]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[var(--text-secondary)] block mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  minLength={6}
                  className="w-full rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] pl-10 pr-4 py-2.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#ff451a]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 rounded-full bg-[#ff451a] py-3 text-xs font-bold text-white hover:brightness-110 shadow-lg shadow-[#ff451a]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{isSignUp ? 'Create Citizen Account' : 'Sign In to SuchakAI'}</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Toggle between Sign In & Sign Up */}
          <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setErrorMsg('');
                setSuccessMsg('');
              }}
              className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {isSignUp ? (
                <>Already have an account? <strong className="text-[#ff451a] font-semibold">Sign In</strong></>
              ) : (
                <>New citizen? <strong className="text-[#ff451a] font-semibold">Create an account</strong></>
              )}
            </button>
          </div>

          {/* Guest Mode Direct Access */}
          <div className="mt-4 text-center">
            <Link
              href="/onboarding"
              className="text-[11px] text-[var(--text-muted)] hover:text-[var(--text-secondary)] underline"
            >
              Continue as Guest (No login required)
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}

