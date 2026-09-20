'use client';

import React from 'react';
import { SchemeCategory } from '@/lib/types';
import { Filter, RotateCcw, Building2, Layers, Check } from 'lucide-react';

interface FilterSidebarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedLevel: string;
  onSelectLevel: (level: string) => void;
  onlyEligible: boolean;
  onToggleOnlyEligible: (val: boolean) => void;
  onResetFilters: () => void;
  categories: SchemeCategory[];
}

export function FilterSidebar({
  selectedCategory,
  onSelectCategory,
  selectedLevel,
  onSelectLevel,
  onlyEligible,
  onToggleOnlyEligible,
  onResetFilters,
  categories
}: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6">
      <div className="fin-canvas p-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2 font-bold text-sm text-[var(--text-primary)]">
            <Filter className="h-4 w-4 text-[#ff451a]" />
            <span>Filter Schemes</span>
          </div>
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* Toggle Only Eligible Switch with Parrot Green */}
        <div className="mb-6 p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-[var(--text-primary)] block">Strict Eligibility</span>
            <span className="text-[11px] text-[var(--text-muted)] block">Hide incompatible</span>
          </div>
          <button
            onClick={() => onToggleOnlyEligible(!onlyEligible)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              onlyEligible ? 'bg-[#22e55e]' : 'bg-[var(--border-subtle)]'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                onlyEligible ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Scheme Level */}
        <div className="mb-6 space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-[#ff451a]" />
            <span>Government Level</span>
          </label>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            {['all', 'central', 'state'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => onSelectLevel(lvl)}
                className={`py-1.5 px-2 rounded-xl font-medium capitalize transition-all border ${
                  selectedLevel === lvl
                    ? 'bg-[#ff451a] text-white font-bold border-[#ff451a] shadow-sm'
                    : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)]'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tag */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-[#ff451a]" />
            <span>Sectors & Themes</span>
          </label>
          <div className="space-y-1">
            <button
              onClick={() => onSelectCategory('all')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                selectedCategory === 'all'
                  ? 'bg-[var(--card-hover)] text-[var(--text-primary)] font-bold'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--card-hover)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>All Sectors</span>
              {selectedCategory === 'all' && <Check className="h-3.5 w-3.5 text-[#ff451a]" />}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                  selectedCategory === cat
                    ? 'bg-[var(--card-hover)] text-[var(--text-primary)] font-bold'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--card-hover)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span className="truncate">{cat}</span>
                {selectedCategory === cat && <Check className="h-3.5 w-3.5 text-[#ff451a]" />}
              </button>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}

