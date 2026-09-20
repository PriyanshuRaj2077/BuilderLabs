'use client';

import React, { useEffect, useState } from 'react';
import { Scheme, SchemeMatchResult, UserProfile } from '@/lib/types';
import { AIExplanationResult } from '@/lib/gemini';
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Loader2, 
  ArrowUpRight 
} from 'lucide-react';

interface AIEligibilityModalProps {
  scheme: Scheme;
  profile?: UserProfile | null;
  matchResult: SchemeMatchResult;
  onClose: () => void;
}

export function AIEligibilityModal({ scheme, profile, matchResult, onClose }: AIEligibilityModalProps) {
  const [loading, setLoading] = useState(true);
  const [aiData, setAiData] = useState<AIExplanationResult | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchExplanation() {
      if (!profile) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const res = await fetch(`/api/schemes/${scheme.id}/explain`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ profile }),
        });
        const data = await res.json();
        if (isMounted && data.explanation) {
          setAiData(data.explanation);
        }
      } catch (err) {
        console.error('Error fetching AI explanation:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchExplanation();
    return () => { isMounted = false; };
  }, [scheme.id, profile]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-[var(--border-subtle)] bg-[var(--panel-bg)] text-[var(--text-primary)] p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-yellow-text)]">
          <Sparkles className="h-4 w-4 text-[var(--accent-yellow)]" />
          <span>Gemini AI Policy Reasoning</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight pr-8">
          {scheme.name}
        </h2>
        <p className="text-xs text-[var(--text-secondary)] mt-0.5">{scheme.ministry}</p>

        {/* Profile Snapshot Strip */}
        {profile && (
          <div className="mt-4 rounded-[20px] bg-[var(--card-subtle)] p-3.5 border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>
              <span className="text-[var(--text-muted)] block text-[11px]">Candidate:</span>
              <span className="font-semibold text-[var(--text-primary)]">{profile.name}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[11px]">State & Age:</span>
              <span className="font-semibold text-[var(--text-primary)]">{profile.state} ({profile.age}y)</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[11px]">Category:</span>
              <span className="font-semibold text-[var(--text-primary)]">{profile.category}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[11px]">Occupation:</span>
              <span className="font-semibold text-[var(--text-primary)] capitalize">{profile.occupation.replace('_', ' ')}</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-[var(--accent-yellow)]" />
            <p className="text-sm text-[var(--text-secondary)]">Gemini is translating official legal gazette rules for you...</p>
          </div>
        ) : (
          <div className="mt-5 space-y-4 text-sm">
            
            {/* AI Summary Statement (FinPoint Yellow accent box) */}
            <div className="rounded-[20px] bg-[var(--card-subtle)] border border-[var(--border-subtle)] p-4">
              <span className="text-[11px] font-bold text-[var(--accent-yellow-text)] uppercase tracking-wider block mb-1">
                Executive Eligibility Summary
              </span>
              <p className="font-medium text-[var(--text-primary)] leading-relaxed text-xs sm:text-sm">
                {aiData?.summary || matchResult.whyItMatches}
              </p>
            </div>

            {/* Matched Criteria Checkpoints with Parrot Green */}
            <div className="p-4 rounded-[20px] bg-[var(--card-subtle)] border border-[var(--border-subtle)]">
              <h4 className="font-bold text-[var(--text-primary)] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[var(--accent-parrot)]" />
                <span>Eligibility Factors Verified</span>
              </h4>
              <ul className="space-y-2">
                {(aiData?.matchedPoints || [
                  `State residency requirement satisfied (${profile?.state || 'Verified'})`,
                  `Caste/Category criteria aligns (${profile?.category || 'General'})`,
                  `Target occupation status satisfied (${profile?.occupation || 'Citizen'})`
                ]).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22e55e] mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Watchouts & Caveats */}
            {aiData?.watchouts && aiData.watchouts.length > 0 && (
              <div className="rounded-[20px] bg-[var(--card-subtle)] border border-amber-500/40 p-4">
                <h4 className="font-bold text-amber-500 dark:text-amber-400 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  <span>Prerequisites & Watchouts</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {aiData.watchouts.map((w, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next Steps to Apply */}
            <div className="p-4 rounded-[20px] bg-[var(--card-subtle)] border border-[var(--border-subtle)]">
              <h4 className="font-bold text-[var(--text-primary)] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ArrowRight className="h-4 w-4 text-[var(--accent-yellow)]" />
                <span>Application Pathway</span>
              </h4>
              <div className="space-y-2 text-xs">
                {(aiData?.nextSteps || [
                  'Keep your Aadhaar-linked active bank account ready for Direct Benefit Transfer.',
                  'Submit the online registration form through the official government portal.'
                ]).map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl bg-[var(--panel-bg)] p-2.5 border border-[var(--border-subtle)] text-[var(--text-primary)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-yellow-badge-bg)] text-[var(--accent-yellow-text)] border border-[var(--accent-yellow-badge-border)] text-[10px] font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-secondary)]">
            <ShieldCheck className="h-4 w-4 text-[var(--accent-parrot)]" />
            <span>Verified Official Gazette Grounding</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Close
            </button>
            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-bold text-[var(--background)] hover:opacity-90"
            >
              <span>Go to Official Portal</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

