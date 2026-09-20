'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { useLang } from '@/lib/i18n/context';

export default function AuthPage() {
  const { t } = useLang();
  const router = useRouter();
  const [mode, setMode] = useState<'in' | 'up'>('in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [ok, setOk] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(''); setOk(''); setLoading(true);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: mode === 'up' ? 'signup' : 'signin', email, password, fullName: name }),
      });
      const j = await res.json();
      if (!res.ok || j.error) { setError(j.error || t('common_error')); return; }
      setOk(j.message || 'Done');
      setTimeout(() => router.push(mode === 'up' ? '/onboarding' : '/dashboard'), 900);
    } catch {
      setError(t('common_error'));
    } finally { setLoading(false); }
  }

  return (
    <PageShell>
      <div className="page-shell flex max-w-md flex-1 flex-col justify-center py-12">
        <h1 className="font-display text-3xl font-bold">{mode === 'in' ? t('auth_signin_t') : t('auth_signup_t')}</h1>
        <p className="mt-2 text-sm text-[var(--ink-2)]">{mode === 'in' ? t('auth_signin_d') : t('auth_signup_d')}</p>
        <form onSubmit={submit} className="card mt-6 space-y-4 p-6">
          {error && <p role="alert" className="rounded-md bg-[var(--red-soft)] px-3 py-2 text-sm text-[var(--red)]">{error}</p>}
          {ok && <p role="status" className="rounded-md bg-[var(--ok-soft)] px-3 py-2 text-sm text-[var(--ok)]">{ok}</p>}
          {mode === 'up' && <div><label className="label" htmlFor="nm">{t('auth_name')}</label><input id="nm" className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></div>}
          <div><label className="label" htmlFor="em">{t('auth_email')}</label><input id="em" className="field" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="you@example.com" /></div>
          <div><label className="label" htmlFor="pw">{t('auth_pass')}</label><input id="pw" className="field" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={mode === 'up' ? 'new-password' : 'current-password'} /></div>
          <button className="btn btn-primary w-full" disabled={loading}>{loading ? t('common_loading') : mode === 'in' ? t('auth_signin_btn') : t('auth_signup_btn')}</button>
        </form>
        <button className="mt-3 text-sm text-[var(--ink-2)] hover:underline" onClick={() => { setMode(mode === 'in' ? 'up' : 'in'); setError(''); setOk(''); }}>
          {mode === 'in' ? t('auth_new') : t('auth_have')}
        </button>
        <Link href="/onboarding" className="mt-2 text-center text-sm text-[var(--ink-3)] hover:underline">{t('auth_guest')}</Link>
      </div>
    </PageShell>
  );
}
