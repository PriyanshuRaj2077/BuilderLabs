'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { evaluateSchemeEligibility } from '@/lib/matching';
import { UserProfile } from '@/lib/types';
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col font-sans transition-colors duration-200">
      <Navbar currentProfile={profile} />

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-6">
        
        {/* Back Link & Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[var(--card-subtle)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              {scheme.categoryTag}
            </span>
            <span className="rounded-full bg-[var(--card-subtle)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              {scheme.level === 'central' ? 'Central Sector' : `${scheme.state} State`}
            </span>
          </div>
        </div>

        {/* Scheme Header Banner */}
        <section className="fin-canvas p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-[#ff451a]" />
                {scheme.ministry}
              </span>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {scheme.name}
              </h1>

              {scheme.nameHindi && (
                <p className="text-sm font-medium text-[var(--text-muted)]">{scheme.nameHindi}</p>
              )}

              <p className="text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed pt-2">
                {scheme.description}
              </p>
            </div>

            {/* Match Score Gauge Card */}
            <div className="rounded-2xl bg-[var(--card-subtle)] p-5 border border-[var(--border-subtle)] text-center shrink-0 min-w-[200px] shadow-sm">
              <span className="text-xs font-semibold text-[var(--text-secondary)] block mb-1">Personal Match</span>
              <div className="text-4xl font-black text-[var(--accent-yellow-text)]">
                {matchResult.matchScore}%
              </div>
              <div className="mt-2 text-xs font-semibold text-[var(--accent-parrot-text)] flex items-center justify-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{matchResult.isEligible ? 'Highly Eligible' : 'Conditionally Eligible'}</span>
              </div>
              <a
                href={scheme.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-1.5 w-full rounded-full bg-[var(--text-primary)] py-2.5 text-xs font-bold text-[var(--background)] hover:opacity-90 transition-all shadow-sm"
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
          <div className="fin-canvas p-6">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-[#ff451a]" />
              <span>1. Target Beneficiaries (Who It Is For)</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {scheme.whoIsItFor}
            </p>
          </div>

          {/* 2. Gemini AI Personalized Match Explanation */}
          <div className="fin-canvas p-6 border-l-4 border-l-[var(--accent-yellow)]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-yellow-text)] mb-2">
              <Sparkles className="h-4 w-4 text-[var(--accent-yellow)]" />
              <span>2. Why It Matches Your Profile (Gemini Reasoning)</span>
            </div>

            <p className="text-sm font-semibold text-[var(--text-primary)] mb-4 leading-relaxed">
              {aiExplanation?.summary || matchResult.whyItMatches}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)]">
                <h4 className="text-xs font-bold text-[var(--accent-parrot-text)] uppercase tracking-wider mb-2 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-parrot)]" />
                  <span>Criteria Met</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {(aiExplanation?.matchedPoints || [
                    `State: Resident of ${profile.state}`,
                    `Category: Fits within ${profile.category} guidelines`,
                    `Occupation: Aligns with ${profile.occupation.replace('_', ' ')} status`
                  ]).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-parrot-text)] font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {aiExplanation?.watchouts && aiExplanation.watchouts.length > 0 && (
                <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/30">
                  <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                    <span>Watchouts & Verification</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    {aiExplanation.watchouts.map((w, idx) => (
                      <li key={idx}>• {w}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 3. Detailed Eligibility Criteria */}
          <div className="fin-canvas p-6">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">
              3. Official Eligibility Criteria
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed bg-[var(--card-subtle)] p-4 rounded-2xl border border-[var(--border-subtle)] mb-4 font-mono">
              {scheme.eligibility.rawText}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)] block">Age Range</span>
                <span className="font-semibold text-[var(--text-primary)]">
                  {scheme.eligibility.ageMin || 0} - {scheme.eligibility.ageMax || 'No Limit'} yrs
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)] block">Income Ceiling</span>
                <span className="font-semibold text-[var(--text-primary)]">
                  {scheme.eligibility.incomeMax ? `₹${(scheme.eligibility.incomeMax/100000).toFixed(1)} Lakh/yr` : 'No Income Cap'}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)] block">Target Category</span>
                <span className="font-semibold text-[var(--text-primary)]">
                  {scheme.eligibility.categories.join(', ')}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)] block">Gender</span>
                <span className="font-semibold text-[var(--text-primary)] capitalize">
                  {scheme.eligibility.gender || 'All Genders'}
                </span>
              </div>
            </div>
          </div>

          {/* 4. Benefits */}
          <div className="fin-canvas p-6">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <IndianRupee className="h-4 w-4 text-[#ff451a]" />
              <span>4. Scheme Benefits</span>
            </h3>
            <div className="text-lg font-bold text-[var(--accent-parrot-text)] mb-3">
              {scheme.benefitAmount || 'Direct Welfare Benefits'}
            </div>
            <ul className="space-y-2">
              {scheme.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22e55e] mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Required Documents */}
          <div className="fin-canvas p-6">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#ff451a]" />
              <span>5. Mandatory Documents Checklist</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {scheme.requiredDocuments.map((doc, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)]">
                  <CheckCircle2 className="h-4 w-4 text-[#22e55e] shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Step-by-Step Application Procedure */}
          <div className="fin-canvas p-6">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-[#ff451a]" />
              <span>6. Application Procedure ({scheme.applicationMode.toUpperCase()})</span>
            </h3>
            <div className="space-y-3">
              {scheme.applicationProcedure.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[var(--card-subtle)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff451a]/15 text-[#ff451a] font-bold shrink-0 text-[11px]">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed text-[var(--text-primary)]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Official Source & Portal Link */}
          <div className="fin-canvas p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                7. Official Verification & Portal Link
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Host Portal: <strong className="text-[var(--text-primary)]">{scheme.portalName}</strong>
              </p>
            </div>
            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff451a] px-5 py-2.5 text-xs font-bold text-white hover:brightness-110 shadow-md transition-all shrink-0"
            >
              <span>Open {scheme.portalName}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* 8. Deadline & Verification Freshness */}
          <div className="fin-canvas p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-semibold text-[var(--text-muted)] block mb-1">8. Application Deadline / Status</span>
              <div className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                <span>{scheme.deadline || 'Ongoing Open Scheme'}</span>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold text-[var(--text-muted)] block mb-1">Data Verification Stamp</span>
              <div className="text-sm font-bold text-[var(--accent-parrot-text)] flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#22e55e]" />
                <span>Verified against official gazette on {scheme.lastVerifiedDate}</span>
              </div>
            </div>
          </div>

          {/* 9. Inconsistencies or Outdated Info Flagged */}
          {scheme.inconsistencies && scheme.inconsistencies.length > 0 && (
            <div className="rounded-2xl bg-amber-500/10 p-6 border border-amber-500/30">
              <h3 className="text-sm font-bold text-amber-600 dark:text-amber-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <span>9. Cross-Source Inconsistencies Detected</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-amber-700 dark:text-amber-200/80">
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

