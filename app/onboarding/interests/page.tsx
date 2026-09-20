'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { rankSchemesForProfile } from '@/lib/matching';
import { useLang } from '@/lib/i18n/context';
import { useProfile } from '@/lib/profile';

const TAGS = ['Education','Farming','Business','Health','Housing','Women & Child','Skills & Jobs','Social Welfare'];

export default function InterestsStep() {
  const { t } = useLang();
  const { profile, setProfile, ready } = useProfile();
  const matches = useMemo(() => rankSchemesForProfile(SEED_SCHEMES, profile).filter((r) => r.isEligible).length, [profile]);
  if (!ready) return <PageShell><div className="page-shell py-16"><p className="text-sm">{t('common_loading')}</p></div></PageShell>;
  return (
    <PageShell>
      <div className="page-shell max-w-2xl py-10">
        <h1 className="font-display text-3xl font-bold">{t('onboarding_title')}</h1>
        <p className="mt-2 text-sm text-[var(--ink-2)]">{t('onboarding_sub')}</p>
        <p className="mt-4 text-xs font-bold text-[var(--ink-2)]">{t('onboarding_step')} 3 / 3 · <span className="badge badge-red">{matches} {t('onboarding_matches')}</span></p>
        <div className="card mt-6 p-6">
          <p className="label">Interests (pick any)</p>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => {
              const on = profile.interests.includes(tag);
              return <button key={tag} type="button" aria-pressed={on} onClick={() => setProfile({ ...profile, interests: on ? profile.interests.filter((x) => x !== tag) : [...profile.interests, tag] })} className={`badge !px-3 !py-2 cursor-pointer ${on ? 'badge-red' : ''}`}>{on ? '✓ ' : ''}{tag}</button>;
            })}
          </div>
          <div className="card mt-5 !bg-[var(--surface-2)] p-4 text-sm">
            <p className="font-bold">{profile.name || 'Your profile'} · {profile.age} · {profile.state}</p>
            <p className="mt-1 text-[var(--ink-2)]">{profile.category} · {profile.occupation.replaceAll('_',' ')} · Rs {profile.annualIncome.toLocaleString('en-IN')}/yr</p>
          </div>
          <div className="hr mt-5 flex items-center justify-between pt-4">
            <Link href="/onboarding/work" className="btn btn-secondary">{t('onboarding_back')}</Link>
            <Link href="/dashboard" className="btn btn-primary">{t('onboarding_finish')} ({matches})</Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
