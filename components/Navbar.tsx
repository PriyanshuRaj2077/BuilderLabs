'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Bell, Sun, Moon, Sparkles, Menu, X } from 'lucide-react';
import { UserProfile } from '@/lib/types';

interface NavbarProps {
  currentProfile?: UserProfile | null;
}

export function Navbar({ currentProfile }: NavbarProps) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'PM-KISAN 17th Installment',
      desc: '₹2,000 Direct Benefit Transfer credited to linked Aadhaar bank account.',
      time: '15m ago',
      color: '#22c55e',
      unread: true,
      link: '/scheme/pm-kisan'
    },
    {
      id: '2',
      title: 'PM Surya Ghar Muft Bijli Yojana',
      desc: 'New rooftop solar subsidy up to ₹78,000 launched. Check eligibility now.',
      time: '2h ago',
      color: '#f59e0b',
      unread: true,
      link: '/scheme/pm-surya-ghar'
    },
    {
      id: '3',
      title: 'Ayushman Bharat PM-JAY',
      desc: 'Annual cashless healthcare cover of ₹5,00,000 is active at empaneled hospitals.',
      time: '1d ago',
      color: '#3b82f6',
      unread: true,
      link: '/scheme/ayushman-bharat-pmjay'
    },
    {
      id: '4',
      title: 'National Scholarship Portal 2026-27',
      desc: 'Fresh and renewal applications are now open across central ministries.',
      time: '2d ago',
      color: '#a855f7',
      unread: false,
      link: '/search'
    },
    {
      id: '5',
      title: 'Aadhaar eKYC Verification',
      desc: 'Verify that your Aadhaar is linked to your bank account for zero-interruption DBT.',
      time: '3d ago',
      color: '#64748b',
      unread: false,
      link: '/onboarding'
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  // Close notifications on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNotificationsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Opportunities', href: '/search' },
    { label: 'Citizen Profile & Account', href: '/onboarding' },
  ];

  return (
    <header className="w-full pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-50">
      <div className="flex h-14 items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--accent-yellow)] fill-current shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(250,204,21,0.35)]" stroke="none">
              <path d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4L12 2Z" />
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
                    ? 'bg-[var(--accent-yellow)] text-white dark:text-zinc-950 font-bold shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Theme Toggle, Search, Notifications, Profile, Mobile Menu) */}
        <div className="flex items-center gap-2 relative">
          
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

          {/* Notifications Trigger Button */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(prev => !prev)}
              className={`flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-bg)] border transition-colors relative ${
                notificationsOpen
                  ? 'border-[var(--accent-yellow)] text-[var(--text-primary)] ring-2 ring-[var(--accent-yellow)]/20'
                  : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)]'
              }`}
              title="Notifications"
              aria-label="Toggle notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-[var(--accent-yellow)] text-white dark:text-zinc-950 text-[10px] font-extrabold flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown Panel */}
            {notificationsOpen && (
              <>
                {/* Backdrop to dismiss when clicking outside */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setNotificationsOpen(false)} 
                />
                
                <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200">
                  {/* Header */}
                  <div className="p-3.5 px-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--card-subtle)]/40">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[var(--text-primary)]">Notifications</span>
                      {unreadCount > 0 && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow-text)] border border-[var(--accent-yellow)]/30">
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-[11px] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-yellow-text)] transition-colors"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>

                  {/* Notification List */}
                  <div className="max-h-80 overflow-y-auto divide-y divide-[var(--border-subtle)]">
                    {notifications.length === 0 ? (
                      <div className="p-6 text-center text-xs text-[var(--text-muted)]">
                        No notifications at this moment.
                      </div>
                    ) : (
                      notifications.map(n => (
                        <Link
                          key={n.id}
                          href={n.link}
                          onClick={() => {
                            markAsRead(n.id);
                            setNotificationsOpen(false);
                          }}
                          className={`p-3.5 px-4 flex items-start gap-3 hover:bg-[var(--card-subtle)] transition-colors block ${
                            n.unread ? 'bg-[var(--accent-yellow)]/5' : ''
                          }`}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                            style={{ backgroundColor: n.color }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <p className={`text-xs truncate ${n.unread ? 'font-bold text-[var(--text-primary)]' : 'font-medium text-[var(--text-secondary)]'}`}>
                                {n.title}
                              </p>
                              <span className="text-[10px] text-[var(--text-muted)] shrink-0">{n.time}</span>
                            </div>
                            <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                              {n.desc}
                            </p>
                          </div>
                          {n.unread && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)] shrink-0 self-center" />
                          )}
                        </Link>
                      ))
                    )}
                  </div>

                  {/* Footer */}
                  <div className="p-2.5 border-t border-[var(--border-subtle)] bg-[var(--card-subtle)]/40 text-center">
                    <Link
                      href="/search"
                      onClick={() => setNotificationsOpen(false)}
                      className="text-xs font-semibold text-[var(--accent-yellow-text)] hover:underline inline-flex items-center gap-1"
                    >
                      Browse All 100+ Opportunities →
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          <Link
            href="/onboarding"
            className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-[var(--border-highlight)] transition-all text-xs shadow-sm"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-[11px] font-extrabold text-zinc-950 uppercase shadow">
              {currentProfile?.name ? currentProfile.name.charAt(0) : 'C'}
            </div>
            <span className="hidden sm:inline font-semibold text-[var(--text-primary)]">
              {currentProfile?.name ? currentProfile.name.split(' ')[0] : 'Profile & Account'}
            </span>
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-highlight)] transition-colors"
            title="Toggle Menu"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-3 p-2.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[var(--accent-yellow)] text-white dark:text-zinc-950 font-bold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--card-subtle)]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-[10px] uppercase font-bold tracking-wider opacity-75">Active</span>}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
