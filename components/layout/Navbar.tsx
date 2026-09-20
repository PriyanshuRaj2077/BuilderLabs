'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLang } from '@/lib/i18n/context';
import { useTheme } from '@/lib/theme/context';

function Brand() {
  const { t } = useLang();
  return (
    <Link href="/" className="shrink-0 leading-tight" aria-label={t('brand')}>
      <span className="font-display block whitespace-nowrap text-[19px] font-bold tracking-tight">{t('brand')}</span>
      <span className="block whitespace-nowrap text-[11px] font-medium text-[var(--ink-3)]">{t('brandSub')}</span>
    </Link>
  );
}

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: t('nav_home') },
    { href: '/dashboard', label: t('nav_dashboard') },
    { href: '/search', label: t('nav_schemes') },
    { href: '/saved', label: t('nav_saved') },
    { href: '/how-it-works', label: t('nav_how') },
    { href: '/about', label: t('nav_about') },
  ];
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'));

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur">
      <div className="page-shell flex min-h-[4.5rem] items-center gap-4 py-3">
        <Brand />
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex" aria-label={t('nav_main')}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className="nav-link whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-[var(--ink-2)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <div className="hidden items-center rounded-md border border-[var(--line)] p-0.5 text-xs font-semibold sm:flex" role="group" aria-label={t('nav_lang')}>
            <button onClick={() => setLang('en')} aria-pressed={lang === 'en'} className={`rounded px-2.5 py-1.5 ${lang === 'en' ? 'bg-[var(--ink)] text-[var(--bg)]' : 'text-[var(--ink-2)]'}`}>EN</button>
            <button onClick={() => setLang('hi')} aria-pressed={lang === 'hi'} className={`rounded px-2.5 py-1.5 ${lang === 'hi' ? 'bg-[var(--ink)] text-[var(--bg)]' : 'text-[var(--ink-2)]'}`}>हिंदी</button>
          </div>
          <button onClick={toggle} className="btn btn-secondary !min-h-[2.75rem] !px-3 !py-2" aria-label={theme === 'dark' ? t('theme_light') : t('theme_dark')}>
            <span aria-hidden>{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
          <button onClick={() => setOpen(!open)} className="btn btn-secondary lg:hidden !min-h-[2.75rem] !px-3" aria-expanded={open} aria-label={open ? t('menu_close') : t('menu_open')}>
            <span aria-hidden>{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-[var(--line)] bg-[var(--bg)]" aria-label={t('nav_mobile')}>
          <div className="page-shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? 'page' : undefined} className={`whitespace-nowrap rounded-md px-3 py-3 text-sm font-medium ${isActive(l.href) ? 'bg-[var(--surface-2)] text-[var(--ink)]' : 'text-[var(--ink-2)]'}`}>
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-3 sm:hidden">
              <span className="text-xs text-[var(--ink-3)]">{t('nav_lang')}:</span>
              <button onClick={() => setLang('en')} className={`btn btn-secondary !min-h-[2.75rem] !py-1.5 ${lang === 'en' ? '!border-[var(--red)]' : ''}`}>{t('lang_english')}</button>
              <button onClick={() => setLang('hi')} className={`btn btn-secondary !min-h-[2.75rem] !py-1.5 ${lang === 'hi' ? '!border-[var(--red)]' : ''}`}>{t('lang_hindi')}</button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
