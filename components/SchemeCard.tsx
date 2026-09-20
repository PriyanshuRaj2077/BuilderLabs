'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SchemeMatchResult, UserProfile } from '@/lib/types';
import { 
  Sparkles, 
  ExternalLink, 
  Clock, 
  IndianRupee, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { AIEligibilityModal } from './AIEligibilityModal';

interface SchemeCardProps {
  result: SchemeMatchResult;
  userProfile?: UserProfile | null;
  onBookmarkToggle?: (schemeId: string) => void;
  isBookmarked?: boolean;
}

export function SchemeCard({ result, userProfile, onBookmarkToggle, isBookmarked }: SchemeCardProps) {
  const { scheme, matchScore, isEligible, whyItMatches, cautionNotes } = result;
  const [showAIModal, setShowAIModal] = useState(false);

  // Match score color badge
  const getBadgeStyle = (score: number) => {
    if (score >= 85) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    if (score >= 60) return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    if (score >= 40) return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    return 'bg-slate-700/30 text-slate-400 border-slate-700';
  };

  return (
    <>
      <div className="group relative rounded-2xl glass-panel p-5 sm:p-6 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/90 flex flex-col justify-between">
        <div>
          {/* Header Tag & Score Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-700/50">
                <Building2 className="h-3 w-3 text-slate-400" />
                {scheme.level === 'central' ? 'Central Scheme' : `${scheme.state} State`}
              </span>
              <span className="rounded-md bg-blue-950/60 px-2.5 py-1 text-xs font-medium text-blue-300 border border-blue-800/40">
                {scheme.categoryTag}
              </span>
            </div>

            {/* Match Score Badge */}
            <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border ${getBadgeStyle(matchScore)}`}>
              <Sparkles className="h-3.5 w-3.5" />
              <span>{matchScore}% Match</span>
            </div>
          </div>

          {/* Scheme Title */}
          <Link href={`/scheme/${scheme.id}`} className="block group-hover:text-blue-400 transition-colors">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {scheme.name}
            </h3>
            {scheme.nameHindi && (
              <p className="text-xs text-slate-400 font-medium mt-0.5">{scheme.nameHindi}</p>
            )}
          </Link>

          {/* Ministry / Department */}
          <p className="text-xs text-slate-400 mt-1 mb-3">
            {scheme.ministry}
          </p>

          {/* AI Personalized Recommendation Callout */}
          <div className="mb-4 rounded-xl bg-slate-950/60 p-3 border border-slate-800/80">
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-200">Why it matches: </span>
                <span className="text-slate-300">{whyItMatches}</span>
              </div>
            </div>

            {cautionNotes && cautionNotes.length > 0 && (
              <div className="mt-2 flex items-start gap-2 text-xs text-amber-300/90 border-t border-slate-800/60 pt-2">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Note: {cautionNotes[0]}</span>
              </div>
            )}
          </div>

          {/* Benefits summary */}
          <div className="mb-4 space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <IndianRupee className="h-3.5 w-3.5 text-emerald-400" />
              <span>
                Benefit: <strong className="text-white">{scheme.benefitAmount || scheme.benefits[0]}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>Deadline: {scheme.deadline || 'Ongoing'}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowAIModal(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>AI Eligibility Breakdown</span>
          </button>

          <div className="flex items-center gap-2">
            <Link
              href={`/scheme/${scheme.id}`}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
            >
              <span>Details</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>

            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-emerald-600/90 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 transition-all"
            >
              <span>Apply</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* AI Detailed Breakdown Modal */}
      {showAIModal && (
        <AIEligibilityModal
          scheme={scheme}
          profile={userProfile}
          matchResult={result}
          onClose={() => setShowAIModal(false)}
        />
      )}
    </>
  );
}
