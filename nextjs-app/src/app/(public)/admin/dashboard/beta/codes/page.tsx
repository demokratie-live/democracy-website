import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { PageHeader, DataTable, StatusBadge } from '@/components/admin';
import { Button } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { BetaCodeActions } from './BetaCodeActions';

async function getBetaCodes() {
  return prisma.betaCode.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: {
        select: { registrations: true },
      },
    },
  });
}

export default async function BetaCodesPage() {
  const codes = await getBetaCodes();

  const columns = [
    {
      key: 'code' as const,
      label: 'Code',
      render: (code: typeof codes[0]) => (
        <span className="font-mono font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
          {code.code}
        </span>
      ),
    },
    {
      key: 'usage' as const,
      label: 'Nutzung',
      render: (code: typeof codes[0]) => (
        <div className="flex items-center">
          <span className="text-gray-900 dark:text-white font-medium">
            {code.uses}
          </span>
          <span className="text-gray-500 dark:text-gray-400 mx-1">/</span>
          <span className="text-gray-500 dark:text-gray-400">
            {code.maxUses}
          </span>
          {code.uses >= code.maxUses && (
            <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded">
              Erschöpft
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'registrations' as const,
      label: 'Registrierungen',
      render: (code: typeof codes[0]) => (
        <span className="text-gray-600 dark:text-gray-400">
          {code._count.registrations}
        </span>
      ),
    },
    {
      key: 'active' as const,
      label: 'Status',
      render: (code: typeof codes[0]) => (
        <StatusBadge status={code.active ? 'active' : 'inactive'} />
      ),
    },
    {
      key: 'createdAt' as const,
      label: 'Erstellt am',
      render: (code: typeof codes[0]) => formatDate(code.createdAt),
    },
    {
      key: 'actions' as const,
      label: '',
      className: 'w-24',
      render: (code: typeof codes[0]) => <BetaCodeActions code={code} />,
    },
  ];

  const activeCodes = codes.filter((c) => c.active);
  const usedCodes = codes.filter((c) => c.uses >= c.maxUses);

  return (
    <div>
      <PageHeader
        title="Beta-Codes"
        description={`${codes.length} Codes verwalten`}
        actions={
          <div className="flex gap-3">
            <Link href="/admin/dashboard/beta/registrations">
              <Button variant="outline">
                Registrierungen
              </Button>
            </Link>
            <Link href="/admin/dashboard/beta/codes/new">
              <Button>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Neuer Code
              </Button>
            </Link>
          </div>
        }
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{codes.length}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Gesamt</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 p-4">
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">{activeCodes.length}</p>
          <p className="text-sm text-green-600 dark:text-green-400">Aktiv</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 p-4">
          <p className="text-2xl font-bold text-red-700 dark:text-red-300">{usedCodes.length}</p>
          <p className="text-sm text-red-600 dark:text-red-400">Erschöpft</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={codes}
        keyExtractor={(code) => code.id}
        emptyMessage="Noch keine Beta-Codes vorhanden. Erstellen Sie den ersten Code!"
      />
    </div>
  );
}
