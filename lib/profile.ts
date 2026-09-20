'use client';
import { useState } from 'react';
import type { UserProfile } from '@/lib/types';

const PROFILE_KEY = 'soochai_profile';
const SAVED_KEY = 'soochai_saved';

export const DEFAULT_PROFILE: UserProfile = {
  name: '',
  age: 24,
  gender: 'all',
  state: 'Maharashtra',
  category: 'General',
  occupation: 'job_seeker',
  education: 'undergraduate',
  annualIncome: 250000,
  isRural: false,
  hasDisability: false,
  interests: [],
};

function readProfile(): UserProfile {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = window.localStorage.getItem(PROFILE_KEY);
    if (raw) return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch { /* keep default */ }
  return DEFAULT_PROFILE;
}

function readSaved(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(SAVED_KEY);
    if (raw) {
      const v: unknown = JSON.parse(raw);
      if (Array.isArray(v)) return v.filter((x): x is string => typeof x === 'string');
    }
  } catch { /* keep empty */ }
  return [];
}

export const loadProfile = readProfile;
export const loadSaved = readSaved;

export function useProfile() {
  const [profile, setProfileState] = useState<UserProfile>(() => readProfile());
  const setProfile = (p: UserProfile) => {
    setProfileState(p);
    try { window.localStorage.setItem(PROFILE_KEY, JSON.stringify(p)); } catch { /* noop */ }
  };
  return { profile, setProfile, ready: true, hasProfile: Boolean(profile.name || profile.interests.length) };
}

export function useSaved() {
  const [saved, setSavedState] = useState<string[]>(() => readSaved());
  const setSaved = (ids: string[]) => {
    setSavedState(ids);
    try { window.localStorage.setItem(SAVED_KEY, JSON.stringify(ids)); } catch { /* noop */ }
  };
  const toggle = (id: string) => {
    const next = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id];
    setSaved(next);
  };
  return { saved, setSaved, toggle };
}
