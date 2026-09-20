'use client';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="page-shell grid gap-16 py-24 sm:py-28 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-24">
        <div className="max-w-xs">
          <p className="font-display text-2xl font-bold tracking-tight">{t('brand')}</p>
          <p className="mt-3 text-xs font-medium tracking-wide opacity-80">{t('brandSub')}</p>
          <p className="mt-8 text-sm leading-8 opacity-80">{t('footer_tag')}</p>
        </div>
        <nav aria-label={t('footer_nav')}>
          <p className="footer-heading">{t('footer_explore')}</p>
          <ul className="mt-8 space-y-3 text-sm">
            <li><Link className="footer-link hover:underline" href="/dashboard">{t('nav_dashboard')}</Link></li>
            <li><Link className="footer-link hover:underline" href="/search">{t('nav_schemes')}</Link></li>
            <li><Link className="footer-link hover:underline" href="/saved">{t('nav_saved')}</Link></li>
            <li><Link className="footer-link hover:underline" href="/onboarding">{t('nav_profile')}</Link></li>
          </ul>
        </nav>
        <nav aria-label={t('footer_help')}>
          <p className="footer-heading">{t('footer_help')}</p>
          <ul className="mt-8 space-y-3 text-sm">
            <li><Link className="footer-link hover:underline" href="/how-it-works">{t('nav_how')}</Link></li>
            <li><Link className="footer-link hover:underline" href="/about">{t('nav_about')}</Link></li>
            <li><Link className="footer-link hover:underline" href="/auth">{t('nav_signin')}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="page-shell flex flex-col gap-4 py-10 text-xs leading-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <p className="max-w-2xl">{t('footer_contact')}</p>
          <p className="shrink-0">© {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
