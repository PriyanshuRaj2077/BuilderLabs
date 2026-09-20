'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SchemeMatchResult, UserProfile } from '@/lib/types';
import { 
  Sparkles, 
  ExternalLink, 
  Clock, 
  IndianRupee, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight,
  ShieldCheck,
  Building2,
  ArrowUpRight
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

  // FinPoint score styling
  const getBadgeStyle = (score: number) => {
    if (score >= 85) return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25';
    if (score >= 60) return 'bg-[#ff451a]/15 text-[#ff451a] border-[#ff451a]/25';
    if (score >= 40) return 'bg-amber-500/15 text-amber-400 border-amber-500/25';
    return 'bg-[#262933] text-neutral-400 border-[#343845]';
  };

  return (
    <>
      <div className="group relative rounded-[24px] bg-[#181a20] border border-[#262933] p-5 sm:p-6 transition-all duration-200 hover:border-[#343845] hover:bg-[#1c1e25] flex flex-col justify-between">
        <div>
          {/* Top Tag & Match Score */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#121418] px-3 py-1 text-[11px] font-medium text-neutral-300 border border-[#262933]">
                <Building2 className="h-3 w-3 text-neutral-400" />
                {scheme.level === 'central' ? 'Central Scheme' : `${scheme.state} State`}
              </span>
              <span className="rounded-full bg-[#121418] px-3 py-1 text-[11px] font-medium text-neutral-400 border border-[#262933]">
                {scheme.categoryTag}
              </span>
            </div>

            {/* Match Score Badge (FinPoint Pill) */}
            <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border ${getBadgeStyle(matchScore)}`}>
              <Sparkles className="h-3.5 w-3.5" />
              <span>{matchScore}% Match</span>
            </div>
          </div>

          {/* Scheme Title */}
          <Link href={`/scheme/${scheme.id}`} className="block group-hover:text-white transition-colors">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
              {scheme.name}
            </h3>
            {scheme.nameHindi && (
              <p className="text-xs text-neutral-400 font-medium mt-0.5">{scheme.nameHindi}</p>
            )}
          </Link>

          {/* Ministry */}
          <p className="text-xs text-neutral-400 mt-1 mb-3.5">
            {scheme.ministry}
          </p>

          {/* AI Personalized Recommendation Callout (FinPoint dark nested box) */}
          <div className="mb-4 rounded-[16px] bg-[#121418] p-3.5 border border-[#23262f]">
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Why it matches: </span>
                <span className="text-neutral-300 leading-relaxed">{whyItMatches}</span>
              </div>
            </div>

            {cautionNotes && cautionNotes.length > 0 && (
              <div className="mt-2.5 flex items-start gap-2 text-xs text-amber-300/90 border-t border-[#23262f] pt-2">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Note: {cautionNotes[0]}</span>
              </div>
            )}
          </div>

          {/* Benefits summary */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <IndianRupee className="h-3.5 w-3.5 text-[#ff451a]" />
              <span>
                Benefit: <strong className="text-white font-bold">{scheme.benefitAmount || scheme.benefits[0]}</strong>
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>Deadline: {scheme.deadline || 'Ongoing'}</span>
              </div>
              <span className="text-[11px] text-emerald-400/90 font-medium">
                Verified: {scheme.lastVerifiedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions (FinPoint pill button style) */}
        <div className="pt-3.5 border-t border-[#23262f] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowAIModal(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff451a] hover:text-[#ff6b47] transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Reasoning Breakdown</span>
          </button>

          <div className="flex items-center gap-2">
            <Link
              href={`/scheme/${scheme.id}`}
              className="inline-flex items-center gap-1 rounded-full bg-[#121418] border border-[#262933] px-3.5 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white hover:border-[#343845] transition-all"
            >
              <span>Details</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>

            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-black hover:bg-neutral-200 transition-all"
            >
              <span>Apply</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
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
