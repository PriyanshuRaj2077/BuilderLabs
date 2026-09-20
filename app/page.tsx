'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Building2, 
  Clock,
  Layers
} from 'lucide-react';
import { UserProfile } from '@/lib/types';

export default function LandingPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('soochai_profile');
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {}
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col font-sans transition-colors duration-200">
      <Navbar currentProfile={profile} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        
        {/* Glow backdrop effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#ff451a]/10 via-amber-500/10 to-[#22e55e]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--card-bg)] px-4 py-1.5 text-xs font-semibold text-[var(--text-secondary)] mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent-yellow)]" />
            <span>AI-Powered Government Opportunity Discovery</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight sm:leading-none">
            Don’t search through hundreds of schemes.{' '}
            <span className="text-[#ff451a]">
              Let SuchakAI find yours.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-normal leading-relaxed">
            Millions of eligible citizens miss out on scholarships, farm subsidies, business grants, and healthcare covers. SuchakAI personalizes public schemes to your background, explains exactly why you qualify, and guides your application.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff451a] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#ff451a]/25 hover:brightness-110 transition-all hover:scale-[1.02]"
            >
              <span>Build Your Citizen Profile</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--card-bg)] px-7 py-3.5 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--card-hover)] hover:border-[var(--border-highlight)] transition-all shadow-sm"
            >
              <Search className="h-4 w-4 text-[#ff451a]" />
              <span>Explore Dashboard</span>
            </Link>
          </div>

          {/* Real-time verified opportunities preview banner */}
          <div className="mt-14 max-w-3xl mx-auto fin-canvas p-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--border-subtle)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#22e55e]" />
                <span>Active Verified Government Opportunities:</span>
              </span>
              <span className="text-[11px] font-bold text-[var(--accent-parrot-text)]">25 National & State Schemes Loaded</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm">
                <span className="text-[10px] font-bold text-[#ff451a] uppercase tracking-wider block mb-1">Education</span>
                <h4 className="text-xs font-bold text-[var(--text-primary)]">Post-Matric Scholarships</h4>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">100% Tuition Fee + Maintenance for SC/ST/OBC</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm">
                <span className="text-[10px] font-bold text-[#22e55e] uppercase tracking-wider block mb-1">Agriculture</span>
                <h4 className="text-xs font-bold text-[var(--text-primary)]">PM-KISAN Samman Nidhi</h4>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">₹6,000/year direct cash support to farmers</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider block mb-1">Enterprise</span>
                <h4 className="text-xs font-bold text-[var(--text-primary)]">Pradhan Mantri MUDRA</h4>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">Up to ₹20 Lakh collateral-free business loans</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 border-t border-[var(--border-subtle)] bg-[var(--card-subtle)]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              Engineered to eliminate government bureaucracy
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Combining deterministic PostgreSQL queries with Gemini intelligence to protect citizens from hallucinations while translating policy jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="fin-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff451a]/15 text-[#ff451a] mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Zero Manual Search Needed</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Enter your age, location, occupation, and income once. The dashboard continuously calculates active schemes you qualify for without having to search across 30 ministries.
              </p>
            </div>

            <div className="fin-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-500 mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Gemini AI Explanations</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Rather than dense 40-page gazette notifications, Gemini summarizes why you are eligible in plain checkmarks and highlights exact watchouts.
              </p>
            </div>

            <div className="fin-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22e55e]/15 text-[#22e55e] mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Official Portal Links</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Every opportunity is grounded in official government endpoints (PM-KISAN, NSP, MahaDBT, Seva Sindhu) with verified document checklists and deadlines.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[var(--border-subtle)] bg-[var(--panel-bg)] py-8 text-xs text-[var(--text-muted)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SuchakAI Discovery Portal. Designed for Digital India empowerment.</p>
          <div className="flex items-center gap-4 text-[var(--text-secondary)]">
            <Link href="/dashboard" className="hover:text-[var(--text-primary)]">Dashboard</Link>
            <Link href="/search" className="hover:text-[var(--text-primary)]">All Schemes</Link>
            <Link href="/onboarding" className="hover:text-[var(--text-primary)]">Profile</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

