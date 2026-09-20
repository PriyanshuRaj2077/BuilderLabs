'use client';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { useLang } from '@/lib/i18n/context';
import { useProfile } from '@/lib/profile';
import type { EducationLevel, Occupation } from '@/lib/types';

export default function WorkStep() {
  const { t } = useLang();
  const { profile, setProfile, ready } = useProfile();
  if (!ready) return <PageShell><div className="page-shell py-16"><p className="text-sm">{t('common_loading')}</p></div></PageShell>;
  const set = (patch: Partial<typeof profile>) => setProfile({ ...profile, ...patch });
  const occs: Array<{ v: Occupation; l: string }> = [
    { v: 'student', l: t('o_student') },
    { v: 'farmer', l: t('o_farmer') },
    { v: 'entrepreneur', l: t('o_entrepreneur') },
    { v: 'job_seeker', l: t('o_job') },
    { v: 'unemployed', l: t('o_unemployed') },
    { v: 'worker', l: t('o_worker') },
    { v: 'artisan', l: t('o_artisan') },
    { v: 'self_employed', l: t('o_self') },
    { v: 'senior_citizen', l: t('o_senior') },
    { v: 'homemaker', l: t('o_homemaker') },
  ];
  const edus: Array<{ v: EducationLevel; l: string }> = [
    { v: 'none', l: t('e_none') },
    { v: 'primary', l: t('e_primary') },
    { v: 'secondary', l: t('e_secondary') },
    { v: 'higher_secondary', l: t('e_higher') },
    { v: 'diploma', l: t('e_diploma') },
    { v: 'undergraduate', l: t('e_ug') },
    { v: 'postgraduate', l: t('e_pg') },
    { v: 'doctorate', l: t('e_doc') },
  ];
  return (
    <PageShell>
      <div className="page-shell section-tail max-w-2xl py-12 sm:py-16">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">{t('onboarding_title')}</h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)] sm:text-[15px]">{t('onboarding_sub')}</p>
        <p className="mt-6 text-xs font-bold text-[var(--ink-2)]">{t('onboarding_step')} 2 / 3</p>
        <div className="card mt-8 grid gap-6 sm:grid-cols-2">
          <div><label className="label" htmlFor="o">{t('ob_occupation')}</label><select id="o" className="field" value={profile.occupation} onChange={(e) => set({ occupation: e.target.value as Occupation })}>{occs.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}</select></div>
          <div><label className="label" htmlFor="e">{t('ob_education')}</label><select id="e" className="field" value={profile.education} onChange={(e) => set({ education: e.target.value as EducationLevel })}>{edus.map((x) => <option key={x.v} value={x.v}>{x.l}</option>)}</select></div>
          <div><label className="label" htmlFor="i">{t('ob_income')}</label><input id="i" className="field" type="number" min={0} step={10000} value={profile.annualIncome} onChange={(e) => set({ annualIncome: Number(e.target.value) || 0 })} /></div>
          <div className="flex items-end gap-6 pb-2 text-sm">
            <label className="flex min-h-[3rem] items-center gap-2.5"><input type="checkbox" checked={profile.isRural} onChange={(e) => set({ isRural: e.target.checked })} /> {t('ob_rural')}</label>
            <label className="flex min-h-[3rem] items-center gap-2.5"><input type="checkbox" checked={profile.hasDisability} onChange={(e) => set({ hasDisability: e.target.checked })} /> {t('ob_disability')}</label>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between gap-3">
          <Link href="/onboarding" className="btn btn-secondary">{t('onboarding_back')}</Link>
          <Link href="/onboarding/interests" className="btn btn-primary">{t('onboarding_next')}</Link>
        </div>
      </div>
    </PageShell>
  );
}
