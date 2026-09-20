'use client';
import Link from 'next/link';
import type { Scheme, SchemeMatchResult } from '@/lib/types';
import type { ReactNode } from 'react';
import { useLang } from '@/lib/i18n/context';
import { useSaved } from '@/lib/profile';

export function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2" aria-label={`${score} percent match`}>
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[var(--surface-2)]" role="progressbar" aria-valuenow={score} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-[var(--red)]" style={{ width: `${Math.min(100, Math.max(0, score))}%` }} />
      </div>
      <span className="text-xs font-bold tabular-nums">{score}%</span>
    </div>
  );
}

export function SchemeCard({ scheme, result }: { scheme: Scheme; result?: SchemeMatchResult | null }) {
  const { t } = useLang();
  const { saved, toggle } = useSaved();
  const isSaved = saved.includes(scheme.id);
  return (
    <article className="card card-hover fade-in flex flex-col p-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          <span className="badge">{scheme.level === 'central' || scheme.level === 'centrally_sponsored' ? t('level_central') : (scheme.state ?? t('level_state'))}</span>
          <span className="badge">{scheme.categoryTag}</span>
        </div>
        {result && <ScoreBar score={result.matchScore} />}
      </div>
      <h3 className="font-display mt-3 text-lg font-bold leading-snug">
        <Link href={`/scheme/${scheme.id}`} className="hover:underline">{scheme.name}</Link>
      </h3>
      <p className="mt-1 text-xs font-medium text-[var(--ink-3)]">{scheme.ministry}</p>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--ink-2)]">{scheme.description}</p>
      {result && (
        <p className="mt-3 border-l-2 border-[var(--red)] pl-3 text-[13px] leading-relaxed text-[var(--ink-2)]">{result.whyItMatches}</p>
      )}
      <div className="mt-3 flex items-center justify-between gap-2 text-[13px]">
        <span className="font-semibold">{scheme.benefitAmount ?? scheme.benefits[0]}</span>
        <span className="text-xs text-[var(--ink-3)]">{scheme.deadline ?? 'Ongoing'}</span>
      </div>
      <div className="hr mt-4 flex items-center justify-between gap-2 pt-3">
        <div className="flex gap-2">
          <Link href={`/scheme/${scheme.id}`} className="btn btn-secondary !px-3 !py-1.5 !text-xs">{t('view_details')}</Link>
          <button onClick={() => toggle(scheme.id)} aria-pressed={isSaved} className="btn btn-secondary !px-3 !py-1.5 !text-xs">
            {isSaved ? '✓ ' + t('detail_saved') : t('save')}
          </button>
        </div>
        <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-3 !py-1.5 !text-xs">{t('apply')} ↗</a>
      </div>
    </article>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="card fade-in px-6 py-12 text-center">
      <p className="font-display text-xl font-bold">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-[var(--ink-2)]">{body}</p>
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </div>
  );
}

export function PageHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-2)]">{sub}</p>
    </div>
  );
}
