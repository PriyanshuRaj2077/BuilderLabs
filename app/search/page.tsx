'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { EmptyState, PageHeader, SchemeCard } from '@/components/ui/SchemeCard';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { useLang } from '@/lib/i18n/context';
import { sectorLabel } from '@/lib/i18n/labels';

export default function SearchPage() {
  const { t } = useLang();
  const [q, setQ] = useState('');
  const [level, setLevel] = useState('all');
  const [cat, setCat] = useState('all');
  const cats = useMemo(() => Array.from(new Set(SEED_SCHEMES.map((s) => s.categoryTag))), []);

  const filtered = SEED_SCHEMES.filter((s) => {
    if (q.trim()) {
      const needle = q.toLowerCase();
      const hay = `${s.name} ${s.nameHindi ?? ''} ${s.description} ${s.ministry}`.toLowerCase();
      if (!hay.includes(needle)) return false;
    }
    if (level !== 'all') {
      const central = s.level === 'central' || s.level === 'centrally_sponsored';
      if (level === 'central' && !central) return false;
      if (level === 'state' && central) return false;
    }
    if (cat !== 'all' && s.categoryTag !== cat) return false;
    return true;
  });

  return (
    <PageShell>
      <div className="page-shell section-tail py-12 sm:py-16">
        <PageHeader title={t('search_title')} sub={t('search_sub')} />
        <div className="card mb-8 flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <span aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ink-3)]">⌕</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('search_placeholder')} aria-label={t('search_label')} className="field !pl-11" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="field !w-auto" aria-label={t('filter_level')}>
              <option value="all">{t('dash_all')}</option>
              <option value="central">{t('dash_central')}</option>
              <option value="state">{t('dash_state')}</option>
            </select>
            <select value={cat} onChange={(e) => setCat(e.target.value)} className="field !w-auto" aria-label={t('filter_sector')}>
              <option value="all">{t('all_sectors')}</option>
              {cats.map((c) => <option key={c} value={c}>{sectorLabel(t, c)}</option>)}
            </select>
          </div>
        </div>
        <p className="mb-6 text-xs font-semibold text-[var(--ink-3)]" role="status">{filtered.length} {t('search_results')}</p>
        {filtered.length === 0 ? (
          <EmptyState title={t('search_empty_t')} body={t('search_empty_d')} action={<button className="btn btn-secondary" onClick={() => { setQ(''); setLevel('all'); setCat('all'); }}>{t('dash_clear')}</button>} />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filtered.map((s) => <SchemeCard key={s.id} scheme={s} />)}
          </div>
        )}
        <div className="card mt-12 text-sm leading-relaxed text-[var(--ink-2)]">
          <p>{t('search_ranked_q')} <Link href="/onboarding" className="font-semibold text-[var(--red)] hover:underline">{t('hero_cta1')}</Link></p>
        </div>
      </div>
    </PageShell>
  );
}
