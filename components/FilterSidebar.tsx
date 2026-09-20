'use client';

import React from 'react';
import { SchemeCategory, SchemeLevel } from '@/lib/types';
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
      <div className="rounded-2xl glass-panel p-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 font-bold text-sm text-white">
            <Filter className="h-4 w-4 text-blue-400" />
            <span>Filter Schemes</span>
          </div>
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* Toggle Only Eligible Switch */}
        <div className="mb-6 p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-200 block">Strict Eligibility</span>
            <span className="text-[11px] text-slate-400 block">Hide incompatible</span>
          </div>
          <button
            onClick={() => onToggleOnlyEligible(!onlyEligible)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              onlyEligible ? 'bg-emerald-500' : 'bg-slate-800'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                onlyEligible ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Scheme Level */}
        <div className="mb-6 space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-blue-400" />
            <span>Government Level</span>
          </label>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            {['all', 'central', 'state'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => onSelectLevel(lvl)}
                className={`py-1.5 px-2 rounded-lg font-medium capitalize transition-colors ${
                  selectedLevel === lvl
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tag */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-blue-400" />
            <span>Sectors & Themes</span>
          </label>
          <div className="space-y-1">
            <button
              onClick={() => onSelectCategory('all')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                selectedCategory === 'all'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <span>All Sectors</span>
              {selectedCategory === 'all' && <Check className="h-3.5 w-3.5 text-blue-400" />}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                  selectedCategory === cat
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <span className="truncate">{cat}</span>
                {selectedCategory === cat && <Check className="h-3.5 w-3.5 text-blue-400" />}
              </button>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
