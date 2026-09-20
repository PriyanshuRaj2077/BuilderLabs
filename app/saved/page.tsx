'use client';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { EmptyState, PageHeader, SchemeCard } from '@/components/ui/SchemeCard';
import { SEED_SCHEMES } from '@/lib/data/seed-schemes';
import { useLang } from '@/lib/i18n/context';
import { useSaved } from '@/lib/profile';

export default function SavedPage() {
  const { t } = useLang();
  const { saved } = useSaved();
  const items = SEED_SCHEMES.filter((s) => saved.includes(s.id));
  return (
    <PageShell>
      <div className="page-shell section-tail py-12 sm:py-16">
        <PageHeader title={t('saved_title')} sub={t('saved_sub')} />
        {items.length === 0 ? (
          <EmptyState title={t('saved_empty_t')} body={t('saved_empty_d')} action={<Link href="/search" className="btn btn-primary">{t('saved_browse')}</Link>} />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {items.map((s) => <SchemeCard key={s.id} scheme={s} />)}
          </div>
        )}
      </div>
    </PageShell>
  );
}
