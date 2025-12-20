import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { PageHeader, StatsCard, ProgressBar, DataTable } from '@/components/admin';
import { formatCurrency } from '@/lib/utils';
import { DonationSettingsForm } from './DonationSettingsForm';
import { DonationItemActions } from './DonationItemActions';

async function getDonationData() {
  const [settings, items] = await Promise.all([
    prisma.donationSettings.findFirst(),
    prisma.donationItem.findMany({
      orderBy: { order: 'asc' },
    }),
  ]);

  return { settings, items };
}

export default async function DonationsPage() {
  const { settings, items } = await getDonationData();

  const totalValue = items
    .filter((i) => i.active && i.type === 'data')
    .reduce((sum, i) => sum + i.value, 0);

  const columns = [
    {
      key: 'order' as const,
      label: '#',
      className: 'w-16',
    },
    {
      key: 'title' as const,
      label: 'Kategorie',
      render: (item: typeof items[0]) => (
        <div>
          <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
          {item.description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
              {item.description}
            </p>
          )}
        </div>
      ),
    },
    {
      key: 'type' as const,
      label: 'Typ',
      render: (item: typeof items[0]) => (
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          item.type === 'head'
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
        }`}>
          {item.type === 'head' ? 'Kopfzeile' : 'Daten'}
        </span>
      ),
    },
    {
      key: 'progress' as const,
      label: 'Fortschritt',
      render: (item: typeof items[0]) => (
        <div className="w-48">
          <ProgressBar
            value={item.value}
            max={item.maxValue}
            size="sm"
            showPercentage={false}
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {formatCurrency(item.value)} / {formatCurrency(item.maxValue)}
          </p>
        </div>
      ),
    },
    {
      key: 'active' as const,
      label: 'Status',
      render: (item: typeof items[0]) => (
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          item.active
            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
        }`}>
          {item.active ? 'Aktiv' : 'Inaktiv'}
        </span>
      ),
    },
    {
      key: 'actions' as const,
      label: '',
      className: 'w-24',
      render: (item: typeof items[0]) => <DonationItemActions item={item} />,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Spenden"
        description="Spendenstand und Ausgaben verwalten"
      />

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Aktueller Spendenstand"
          value={formatCurrency(settings?.currentValue || 0)}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatsCard
          title="Spendenziel"
          value={formatCurrency(settings?.goalValue || 0)}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <StatsCard
          title="Unterstützer"
          value={settings?.patrons || 0}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <StatsCard
          title="Ausgaben-Summe"
          value={formatCurrency(totalValue)}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      {/* Progress Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Gesamtfortschritt
        </h2>
        <ProgressBar
          value={settings?.currentValue || 0}
          max={settings?.goalValue || 1}
          label={`${formatCurrency(settings?.currentValue || 0)} von ${formatCurrency(settings?.goalValue || 0)}`}
          size="lg"
        />
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {settings?.patrons || 0} von {settings?.patronsGoal || 0} Unterstützern
          </span>
          <span className="font-medium" style={{ color: 'rgb(68, 148, 211)' }}>
            {Math.round(((settings?.currentValue || 0) / (settings?.goalValue || 1)) * 100)}% erreicht
          </span>
        </div>
      </div>

      {/* Settings Form */}
      <div className="mb-8">
        <DonationSettingsForm settings={settings} />
      </div>

      {/* Donation Items Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ausgaben-Kategorien
          </h2>
          <Link
            href="/admin/collections/donation-items/create"
            className="px-4 py-2 text-sm font-medium text-white rounded-lg"
            style={{ backgroundColor: 'rgb(68, 148, 211)' }}
          >
            + Neue Kategorie (Payload CMS)
          </Link>
        </div>

        <DataTable
          columns={columns}
          data={items}
          keyExtractor={(item) => item.id}
          emptyMessage="Noch keine Ausgaben-Kategorien vorhanden."
        />

        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            <strong>Hinweis:</strong> Um Ausgaben-Kategorien hinzuzufügen oder detailliert zu bearbeiten, 
            nutzen Sie das{' '}
            <Link href="/admin" className="underline font-medium">
              Payload CMS
            </Link>
            . Dort können Sie auch Bilder hochladen und Rich-Text-Beschreibungen hinzufügen.
          </p>
        </div>
      </div>
    </div>
  );
}
