'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ConfirmDialog } from '@/components/admin';

interface MediaItem {
  id: string;
  title: string;
  description: string | null;
  url: string;
  outlet: string | null;
  imageUrl: string | null;
  publishedAt: Date;
}

interface MediaActionsProps {
  media: MediaItem;
}

export function MediaActions({ media }: MediaActionsProps) {
  const router = useRouter();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/media/${media.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.refresh();
        setDeleteOpen(false);
      } else {
        alert('Fehler beim Löschen');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Fehler beim Löschen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Link
          href={`/admin/dashboard/media/${media.id}/edit`}
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
          title="Bearbeiten"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </Link>

        <button
          onClick={() => setDeleteOpen(true)}
          className="p-1.5 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
          title="Löschen"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <ConfirmDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title="Pressebeitrag löschen"
        message={`Möchten Sie "${media.title}" wirklich löschen?`}
        confirmLabel="Löschen"
        variant="danger"
        loading={loading}
      />
    </>
  );
}
