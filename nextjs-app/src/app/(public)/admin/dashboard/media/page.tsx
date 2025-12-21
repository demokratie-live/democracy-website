import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { PageHeader, DataTable } from '@/components/admin';
import { Button } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { MediaActions } from './MediaActions';

async function getMediaCoverage() {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: 'media-coverage',
    sort: '-publishedAt',
    limit: 100,
  });
  return result.docs;
}

export default async function MediaPage() {
  const media = await getMediaCoverage();

  const columns = [
    {
      key: 'title' as const,
      label: 'Titel',
      render: (item: typeof media[0]) => (
        <div className="flex items-center space-x-3">
          {item.imageUrl && (
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={48}
              height={48}
              className="w-12 h-12 rounded-lg object-cover"
            />
          )}
          <div className="min-w-0">
            <p className="font-medium text-gray-900 dark:text-white truncate">
              {item.title}
            </p>
            {item.outlet && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.outlet}
              </p>
            )}
          </div>
        </div>
      ),
    },
    {
      key: 'url' as const,
      label: 'Link',
      render: (item: typeof media[0]) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Öffnen
        </a>
      ),
    },
    {
      key: 'publishedAt' as const,
      label: 'Veröffentlicht',
      render: (item: typeof media[0]) => formatDate(item.publishedAt),
    },
    {
      key: 'actions' as const,
      label: '',
      className: 'w-24',
      render: (item: typeof media[0]) => <MediaActions media={item} />,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Medien & Presse"
        description={`${media.length} Pressebeiträge verwalten`}
        actions={
          <Link href="/admin/dashboard/media/new">
            <Button>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Neuer Beitrag
            </Button>
          </Link>
        }
      />

      <DataTable
        columns={columns}
        data={media}
        keyExtractor={(item) => item.id}
        emptyMessage="Noch keine Pressebeiträge vorhanden."
      />
    </div>
  );
}
