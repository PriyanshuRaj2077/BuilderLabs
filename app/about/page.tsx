'use client';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { useLang } from '@/lib/i18n/context';

export default function AboutPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="page-shell max-w-3xl py-10">
        <h1 className="font-display text-3xl font-bold">{t('about_title')}</h1>
        <p className="mt-2 text-[15px] text-[var(--ink-2)]">{t('about_sub')}</p>
        <div className="card mt-6 space-y-4 p-6 text-sm leading-relaxed text-[var(--ink-2)]">
          <p>SoochAI reads the official eligibility rules for each scheme — state, category, occupation, income, age and deadlines — and ranks them for your profile. Facts such as benefit amounts and portal links always come from verified data, never from guesswork.</p>
          <p>Your profile stays in your browser by default. Sign in only if you want it synced across devices. Always confirm details and apply on the official government portal.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/onboarding" className="btn btn-primary">{t('hero_cta1')}</Link>
          <Link href="/how-it-works" className="btn btn-secondary">{t('nav_how')}</Link>
        </div>
      </div>
    </PageShell>
  );
}
