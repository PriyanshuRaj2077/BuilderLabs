'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Users, 
  Building2, 
  FileText,
  Clock,
  Layers
} from 'lucide-react';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { UserProfile } from '@/lib/types';

export default function LandingPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Check if stored profile exists
    const stored = localStorage.getItem('soochai_profile');
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {}
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Navbar currentProfile={profile} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        
        {/* Glow backdrop effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/20 to-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI-Powered Government Opportunity Discovery</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight sm:leading-none">
            Don’t search through hundreds of schemes.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Let SuchakAI find yours.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
            Millions of eligible citizens miss out on scholarships, farm subsidies, business grants, and healthcare covers. SuchakAI personalizes public schemes to your background, explains exactly why you qualify, and guides your application.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/25 hover:brightness-110 transition-all hover:scale-[1.02]"
            >
              <span>Build Your Citizen Profile</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
            >
              <Search className="h-4 w-4 text-blue-400" />
              <span>Explore Dashboard</span>
            </Link>
          </div>

          {/* Real-time verified opportunities preview banner */}
          <div className="mt-14 max-w-3xl mx-auto rounded-2xl glass-panel p-6 text-left border border-slate-800/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Active Verified Government Opportunities:</span>
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold">25 National & State Schemes Loaded</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-950/80 p-3.5 border border-slate-800">
                <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider block mb-1">Education</span>
                <h4 className="text-xs font-bold text-white">Post-Matric Scholarships</h4>
                <p className="text-[11px] text-slate-400 mt-1">100% Tuition Fee + Maintenance for SC/ST/OBC</p>
              </div>
              <div className="rounded-xl bg-slate-950/80 p-3.5 border border-slate-800">
                <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">Agriculture</span>
                <h4 className="text-xs font-bold text-white">PM-KISAN Samman Nidhi</h4>
                <p className="text-[11px] text-slate-400 mt-1">₹6,000/year direct cash support to farmers</p>
              </div>
              <div className="rounded-xl bg-slate-950/80 p-3.5 border border-slate-800">
                <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider block mb-1">Enterprise</span>
                <h4 className="text-xs font-bold text-white">Pradhan Mantri MUDRA</h4>
                <p className="text-[11px] text-slate-400 mt-1">Up to ₹20 Lakh collateral-free business loans</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 border-t border-slate-800/80 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Engineered to eliminate government bureaucracy
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Combining deterministic PostgreSQL queries with Gemini intelligence to protect citizens from hallucinations while translating policy jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-2xl glass-panel p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Manual Search Needed</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enter your age, location, occupation, and income once. The dashboard continuously calculates active schemes you qualify for without having to search across 30 ministries.
              </p>
            </div>

            <div className="rounded-2xl glass-panel p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Gemini AI Explanations</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rather than dense 40-page gazette notifications, Gemini summarizes why you are eligible in plain checkmarks and highlights exact watchouts.
              </p>
            </div>

            <div className="rounded-2xl glass-panel p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Official Portal Links</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every opportunity is grounded in official government endpoints (PM-KISAN, NSP, MahaDBT, Seva Sindhu) with verified document checklists and deadlines.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-slate-950 py-8 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SuchakAI Discovery Portal. Designed for Digital India empowerment.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/dashboard" className="hover:text-slate-200">Dashboard</Link>
            <Link href="/search" className="hover:text-slate-200">All Schemes</Link>
            <Link href="/onboarding" className="hover:text-slate-200">Profile</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
