'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ConfirmDialog } from '@/components/admin';

interface BetaCode {
  id: string;
  code: string;
  uses: number;
  maxUses: number;
  active: boolean;
}

interface BetaCodeActionsProps {
  code: BetaCode;
}

export function BetaCodeActions({ code }: BetaCodeActionsProps) {
  const router = useRouter();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleActive = async () => {
    try {
      const response = await fetch(`/api/admin/beta/codes/${code.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: !code.active }),
      });

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error('Toggle error:', error);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/beta/codes/${code.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.refresh();
        setDeleteOpen(false);
      }
    } catch (error) {
      console.error('Delete error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
          title={copied ? 'Kopiert!' : 'Code kopieren'}
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>

        <button
          onClick={handleToggleActive}
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
          title={code.active ? 'Deaktivieren' : 'Aktivieren'}
        >
          {code.active ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          )}
        </button>

        <Link
          href={`/admin/dashboard/beta/codes/${code.id}/edit`}
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
        title="Beta-Code löschen"
        message={`Möchten Sie den Code "${code.code}" wirklich löschen? Zugehörige Registrierungen bleiben erhalten.`}
        confirmLabel="Löschen"
        variant="danger"
        loading={loading}
      />
    </>
  );
}
