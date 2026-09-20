'use client';
import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { ExplainBox } from '@/components/ui/ExplainBox';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { evaluateSchemeEligibility } from '@/lib/matching';
import { useLang } from '@/lib/i18n/context';
import { useProfile, useSaved } from '@/lib/profile';
import { useMemo } from 'react';

export default function SchemeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t } = useLang();
  const { profile, ready } = useProfile();
  const { saved, toggle } = useSaved();
  const scheme = SEED_SCHEMES.find((s) => s.id === id || s.slug === id);
  const result = useMemo(() => (scheme ? evaluateSchemeEligibility(scheme, profile) : null), [scheme, profile]);
  if (!scheme) notFound();
  const isSaved = saved.includes(scheme.id);
  return (
    <PageShell>
      <div className="page-shell max-w-3xl py-10">
        <Link href="/search" className="text-sm font-semibold text-[var(--ink-2)] hover:underline">← {t('detail_back')}</Link>
        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="badge">{scheme.categoryTag}</span>
          {result && <span className={`badge ${result.isEligible ? 'badge-ok' : 'badge-red'}`}>{result.isEligible ? t('eligible') : t('review')} · {result.matchScore}%</span>}
        </div>
        <h1 className="font-display mt-3 text-3xl font-bold leading-tight">{scheme.name}</h1>
        {scheme.nameHindi && <p className="mt-1 text-sm text-[var(--ink-2)]">{scheme.nameHindi}</p>}
        <p className="mt-2 text-sm text-[var(--ink-3)]">{scheme.ministry}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-2)]">{scheme.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('detail_open_portal')} ↗</a>
          <button onClick={() => toggle(scheme.id)} aria-pressed={isSaved} className="btn btn-secondary">{isSaved ? '✓ ' + t('detail_saved') : t('detail_save')}</button>
        </div>
        <p className="mt-3 text-xs text-[var(--ink-3)]">{t('detail_apply_note')}</p>
        {result && (
          <section className="card mt-6 p-5">
            <h2 className="font-display text-lg font-bold">{t('detail_why')}</h2>
            <p className="mt-2 text-sm leading-relaxed">{result.whyItMatches}</p>
          </section>
        )}
        <section className="card mt-4 grid gap-6 p-5 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-bold">{t('detail_documents')}</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-2)]">
              {scheme.requiredDocuments.map((d, i) => <li key={i}>{i + 1}. {d}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold">{t('detail_steps')}</h2>
            <ol className="mt-2 space-y-1.5 text-sm text-[var(--ink-2)]">
              {scheme.applicationProcedure.map((s, i) => <li key={i}>{i + 1}. {s}</li>)}
            </ol>
          </div>
        </section>
        <section className="card mt-4 p-5">
          <h2 className="font-display text-lg font-bold">{t('detail_official')}</h2>
          <p className="mt-1 text-sm text-[var(--ink-2)]">{scheme.portalName}</p>
          <p className="mt-2 text-xs text-[var(--ink-3)]">{t('detail_verified')}: {scheme.lastVerifiedDate}</p>
        </section>

        <section className="card mt-4 p-5">
          <h2 className="font-display text-lg font-bold">{t('detail_benefits')}</h2>
          <ul className="mt-2 space-y-1.5 text-sm">
            {scheme.benefits.map((b, i) => <li key={i} className="flex gap-2"><span aria-hidden>•</span><span>{b}</span></li>)}
          </ul>
        </section>
        <div className="mt-4">{ready ? <ExplainBox scheme={scheme} profile={profile} /> : <p className="text-sm">{t('common_loading')}</p>}</div>
      </div>
    </PageShell>
  );
}

