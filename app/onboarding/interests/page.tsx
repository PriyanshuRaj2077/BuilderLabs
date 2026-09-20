'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { rankSchemesForProfile } from '@/lib/matching';
import { useLang } from '@/lib/i18n/context';
import { categoryLabel, stateLabel } from '@/lib/i18n/labels';
import { useProfile } from '@/lib/profile';

const TAGS = [
  { v: 'Education', l: 'int_education' },
  { v: 'Farming', l: 'int_farming' },
  { v: 'Business', l: 'int_business' },
  { v: 'Health', l: 'int_health' },
  { v: 'Housing', l: 'int_housing' },
  { v: 'Women & Child', l: 'int_women' },
  { v: 'Skills & Jobs', l: 'int_skills' },
  { v: 'Social Welfare', l: 'int_welfare' },
] as const;

export default function InterestsStep() {
  const { t } = useLang();
  const { profile, setProfile, ready } = useProfile();
  const matches = useMemo(() => rankSchemesForProfile(SEED_SCHEMES, profile).filter((r) => r.isEligible).length, [profile]);
  if (!ready) return <PageShell><div className="page-shell py-16"><p className="text-sm">{t('common_loading')}</p></div></PageShell>;
  return (
    <PageShell>
      <div className="page-shell section-tail max-w-2xl py-12 sm:py-16">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">{t('onboarding_title')}</h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)] sm:text-[15px]">{t('onboarding_sub')}</p>
        <p className="mt-6 text-xs font-bold text-[var(--ink-2)]">{t('onboarding_step')} 3 / 3 · <span className="badge badge-red">{matches} {t('onboarding_matches')}</span></p>
        <div className="card mt-8">
          <p className="label">{t('ob_interests')}</p>
          <div className="flex flex-wrap gap-2.5">
            {TAGS.map((tag) => {
              const on = profile.interests.includes(tag.v);
              return <button key={tag.v} type="button" aria-pressed={on} onClick={() => setProfile({ ...profile, interests: on ? profile.interests.filter((x) => x !== tag.v) : [...profile.interests, tag.v] })} className={`badge !px-4 !py-2.5 cursor-pointer ${on ? 'badge-red' : ''}`}>{on ? '✓ ' : ''}{t(tag.l)}</button>;
            })}
          </div>
          <div className="card mt-8 !bg-[var(--surface-2)] p-5 text-sm">
            <p className="font-bold">{profile.name || t('ob_you')} · {profile.age} · {stateLabel(t, profile.state)}</p>
            <p className="mt-2 leading-relaxed text-[var(--ink-2)]">{categoryLabel(t, profile.category)} · {( { student: t('o_student'), farmer: t('o_farmer'), entrepreneur: t('o_entrepreneur'), job_seeker: t('o_job'), unemployed: t('o_unemployed'), worker: t('o_worker'), artisan: t('o_artisan'), self_employed: t('o_self'), senior_citizen: t('o_senior'), homemaker: t('o_homemaker') } as Record<string, string>)[profile.occupation] ?? profile.occupation} · Rs {profile.annualIncome.toLocaleString('en-IN')}{t('ob_per_year')}</p>
          </div>
          <div className="hr mt-8 flex items-center justify-between gap-3 pt-6">
            <Link href="/onboarding/work" className="btn btn-secondary">{t('onboarding_back')}</Link>
            <Link href="/dashboard" className="btn btn-primary">{t('onboarding_finish')} ({matches})</Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
