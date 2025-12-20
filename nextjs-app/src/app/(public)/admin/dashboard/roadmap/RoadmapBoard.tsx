'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { ConfirmDialog } from '@/components/admin';
import { cn } from '@/lib/utils';

interface RoadmapItem {
  id: string;
  title: string;
  description: string | null;
  priority: number;
  status: string;
  targetDate: Date | null;
}

interface RoadmapBoardProps {
  planned: RoadmapItem[];
  inProgress: RoadmapItem[];
  completed: RoadmapItem[];
}

interface ColumnProps {
  title: string;
  items: RoadmapItem[];
  color: string;
  bgColor: string;
  onStatusChange: (id: string, newStatus: string) => void;
  onDelete: (item: RoadmapItem) => void;
}

function Column({ title, items, color, bgColor, onStatusChange, onDelete }: ColumnProps) {
  return (
    <div className="flex flex-col min-w-[300px] lg:min-w-0">
      <div className={cn('px-4 py-3 rounded-t-lg', bgColor)}>
        <div className="flex items-center justify-between">
          <h3 className={cn('font-semibold', color)}>{title}</h3>
          <span className={cn('text-sm font-medium px-2 py-0.5 rounded-full', bgColor, color)}>
            {items.length}
          </span>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg p-3 space-y-3 min-h-[400px]">
        {items.map((item) => (
          <RoadmapCard
            key={item.id}
            item={item}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))}
        {items.length === 0 && (
          <div className="text-center py-8 text-gray-400 dark:text-gray-500 text-sm">
            Keine Einträge
          </div>
        )}
      </div>
    </div>
  );
}

interface RoadmapCardProps {
  item: RoadmapItem;
  onStatusChange: (id: string, newStatus: string) => void;
  onDelete: (item: RoadmapItem) => void;
}

function RoadmapCard({ item, onStatusChange, onDelete }: RoadmapCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-2">
          {item.title}
        </h4>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 z-20 py-1">
                <Link
                  href={`/admin/dashboard/roadmap/${item.id}/edit`}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Bearbeiten
                </Link>
                <div className="border-t border-gray-200 dark:border-gray-600 my-1" />
                <p className="px-4 py-1 text-xs text-gray-500 dark:text-gray-400 font-medium">Status ändern:</p>
                {item.status !== 'planned' && (
                  <button
                    onClick={() => { onStatusChange(item.id, 'planned'); setMenuOpen(false); }}
                    className="flex items-center w-full px-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    → Geplant
                  </button>
                )}
                {item.status !== 'in-progress' && (
                  <button
                    onClick={() => { onStatusChange(item.id, 'in-progress'); setMenuOpen(false); }}
                    className="flex items-center w-full px-4 py-2 text-sm text-orange-600 dark:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    → In Bearbeitung
                  </button>
                )}
                {item.status !== 'completed' && (
                  <button
                    onClick={() => { onStatusChange(item.id, 'completed'); setMenuOpen(false); }}
                    className="flex items-center w-full px-4 py-2 text-sm text-green-600 dark:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    → Abgeschlossen
                  </button>
                )}
                <div className="border-t border-gray-200 dark:border-gray-600 my-1" />
                <button
                  onClick={() => { onDelete(item); setMenuOpen(false); }}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Löschen
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      {item.description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
          {item.description}
        </p>
      )}

      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-400 dark:text-gray-500">
          Priorität: {item.priority}
        </span>
        {item.targetDate && (
          <span className="text-gray-500 dark:text-gray-400">
            {formatDate(item.targetDate)}
          </span>
        )}
      </div>
    </div>
  );
}

export function RoadmapBoard({ planned, inProgress, completed }: RoadmapBoardProps) {
  const router = useRouter();
  const [deleteItem, setDeleteItem] = useState<RoadmapItem | null>(null);
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/roadmap/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error('Status change error:', error);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/roadmap/${deleteItem.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.refresh();
        setDeleteItem(null);
      }
    } catch (error) {
      console.error('Delete error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-x-auto pb-4">
        <Column
          title="Geplant"
          items={planned}
          color="text-purple-700 dark:text-purple-300"
          bgColor="bg-purple-100 dark:bg-purple-900/30"
          onStatusChange={handleStatusChange}
          onDelete={setDeleteItem}
        />
        <Column
          title="In Bearbeitung"
          items={inProgress}
          color="text-orange-700 dark:text-orange-300"
          bgColor="bg-orange-100 dark:bg-orange-900/30"
          onStatusChange={handleStatusChange}
          onDelete={setDeleteItem}
        />
        <Column
          title="Abgeschlossen"
          items={completed}
          color="text-green-700 dark:text-green-300"
          bgColor="bg-green-100 dark:bg-green-900/30"
          onStatusChange={handleStatusChange}
          onDelete={setDeleteItem}
        />
      </div>

      <ConfirmDialog
        open={!!deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        title="Roadmap-Item löschen"
        message={`Möchten Sie "${deleteItem?.title}" wirklich löschen?`}
        confirmLabel="Löschen"
        variant="danger"
        loading={loading}
      />
    </>
  );
}
