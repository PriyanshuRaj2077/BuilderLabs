'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Bell, Sun, Moon, Sparkles } from 'lucide-react';
import { UserProfile } from '@/lib/types';

interface NavbarProps {
  currentProfile?: UserProfile | null;
}

export function Navbar({ currentProfile }: NavbarProps) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('suchakai_theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      if (saved === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('suchakai_theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Opportunities', href: '/search' },
    { label: 'Citizen Profile', href: '/onboarding' },
    { label: 'Account', href: '/auth' },
  ];

  return (
    <header className="w-full pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex h-14 items-center justify-between gap-4">
        
        {/* Left: Brand Logo (Clean, no box wrapper, balanced contrast) */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--accent-yellow)] fill-current shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(250,204,21,0.35)]" stroke="none">
              {/* 4-point radiant beacon star */}
              <path d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4L12 2Z" />
              {/* Central luminous core */}
              <circle cx="12" cy="12" r="2.2" className="fill-white" />
            </svg>
            <span className="text-xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Suchak<span className="text-[var(--accent-yellow-text)]">AI</span>
            </span>
          </Link>
        </div>

        {/* Center: FinPoint Floating Segmented Navigation Pill */}
        <nav className="hidden md:flex items-center p-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-xs shadow-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                  isActive
                    ? 'bg-[#ff451a] text-white font-bold shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Theme Toggle, Search, Notifications, Profile) */}
        <div className="flex items-center gap-2">
          
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
          </button>

          <Link
            href="/search"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors"
            title="Search schemes"
          >
            <Search className="h-4 w-4" />
          </Link>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors relative"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#22e55e]" />
          </button>

          <Link
            href="/onboarding"
            className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] transition-all text-xs shadow-sm"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#ff451a] to-amber-500 flex items-center justify-center text-[11px] font-bold text-white uppercase shadow">
              {currentProfile?.name ? currentProfile.name.charAt(0) : 'C'}
            </div>
            <span className="hidden sm:inline font-semibold text-[var(--text-primary)]">
              {currentProfile?.name ? currentProfile.name.split(' ')[0] : 'Profile'}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}
