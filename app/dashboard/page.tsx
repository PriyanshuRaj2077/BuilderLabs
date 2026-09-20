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
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ChevronRight,
  ExternalLink,
  Award,
  Zap,
  Globe
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
  const [selectedTier, setSelectedTier] = useState<string>('all');
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

  // Highlight opportunity (Highest match score)
  const topScheme = eligibleSchemes[0] || rankedResults[0];

  // Quick category categories
  const categories = useMemo(() => {
    return Array.from(new Set(SEED_SCHEMES.map(s => s.categoryTag))) as SchemeCategory[];
  }, []);

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
    <div className="min-h-screen bg-[#0d0e11] text-white flex flex-col font-sans selection:bg-[#ff451a] selection:text-white">
      <Navbar currentProfile={profile} />

      {/* Main FinPoint Canvas Wrapper */}
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex-1 space-y-6">
        
        {/* TOP SECTION: Bento Grid Hero (FinPoint "Portfolio Assets Performance" layout) */}
        <section className="fin-canvas p-6 sm:p-8 bg-[#121418] border border-[#23262f]">
          
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>Citizen Opportunity Radar</span>
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">
                Live deterministic ranking matched against your demographic parameters
              </p>
            </div>

            {/* Health Score / Readiness Indicator + Action Pills */}
            <div className="flex items-center gap-3">
              {/* FinPoint health bars */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181a20] border border-[#262933] text-xs">
                <div className="flex items-center gap-0.5">
                  <div className="w-1 h-3.5 rounded-full bg-emerald-400" />
                  <div className="w-1 h-3.5 rounded-full bg-emerald-400" />
                  <div className="w-1 h-3.5 rounded-full bg-emerald-400" />
                  <div className="w-1 h-3.5 rounded-full bg-emerald-400" />
                  <div className="w-1 h-3.5 rounded-full bg-neutral-600" />
                </div>
                <span className="font-bold text-white">92</span>
                <span className="text-[11px] text-neutral-400">Match Index</span>
              </div>

              {/* Filter / Refresh Pills */}
              <Link
                href="/onboarding"
                className="px-3.5 py-1.5 rounded-full bg-[#181a20] border border-[#262933] text-xs font-semibold text-neutral-300 hover:text-white hover:border-[#343845] transition-colors flex items-center gap-1.5"
              >
                <span>Filters</span>
                <SlidersHorizontal className="h-3 w-3" />
              </Link>
              <Link
                href="/search"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#181a20] border border-[#262933] text-neutral-300 hover:text-white transition-colors"
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
                <span className="text-xs font-medium text-neutral-400">Total Matched Opportunities</span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {eligibleSchemes.length} Schemes
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    <TrendingUp className="h-3 w-3" />
                    <span>+100% Eligible</span>
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Based on: <strong className="text-neutral-200">{profile.state}</strong> • <strong className="text-neutral-200">{profile.occupation.replace('_', ' ')}</strong> • <strong className="text-neutral-200">{profile.category}</strong>
                </p>
              </div>

              {/* 4 Mini Dark Tiles (FinPoint Stocks, Bonds, ETFs, REITs layout) */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#181a20] border border-[#262933]">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Higher Education</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {rankedResults.filter(r => r.scheme.categoryTag === 'Education & Learning' && r.isEligible).length} Available
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#181a20] border border-[#262933]">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff451a]" />
                    <span>Business & Loans</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {rankedResults.filter(r => r.scheme.categoryTag === 'Business & Entrepreneurship' && r.isEligible).length} Available
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#181a20] border border-[#262933]">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Agriculture / Rural</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {rankedResults.filter(r => r.scheme.categoryTag === 'Agriculture & Rural' && r.isEligible).length} Available
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#181a20] border border-[#262933]">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Social Welfare</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {rankedResults.filter(r => r.scheme.categoryTag === 'Social Welfare & Empowerment' && r.isEligible).length} Available
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: The FinPoint Vibrant High-Contrast Orange Hero Card */}
            {topScheme && (
              <div className="lg:col-span-7 fin-card-orange p-6 sm:p-7 text-white flex flex-col justify-between relative overflow-hidden">
                
                {/* Background geometric graph curve watermark */}
                <div className="absolute inset-0 opacity-10 pointer-events-none flex items-end">
                  <svg viewBox="0 0 500 150" className="w-full h-auto stroke-white fill-none stroke-[3]">
                    <path d="M0,130 Q100,10 200,90 T350,30 T500,80 L500,150 L0,150 Z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Top Bar on Orange Card */}
                  <div className="flex items-center justify-between gap-2 text-xs mb-3">
                    <span className="font-semibold uppercase tracking-wider text-white/90">
                      Top Ranked Opportunity (Priority #1)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/25 font-bold text-white backdrop-blur-sm">
                      {topScheme.matchScore}% Match Score
                    </span>
                  </div>

                  {/* Big Number / Benefit */}
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                    {topScheme.scheme.name}
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1">
                    {topScheme.scheme.description}
                  </p>
                </div>

                {/* Floating Black Insight Pill (Matches the FinPoint May 1 graph tooltip) */}
                <div className="relative z-10 my-4 rounded-2xl bg-black/65 backdrop-blur-md p-3.5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-white/60 block font-medium">Why It Matched You:</span>
                    <p className="text-xs font-semibold text-white mt-0.5">{topScheme.whyItMatches}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-[10px] text-white/60 block">Benefit Value:</span>
                    <span className="text-xs font-bold text-emerald-300">
                      {topScheme.scheme.benefitAmount || topScheme.scheme.benefits[0]}
                    </span>
                  </div>
                </div>

                {/* Orange Card Bottom Actions */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-white/90">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Verified: {topScheme.scheme.lastVerifiedDate}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/scheme/${topScheme.scheme.id}`}
                      className="px-4 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-900 transition-colors"
                    >
                      Full Details
                    </Link>
                    <a
                      href={topScheme.scheme.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-100 transition-colors flex items-center gap-1"
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

        {/* MIDDLE SECTION: FinPoint Watchlist Strip (Quick Horizontal Program Pills) */}
        <section className="fin-canvas p-4 bg-[#121418] border border-[#23262f] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">
            <span>Fast Explore:</span>
          </div>

          <div className="flex-1 flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
            {[
              { label: 'Post-Matric SC', tag: '100% Tuition', color: '#3b82f6', id: 'post-matric-sc-02' },
              { label: 'PM-KISAN', tag: '₹6,000/yr', color: '#10b981', id: 'pm-kisan-01' },
              { label: 'PMMY Mudra', tag: '₹20L Loan', color: '#ff451a', id: 'pm-mudra-yojana-03' },
              { label: 'Ayushman Bharat', tag: '₹5L Health', color: '#facc15', id: 'ayushman-bharat-pmjay-05' },
              { label: 'Atal Pension', tag: '₹5,000/mo', color: '#a855f7', id: 'atal-pension-yojana-13' }
            ].map(item => (
              <Link
                key={item.id}
                href={`/scheme/${item.id}`}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181a20] border border-[#262933] hover:border-[#343845] transition-colors shrink-0 text-xs"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="font-semibold text-white">{item.label}</span>
                <span className="text-[11px] text-neutral-400 font-mono">{item.tag}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/search"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#181a20] border border-[#262933] text-neutral-400 hover:text-white shrink-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        </section>

        {/* BOTTOM SECTION: 3-Column Bento Cards (FinPoint Allocation + Risk Score + Industry Insights) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. Allocation Performance: Category Distribution Bars (FinPoint 85% Stocks, 45% Bonds layout) */}
          <div className="lg:col-span-5 fin-canvas p-6 bg-[#121418] border border-[#23262f] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white tracking-tight">Scheme Category Weight</h3>
                <span className="text-xs text-neutral-400">25 Total Programs</span>
              </div>

              {/* Vertical Bar Chart Representation */}
              <div className="grid grid-cols-4 gap-3 items-end h-36 pt-4 pb-2 border-b border-[#23262f]">
                <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-bold text-white">40%</span>
                  <div className="w-full bg-[#ff451a] rounded-xl h-[45%]" />
                  <span className="text-[10px] text-neutral-400">Edu</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-bold text-white">85%</span>
                  <div className="w-full bg-amber-400 rounded-xl h-[85%]" />
                  <span className="text-[10px] text-neutral-400">Agri</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-bold text-white">55%</span>
                  <div className="w-full bg-white rounded-xl h-[55%]" />
                  <span className="text-[10px] text-neutral-400">MSME</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[10px] font-bold text-white">30%</span>
                  <div className="w-full bg-[#262933] rounded-xl h-[30%]" />
                  <span className="text-[10px] text-neutral-400">Health</span>
                </div>
              </div>
            </div>

            <div className="pt-3 text-xs text-neutral-400 flex items-center justify-between">
              <span>Dynamic eligibility weighting</span>
              <span className="font-semibold text-emerald-400">Active</span>
            </div>
          </div>

          {/* 2. Risk / Eligibility Gauge (FinPoint 72/100 Risk Meter layout) */}
          <div className="lg:col-span-3 fin-canvas p-6 bg-[#121418] border border-[#23262f] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-neutral-400">Citizen Eligibility</span>
              <Link href="/onboarding" className="text-neutral-400 hover:text-white">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="my-auto py-3 text-center">
              <div className="text-4xl font-extrabold text-white tracking-tight">
                {eligibleSchemes.length} <span className="text-neutral-500 text-2xl font-normal">/ 25</span>
              </div>
              
              {/* Radial Arc SVG */}
              <div className="w-28 h-14 mx-auto mt-3 overflow-hidden relative">
                <div className="w-28 h-28 rounded-full border-8 border-[#23262f] border-t-emerald-400 border-r-emerald-400 -rotate-45" />
              </div>
              <p className="text-[11px] text-neutral-400 mt-2">Verified directly from gazette notices</p>
            </div>

            <div className="pt-3 border-t border-[#23262f] text-[11px] text-neutral-400 text-center">
              Profile: <strong className="text-neutral-200">{profile.name}</strong>
            </div>
          </div>

          {/* 3. Industry Insights (FinPoint CNBC, FT news layout) */}
          <div className="lg:col-span-4 fin-canvas p-6 bg-[#121418] border border-[#23262f] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-[#ff451a]" />
                  <span>Public Policy Digest</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" />
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                National welfare allocations exceeded <strong>₹4.18 Lakh Crore</strong> in the current union budget. DBT mandates require active <strong>Aadhaar-seeded accounts</strong> for instant payouts.
              </p>
            </div>

            {/* Official Source Badges (FinPoint logo icons footer) */}
            <div className="pt-4 border-t border-[#23262f] flex items-center justify-between text-xs text-neutral-400">
              <span className="font-semibold text-neutral-300">Sources:</span>
              <div className="flex items-center gap-2 text-[10px] font-bold">
                <span className="px-2 py-0.5 rounded-full bg-[#181a20] border border-[#262933]">myScheme</span>
                <span className="px-2 py-0.5 rounded-full bg-[#181a20] border border-[#262933]">data.gov.in</span>
                <span className="px-2 py-0.5 rounded-full bg-[#181a20] border border-[#262933]">NSP</span>
              </div>
            </div>
          </div>

        </div>

        {/* ALL FILTERED SCHEMES SECTION (Curated Cards with FinPoint styling) */}
        <section className="fin-canvas p-6 sm:p-8 bg-[#121418] border border-[#23262f]">
          
          {/* Section Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#23262f]">
            <div>
              <h3 className="text-lg font-bold text-white">Prioritized Matching Schemes</h3>
              <p className="text-xs text-neutral-400">
                Displaying {Math.min(showAll ? filteredSchemes.length : 8, filteredSchemes.length)} of {filteredSchemes.length} schemes tailored to you
              </p>
            </div>

            {/* Central vs State Pills (FinPoint 1D, 1W, 1M, 1Y tabs) */}
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
                      ? 'bg-white text-black font-bold shadow-sm'
                      : 'bg-[#181a20] text-neutral-400 border border-[#262933] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="mt-6 text-center pt-4 border-t border-[#23262f]">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-full bg-[#181a20] border border-[#262933] hover:border-[#343845] text-xs font-bold text-white transition-all hover:bg-[#20232a]"
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
