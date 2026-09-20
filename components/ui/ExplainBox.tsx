'use client';
import { useState } from 'react';
import type { Scheme, UserProfile } from '@/lib/types';
import type { AIExplanationResult } from '@/lib/gemini';
import { useLang } from '@/lib/i18n/context';
import { useTranslatedList } from '@/lib/i18n/T';

export function ExplainBox({ scheme, profile }: { scheme: Scheme; profile: UserProfile }) {
  const { t } = useLang();
  const [data, setData] = useState<AIExplanationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  async function load() {
    setOpen(true);
    if (data || loading) return;
    setLoading(true);
    setError('');
    try {
      const r = await fetch(`/api/schemes/${scheme.id}/explain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || 'Failed');
      setData(j.explanation as AIExplanationResult);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed');
    } finally {
      setLoading(false);
    }
  }

  function retry() {
    setData(null);
    setError('');
    setLoading(false);
    setOpen(true);
    void load();
  }

  const aiTexts = data ? [data.summary, ...data.matchedPoints, ...data.watchouts, ...data.nextSteps] : [];
  const aiHi = useTranslatedList(aiTexts);
  const summary = aiHi[0] ?? data?.summary ?? '';
  const matched = aiHi.slice(1, 1 + (data?.matchedPoints.length ?? 0));
  const watch = aiHi.slice(1 + (data?.matchedPoints.length ?? 0), 1 + (data?.matchedPoints.length ?? 0) + (data?.watchouts.length ?? 0));
  const steps = aiHi.slice(1 + (data?.matchedPoints.length ?? 0) + (data?.watchouts.length ?? 0));

  return (
    <section className="card" aria-live="polite">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-lg font-bold">{t('explain_title')}</h2>
        {!open ? (
          <button className="btn btn-primary !min-h-[2.75rem] !text-sm" onClick={() => void load()}>{t('detail_explain')}</button>
        ) : (
          <span className="badge">{data?.source === 'gemini' ? t('explain_ai') : t('explain_rules')}</span>
        )}
      </div>
      {open && (
        <div className="mt-6">
          {loading && <p className="text-sm leading-relaxed text-[var(--ink-2)]">{t('explain_loading')}</p>}
          {error && (
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-[var(--red)]">{error}</p>
              <button className="btn btn-secondary !min-h-[2.75rem] !text-xs" onClick={retry}>{t('common_retry')}</button>
            </div>
          )}
          {data && (
            <div className="space-y-6 text-sm leading-relaxed">
              <p className="text-[var(--ink)]">{summary}</p>
              <div>
                <p className="label">{t('explain_matches')}</p>
                <ul className="space-y-2">
                  {matched.map((m, i) => (
                    <li key={i} className="flex gap-2.5"><span aria-hidden className="font-bold text-[var(--ok)]">✓</span><span>{m}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label">{t('explain_watch')}</p>
                <ul className="space-y-2">
                  {watch.map((m, i) => (
                    <li key={i} className="flex gap-2.5"><span aria-hidden>•</span><span className="text-[var(--ink-2)]">{m}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label">{t('explain_steps')}</p>
                <ol className="space-y-2">
                  {steps.map((m, i) => (
                    <li key={i} className="flex gap-2.5"><span className="font-bold">{i + 1}.</span><span>{m}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
