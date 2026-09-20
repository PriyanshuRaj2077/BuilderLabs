'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { EmptyState, PageHeader, SchemeCard } from '@/components/ui/SchemeCard';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { rankSchemesForProfile } from '@/lib/matching';
import { useLang } from '@/lib/i18n/context';
import { useProfile } from '@/lib/profile';

const PAGE = 6;

export default function DashboardPage() {
  const { t } = useLang();
  const { profile, ready } = useProfile();
  const [q, setQ] = useState('');
  const [level, setLevel] = useState<'all' | 'central' | 'state'>('all');
  const [cat, setCat] = useState('all');
  const [eligibleOnly, setEligibleOnly] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const ranked = useMemo(() => rankSchemesForProfile(SEED_SCHEMES, profile), [profile]);
  const cats = useMemo(() => Array.from(new Set(SEED_SCHEMES.map((s) => s.categoryTag))), []);
  const eligibleCount = ranked.filter((r) => r.isEligible).length;

  const filtered = ranked.filter((r) => {
    const s = r.scheme;
    if (q.trim()) {
      const needle = q.toLowerCase();
      const hay = `${s.name} ${s.description} ${s.ministry}`.toLowerCase();
      if (!hay.includes(needle)) return false;
    }
    if (level !== 'all') {
      const isCentral = s.level === 'central' || s.level === 'centrally_sponsored';
      if (level === 'central' && !isCentral) return false;
      if (level === 'state' && isCentral) return false;
    }
    if (cat !== 'all' && s.categoryTag !== cat) return false;
    if (eligibleOnly && !r.isEligible) return false;
    return true;
  });

  const visible = showAll ? filtered : filtered.slice(0, PAGE);

  return (
    <PageShell>
      <div className="page-shell py-10">
        {!ready ? (
          <p className="text-sm">{t('common_loading')}</p>
        ) : (
          <>
            <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between" style={{ borderLeft: '4px solid var(--red)' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">{profile.name || 'Your profile'} · {profile.state} · {profile.occupation.replaceAll('_',' ')}</p>
                <p className="font-display mt-1 text-2xl font-bold">{eligibleCount} {t('dash_matched')} {t('dash_of')} {ranked.length}</p>
                <p className="mt-1 text-sm text-[var(--ink-2)]">{t('dash_sub')}</p>
              </div>
              <Link href="/onboarding" className="btn btn-secondary shrink-0">{t('dash_edit')}</Link>
            </div>

            <div className="mt-8"><PageHeader title={t('dash_title')} sub={t('dash_sub')} /></div>

            <div className="card mb-5 flex flex-col gap-3 p-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <span aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-3)]">⌕</span>
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('dash_search_ph')} aria-label={t('search_label')} className="field !pl-9" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {(['all','central','state'] as const).map((l) => (
                  <button key={l} onClick={() => setLevel(l)} aria-pressed={level === l} className={`badge cursor-pointer !py-2 !px-3 ${level === l ? 'badge-red' : ''}`}>
                    {l === 'all' ? t('dash_all') : l === 'central' ? t('dash_central') : t('dash_state')}
                  </button>
                ))}
                <select value={cat} onChange={(e) => setCat(e.target.value)} className="field !w-auto" aria-label="Category">
                  <option value="all">All sectors</option>
                  {cats.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <label className="flex items-center gap-2 text-xs font-semibold"><input type="checkbox" checked={eligibleOnly} onChange={(e) => setEligibleOnly(e.target.checked)} /> {t('dash_eligible_only')}</label>
              </div>
            </div>

            {filtered.length === 0 ? (
              <EmptyState title={t('dash_empty_t')} body={t('dash_empty_d')} action={<button className="btn btn-secondary" onClick={() => { setQ(''); setCat('all'); setLevel('all'); setEligibleOnly(false); }}>{t('dash_clear')}</button>} />
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  {visible.map((r) => <SchemeCard key={r.scheme.id} scheme={r.scheme} result={r} />)}
                </div>
                {filtered.length > PAGE && (
                  <div className="mt-6 text-center">
                    <button className="btn btn-secondary" onClick={() => setShowAll(!showAll)}>{showAll ? t('dash_show_less') : `${t('dash_show_more')} (${filtered.length})`}</button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </PageShell>
  );
}
