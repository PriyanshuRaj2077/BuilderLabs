'use client';

import { useEffect, useState, ReactNode } from 'react';
import { UserProfile } from '@/lib/types';
import { ChatbotWidget } from '@/components/ChatbotWidget';

export function LayoutClient({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Get profile from localStorage (already stored by dashboard/onboarding)
    const stored = localStorage.getItem('soochai_profile');
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  return (
    <body className="min-h-full flex flex-col">
      {children}
      <ChatbotWidget currentProfile={profile} />
    </body>
  );
}
