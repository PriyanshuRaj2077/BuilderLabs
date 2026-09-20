'use client';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { useLang } from '@/lib/i18n/context';

export default function AboutPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="page-shell section-tail max-w-3xl py-12 sm:py-16">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">{t('about_title')}</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-2)]">{t('about_sub')}</p>
        <div className="card mt-10 space-y-5 text-sm leading-relaxed text-[var(--ink-2)] sm:text-[15px]">
          <p>{t('about_body1')}</p>
          <p>{t('about_body2')}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/onboarding" className="btn btn-primary">{t('hero_cta1')}</Link>
          <Link href="/how-it-works" className="btn btn-secondary">{t('nav_how')}</Link>
        </div>
      </div>
    </PageShell>
  );
}
