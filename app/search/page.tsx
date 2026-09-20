'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { SchemeCategory, UserProfile } from '@/lib/types';
import { 
  Search, 
  Building2, 
  Clock, 
  IndianRupee, 
  ChevronRight,
  ArrowUpRight
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col font-sans transition-colors duration-200">
      <Navbar currentProfile={profile} />

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex-1">
        
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Government Scheme Directory
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Explore active public welfare programs across Indian ministries and state departments.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scheme name, ministry, or keywords (e.g. loan, farmer, housing)..."
              className="w-full rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-subtle)] pl-10 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#ff451a] shadow-sm"
            />
          </div>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-subtle)] px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#ff451a] shadow-sm"
          >
            <option value="all">All Government Tiers</option>
            <option value="central">Central Sector</option>
            <option value="state">State Specific</option>
            <option value="centrally_sponsored">Centrally Sponsored</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-2xl bg-[var(--panel-bg)] border border-[var(--border-subtle)] px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#ff451a] shadow-sm"
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
              className="fin-card rounded-[28px] p-5 sm:p-6 flex flex-col justify-between group hover:shadow-[0_14px_34px_-6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 relative"
            >
              <div>
                {/* Top Row: Category Pill & Image 1 Circular Action Arrow */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--card-subtle)] px-3 py-1 text-[11px] font-semibold text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      {scheme.level === 'central' ? 'Central' : scheme.state}
                    </span>
                    <span className="text-[var(--accent-yellow-text)] text-[11px] font-bold">
                      {scheme.categoryTag}
                    </span>
                  </div>

                  <Link
                    href={`/scheme/${scheme.id}`}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--card-subtle)] hover:bg-[var(--card-hover)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-all shrink-0 shadow-xs"
                    title="View Details"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Title & Ministry */}
                <div className="mb-3">
                  <Link href={`/scheme/${scheme.id}`} className="block group/title">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover/title:text-[var(--accent-yellow)] transition-colors leading-snug">
                      {scheme.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[var(--text-muted)] font-medium mt-0.5 line-clamp-1">
                    {scheme.ministry}
                  </p>
                </div>

                <p className="text-xs text-[var(--text-secondary)] mb-3.5 line-clamp-2 leading-relaxed">
                  {scheme.description}
                </p>

                {/* Financial Benefit Hero Capsule (Image 1 Style) */}
                <div className="mb-4 rounded-[20px] bg-[var(--card-subtle)] p-3 border border-[var(--border-subtle)] flex items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                      Benefit
                    </span>
                    <div className="font-extrabold text-[var(--text-primary)] flex items-center gap-1 mt-0.5 text-xs sm:text-sm">
                      <IndianRupee className="h-3.5 w-3.5 text-[var(--accent-yellow)] shrink-0" />
                      <span>{scheme.benefitAmount || scheme.benefits[0]}</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--card-bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--accent-parrot-text)] border border-[var(--border-subtle)]">
                      <Clock className="h-3 w-3" />
                      <span>{scheme.deadline || 'Ongoing'}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                <Link
                  href={`/scheme/${scheme.id}`}
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--card-subtle)] hover:bg-[var(--card-hover)] border border-[var(--border-subtle)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-xs"
                >
                  <span>View Details</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--text-primary)] px-4 py-1.5 text-xs font-bold text-[var(--background)] hover:opacity-90 transition-all shadow-xs"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

