'use client';
import Link from 'next/link';
import type { Scheme, SchemeMatchResult } from '@/lib/types';
import type { ReactNode } from 'react';
import { useLang } from '@/lib/i18n/context';
import { schemeTitle, sectorLabel, stateLabel } from '@/lib/i18n/labels';
import { useTranslatedList } from '@/lib/i18n/T';
import { useSaved } from '@/lib/profile';

export function ScoreBar({ score }: { score: number }) {
  const { t } = useLang();
  return (
    <div className="flex items-center gap-2.5" aria-label={`${score} ${t('match_score')}`}>
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[var(--surface-2)]" role="progressbar" aria-valuenow={score} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-[var(--red)]" style={{ width: `${Math.min(100, Math.max(0, score))}%` }} />
      </div>
      <span className="whitespace-nowrap text-xs font-bold tabular-nums">{score}%</span>
    </div>
  );
}

export function SchemeCard({ scheme, result }: { scheme: Scheme; result?: SchemeMatchResult | null }) {
  const { t, lang } = useLang();
  const { saved, toggle } = useSaved();
  const isSaved = saved.includes(scheme.id);
  const benefitLine = scheme.benefitAmount ?? scheme.benefits[0] ?? '';
  const [description, ministry, benefit, why, deadline] = useTranslatedList([
    scheme.description,
    scheme.ministry,
    benefitLine,
    result?.whyItMatches ?? '',
    scheme.deadline ?? '',
  ]);
  const title = schemeTitle(scheme, lang);
  return (
    <article className="card card-hover fade-in flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          <span className="badge">{scheme.level === 'central' || scheme.level === 'centrally_sponsored' ? t('level_central') : stateLabel(t, scheme.state ?? '') || t('level_state')}</span>
          <span className="badge">{sectorLabel(t, scheme.categoryTag)}</span>
        </div>
        {result && <ScoreBar score={result.matchScore} />}
      </div>
      <h3 className="font-display mt-4 text-lg font-bold leading-snug">
        <Link href={`/scheme/${scheme.id}`} className="hover:underline">{title}</Link>
      </h3>
      <p className="mt-1.5 text-xs font-medium text-[var(--ink-3)]">{ministry}</p>
      <p className="mt-3 line-clamp-2 min-h-[2.6rem] flex-1 text-sm leading-relaxed text-[var(--ink-2)]">{description}</p>
      {result && why && (
        <p className="mt-4 rounded-md bg-[var(--surface-2)] px-3 py-2.5 text-[13px] leading-relaxed text-[var(--ink-2)]">{why}</p>
      )}
      <div className="mt-4 flex items-center justify-between gap-3 pb-5 text-[13px]">
        <span className="font-semibold">{benefit}</span>
        <span className="whitespace-nowrap text-xs text-[var(--ink-3)]">{deadline || t('ongoing')}</span>
      </div>
      <div className="hr mt-auto flex items-center justify-between gap-2 pt-5">
        <div className="flex gap-2">
          <Link href={`/scheme/${scheme.id}`} className="btn btn-secondary !min-h-[2.5rem] !px-4 !py-2 !text-xs">{t('view_details')}</Link>
          <button onClick={() => toggle(scheme.id)} aria-pressed={isSaved} className="btn btn-secondary !min-h-[2.5rem] !px-4 !py-2 !text-xs">
            {isSaved ? '✓ ' + t('detail_saved') : t('save')}
          </button>
        </div>
        <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-[2.5rem] !px-4 !py-2 !text-xs">{t('apply')} ↗</a>
      </div>
    </article>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="card fade-in px-6 py-14 text-center sm:py-16">
      <p className="font-display text-xl font-bold">{title}</p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--ink-2)]">{body}</p>
      {action && <div className="mt-7 flex justify-center">{action}</div>}
    </div>
  );
}

export function PageHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-2)]">{sub}</p>
    </div>
  );
}
