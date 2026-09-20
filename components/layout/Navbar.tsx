'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLang } from '@/lib/i18n/context';
import { useTheme } from '@/lib/theme/context';

function Brand() {
  const { t } = useLang();
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={t('brand')}>
      <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--red)] text-white text-sm font-bold">सू</span>
      <span className="leading-tight">
        <span className="font-display block text-[17px] font-bold tracking-tight">{t('brand')}</span>
        <span className="block text-[11px] font-medium text-[var(--ink-3)]">{t('brandSub')}</span>
      </span>
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
      <div className="page-shell flex h-16 items-center justify-between gap-3">
        <Brand />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive(l.href) ? 'text-[var(--ink)] bg-[var(--surface-2)]' : 'text-[var(--ink-2)] hover:text-[var(--ink)]'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center rounded-md border border-[var(--line)] p-0.5 text-xs font-semibold" role="group" aria-label="Language">
            <button onClick={() => setLang('en')} aria-pressed={lang === 'en'} className={`rounded px-2 py-1 ${lang === 'en' ? 'bg-[var(--ink)] text-[var(--bg)]' : 'text-[var(--ink-2)]'}`}>EN</button>
            <button onClick={() => setLang('hi')} aria-pressed={lang === 'hi'} className={`rounded px-2 py-1 ${lang === 'hi' ? 'bg-[var(--ink)] text-[var(--bg)]' : 'text-[var(--ink-2)]'}`}>हिं</button>
          </div>
          <button onClick={toggle} className="btn btn-secondary !px-2.5 !py-2" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
            <span aria-hidden>{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
          <Link href="/auth" className="btn btn-secondary hidden sm:inline-flex">{t('nav_signin')}</Link>
          <Link href="/onboarding" className="btn btn-primary hidden sm:inline-flex">{t('hero_cta1')}</Link>
          <button onClick={() => setOpen(!open)} className="btn btn-secondary lg:hidden !px-2.5" aria-expanded={open} aria-label="Menu">
            <span aria-hidden>{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-[var(--line)] bg-[var(--bg)]" aria-label="Mobile">
          <div className="page-shell py-2 flex flex-col">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? 'page' : undefined} className={`rounded-md px-3 py-2.5 text-sm font-medium ${isActive(l.href) ? 'bg-[var(--surface-2)] text-[var(--ink)]' : 'text-[var(--ink-2)]'}`}>
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 py-2">
              <Link href="/auth" onClick={() => setOpen(false)} className="btn btn-secondary flex-1">{t('nav_signin')}</Link>
              <Link href="/onboarding" onClick={() => setOpen(false)} className="btn btn-primary flex-1">{t('hero_cta1')}</Link>
            </div>
            <div className="flex sm:hidden items-center gap-2 pb-3">
              <span className="text-xs text-[var(--ink-3)]">Language / भाषा:</span>
              <button onClick={() => setLang('en')} className={`btn btn-secondary !py-1.5 ${lang === 'en' ? '!border-[var(--red)]' : ''}`}>English</button>
              <button onClick={() => setLang('hi')} className={`btn btn-secondary !py-1.5 ${lang === 'hi' ? '!border-[var(--red)]' : ''}`}>हिंदी</button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
