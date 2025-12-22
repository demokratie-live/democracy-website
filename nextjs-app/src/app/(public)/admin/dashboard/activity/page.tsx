import React from 'react';
import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { PageHeader, DataTable } from '@/components/admin';
import { formatDate } from '@/lib/utils';

interface ActivityLogEntry {
  id: string;
  action: string;
  entityType: string;
  entityId: string | null;
  entityTitle: string | null;
  ipAddress: string | null;
  createdAt: string;
  userName?: string | null;
}

async function getActivityLogs(): Promise<ActivityLogEntry[]> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: 'activity-logs',
      limit: 100,
      sort: '-createdAt',
    });
    return result.docs.map(doc => ({
      id: String(doc.id),
      action: doc.action,
      entityType: doc.entityType,
      entityId: doc.entityId || null,
      entityTitle: doc.entityTitle || null,
      ipAddress: doc.ipAddress || null,
      createdAt: doc.createdAt,
      userName: doc.userName || null,
    }));
  } catch {
    return [];
  }
}

const actionLabels: Record<string, { label: string; color: string }> = {
  create: { label: 'Erstellt', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  update: { label: 'Aktualisiert', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
  delete: { label: 'Gelöscht', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
  login: { label: 'Anmeldung', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
  logout: { label: 'Abmeldung', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' },
};

const entityTypeLabels: Record<string, string> = {
  FAQ: 'FAQ',
  Media: 'Presse',
  Roadmap: 'Roadmap',
  Donation: 'Spenden',
  BetaCode: 'Beta-Code',
  User: 'Benutzer',
  DonationSettings: 'Spendeneinstellungen',
};

export default async function ActivityLogPage() {
  const logs = await getActivityLogs();

  const columns: Array<{
    key: string;
    label: string;
    className?: string;
    render?: (log: ActivityLogEntry) => React.ReactNode;
  }> = [
    {
      key: 'createdAt',
      label: 'Zeitpunkt',
      render: (log: ActivityLogEntry) => (
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          {formatDate(log.createdAt)}
        </span>
      ),
    },
    {
      key: 'action',
      label: 'Aktion',
      render: (log: ActivityLogEntry) => {
        const actionInfo = actionLabels[log.action] || { label: log.action, color: 'bg-gray-100 text-gray-800' };
        return (
          <span className={`px-2 py-1 rounded text-xs font-medium ${actionInfo.color}`}>
            {actionInfo.label}
          </span>
        );
      },
    },
    {
      key: 'entityType',
      label: 'Bereich',
      render: (log: ActivityLogEntry) => (
        <span className="text-gray-900 dark:text-white">
          {entityTypeLabels[log.entityType] || log.entityType}
        </span>
      ),
    },
    {
      key: 'entityTitle',
      label: 'Element',
      render: (log: ActivityLogEntry) => (
        <span className="text-gray-600 dark:text-gray-400 truncate max-w-xs block">
          {log.entityTitle || '-'}
        </span>
      ),
    },
    {
      key: 'user',
      label: 'Benutzer',
      render: (log: ActivityLogEntry) => (
        <div className="text-sm">
          <p className="text-gray-900 dark:text-white">
            {log.userName || 'System'}
          </p>
        </div>
      ),
    },
    {
      key: 'ipAddress',
      label: 'IP-Adresse',
      render: (log: ActivityLogEntry) => (
        <span className="text-gray-500 dark:text-gray-400 font-mono text-xs">
          {log.ipAddress || '-'}
        </span>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Aktivitätsprotokoll"
        description="Übersicht aller Systemaktivitäten"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {Object.entries(actionLabels).map(([action, info]) => {
          const count = logs.filter((l: ActivityLogEntry) => l.action === action).length;
          return (
            <div key={action} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{count}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
            </div>
          );
        })}
      </div>

      <DataTable<ActivityLogEntry>
        columns={columns as Array<{
          key: keyof ActivityLogEntry;
          label: string;
          className?: string;
          render?: (item: ActivityLogEntry) => React.ReactNode;
        }>}
        data={logs}
        keyExtractor={(log) => log.id}
        emptyMessage="Noch keine Aktivitäten protokolliert."
      />

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">
              Hinweis zum Aktivitätsprotokoll
            </h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
              Das Protokoll zeigt die letzten 100 Aktivitäten. Ältere Einträge werden automatisch archiviert.
              Für detaillierte Audit-Logs nutzen Sie das Payload CMS unter{' '}
              <Link href="/admin" className="underline font-medium">
                /admin
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
