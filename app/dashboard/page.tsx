'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { EmptyState, PageHeader, SchemeCard } from '@/components/ui/SchemeCard';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { rankSchemesForProfile } from '@/lib/matching';
import { useLang } from '@/lib/i18n/context';
import { useAuthUser } from '@/lib/auth';
import { sectorLabel, stateLabel } from '@/lib/i18n/labels';
import { useProfile } from '@/lib/profile';

const PAGE = 6;

export default function DashboardPage() {
  const { t } = useLang();
  const { profile, ready, hasProfile } = useProfile();
  const { user, loading: authLoading } = useAuthUser();
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

  const occLabel = (o: string) => {
    const map: Record<string, string> = {
      student: t('o_student'),
      farmer: t('o_farmer'),
      entrepreneur: t('o_entrepreneur'),
      job_seeker: t('o_job'),
      unemployed: t('o_unemployed'),
      worker: t('o_worker'),
      artisan: t('o_artisan'),
      self_employed: t('o_self'),
      senior_citizen: t('o_senior'),
      homemaker: t('o_homemaker'),
    };
    return map[o] ?? o.replaceAll('_', ' ');
  };

  const visible = showAll ? filtered : filtered.slice(0, PAGE);
  // Personal matches only exist when the visitor has a real profile or a
  // signed in account. Otherwise show an honest empty state, never defaults.
  const hasPersonalData = Boolean(user) || hasProfile;
  const loading = !ready || authLoading;

  return (
    <PageShell>
      <div className="page-shell section-tail py-12 sm:py-16">
        {loading ? (
          <p className="text-sm">{t('common_loading')}</p>
        ) : !hasPersonalData ? (
          <EmptyState
            title={t('dash_guest_t')}
            body={t('dash_guest_d')}
            action={
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/onboarding" className="btn btn-primary">{t('dash_create_profile')}</Link>
                <Link href="/auth" className="btn btn-secondary">{t('nav_signin')}</Link>
              </div>
            }
          />
        ) : (
          <>
            <div className="card flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">{profile.name || t('ob_you')} · {stateLabel(t, profile.state)} · {occLabel(profile.occupation)}</p>
                <p className="font-display mt-3 text-2xl font-bold sm:text-3xl">{eligibleCount} {t('dash_matched')} {t('dash_of')} {ranked.length}</p>
              </div>
              <Link href="/onboarding" className="btn btn-secondary shrink-0">{t('dash_edit')}</Link>
            </div>

            <div className="mt-12 sm:mt-16"><PageHeader title={t('dash_title')} sub={t('dash_sub')} /></div>

            <div className="card mb-8 flex flex-col gap-5 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <span aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ink-3)]">⌕</span>
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('dash_search_ph')} aria-label={t('search_label')} className="field !pl-11" />
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {(['all','central','state'] as const).map((l) => (
                  <button key={l} onClick={() => setLevel(l)} aria-pressed={level === l} className={`badge cursor-pointer !px-4 !py-2.5 ${level === l ? 'badge-red' : ''}`}>
                    {l === 'all' ? t('dash_all') : l === 'central' ? t('dash_central') : t('dash_state')}
                  </button>
                ))}
                <select value={cat} onChange={(e) => setCat(e.target.value)} className="field !w-auto" aria-label={t('ob_category')}>
                  <option value="all">{t('all_sectors')}</option>
                  {cats.map((c) => <option key={c} value={c}>{sectorLabel(t, c)}</option>)}
                </select>
                <label className="flex min-h-[3rem] items-center gap-2.5 text-xs font-semibold"><input type="checkbox" checked={eligibleOnly} onChange={(e) => setEligibleOnly(e.target.checked)} /> {t('dash_eligible_only')}</label>
              </div>
            </div>

            {filtered.length === 0 ? (
              <EmptyState title={t('dash_empty_t')} body={t('dash_empty_d')} action={<button className="btn btn-secondary" onClick={() => { setQ(''); setCat('all'); setLevel('all'); setEligibleOnly(false); }}>{t('dash_clear')}</button>} />
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                  {visible.map((r) => <SchemeCard key={r.scheme.id} scheme={r.scheme} result={r} />)}
                </div>
                {filtered.length > PAGE && (
                  <div className="mt-10 text-center sm:mt-12">
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
