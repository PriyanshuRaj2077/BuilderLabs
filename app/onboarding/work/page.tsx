'use client';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { useLang } from '@/lib/i18n/context';
import { useProfile } from '@/lib/profile';
import type { EducationLevel, Occupation } from '@/lib/types';

const OCCS: Occupation[] = ['student','farmer','entrepreneur','job_seeker','unemployed','worker','artisan','self_employed','senior_citizen','homemaker'];
const EDUS: EducationLevel[] = ['none','primary','secondary','higher_secondary','diploma','undergraduate','postgraduate','doctorate'];

export default function WorkStep() {
  const { t } = useLang();
  const { profile, setProfile, ready } = useProfile();
  if (!ready) return <PageShell><div className="page-shell py-16"><p className="text-sm">{t('common_loading')}</p></div></PageShell>;
  const set = (patch: Partial<typeof profile>) => setProfile({ ...profile, ...patch });
  return (
    <PageShell>
      <div className="page-shell max-w-2xl py-10">
        <h1 className="font-display text-3xl font-bold">{t('onboarding_title')}</h1>
        <p className="mt-2 text-sm text-[var(--ink-2)]">{t('onboarding_sub')}</p>
        <p className="mt-4 text-xs font-bold text-[var(--ink-2)]">{t('onboarding_step')} 2 / 3</p>
        <div className="card mt-6 grid gap-4 p-6 sm:grid-cols-2">
          <div><label className="label" htmlFor="o">Occupation</label><select id="o" className="field" value={profile.occupation} onChange={(e) => set({ occupation: e.target.value as Occupation })}>{OCCS.map((o) => <option key={o} value={o}>{o.replaceAll('_',' ')}</option>)}</select></div>
          <div><label className="label" htmlFor="e">Education</label><select id="e" className="field" value={profile.education} onChange={(e) => set({ education: e.target.value as EducationLevel })}>{EDUS.map((x) => <option key={x} value={x}>{x.replaceAll('_',' ')}</option>)}</select></div>
          <div><label className="label" htmlFor="i">Annual family income (Rs)</label><input id="i" className="field" type="number" min={0} step={10000} value={profile.annualIncome} onChange={(e) => set({ annualIncome: Number(e.target.value) || 0 })} /></div>
          <div className="flex items-end gap-5 pb-2 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" checked={profile.isRural} onChange={(e) => set({ isRural: e.target.checked })} /> Rural</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={profile.hasDisability} onChange={(e) => set({ hasDisability: e.target.checked })} /> Disability</label>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <Link href="/onboarding" className="btn btn-secondary">{t('onboarding_back')}</Link>
          <Link href="/onboarding/interests" className="btn btn-primary">{t('onboarding_next')}</Link>
        </div>
      </div>
    </PageShell>
  );
}
