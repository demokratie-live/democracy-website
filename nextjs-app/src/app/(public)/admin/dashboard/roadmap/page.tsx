import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { PageHeader } from '@/components/admin';
import { Button } from '@/components/ui';
import { RoadmapBoard } from './RoadmapBoard';

async function getRoadmapItems() {
  return prisma.roadmap.findMany({
    orderBy: { priority: 'asc' },
  });
}

export default async function RoadmapPage() {
  const items = await getRoadmapItems();

  const planned = items.filter((i) => i.status === 'planned');
  const inProgress = items.filter((i) => i.status === 'in-progress');
  const completed = items.filter((i) => i.status === 'completed');

  return (
    <div>
      <PageHeader
        title="Roadmap"
        description={`${items.length} Roadmap-Einträge verwalten`}
        actions={
          <Link href="/admin/dashboard/roadmap/new">
            <Button>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Neues Item
            </Button>
          </Link>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{planned.length}</p>
          <p className="text-sm text-purple-600 dark:text-purple-400">Geplant</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
          <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{inProgress.length}</p>
          <p className="text-sm text-orange-600 dark:text-orange-400">In Bearbeitung</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <p className="text-2xl font-bold text-green-700 dark:text-green-300">{completed.length}</p>
          <p className="text-sm text-green-600 dark:text-green-400">Abgeschlossen</p>
        </div>
      </div>

      {/* Kanban Board */}
      <RoadmapBoard
        planned={planned}
        inProgress={inProgress}
        completed={completed}
      />
    </div>
  );
}
