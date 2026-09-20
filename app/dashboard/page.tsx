'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { SchemeCard } from '@/components/SchemeCard';
import { UserProfile, SchemeCategory } from '@/lib/types';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { rankSchemesForProfile } from '@/lib/matching';
import { 
  Sparkles, 
  Search, 
  ArrowUpRight, 
  SlidersHorizontal, 
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

const DEFAULT_CITIZEN_PROFILE: UserProfile = {
  name: 'Citizen',
  age: 23,
  gender: 'all',
  state: 'Maharashtra',
  category: 'OBC',
  occupation: 'student',
  education: 'undergraduate',
  annualIncome: 200000,
  isRural: false,
  hasDisability: false,
  interests: ['Higher Education Scholarships', 'Skill Training & Employment']
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_CITIZEN_PROFILE);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'all' | 'central' | 'state'>('all');
  const [savedSchemeIds, setSavedSchemeIds] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('soochai_profile');
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {}
    }
    const saved = localStorage.getItem('soochai_saved');
    if (saved) {
      try {
        setSavedSchemeIds(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const handleToggleBookmark = (schemeId: string) => {
    const updated = savedSchemeIds.includes(schemeId)
      ? savedSchemeIds.filter(id => id !== schemeId)
      : [...savedSchemeIds, schemeId];
    setSavedSchemeIds(updated);
    localStorage.setItem('soochai_saved', JSON.stringify(updated));
  };

  // Deterministic matching
  const rankedResults = useMemo(() => {
    return rankSchemesForProfile(SEED_SCHEMES, profile);
  }, [profile]);

  const eligibleSchemes = useMemo(() => {
    return rankedResults.filter(r => r.isEligible);
  }, [rankedResults]);

  // Top opportunity
  const topScheme = eligibleSchemes[0] || rankedResults[0];

  // Dynamically calculate category counts for the bento tiles & bars
  const eduCount = useMemo(() => rankedResults.filter(r => r.scheme.categoryTag === 'Education & Learning' && r.isEligible).length, [rankedResults]);
  const msmeCount = useMemo(() => rankedResults.filter(r => r.scheme.categoryTag === 'Business & Entrepreneurship' && r.isEligible).length, [rankedResults]);
  const agriCount = useMemo(() => rankedResults.filter(r => r.scheme.categoryTag === 'Agriculture & Rural' && r.isEligible).length, [rankedResults]);
  const socialCount = useMemo(() => rankedResults.filter(r => r.scheme.categoryTag === 'Social Welfare & Empowerment' && r.isEligible).length, [rankedResults]);

  // Filtered schemes
  const filteredSchemes = useMemo(() => {
    return rankedResults.filter(item => {
      const s = item.scheme;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.ministry.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (activeTab === 'central' && s.level !== 'central') return false;
      if (activeTab === 'state' && s.level !== 'state') return false;
      if (selectedCategory !== 'all' && s.categoryTag !== selectedCategory) return false;
      return true;
    });
  }, [rankedResults, searchQuery, activeTab, selectedCategory]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-[#ff451a] selection:text-white transition-colors duration-200">
      <Navbar currentProfile={profile} />

      {/* Main FinPoint Canvas Wrapper */}
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex-1 space-y-6">
        
        {/* TOP SECTION: Bento Grid Hero (FinPoint "Portfolio Assets Performance" layout) */}
        <section className="fin-canvas p-6 sm:p-8">
          
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
                <span>Citizen Opportunity Radar</span>
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Live deterministic ranking matched against your demographic parameters
              </p>
            </div>

            {/* Health Score / Readiness Indicator + Action Pills */}
            <div className="flex items-center gap-3">
              {/* FinPoint health bars with vibrant Parrot Green */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-xs shadow-sm">
                <div className="flex items-center gap-0.5">
                  <div className="w-1 h-3.5 rounded-full bg-[#22e55e]" />
                  <div className="w-1 h-3.5 rounded-full bg-[#22e55e]" />
                  <div className="w-1 h-3.5 rounded-full bg-[#22e55e]" />
                  <div className="w-1 h-3.5 rounded-full bg-[#22e55e]" />
                  <div className="w-1 h-3.5 rounded-full bg-neutral-600/40" />
                </div>
                <span className="font-bold text-[var(--text-primary)]">{topScheme?.matchScore || 92}</span>
                <span className="text-[11px] text-[var(--text-muted)]">Match Index</span>
              </div>

              {/* Filter / Refresh Pills */}
              <Link
                href="/onboarding"
                className="px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Filters</span>
                <SlidersHorizontal className="h-3 w-3" />
              </Link>
              <Link
                href="/search"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shadow-sm"
                title="Full Catalog"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Hero Bento Layout: Left Stats & Mini Cards + Right Vibrant FinPoint Orange Hero Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left 5 Cols: Stats & Mini Bento Tiles */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-medium text-[var(--text-secondary)]">Total Matched Opportunities</span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                    {eligibleSchemes.length} Schemes
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#22e55e]/15 text-[#22e55e] text-xs font-bold border border-[#22e55e]/30">
                    <TrendingUp className="h-3 w-3" />
                    <span>+100% Eligible</span>
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5">
                  Citizen: <strong className="text-[var(--text-primary)]">{profile.name}</strong> • <strong className="text-[var(--text-primary)]">{profile.state}</strong> • <strong className="text-[var(--text-primary)]">{profile.occupation.replace('_', ' ')}</strong>
                </p>
              </div>

              {/* 4 Mini Tiles (FinPoint Stocks, Bonds, ETFs, REITs layout) */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-medium mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22e55e]" />
                    <span>Education</span>
                  </div>
                  <div className="text-lg font-bold text-[var(--text-primary)]">
                    {eduCount} Available
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-medium mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff451a]" />
                    <span>Business / Loans</span>
                  </div>
                  <div className="text-lg font-bold text-[var(--text-primary)]">
                    {msmeCount} Available
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-medium mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Agriculture</span>
                  </div>
                  <div className="text-lg font-bold text-[var(--text-primary)]">
                    {agriCount} Available
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-medium mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22e55e]" />
                    <span>Social Welfare</span>
                  </div>
                  <div className="text-lg font-bold text-[var(--text-primary)]">
                    {socialCount} Available
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: The FinPoint Vibrant High-Contrast Orange Hero Card */}
            {topScheme && (
              <div className="lg:col-span-7 fin-card-orange rounded-[28px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden text-white shadow-lg">
                
                {/* Background subtle curve watermark */}
                <div className="absolute inset-0 opacity-15 pointer-events-none flex items-end">
                  <svg viewBox="0 0 500 150" className="w-full h-auto stroke-white fill-none stroke-[3]">
                    <path d="M0,130 Q100,10 200,90 T350,30 T500,80 L500,150 L0,150 Z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 text-xs mb-3">
                    <span className="font-semibold uppercase tracking-wider text-white/95">
                      Top Ranked Opportunity (Priority #1)
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full yellow-badge font-bold backdrop-blur-sm shadow-sm text-xs">
                      <Sparkles className="h-3 w-3" />
                      <span>{topScheme.matchScore}% Match Score</span>
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                    {topScheme.scheme.name}
                  </div>
                  <p className="text-xs text-white/90 line-clamp-2 mt-1">
                    {topScheme.scheme.description}
                  </p>
                </div>

                {/* Floating Black Insight Pill (Matches FinPoint tooltip) */}
                <div className="relative z-10 my-4 rounded-2xl bg-black/75 backdrop-blur-md p-3.5 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-white/70 block font-medium">Why It Matched You:</span>
                    <p className="text-xs font-semibold text-white mt-0.5">{topScheme.whyItMatches}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-[10px] text-white/70 block">Benefit Value:</span>
                    <span className="text-xs font-bold text-[#22e55e]">
                      {topScheme.scheme.benefitAmount || topScheme.scheme.benefits[0]}
                    </span>
                  </div>
                </div>

                {/* Orange Card Bottom Actions */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-white/95">
                    <ShieldCheck className="h-4 w-4 text-[#22e55e]" />
                    <span>Verified: {topScheme.scheme.lastVerifiedDate}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/scheme/${topScheme.scheme.id}`}
                      className="px-4 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-900 transition-colors shadow-sm"
                    >
                      Full Details
                    </Link>
                    <a
                      href={topScheme.scheme.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-100 transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <span>Apply Official</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

              </div>
            )}

          </div>

        </section>

        {/* MIDDLE SECTION: Fast Explore Watchlist Strip */}
        <section className="fin-canvas p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
            <span>Fast Explore:</span>
          </div>

          <div className="flex-1 flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
            {[
              { label: 'Post-Matric SC', tag: '100% Tuition', color: '#22e55e', id: 'post-matric-sc-02' },
              { label: 'PM-KISAN', tag: '₹6,000/yr', color: '#22e55e', id: 'pm-kisan-01' },
              { label: 'PMMY Mudra', tag: '₹20L Loan', color: '#ff451a', id: 'pm-mudra-yojana-03' },
              { label: 'Ayushman Bharat', tag: '₹5L Health', color: '#facc15', id: 'ayushman-bharat-pmjay-05' },
              { label: 'Atal Pension', tag: '₹5,000/mo', color: '#3b82f6', id: 'atal-pension-yojana-13' }
            ].map(item => (
              <Link
                key={item.id}
                href={`/scheme/${item.id}`}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] transition-colors shrink-0 text-xs shadow-sm"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="font-semibold text-[var(--text-primary)]">{item.label}</span>
                <span className="text-[11px] text-[var(--text-muted)] font-mono">{item.tag}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/search"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] shrink-0 shadow-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        </section>

        {/* BOTTOM SECTION: 3-Column Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. Category Distribution Bars */}
          <div className="lg:col-span-5 fin-canvas p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-[var(--text-primary)] tracking-tight">Scheme Category Weight</h3>
                <span className="text-xs text-[var(--text-muted)]">25 Total Programs</span>
              </div>

              {/* Vertical Bar Chart */}
              <div className="grid grid-cols-4 gap-3 items-end h-36 pt-4 pb-2 border-b border-[var(--border-subtle)]">
                <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-bold text-[var(--text-primary)]">{eduCount * 12}%</span>
                  <div className="w-full bg-[#ff451a] rounded-xl" style={{ height: `${Math.max(20, Math.min(100, eduCount * 25))}%` }} />
                  <span className="text-[10px] text-[var(--text-secondary)]">Edu</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-bold text-[var(--text-primary)]">{agriCount * 15}%</span>
                  <div className="w-full bg-[#22e55e] rounded-xl" style={{ height: `${Math.max(20, Math.min(100, agriCount * 30))}%` }} />
                  <span className="text-[10px] text-[var(--text-secondary)]">Agri</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-bold text-[var(--text-primary)]">{msmeCount * 14}%</span>
                  <div className="w-full bg-[var(--text-primary)] rounded-xl" style={{ height: `${Math.max(20, Math.min(100, msmeCount * 22))}%` }} />
                  <span className="text-[10px] text-[var(--text-secondary)]">MSME</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-bold text-[var(--text-primary)]">{socialCount * 10}%</span>
                  <div className="w-full bg-amber-400 rounded-xl" style={{ height: `${Math.max(20, Math.min(100, socialCount * 20))}%` }} />
                  <span className="text-[10px] text-[var(--text-secondary)]">Social</span>
                </div>
              </div>
            </div>

            <div className="pt-3 text-xs text-[var(--text-secondary)] flex items-center justify-between">
              <span>Dynamic eligibility weighting</span>
              <span className="font-semibold text-[#22e55e]">Active</span>
            </div>
          </div>

          {/* 2. Citizen Eligibility Gauge */}
          <div className="lg:col-span-3 fin-canvas p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[var(--text-secondary)]">Citizen Eligibility</span>
              <Link href="/onboarding" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="my-auto py-3 text-center">
              <div className="text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {eligibleSchemes.length} <span className="text-[var(--text-muted)] text-2xl font-normal">/ 25</span>
              </div>
              
              {/* Radial Arc SVG with Parrot Green */}
              <div className="w-28 h-14 mx-auto mt-3 overflow-hidden relative">
                <div className="w-28 h-28 rounded-full border-8 border-[var(--border-subtle)] border-t-[#22e55e] border-r-[#22e55e] -rotate-45" />
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-2">Verified directly from gazette notices</p>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] text-center">
              Profile: <strong className="text-[var(--text-primary)]">{profile.name}</strong>
            </div>
          </div>

          {/* 3. Industry Insights */}
          <div className="lg:col-span-4 fin-canvas p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--accent-yellow)]" />
                  <span>Public Policy Digest</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)]" />
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                National welfare allocations exceeded <strong>₹4.18 Lakh Crore</strong> in the current budget. DBT mandates require active <strong>Aadhaar-seeded bank accounts</strong> for direct payouts.
              </p>
            </div>

            {/* Official Source Badges */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)]">Sources:</span>
              <div className="flex items-center gap-2 text-[10px] font-bold">
                <span className="px-2 py-0.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)]">myScheme</span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)]">data.gov.in</span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)]">NSP</span>
              </div>
            </div>
          </div>

        </div>

        {/* ALL FILTERED SCHEMES SECTION */}
        <section className="fin-canvas p-6 sm:p-8">
          
          {/* Section Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Prioritized Matching Schemes</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Displaying {Math.min(showAll ? filteredSchemes.length : 8, filteredSchemes.length)} of {filteredSchemes.length} schemes tailored to you
              </p>
            </div>

            {/* Central vs State Pills */}
            <div className="flex items-center gap-2 self-start">
              {[
                { id: 'all', label: 'All Levels' },
                { id: 'central', label: 'Central Sector' },
                { id: 'state', label: `${profile.state} State` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#ff451a] text-white font-bold shadow-sm'
                      : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {(showAll ? filteredSchemes : filteredSchemes.slice(0, 8)).map(result => (
              <SchemeCard
                key={result.scheme.id}
                result={result}
                userProfile={profile}
                onBookmarkToggle={handleToggleBookmark}
                isBookmarked={savedSchemeIds.includes(result.scheme.id)}
              />
            ))}
          </div>

          {/* Show All Toggle */}
          {filteredSchemes.length > 8 && (
            <div className="mt-6 text-center pt-4 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] text-xs font-bold text-[var(--text-primary)] transition-all hover:bg-[var(--card-hover)] shadow-sm"
              >
                {showAll ? 'Show Top 8 Recommended Only' : `View All ${filteredSchemes.length} Relevant Schemes ↓`}
              </button>
            </div>
          )}

        </section>

      </main>
    </div>
  );
}
