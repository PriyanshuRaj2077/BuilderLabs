'use client';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n/context';

// Loops between the English and Hindi project name every 2 seconds with a
// smooth crossfade. Both names stay stacked in the same box so there is no
// layout shift. Respects prefers-reduced-motion by showing one static name.
export function HeroTitle() {
  const { t } = useLang();
  const [showHindi, setShowHindi] = useState(false);
  const [motionOk] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (!motionOk) return;
    const id = window.setInterval(() => setShowHindi((v) => !v), 2000);
    return () => window.clearInterval(id);
  }, [motionOk]);

  return (
    <span className="hero-title" role="text" aria-label={t('hero_name_label')}>
      <span aria-hidden className={`hero-name ${!showHindi ? 'is-on' : ''} ${motionOk ? '' : 'no-anim'}`}>
        SUCHAK AI
      </span>
      <span aria-hidden className={`hero-name hero-name-hi ${showHindi ? 'is-on' : ''} ${motionOk ? '' : 'no-anim'}`}>
        सुचक AI
      </span>
    </span>
  );
}
