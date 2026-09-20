'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Sparkles, BookMarked, UserCircle, Search } from 'lucide-react';
import { DEMO_PERSONAS } from '@/lib/data/seed-schemes';
import { UserProfile } from '@/lib/types';

interface NavbarProps {
  currentProfile?: UserProfile | null;
  onSelectPersona?: (profile: UserProfile) => void;
}

export function Navbar({ currentProfile, onSelectPersona }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                <Sparkles className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white">Sooch<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">AI</span></span>
                <span className="rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-blue-400 border border-blue-500/20">Citizen Portal</span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">Public Scheme Discovery Engine</p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <Link
              href="/dashboard"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                pathname === '/dashboard'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/search"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                pathname === '/search'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Explore All Schemes
            </Link>
            <Link
              href="/onboarding"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                pathname === '/onboarding'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Update Profile
            </Link>
          </nav>
        </div>

        {/* Right Action: Demo Persona Switcher & Profile status */}
        <div className="flex items-center gap-3">
          {onSelectPersona && (
            <div className="hidden lg:flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs">
              <span className="px-2 text-slate-400 font-medium">Judge Demo:</span>
              {DEMO_PERSONAS.map((dp) => {
                const isActive = currentProfile?.name === dp.profile.name;
                return (
                  <button
                    key={dp.name}
                    onClick={() => onSelectPersona(dp.profile)}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                    title={dp.label}
                  >
                    <span>{dp.avatar}</span>
                    <span>{dp.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          )}

          <Link
            href="/onboarding"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:brightness-110 transition-all"
          >
            <UserCircle className="h-4 w-4" />
            <span className="hidden sm:inline">
              {currentProfile ? `${currentProfile.name.split(' ')[0]}'s Profile` : 'Setup Profile'}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}
