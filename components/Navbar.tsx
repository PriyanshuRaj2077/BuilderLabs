'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Search, Bell, User } from 'lucide-react';
import { UserProfile } from '@/lib/types';

interface NavbarProps {
  currentProfile?: UserProfile | null;
}

export function Navbar({ currentProfile }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Opportunities', href: '/search' },
    { label: 'Citizen Profile', href: '/onboarding' },
    { label: 'Account', href: '/auth' },
  ];

  return (
    <header className="w-full pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex h-14 items-center justify-between gap-4">
        
        {/* Left: Brand Logo (FinPoint inspired diamond icon) */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#181a20] border border-[#262933] shadow-sm group-hover:border-[#ff451a] transition-colors">
              {/* FinPoint geometric diamond mark */}
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-emerald-400 rotate-45 rounded-[2px]" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#ff451a] rounded-full" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Suchak<span className="text-[#ff451a]">AI</span>
            </span>
          </Link>
        </div>

        {/* Center: FinPoint Floating Segmented Navigation Pill */}
        <nav className="hidden md:flex items-center p-1 rounded-full bg-[#16181d] border border-[#23262f] text-xs">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Round Icon Actions (Search, Notifications, Profile Avatar) */}
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16181d] border border-[#23262f] text-neutral-300 hover:text-white hover:border-[#343845] transition-colors"
            title="Search schemes"
          >
            <Search className="h-4 w-4" />
          </Link>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16181d] border border-[#23262f] text-neutral-300 hover:text-white hover:border-[#343845] transition-colors relative"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#ff451a]" />
          </button>

          <Link
            href="/onboarding"
            className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full bg-[#16181d] border border-[#23262f] hover:border-[#343845] transition-all text-xs"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#ff451a] to-amber-500 flex items-center justify-center text-[11px] font-bold text-white uppercase shadow">
              {currentProfile?.name ? currentProfile.name.charAt(0) : 'C'}
            </div>
            <span className="hidden sm:inline font-semibold text-neutral-200">
              {currentProfile?.name ? currentProfile.name.split(' ')[0] : 'Profile'}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}
