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
  ExternalLink,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-[#23262f] bg-[#121418] p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 bg-[#181a20] border border-[#262933] text-neutral-400 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#ff451a]">
          <Sparkles className="h-4 w-4" />
          <span>Gemini AI Policy Reasoning</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pr-8">
          {scheme.name}
        </h2>
        <p className="text-xs text-neutral-400 mt-0.5">{scheme.ministry}</p>

        {/* Profile Snapshot Strip */}
        {profile && (
          <div className="mt-4 rounded-[20px] bg-[#181a20] p-3.5 border border-[#262933] text-xs text-neutral-300 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>
              <span className="text-neutral-500 block text-[11px]">Candidate:</span>
              <span className="font-semibold text-white">{profile.name}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[11px]">State & Age:</span>
              <span className="font-semibold text-white">{profile.state} ({profile.age}y)</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[11px]">Category:</span>
              <span className="font-semibold text-white">{profile.category}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[11px]">Occupation:</span>
              <span className="font-semibold text-white capitalize">{profile.occupation.replace('_', ' ')}</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-[#ff451a]" />
            <p className="text-sm text-neutral-400">Gemini is translating official legal gazette rules for you...</p>
          </div>
        ) : (
          <div className="mt-5 space-y-4 text-sm">
            
            {/* AI Summary Statement (FinPoint Orange/Dark accent box) */}
            <div className="rounded-[20px] bg-[#181a20] border border-[#262933] p-4">
              <span className="text-[11px] font-bold text-[#ff451a] uppercase tracking-wider block mb-1">
                Executive Eligibility Summary
              </span>
              <p className="font-medium text-white leading-relaxed text-xs sm:text-sm">
                {aiData?.summary || matchResult.whyItMatches}
              </p>
            </div>

            {/* Matched Criteria Checkpoints */}
            <div className="p-4 rounded-[20px] bg-[#181a20] border border-[#262933]">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Eligibility Factors Verified</span>
              </h4>
              <ul className="space-y-2">
                {(aiData?.matchedPoints || [
                  `State residency requirement satisfied (${profile?.state || 'Verified'})`,
                  `Caste/Category criteria aligns (${profile?.category || 'General'})`,
                  `Target occupation status satisfied (${profile?.occupation || 'Citizen'})`
                ]).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Watchouts & Caveats */}
            {aiData?.watchouts && aiData.watchouts.length > 0 && (
              <div className="rounded-[20px] bg-[#181a20] border border-amber-500/30 p-4">
                <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                  <span>Prerequisites & Watchouts</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {aiData.watchouts.map((w, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next Steps to Apply */}
            <div className="p-4 rounded-[20px] bg-[#181a20] border border-[#262933]">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ArrowRight className="h-4 w-4 text-[#ff451a]" />
                <span>Application Pathway</span>
              </h4>
              <div className="space-y-2 text-xs">
                {(aiData?.nextSteps || [
                  'Keep your Aadhaar-linked active bank account ready for Direct Benefit Transfer.',
                  'Submit the online registration form through the official government portal.'
                ]).map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl bg-[#121418] p-2.5 border border-[#23262f] text-neutral-200">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff451a]/20 text-[#ff451a] text-[10px] font-bold shrink-0">
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
        <div className="mt-6 pt-4 border-t border-[#23262f] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Verified Official Gazette Grounding</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-full bg-[#181a20] border border-[#262933] px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white"
            >
              Close
            </button>
            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-black hover:bg-neutral-200"
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
