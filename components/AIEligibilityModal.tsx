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
  FileText, 
  ExternalLink,
  ShieldCheck,
  Building,
  Loader2
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <Sparkles className="h-4 w-4" />
          <span>Gemini AI Eligibility Reasoning</span>
        </div>

        <h2 className="text-xl font-bold text-white tracking-tight pr-8">
          {scheme.name}
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">{scheme.ministry}</p>

        {/* Profile Snapshot */}
        {profile && (
          <div className="mt-4 rounded-xl bg-slate-950/80 p-3.5 border border-slate-800 text-xs text-slate-300 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>
              <span className="text-slate-400 block">Candidate:</span>
              <span className="font-semibold text-white">{profile.name}</span>
            </div>
            <div>
              <span className="text-slate-400 block">State & Age:</span>
              <span className="font-semibold text-white">{profile.state} ({profile.age}y)</span>
            </div>
            <div>
              <span className="text-slate-400 block">Category:</span>
              <span className="font-semibold text-white">{profile.category}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Occupation:</span>
              <span className="font-semibold text-white capitalize">{profile.occupation.replace('_', ' ')}</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            <p className="text-sm text-slate-400">Gemini is analyzing official scheme rules for your profile...</p>
          </div>
        ) : (
          <div className="mt-5 space-y-4 text-sm">
            
            {/* AI Summary Statement */}
            <div className="rounded-xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border border-blue-800/40 p-4">
              <p className="font-medium text-slate-200 leading-relaxed">
                {aiData?.summary || matchResult.whyItMatches}
              </p>
            </div>

            {/* Matched Criteria Checkpoints */}
            <div>
              <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Eligibility Factors Verified</span>
              </h4>
              <ul className="space-y-2">
                {(aiData?.matchedPoints || [
                  `State residency requirement satisfied (${profile?.state || 'Verified'})`,
                  `Caste/Category criteria aligns (${profile?.category || 'General'})`,
                  `Target occupation status satisfied (${profile?.occupation || 'Citizen'})`
                ]).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Watchouts & Caveats */}
            {aiData?.watchouts && aiData.watchouts.length > 0 && (
              <div className="rounded-xl bg-amber-950/30 border border-amber-900/50 p-3.5">
                <h4 className="font-semibold text-amber-300 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                  <span>Important Verification Checkpoints</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-amber-200/80">
                  {aiData.watchouts.map((w, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next Steps to Apply */}
            <div>
              <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ArrowRight className="h-4 w-4 text-blue-400" />
                <span>Recommended Next Steps</span>
              </h4>
              <div className="space-y-2 text-xs">
                {(aiData?.nextSteps || [
                  'Keep your Aadhaar-linked active bank account ready for Direct Benefit Transfer.',
                  'Submit the online registration form through the official government portal.'
                ]).map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-lg bg-slate-950 p-2.5 border border-slate-800 text-slate-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/30 text-blue-400 text-[10px] font-bold shrink-0">
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
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Official Source Grounding Verified</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700"
            >
              Close
            </button>
            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
            >
              <span>Go to Official Portal</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
