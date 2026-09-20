'use client';
import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { ExplainBox } from '@/components/ui/ExplainBox';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { evaluateSchemeEligibility } from '@/lib/matching';
import { useLang } from '@/lib/i18n/context';
import { categoryLabel, schemeTitle, sectorLabel } from '@/lib/i18n/labels';
import { useTranslatedList } from '@/lib/i18n/T';
import { useProfile, useSaved } from '@/lib/profile';
import { useAuthUser } from '@/lib/auth';
import { useMemo } from 'react';

export default function SchemeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t, lang } = useLang();
  const { profile, ready, hasProfile } = useProfile();
  const { user } = useAuthUser();
  const { saved, toggle } = useSaved();
  const hasPersonalData = Boolean(user) || hasProfile;
  const scheme = SEED_SCHEMES.find((s) => s.id === id || s.slug === id);
  const result = useMemo(() => (scheme ? evaluateSchemeEligibility(scheme, profile) : null), [scheme, profile]);
  const dyn = useTranslatedList(
    scheme
      ? [scheme.description, scheme.ministry, result?.whyItMatches ?? '', ...scheme.requiredDocuments, ...scheme.applicationProcedure, ...scheme.benefits]
      : [],
  );
  if (!scheme) notFound();
  const isSaved = saved.includes(scheme.id);
  const title = schemeTitle(scheme, lang);
  const description = dyn[0] ?? scheme.description;
  const ministry = dyn[1] ?? scheme.ministry;
  const why = dyn[2] ?? result?.whyItMatches ?? '';
  const docs = dyn.slice(3, 3 + scheme.requiredDocuments.length);
  const steps = dyn.slice(3 + scheme.requiredDocuments.length, 3 + scheme.requiredDocuments.length + scheme.applicationProcedure.length);
  const benefits = dyn.slice(3 + scheme.requiredDocuments.length + scheme.applicationProcedure.length);
  const checks: Array<[string, boolean]> = result
    ? [
        [`${t('det_state')}: ${result.breakdown.stateMatched ? t('det_matches') : t('det_domicile')}`, result.breakdown.stateMatched],
        [`${t('det_age')} ${profile.age}: ${result.breakdown.ageMatched ? t('det_within') : t('det_outside')}`, result.breakdown.ageMatched],
        [`${t('det_cat')} ${categoryLabel(t, profile.category)}: ${result.breakdown.categoryMatched ? t('det_covered') : t('det_notlisted')}`, result.breakdown.categoryMatched],
        [`${t('det_occ')}: ${result.breakdown.occupationMatched ? t('det_covered') : t('det_role')}`, result.breakdown.occupationMatched],
        [`${t('det_inc')}: ${result.breakdown.incomeMatched ? t('det_ceiling') : t('det_above')}`, result.breakdown.incomeMatched],
      ]
    : [];
  return (
    <PageShell>
      <div className="page-shell section-tail max-w-3xl py-12 sm:py-16">
        <Link href="/search" className="inline-block min-h-[2.75rem] py-2 text-sm font-semibold text-[var(--ink-2)] hover:underline">← {t('detail_back')}</Link>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="badge">{sectorLabel(t, scheme.categoryTag)}</span>
          {hasPersonalData && result && <span className={`badge ${result.isEligible ? 'badge-ok' : 'badge-red'}`}>{result.isEligible ? t('eligible') : t('review')} · {result.matchScore}%</span>}
        </div>
        <h1 className="font-display mt-5 text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-[var(--ink-3)]">{ministry}</p>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-2)]">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('detail_open_portal')} ↗</a>
          <button onClick={() => toggle(scheme.id)} aria-pressed={isSaved} className="btn btn-secondary">{isSaved ? '✓ ' + t('detail_saved') : t('detail_save')}</button>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-[var(--ink-3)]">{t('detail_apply_note')}</p>
        {hasPersonalData && result ? (
          <section className="card mt-10">
            <h2 className="font-display text-lg font-bold">{t('detail_why')}</h2>
            <p className="mt-3 text-sm leading-relaxed">{why}</p>
            <h3 className="label mt-6">{t('detail_eligibility')}</h3>
            <ul className="space-y-2.5 text-sm">
              {checks.map(([label, ok]) => (
                <li key={label} className="flex gap-2.5"><span aria-hidden className={ok ? 'font-bold text-[var(--ok)]' : 'font-bold text-[var(--red)]'}>{ok ? '✓' : '!'}</span><span>{label}</span></li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="card mt-10 bg-[var(--surface-2)]">
            <h2 className="font-display text-lg font-bold">{t('detail_guest_t')}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)]">{t('detail_guest_d')}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/onboarding" className="btn btn-primary !min-h-[2.75rem] !text-sm">{t('dash_create_profile')}</Link>
              <Link href="/auth" className="btn btn-secondary !min-h-[2.75rem] !text-sm">{t('nav_signin')}</Link>
            </div>
          </section>
        )}
        <section className="card mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-bold">{t('detail_documents')}</h2>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--ink-2)]">
              {docs.map((d, i) => <li key={i}>{i + 1}. {d}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold">{t('detail_steps')}</h2>
            <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--ink-2)]">
              {steps.map((s, i) => <li key={i}>{i + 1}. {s}</li>)}
            </ol>
          </div>
        </section>
        <section className="card mt-6">
          <h2 className="font-display text-lg font-bold">{t('detail_official')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">{scheme.portalName}</p>
          <p className="mt-2 text-xs text-[var(--ink-3)]">{t('detail_verified')}: {scheme.lastVerifiedDate}</p>
        </section>

        <section className="card mt-6">
          <h2 className="font-display text-lg font-bold">{t('detail_benefits')}</h2>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed">
            {benefits.map((b, i) => <li key={i} className="flex gap-2.5"><span aria-hidden>•</span><span>{b}</span></li>)}
          </ul>
        </section>
        <div className="mt-6">{!ready ? <p className="text-sm">{t('common_loading')}</p> : hasPersonalData ? <ExplainBox scheme={scheme} profile={profile} /> : null}</div>
      </div>
    </PageShell>
  );
}

