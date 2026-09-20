'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { evaluateSchemeEligibility } from '@/lib/matching';
import { UserProfile, Scheme } from '@/lib/types';
import { AIExplanationResult } from '@/lib/gemini';
import { 
  Building2, 
  Sparkles, 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Clock, 
  IndianRupee, 
  ShieldCheck, 
  Share2,
  Bookmark,
  ChevronRight,
  Info
} from 'lucide-react';

const DEFAULT_CITIZEN_PROFILE: UserProfile = {
  name: 'Citizen',
  age: 25,
  gender: 'all',
  state: 'All India',
  category: 'General',
  occupation: 'job_seeker',
  education: 'undergraduate',
  annualIncome: 250000,
  isRural: false,
  hasDisability: false,
  interests: ['Higher Education Scholarships', 'Skill Training & Employment']
};

export default function SchemeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const schemeId = resolvedParams.id;

  const [profile, setProfile] = useState<UserProfile>(DEFAULT_CITIZEN_PROFILE);
  const [aiExplanation, setAiExplanation] = useState<AIExplanationResult | null>(null);
  const [loadingAI, setLoadingAI] = useState(true);

  // Find scheme
  const scheme = SEED_SCHEMES.find(s => s.id === schemeId || s.slug === schemeId) || SEED_SCHEMES[0];

  useEffect(() => {
    const stored = localStorage.getItem('soochai_profile');
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {}
    }
  }, []);

  // Compute eligibility for this scheme against profile
  const matchResult = evaluateSchemeEligibility(scheme, profile);

  // Fetch Gemini explanation
  useEffect(() => {
    let isMounted = true;
    async function fetchAI() {
      try {
        setLoadingAI(true);
        const res = await fetch(`/api/schemes/${scheme.id}/explain`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ profile })
        });
        const data = await res.json();
        if (isMounted && data.explanation) {
          setAiExplanation(data.explanation);
        }
      } catch (err) {
        console.error('Error fetching AI explanation:', err);
      } finally {
        if (isMounted) setLoadingAI(false);
      }
    }
    fetchAI();
    return () => { isMounted = false; };
  }, [scheme.id, profile]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Navbar currentProfile={profile} />

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 flex-1">
        
        {/* Back Link & Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="rounded-md bg-blue-950/60 px-2.5 py-1 text-xs font-medium text-blue-300 border border-blue-800/40">
              {scheme.categoryTag}
            </span>
            <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300">
              {scheme.level === 'central' ? 'Central Sector' : `${scheme.state} State`}
            </span>
          </div>
        </div>

        {/* Scheme Header Banner */}
        <section className="rounded-3xl glass-panel-glow p-6 sm:p-8 mb-8 border border-blue-900/40">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-blue-400" />
                {scheme.ministry}
              </span>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {scheme.name}
              </h1>

              {scheme.nameHindi && (
                <p className="text-sm font-medium text-slate-400">{scheme.nameHindi}</p>
              )}

              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed pt-2">
                {scheme.description}
              </p>
            </div>

            {/* Match Score Gauge Card */}
            <div className="rounded-2xl bg-slate-950/90 p-5 border border-slate-800 text-center shrink-0 min-w-[200px]">
              <span className="text-xs font-semibold text-slate-400 block mb-1">Personal Match</span>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {matchResult.matchScore}%
              </div>
              <div className="mt-2 text-xs font-semibold text-emerald-400 flex items-center justify-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{matchResult.isEligible ? 'Highly Eligible' : 'Conditionally Eligible'}</span>
              </div>
              <a
                href={scheme.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-1.5 w-full rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 py-2.5 text-xs font-bold text-white hover:brightness-110 shadow-lg shadow-blue-500/20 transition-all"
              >
                <span>Apply on Official Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 10 Required Scheme Fields Breakdown */}
        <div className="space-y-6">

          {/* 1. Who It Is For */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-400" />
              <span>1. Target Beneficiaries (Who It Is For)</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {scheme.whoIsItFor}
            </p>
          </div>

          {/* 2. Gemini AI Personalized Match Explanation */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-6 border border-blue-800/40">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <Sparkles className="h-4 w-4" />
              <span>2. Why It Matches Your Profile (Gemini Reasoning)</span>
            </div>

            <p className="text-sm font-semibold text-slate-200 mb-4 leading-relaxed">
              {aiExplanation?.summary || matchResult.whyItMatches}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Criteria Met</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {(aiExplanation?.matchedPoints || [
                    `State: Resident of ${profile.state}`,
                    `Category: Fits within ${profile.category} guidelines`,
                    `Occupation: Aligns with ${profile.occupation.replace('_', ' ')} status`
                  ]).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {aiExplanation?.watchouts && aiExplanation.watchouts.length > 0 && (
                <div className="bg-amber-950/20 p-3 rounded-xl border border-amber-900/40">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>Watchouts & Verification</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-amber-200/90">
                    {aiExplanation.watchouts.map((w, idx) => (
                      <li key={idx}>• {w}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 3. Detailed Eligibility Criteria */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3">
              3. Official Eligibility Criteria
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4 font-mono">
              {scheme.eligibility.rawText}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Age Range</span>
                <span className="font-semibold text-white">
                  {scheme.eligibility.ageMin || 0} - {scheme.eligibility.ageMax || 'No Limit'} yrs
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Income Ceiling</span>
                <span className="font-semibold text-white">
                  {scheme.eligibility.incomeMax ? `₹${(scheme.eligibility.incomeMax/100000).toFixed(1)} Lakh/yr` : 'No Income Cap'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Target Category</span>
                <span className="font-semibold text-white">
                  {scheme.eligibility.categories.join(', ')}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">Gender</span>
                <span className="font-semibold text-white capitalize">
                  {scheme.eligibility.gender || 'All Genders'}
                </span>
              </div>
            </div>
          </div>

          {/* 4. Benefits */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <IndianRupee className="h-4 w-4 text-emerald-400" />
              <span>4. Scheme Benefits</span>
            </h3>
            <div className="text-lg font-bold text-emerald-400 mb-3">
              {scheme.benefitAmount || 'Direct Welfare Benefits'}
            </div>
            <ul className="space-y-2">
              {scheme.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Required Documents */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-indigo-400" />
              <span>5. Mandatory Documents Checklist</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {scheme.requiredDocuments.map((doc, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Step-by-Step Application Procedure */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-blue-400" />
              <span>6. Application Procedure ({scheme.applicationMode.toUpperCase()})</span>
            </h3>
            <div className="space-y-3">
              {scheme.applicationProcedure.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/30 text-blue-400 font-bold shrink-0 text-[11px]">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Official Source & Portal Link */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white">
                7. Official Verification & Portal Link
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Host Portal: <strong className="text-slate-200">{scheme.portalName}</strong>
              </p>
            </div>
            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-500 shadow-md transition-all shrink-0"
            >
              <span>Open {scheme.portalName}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* 8. Deadline & Verification Freshness */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">8. Application Deadline / Status</span>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-400" />
                <span>{scheme.deadline || 'Ongoing Open Scheme'}</span>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">Data Verification Stamp</span>
              <div className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Verified against official gazette on {scheme.lastVerifiedDate}</span>
              </div>
            </div>
          </div>

          {/* 9. Inconsistencies or Outdated Info Flagged */}
          {scheme.inconsistencies && scheme.inconsistencies.length > 0 && (
            <div className="rounded-2xl bg-amber-950/20 p-6 border border-amber-900/50">
              <h3 className="text-sm font-bold text-amber-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <span>9. Cross-Source Inconsistencies Detected</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-amber-200/80">
                {scheme.inconsistencies.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span>⚠️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </main>
    </div>
  );
}
