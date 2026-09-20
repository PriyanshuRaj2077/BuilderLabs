'use client';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { useLang } from '@/lib/i18n/context';

export default function HowItWorksPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <div className="page-shell py-10">
        <h1 className="font-display text-3xl font-bold">{t('how_title')}</h1>
        <p className="mt-2 text-[15px] text-[var(--ink-2)]">{t('how_sub')}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[[t('how1_t'), t('how1_d')], [t('how2_t'), t('how2_d')], [t('how3_t'), t('how3_d')]].map(([title, body]) => (
            <div key={title} className="card p-6">
              <p className="font-display text-lg font-bold">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/onboarding" className="btn btn-primary">{t('hero_cta1')}</Link>
          <Link href="/search" className="btn btn-secondary">{t('hero_cta2')}</Link>
        </div>
      </div>
    </PageShell>
  );
}
