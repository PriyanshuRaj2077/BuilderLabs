'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { useLang } from '@/lib/i18n/context';
import { useProfile } from '@/lib/profile';
import type { Category, Gender, IndianState } from '@/lib/types';

const STATES: IndianState[] = ['All India','Andhra Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Odisha','Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh','Uttarakhand','West Bengal','Jammu and Kashmir','Ladakh'];
const CATS: Category[] = ['General','OBC','SC','ST','EWS','Minority','All'];
const GENDERS: Gender[] = ['male','female','transgender','all'];

export default function OnboardingStep1() {
  return <Step step={1} />;
}

export function Step({ step }: { step: number }) {
  const { t } = useLang();
  const { profile, setProfile, ready } = useProfile();
  const [error, setError] = useState('');
  if (!ready) return <PageShell><div className="page-shell py-16"><p className="text-sm">{t('common_loading')}</p></div></PageShell>;
  const set = (patch: Partial<typeof profile>) => setProfile({ ...profile, ...patch });
  const valid = profile.name.trim().length > 0 && profile.age > 0;
  return (
    <PageShell>
      <div className="page-shell max-w-2xl py-10">
        <h1 className="font-display text-3xl font-bold">{t('onboarding_title')}</h1>
        <p className="mt-2 text-sm text-[var(--ink-2)]">{t('onboarding_sub')}</p>
        <p className="mt-4 text-xs font-bold text-[var(--ink-2)]">{t('onboarding_step')} {step} / 3</p>
        <div className="card mt-6 grid gap-4 p-6 sm:grid-cols-2">
          {error && <p role="alert" className="sm:col-span-2 rounded-md bg-[var(--red-soft)] px-3 py-2 text-sm text-[var(--red)]">{error}</p>}
          <div className="sm:col-span-2"><label className="label" htmlFor="n">Name</label><input id="n" className="field" value={profile.name} onChange={(e) => set({ name: e.target.value })} placeholder="e.g. Priya Sharma" autoComplete="name" /></div>
          <div><label className="label" htmlFor="a">Age</label><input id="a" className="field" type="number" min={1} max={110} value={profile.age} onChange={(e) => set({ age: Number(e.target.value) || 0 })} /></div>
          <div><label className="label" htmlFor="g">Gender</label><select id="g" className="field" value={profile.gender} onChange={(e) => set({ gender: e.target.value as Gender })}>{GENDERS.map((g) => <option key={g} value={g}>{g}</option>)}</select></div>
          <div><label className="label" htmlFor="s">State</label><select id="s" className="field" value={profile.state} onChange={(e) => set({ state: e.target.value as IndianState })}>{STATES.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
          <div><label className="label" htmlFor="c">Category</label><select id="c" className="field" value={profile.category} onChange={(e) => set({ category: e.target.value as Category })}>{CATS.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
        </div>
        <div className="mt-4 flex justify-between">
          <Link href="/dashboard" className="btn btn-secondary">Skip</Link>
          <Link href="/onboarding/work" onClick={(e) => { if (!valid) { e.preventDefault(); setError('Please enter your name and age.'); } }} className="btn btn-primary">{t('onboarding_next')}</Link>
        </div>
      </div>
    </PageShell>
  );
}
