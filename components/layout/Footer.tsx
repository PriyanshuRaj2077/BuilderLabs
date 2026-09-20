'use client';
import Link from 'next/link';
import { useLang } from '@/lib/i18n/context';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--red)] text-white text-sm font-bold">सू</span>
            <span className="font-display text-lg font-bold">{t('brand')}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-[var(--ink-2)]">{t('footer_tag')}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">{t('footer_explore')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/dashboard">{t('nav_dashboard')}</Link></li>
            <li><Link className="hover:underline" href="/search">{t('nav_schemes')}</Link></li>
            <li><Link className="hover:underline" href="/saved">{t('nav_saved')}</Link></li>
            <li><Link className="hover:underline" href="/onboarding">{t('nav_profile')}</Link></li>
          </ul>
        </nav>
        <nav aria-label="Help">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">{t('footer_help')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/how-it-works">{t('nav_how')}</Link></li>
            <li><Link className="hover:underline" href="/about">{t('nav_about')}</Link></li>
            <li><Link className="hover:underline" href="/auth">{t('nav_signin')}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="page-shell py-4 text-xs text-[var(--ink-3)] space-y-1">
          <p>{t('footer_contact')}</p>
          <p>© {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
