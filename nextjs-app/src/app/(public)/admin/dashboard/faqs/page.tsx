import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { PageHeader, DataTable, StatusBadge } from '@/components/admin';
import { Button } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { FAQActions } from './FAQActions';

async function getFaqs() {
  return prisma.faq.findMany({
    orderBy: { order: 'asc' },
  });
}

export default async function FAQsPage() {
  const faqs = await getFaqs();

  const columns = [
    {
      key: 'order' as const,
      label: '#',
      className: 'w-16',
    },
    {
      key: 'question' as const,
      label: 'Frage',
      render: (faq: typeof faqs[0]) => (
        <div className="max-w-md">
          <p className="font-medium text-gray-900 dark:text-white truncate">
            {faq.question}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {faq.answer.substring(0, 100)}...
          </p>
        </div>
      ),
    },
    {
      key: 'active' as const,
      label: 'Status',
      render: (faq: typeof faqs[0]) => (
        <StatusBadge status={faq.active ? 'active' : 'inactive'} />
      ),
    },
    {
      key: 'updatedAt' as const,
      label: 'Aktualisiert',
      render: (faq: typeof faqs[0]) => formatDate(faq.updatedAt),
    },
    {
      key: 'actions' as const,
      label: '',
      className: 'w-24',
      render: (faq: typeof faqs[0]) => <FAQActions faq={faq} />,
    },
  ];

  return (
    <div>
      <PageHeader
        title="FAQs"
        description={`${faqs.length} häufig gestellte Fragen verwalten`}
        actions={
          <Link href="/admin/dashboard/faqs/new">
            <Button>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Neue FAQ
            </Button>
          </Link>
        }
      />

      <DataTable
        columns={columns}
        data={faqs}
        keyExtractor={(faq) => faq.id}
        emptyMessage="Noch keine FAQs vorhanden. Erstellen Sie die erste FAQ!"
      />

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">
              Tipp: Reihenfolge ändern
            </h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
              Die Reihenfolge wird durch das &quot;Order&quot;-Feld bestimmt. Bearbeiten Sie eine FAQ, um die Position zu ändern.
              Für erweiterte Verwaltung können Sie auch das{' '}
              <Link href="/admin" className="underline font-medium">
                Payload CMS
              </Link>{' '}
              nutzen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
