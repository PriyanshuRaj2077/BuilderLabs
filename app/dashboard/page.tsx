'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { SchemeCard } from '@/components/SchemeCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { UserProfile, SchemeMatchResult, SchemeCategory } from '@/lib/types';
import { SEED_SCHEMES, DEMO_PERSONAS } from '@/lib/data/seed-schemes';
import { rankSchemesForProfile } from '@/lib/matching';
import { 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  UserCheck, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  IndianRupee,
  Layers,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

export default function DashboardPage() {
  // Current user profile state
  const [profile, setProfile] = useState<UserProfile>(DEMO_PERSONAS[0].profile);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [onlyEligible, setOnlyEligible] = useState(false);
  const [activeTab, setActiveTab] = useState<'matched' | 'all' | 'saved'>('matched');
  const [savedSchemeIds, setSavedSchemeIds] = useState<string[]>([]);

  // Load profile from localStorage on mount
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

  const handleSelectPersona = (newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem('soochai_profile', JSON.stringify(newProfile));
  };

  const handleToggleBookmark = (schemeId: string) => {
    const updated = savedSchemeIds.includes(schemeId)
      ? savedSchemeIds.filter(id => id !== schemeId)
      : [...savedSchemeIds, schemeId];
    setSavedSchemeIds(updated);
    localStorage.setItem('soochai_saved', JSON.stringify(updated));
  };

  // Run deterministic matching and ranking for current profile
  const rankedResults = useMemo(() => {
    return rankSchemesForProfile(SEED_SCHEMES, profile);
  }, [profile]);

  // Extract all categories
  const allCategories = useMemo(() => {
    return Array.from(new Set(SEED_SCHEMES.map(s => s.categoryTag))) as SchemeCategory[];
  }, []);

  // Filtered results
  const filteredResults = useMemo(() => {
    return rankedResults.filter(item => {
      const scheme = item.scheme;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery = 
          scheme.name.toLowerCase().includes(q) ||
          scheme.description.toLowerCase().includes(q) ||
          scheme.ministry.toLowerCase().includes(q) ||
          scheme.whoIsItFor.toLowerCase().includes(q) ||
          (scheme.nameHindi && scheme.nameHindi.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      // Tab filter
      if (activeTab === 'saved') {
        if (!savedSchemeIds.includes(scheme.id)) return false;
      } else if (activeTab === 'matched') {
        if (!item.isEligible && item.matchScore < 50) return false;
      }

      // Only eligible toggle
      if (onlyEligible && !item.isEligible) {
        return false;
      }

      // Level filter
      if (selectedLevel !== 'all' && scheme.level !== selectedLevel) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && scheme.categoryTag !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [rankedResults, searchQuery, activeTab, onlyEligible, selectedLevel, selectedCategory, savedSchemeIds]);

  const eligibleCount = rankedResults.filter(r => r.isEligible).length;

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Navbar currentProfile={profile} onSelectPersona={handleSelectPersona} />

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1">
        
        {/* Citizen Profile Status Hero Bar */}
        <section className="rounded-2xl glass-panel-glow p-5 sm:p-6 mb-8 border border-blue-900/40">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Live Citizen Match Active</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Welcome, {profile.name}!
              </h1>
              <p className="text-sm text-slate-300 mt-1">
                <strong className="text-emerald-400 font-bold">{eligibleCount} schemes</strong> strictly matched to your personal profile. No manual searching required.
              </p>

              {/* Profile Chips */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-slate-300 border border-slate-800">
                  <MapPin className="h-3 w-3 text-blue-400" />
                  {profile.state}
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-slate-300 border border-slate-800">
                  <UserCheck className="h-3 w-3 text-indigo-400" />
                  {profile.age} years • {profile.gender}
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-slate-300 border border-slate-800">
                  <Briefcase className="h-3 w-3 text-amber-400" />
                  {profile.category} • {profile.occupation.replace('_', ' ')}
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-slate-300 border border-slate-800">
                  <IndianRupee className="h-3 w-3 text-emerald-400" />
                  ₹{(profile.annualIncome / 100000).toFixed(1)}L / yr
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/onboarding"
                className="rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
              >
                Edit Preferences
              </Link>
              <Link
                href="/search"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5"
              >
                <span>Full Directory</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* Dashboard Tabs & Search Bar */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start">
            <button
              onClick={() => setActiveTab('matched')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'matched'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Personalized ({eligibleCount})</span>
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Programs ({SEED_SCHEMES.length})
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'saved'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bookmarked ({savedSchemeIds.length})
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keyword (e.g. loan, scholarship)..."
              className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Content Area: Sidebar Filters + Schemes Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar Filters */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedLevel={selectedLevel}
            onSelectLevel={setSelectedLevel}
            onlyEligible={onlyEligible}
            onToggleOnlyEligible={setOnlyEligible}
            onResetFilters={() => {
              setSelectedCategory('all');
              setSelectedLevel('all');
              setOnlyEligible(false);
              setSearchQuery('');
            }}
            categories={allCategories}
          />

          {/* Main Schemes List */}
          <div className="flex-1 w-full space-y-4">
            {filteredResults.length === 0 ? (
              <div className="rounded-2xl glass-panel p-12 text-center border border-slate-800">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-slate-400 mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-white">No matching schemes found</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Try adjusting your search criteria or resetting filters to see all available national schemes.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLevel('all');
                    setOnlyEligible(false);
                    setSearchQuery('');
                  }}
                  className="mt-4 rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredResults.map((result) => (
                  <SchemeCard
                    key={result.scheme.id}
                    result={result}
                    userProfile={profile}
                    onBookmarkToggle={handleToggleBookmark}
                    isBookmarked={savedSchemeIds.includes(result.scheme.id)}
                  />
                ))}
              </div>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}
