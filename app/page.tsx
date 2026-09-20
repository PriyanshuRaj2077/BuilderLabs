'use client';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SchemeCard } from '@/components/ui/SchemeCard';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { useLang } from '@/lib/i18n/context';

export default function HomePage() {
  const { t } = useLang();
  const popular = SEED_SCHEMES.filter((s) => s.isPopular).slice(0, 6);

  return (
    <PageShell>
      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="page-shell grid gap-10 py-12 md:grid-cols-2 md:py-16 items-center">
          <div>
            <p className="badge badge-red">{t('hero_badge')}</p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">{t('hero_title')}</h1>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--ink-2)]">{t('hero_sub')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/onboarding" className="btn btn-primary">{t('hero_cta1')}</Link>
              <Link href="/search" className="btn btn-secondary">{t('hero_cta2')}</Link>
            </div>
            <p className="mt-4 text-xs text-[var(--ink-3)]">{t('hero_note')}</p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-6">
              {[
                [t('hero_stat1_n'), t('hero_stat1_l')],
                [t('hero_stat2_n'), t('hero_stat2_l')],
                [t('hero_stat3_n'), t('hero_stat3_l')],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-bold">{n}</dt>
                  <dd className="text-xs text-[var(--ink-2)]">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card p-6">
            <p className="label">How matching works</p>
            <ol className="space-y-3 text-sm">
              {[
                ['State · 25%', 'Central schemes work everywhere; state schemes need domicile.'],
                ['Category · 20%', 'SC / ST / OBC / EWS / General targeting is checked first.'],
                ['Occupation · 20%', 'Student, farmer, entrepreneur and more.'],
                ['Income · 15%', 'Your income against the official ceiling.'],
                ['Age & more · 20%', 'Age, gender, deadlines and freshness.'],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-3 border-b border-[var(--line)] pb-3 last:border-0 last:pb-0">
                  <span className="badge badge-red shrink-0">{k}</span>
                  <span className="text-[var(--ink-2)]">{v}</span>
                </li>
              ))}
            </ol>
            <Link href="/how-it-works" className="btn btn-secondary mt-5 w-full">{t('nav_how')}</Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold">{t('home_schemes_t')}</h2>
            <p className="mt-1 text-sm text-[var(--ink-2)]">{t('home_schemes_d')}</p>
          </div>
          <Link href="/search" className="btn btn-secondary !text-xs">{t('hero_cta2')}</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popular.map((s) => (
            <SchemeCard key={s.id} scheme={s} />
          ))}
        </div>
      </section>

      <section className="page-shell pb-4">
        <div className="grid gap-6 md:grid-cols-3">
          {[t('how1_t'), t('how2_t'), t('how3_t')].map((title, i) => (
            <div key={title} className="card p-5">
              <p className="font-display text-lg font-bold">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">{[t('how1_d'), t('how2_d'), t('how3_d')][i]}</p>
            </div>
          ))}
        </div>
        <div className="card mt-6 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center" style={{ borderLeft: '4px solid var(--red)' }}>
          <div>
            <p className="font-display text-xl font-bold">{t('home_cta_t')}</p>
            <p className="mt-1 text-sm text-[var(--ink-2)]">{t('home_cta_d')}</p>
          </div>
          <Link href="/onboarding" className="btn btn-primary shrink-0">{t('home_cta_btn')}</Link>
        </div>
      </section>
    </PageShell>
  );
}
