import React from 'react';
import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { PageHeader, StatsCard, DataTable } from '@/components/admin';
import { formatDate } from '@/lib/utils';
import { ExportButton } from './ExportButton';

async function getBetaStats() {
  const payload = await getPayload({ config: configPromise });
  
  const [
    totalRegistrations,
    iosRegistrations,
    androidRegistrations,
    newsletterSubscribers,
    activeCodes,
    totalCodes,
  ] = await Promise.all([
    payload.find({ collection: 'beta-registrations', limit: 0 }),
    payload.find({ collection: 'beta-registrations', where: { ios: { equals: true } }, limit: 0 }),
    payload.find({ collection: 'beta-registrations', where: { android: { equals: true } }, limit: 0 }),
    payload.find({ collection: 'beta-registrations', where: { newsletter: { equals: true } }, limit: 0 }),
    payload.find({ collection: 'beta-codes', where: { active: { equals: true } }, limit: 0 }),
    payload.find({ collection: 'beta-codes', limit: 0 }),
  ]);

  // Get registrations per week
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const thisWeekResult = await payload.find({
    collection: 'beta-registrations',
    where: { createdAt: { greater_than: weekAgo.toISOString() } },
    limit: 0,
  });

  return {
    totalRegistrations: totalRegistrations.totalDocs,
    iosRegistrations: iosRegistrations.totalDocs,
    androidRegistrations: androidRegistrations.totalDocs,
    newsletterSubscribers: newsletterSubscribers.totalDocs,
    activeCodes: activeCodes.totalDocs,
    totalCodes: totalCodes.totalDocs,
    thisWeek: thisWeekResult.totalDocs,
  };
}

async function getRecentRegistrations() {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: 'beta-registrations',
    limit: 10,
    sort: '-createdAt',
    depth: 1, // Include related betaCode
  });
  return result.docs;
}

export default async function BetaRegistrationsPage() {
  const stats = await getBetaStats();
  const registrations = await getRecentRegistrations();

  const columns = [
    {
      key: 'email' as const,
      label: 'E-Mail',
      render: (reg: typeof registrations[0]) => (
        <span className="font-medium text-gray-900 dark:text-white">
          {reg.email}
        </span>
      ),
    },
    {
      key: 'platform' as const,
      label: 'Plattform',
      render: (reg: typeof registrations[0]) => (
        <div className="flex items-center gap-2">
          {reg.ios && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded">
              iOS
            </span>
          )}
          {reg.android && (
            <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded">
              Android
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'newsletter' as const,
      label: 'Newsletter',
      render: (reg: typeof registrations[0]) => (
        <span className={`px-2 py-1 text-xs font-medium rounded ${
          reg.newsletter
            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
        }`}>
          {reg.newsletter ? 'Ja' : 'Nein'}
        </span>
      ),
    },
    {
      key: 'code' as const,
      label: 'Beta-Code',
      render: (reg: typeof registrations[0]) => (
        <span className="text-gray-500 dark:text-gray-400 font-mono text-sm">
          {reg.code?.code || '-'}
        </span>
      ),
    },
    {
      key: 'createdAt' as const,
      label: 'Registriert am',
      render: (reg: typeof registrations[0]) => formatDate(reg.createdAt),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Beta-Registrierungen"
        description="Übersicht aller Beta-Anmeldungen"
        actions={
          <div className="flex gap-3">
            <Link
              href="/admin/dashboard/beta/codes"
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Beta-Codes verwalten
            </Link>
            <ExportButton />
          </div>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Gesamt Registrierungen"
          value={stats.totalRegistrations}
          change={{
            value: stats.thisWeek,
            type: stats.thisWeek > 0 ? 'increase' : 'neutral',
          }}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <StatsCard
          title="iOS Interessenten"
          value={stats.iosRegistrations}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          }
        />
        <StatsCard
          title="Android Interessenten"
          value={stats.androidRegistrations}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          }
        />
        <StatsCard
          title="Newsletter Abonnenten"
          value={stats.newsletterSubscribers}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      {/* Recent Registrations */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Letzte 10 Registrierungen
          </h2>
        </div>
        <DataTable
          columns={columns}
          data={registrations}
          keyExtractor={(reg) => reg.id}
          emptyMessage="Noch keine Registrierungen vorhanden."
        />
      </div>

      {/* Platform Distribution */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Plattform-Verteilung
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-400">iOS</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {Math.round((stats.iosRegistrations / stats.totalRegistrations) * 100) || 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gray-600 h-2 rounded-full"
                  style={{ width: `${(stats.iosRegistrations / stats.totalRegistrations) * 100 || 0}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-400">Android</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {Math.round((stats.androidRegistrations / stats.totalRegistrations) * 100) || 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(stats.androidRegistrations / stats.totalRegistrations) * 100 || 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Beta-Codes Status
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                {stats.activeCodes}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400">Aktiv</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                {stats.totalCodes - stats.activeCodes}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Inaktiv</p>
            </div>
          </div>
          <Link
            href="/admin/dashboard/beta/codes"
            className="mt-4 block text-center text-sm font-medium hover:underline"
            style={{ color: 'rgb(68, 148, 211)' }}
          >
            Alle Codes anzeigen →
          </Link>
        </div>
      </div>
    </div>
  );
}
