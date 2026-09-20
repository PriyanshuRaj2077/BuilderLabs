'use client';
import { useState } from 'react';
import type { Scheme, UserProfile } from '@/lib/types';
import type { AIExplanationResult } from '@/lib/gemini';

export function ExplainBox({ scheme, profile }: { scheme: Scheme; profile: UserProfile }) {
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

  return (
    <section className="card p-5" aria-live="polite">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-lg font-bold">Eligibility explanation</h2>
        {!open ? (
          <button className="btn btn-primary !text-xs" onClick={() => void load()}>Explain my eligibility</button>
        ) : (
          <span className="badge">{data?.source === 'gemini' ? 'AI explained' : 'Rules explained'}</span>
        )}
      </div>
      {open && (
        <div className="mt-4">
          {loading && <p className="text-sm text-[var(--ink-2)]">Checking your profile against the official rules...</p>}
          {error && (
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-[var(--red)]">{error}</p>
              <button className="btn btn-secondary !text-xs" onClick={retry}>Try again</button>
            </div>
          )}
          {data && (
            <div className="space-y-4 text-sm leading-relaxed">
              <p className="text-[var(--ink)]">{data.summary}</p>
              <div>
                <p className="label">What matches</p>
                <ul className="space-y-1.5">
                  {data.matchedPoints.map((m, i) => (
                    <li key={i} className="flex gap-2"><span aria-hidden className="font-bold text-[var(--ok)]">✓</span><span>{m}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label">Watch out for</p>
                <ul className="space-y-1.5">
                  {data.watchouts.map((m, i) => (
                    <li key={i} className="flex gap-2"><span aria-hidden>•</span><span className="text-[var(--ink-2)]">{m}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label">Next steps</p>
                <ol className="space-y-1.5">
                  {data.nextSteps.map((m, i) => (
                    <li key={i} className="flex gap-2"><span className="font-bold">{i + 1}.</span><span>{m}</span></li>
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
