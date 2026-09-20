'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { SchemeCategory, SchemeLevel, UserProfile } from '@/lib/types';
import { 
  Search, 
  Building2, 
  ExternalLink, 
  Filter, 
  Clock, 
  IndianRupee, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('soochai_profile');
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(SEED_SCHEMES.map(s => s.categoryTag))) as SchemeCategory[];
  }, []);

  const filtered = useMemo(() => {
    return SEED_SCHEMES.filter(scheme => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = 
          scheme.name.toLowerCase().includes(q) ||
          scheme.description.toLowerCase().includes(q) ||
          scheme.ministry.toLowerCase().includes(q) ||
          (scheme.nameHindi && scheme.nameHindi.toLowerCase().includes(q));
        if (!match) return false;
      }

      if (selectedLevel !== 'all' && scheme.level !== selectedLevel) return false;
      if (selectedCategory !== 'all' && scheme.categoryTag !== selectedCategory) return false;

      return true;
    });
  }, [searchQuery, selectedLevel, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Navbar currentProfile={profile} />

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex-1">
        
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Government Scheme Directory
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Explore active public welfare programs across Indian ministries and state departments.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scheme name, ministry, or keywords (e.g. loan, farmer, housing)..."
              className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Government Tiers</option>
            <option value="central">Central Sector</option>
            <option value="state">State Specific</option>
            <option value="centrally_sponsored">Centrally Sponsored</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Schemes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(scheme => (
            <div
              key={scheme.id}
              className="rounded-2xl glass-panel p-5 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 text-slate-300 font-medium">
                    {scheme.level === 'central' ? 'Central' : scheme.state}
                  </span>
                  <span className="text-blue-400 font-medium">{scheme.categoryTag}</span>
                </div>

                <Link href={`/scheme/${scheme.id}`} className="block group">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {scheme.name}
                  </h3>
                </Link>

                <p className="text-xs text-slate-400 mt-1 mb-3 line-clamp-2">
                  {scheme.description}
                </p>

                <div className="text-xs text-slate-300 font-medium space-y-1 mb-4">
                  <div className="flex items-center gap-1.5">
                    <IndianRupee className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{scheme.benefitAmount || scheme.benefits[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{scheme.deadline || 'Ongoing'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <Link
                  href={`/scheme/${scheme.id}`}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  Official Link ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
