'use client';
import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { en, EnKeys } from './en';
import { hi } from './hi';

export type Lang = 'en' | 'hi';
const dicts = { en, hi };
const KEY = 'soochai_lang';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: EnKeys) => string;
}

const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {}, t: (k) => en[k] });

function readInitial(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const s = window.localStorage.getItem(KEY);
    if (s === 'en' || s === 'hi') return s;
    const nav = window.navigator.language?.toLowerCase() || '';
    return nav.startsWith('hi') ? 'hi' : 'en';
  } catch { return 'en'; }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readInitial());
  useEffect(() => {
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
    try { window.localStorage.setItem(KEY, lang); } catch { /* noop */ }
  }, [lang]);
  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback((k: EnKeys) => dicts[lang][k] ?? en[k], [lang]);
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang() { return useContext(Ctx); }
