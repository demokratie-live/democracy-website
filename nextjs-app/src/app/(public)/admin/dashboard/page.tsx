import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { PageHeader, StatsCard, ProgressBar } from '@/components/admin';
import { formatDate, formatCurrency } from '@/lib/utils';

// Dashboard data fetching
async function getDashboardStats() {
  const [
    faqCount,
    betaRegistrations,
    betaCodes,
    donationSettings,
  ] = await Promise.all([
    prisma.faq.count({ where: { active: true } }),
    prisma.betaRegistration.count(),
    prisma.betaCode.count({ where: { active: true } }),
    prisma.donationSettings.findFirst(),
  ]);

  // Get recent registrations for the week
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const recentRegistrations = await prisma.betaRegistration.count({
    where: { createdAt: { gte: weekAgo } },
  });

  return {
    faqCount,
    betaRegistrations,
    betaCodes,
    recentRegistrations,
    donationSettings,
  };
}

async function getRecentActivity() {
  const recentRegistrations = await prisma.betaRegistration.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      email: true,
      ios: true,
      android: true,
      createdAt: true,
    },
  });

  return recentRegistrations.map((reg) => ({
    id: reg.id,
    action: 'Beta Registrierung',
    description: reg.email,
    platform: reg.ios ? 'iOS' : reg.android ? 'Android' : 'Beide',
    createdAt: reg.createdAt,
  }));
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();
  const recentActivity = await getRecentActivity();

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Willkommen im DEMOCRACY Admin-Bereich"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Beta Registrierungen"
          value={stats.betaRegistrations}
          change={{
            value: stats.recentRegistrations,
            type: stats.recentRegistrations > 0 ? 'increase' : 'neutral',
          }}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />

        <StatsCard
          title="Aktive Beta-Codes"
          value={stats.betaCodes}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          }
        />

        <StatsCard
          title="FAQs"
          value={stats.faqCount}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        <StatsCard
          title="Spendenstand"
          value={formatCurrency(stats.donationSettings?.currentValue || 0)}
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* Donation Progress */}
      {stats.donationSettings && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Spendenfortschritt
          </h2>
          <ProgressBar
            value={stats.donationSettings.currentValue}
            max={stats.donationSettings.goalValue}
            label={`${formatCurrency(stats.donationSettings.currentValue)} von ${formatCurrency(stats.donationSettings.goalValue)}`}
            size="lg"
          />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Unterstützer</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {stats.donationSettings.patrons} / {stats.donationSettings.patronsGoal}
              </p>
            </div>
            <div className="text-right">
              <Link
                href="/admin/dashboard/donations"
                className="text-sm font-medium hover:underline"
                style={{ color: 'rgb(68, 148, 211)' }}
              >
                Spenden verwalten →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Letzte Aktivitäten
            </h2>
            <Link
              href="/admin/dashboard/activity"
              className="text-sm font-medium hover:underline"
              style={{ color: 'rgb(68, 148, 211)' }}
            >
              Alle anzeigen
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentActivity.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Keine aktuellen Aktivitäten
              </p>
            ) : (
              recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(68, 148, 211, 0.1)' }}>
                    <svg className="w-4 h-4" style={{ color: 'rgb(68, 148, 211)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {formatDate(activity.createdAt)} • {activity.platform}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Schnellzugriff
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/admin/dashboard/faqs/new"
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-8 h-8 mb-2" style={{ color: 'rgb(68, 148, 211)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Neue FAQ</span>
            </Link>

            <Link
              href="/admin/dashboard/media/new"
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-8 h-8 mb-2" style={{ color: 'rgb(68, 148, 211)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Neuer Pressebeitrag</span>
            </Link>

            <Link
              href="/admin/dashboard/beta/codes/new"
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-8 h-8 mb-2" style={{ color: 'rgb(68, 148, 211)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Neuer Beta-Code</span>
            </Link>

            <Link
              href="/admin/dashboard/roadmap/new"
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-8 h-8 mb-2" style={{ color: 'rgb(68, 148, 211)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Neues Roadmap-Item</span>
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
            <Link
              href="/admin"
              className="flex items-center justify-center w-full py-3 px-4 text-sm font-medium text-white rounded-lg transition-colors"
              style={{ backgroundColor: 'rgb(68, 148, 211)' }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Payload CMS öffnen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
