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
      <div className="fin-card rounded-[28px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_14px_34px_-6px_rgba(0,0,0,0.12)] hover:-translate-y-1 relative">
        <div>
          {/* Top Tag & Match Score + Image 1 Top-Right Circular Action Arrow */}
          <div className="flex items-center justify-between gap-2.5 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--card-subtle)] px-3 py-1 text-[11px] font-semibold text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                <Building2 className="h-3 w-3 text-[var(--text-muted)]" />
                <span>{scheme.level === 'central' ? 'Central' : scheme.state}</span>
              </span>
              <span className="rounded-full bg-[var(--card-subtle)] px-3 py-1 text-[11px] font-semibold text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                {scheme.categoryTag}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {/* Match Score (Clean, no box, balanced contrast) */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent-yellow-text)]">
                <Sparkles className="h-3.5 w-3.5 text-[var(--accent-yellow)] shrink-0" />
                <span>{matchScore}% Match</span>
              </div>

              {/* Image 1 Signature Circular Quick-Action Arrow */}
              <Link
                href={`/scheme/${scheme.id}`}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--card-subtle)] hover:bg-[var(--card-hover)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-all shrink-0 shadow-sm"
                title="View Scheme Details"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Scheme Title & Ministry */}
          <div className="mb-4">
            <Link href={`/scheme/${scheme.id}`} className="block group/title">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover/title:text-[var(--accent-yellow)] tracking-tight leading-snug transition-colors">
                {scheme.name}
              </h3>
            </Link>
            <p className="text-xs text-[var(--text-muted)] font-medium mt-1">
              {scheme.nameHindi ? `${scheme.nameHindi} • ` : ''}{scheme.ministry}
            </p>
          </div>

          {/* Financial Benefit Hero Capsule (Image 1 Metric Display Style) */}
          <div className="mb-3.5 rounded-[20px] bg-[var(--card-subtle)] p-3.5 border border-[var(--border-subtle)] flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                Direct Benefit Allocation
              </span>
              <div className="text-sm sm:text-base font-extrabold text-[var(--text-primary)] tracking-tight flex items-center gap-1.5 mt-0.5">
                <IndianRupee className="h-4 w-4 text-[var(--accent-yellow)] shrink-0" />
                <span>{scheme.benefitAmount || scheme.benefits[0]}</span>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--card-bg)] px-2.5 py-1 text-[10px] font-bold text-[var(--accent-parrot-text)] border border-[var(--border-subtle)] shadow-xs">
                <Clock className="h-3 w-3 text-[var(--accent-parrot-text)]" />
                <span>{scheme.deadline || 'Ongoing'}</span>
              </span>
              <span className="text-[10px] font-semibold text-[var(--text-muted)] block mt-1">
                Verified: {scheme.lastVerifiedDate}
              </span>
            </div>
          </div>

          {/* AI Personalized Recommendation Callout (Image 1 Nested Capsule Style) */}
          <div className="mb-4 rounded-[20px] bg-[var(--card-subtle)] p-3.5 border border-[var(--border-subtle)]">
            <div className="flex items-start gap-2.5 text-xs">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-parrot-badge-bg)] border border-[var(--accent-parrot-badge-border)] text-[var(--accent-parrot)] shrink-0 mt-0.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-[var(--text-primary)] block mb-0.5">Why it matches your profile:</span>
                <span className="text-[var(--text-secondary)] leading-relaxed">{whyItMatches}</span>
              </div>
            </div>

            {cautionNotes && cautionNotes.length > 0 && (
              <div className="mt-2.5 flex items-start gap-2 text-xs border-t border-[var(--border-subtle)] pt-2.5">
                <AlertTriangle className="h-3.5 w-3.5 text-[var(--caution-icon)] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">
                  <strong className="font-semibold text-[var(--caution-label)]">Note: </strong>
                  <span className="text-[var(--caution-text)] font-normal">{cautionNotes[0]}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions (Image 1 Pill Button Style) */}
        <div className="pt-3.5 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowAIModal(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent-yellow-text)] hover:opacity-85 transition-opacity group/btn py-1"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent-yellow)] shrink-0 transition-transform group-hover/btn:scale-110" />
            <span>AI Reasoning Breakdown</span>
          </button>

          <div className="flex items-center gap-2">
            <Link
              href={`/scheme/${scheme.id}`}
              className="inline-flex items-center gap-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-all shadow-xs"
            >
              <span>Details</span>
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

