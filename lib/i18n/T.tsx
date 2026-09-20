'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './context';
import { prefetch, subscribe, translateSync } from './translate';

// Returns the Hindi rendering for dynamic text when the active language is
// Hindi, otherwise the original text. While a translation is still in
// flight the English source is shown and the component re-renders with the
// Hindi text as soon as it lands in the shared cache.
export function useTranslated(text: string): string {
  const { lang } = useLang();
  const [, bump] = useState(0);
  useEffect(() => {
    if (lang !== 'hi' || !text) return;
    const off = subscribe(() => bump((n) => n + 1));
    prefetch([text]);
    return off;
  }, [lang, text]);
  if (lang !== 'hi') return text;
  return translateSync(text) ?? text;
}

// Same as useTranslated for a list of strings, batched into one request
// cycle so a card or a whole section translates together.
export function useTranslatedList(texts: readonly string[]): string[] {
  const { lang } = useLang();
  const [, bump] = useState(0);
  const key = texts.join('\u0000');
  const ref = useRef<readonly string[]>(texts);
  useEffect(() => {
    ref.current = texts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  useEffect(() => {
    if (lang !== 'hi' || ref.current.length === 0) return;
    const off = subscribe(() => bump((n) => n + 1));
    prefetch(ref.current);
    return off;
  }, [lang, key]);
  if (lang !== 'hi') return [...texts];
  return texts.map((s) => translateSync(s) ?? s);
}

// Drop-in wrapper for any piece of dynamic English content.
export function T({ text }: { text: string }) {
  return <>{useTranslated(text)}</>;
}
