'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SchemeMatchResult, UserProfile } from '@/lib/types';
import { 
  Sparkles, 
  Clock, 
  IndianRupee, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight,
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

  // FinPoint score styling with high-contrast radiant yellow badge
  const getBadgeStyle = (score: number) => {
    if (score >= 40) return 'yellow-badge';
    return 'bg-[var(--card-subtle)] text-[var(--text-muted)] border-[var(--border-subtle)]';
  };

  return (
    <>
      <div className="fin-card p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between">
        <div>
          {/* Top Tag & Match Score */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--card-subtle)] px-3 py-1 text-[11px] font-medium text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                <Building2 className="h-3 w-3 text-[var(--text-muted)]" />
                {scheme.level === 'central' ? 'Central Scheme' : `${scheme.state} State`}
              </span>
              <span className="rounded-full bg-[var(--card-subtle)] px-3 py-1 text-[11px] font-medium text-[var(--text-secondary)] border border-[var(--border-subtle)]">
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
          <Link href={`/scheme/${scheme.id}`} className="block group transition-colors">
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[#ff451a] tracking-tight leading-snug">
              {scheme.name}
            </h3>
            {scheme.nameHindi && (
              <p className="text-xs text-[var(--text-muted)] font-medium mt-0.5">{scheme.nameHindi}</p>
            )}
          </Link>

          {/* Ministry */}
          <p className="text-xs text-[var(--text-secondary)] mt-1 mb-3.5">
            {scheme.ministry}
          </p>

          {/* AI Personalized Recommendation Callout (FinPoint nested box) */}
          <div className="mb-4 rounded-[16px] bg-[var(--card-subtle)] p-3.5 border border-[var(--border-subtle)]">
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="h-4 w-4 text-[var(--accent-parrot)] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[var(--text-primary)]">Why it matches: </span>
                <span className="text-[var(--text-secondary)] leading-relaxed">{whyItMatches}</span>
              </div>
            </div>

            {cautionNotes && cautionNotes.length > 0 && (
              <div className="mt-2.5 flex items-start gap-2 text-xs text-amber-600 dark:text-amber-300/90 border-t border-[var(--border-subtle)] pt-2">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Note: {cautionNotes[0]}</span>
              </div>
            )}
          </div>

          {/* Benefits summary */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <IndianRupee className="h-3.5 w-3.5 text-[#ff451a]" />
              <span>
                Benefit: <strong className="text-[var(--text-primary)] font-bold">{scheme.benefitAmount || scheme.benefits[0]}</strong>
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>Deadline: {scheme.deadline || 'Ongoing'}</span>
              </div>
              <span className="text-[11px] font-semibold text-[var(--accent-parrot-text)]">
                Verified: {scheme.lastVerifiedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions (FinPoint pill button style) */}
        <div className="pt-3.5 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowAIModal(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff451a] hover:opacity-80 transition-opacity"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Reasoning Breakdown</span>
          </button>

          <div className="flex items-center gap-2">
            <Link
              href={`/scheme/${scheme.id}`}
              className="inline-flex items-center gap-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-all shadow-sm"
            >
              <span>Details</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>

            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-[var(--text-primary)] px-3.5 py-1.5 text-xs font-bold text-[var(--background)] hover:opacity-90 transition-all shadow-sm"
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

