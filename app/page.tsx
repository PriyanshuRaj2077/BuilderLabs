'use client';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { HeroTitle } from '@/components/ui/HeroTitle';
import { Reveal } from '@/components/ui/Reveal';
import { SchemeCard } from '@/components/ui/SchemeCard';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { useLang } from '@/lib/i18n/context';

export default function HomePage() {
  const { t } = useLang();
  const popular = SEED_SCHEMES.filter((s) => s.isPopular).slice(0, 6);

  return (
    <PageShell>
      <section className="hero">
        <div aria-hidden className="hero-shape" />
        <div className="page-shell section mx-auto max-w-3xl text-center">
          <h1 className="font-display entrance text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            <HeroTitle />
          </h1>
          <p className="entrance entrance-1 mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-2)] sm:text-lg">{t('hero_sub')}</p>
          <div className="entrance entrance-2 mt-10 flex justify-center">
            <Link href="/auth" className="btn btn-primary min-w-[12rem] !px-8 !py-4 !text-base">{t('nav_signin')}</Link>
          </div>
        </div>
      </section>

      <section className="page-shell section">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">{t('home_schemes_t')}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)] sm:text-[15px]">{t('home_schemes_d')}</p>
            </div>
            <Link href="/search" className="btn btn-secondary !min-h-[2.75rem] !text-sm">{t('hero_cta2')}</Link>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {popular.map((s) => (
            <SchemeCard key={s.id} scheme={s} />
          ))}
        </div>
      </section>

      <section className="page-shell section-tail">
        <Reveal>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[t('how1_t'), t('how2_t'), t('how3_t')].map((title, i) => (
              <div key={title} className="card flex h-full flex-col">
                <p className="font-display text-lg font-bold leading-snug">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)]">{[t('how1_d'), t('how2_d'), t('how3_d')][i]}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="card mt-10 flex flex-col items-start justify-between gap-8 bg-[var(--surface-2)] sm:mt-12 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl font-bold leading-snug">{t('home_cta_t')}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)]">{t('home_cta_d')}</p>
            </div>
            <Link href="/onboarding" className="btn btn-primary min-w-[11rem] shrink-0">{t('home_cta_btn')}</Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
