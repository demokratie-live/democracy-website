'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/admin';
import { Button, Input, Textarea, Select } from '@/components/ui';

interface RoadmapFormData {
  title: string;
  description: string;
  priority: number;
  status: string;
  targetDate: string;
}

interface RoadmapFormProps {
  initialData?: {
    id: string;
    title: string;
    description: string | null;
    priority: number;
    status: string;
    targetDate: Date | null;
  };
  isEdit?: boolean;
}

export function RoadmapForm({ initialData, isEdit = false }: RoadmapFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<RoadmapFormData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    priority: initialData?.priority || 0,
    status: initialData?.status || 'planned',
    targetDate: initialData?.targetDate
      ? new Date(initialData.targetDate).toISOString().split('T')[0]
      : '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = isEdit
        ? `/api/admin/roadmap/${initialData?.id}`
        : '/api/admin/roadmap';
      
      const response = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/dashboard/roadmap');
        router.refresh();
      } else {
        const data = await response.json();
        setError(data.error || 'Ein Fehler ist aufgetreten');
      }
    } catch {
      setError('Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHeader
        title={isEdit ? 'Roadmap-Item bearbeiten' : 'Neues Roadmap-Item'}
        description={isEdit ? 'Bearbeiten Sie die Details' : 'Fügen Sie ein neues Roadmap-Item hinzu'}
      />

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Titel *
            </label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="z.B. Push-Benachrichtigungen implementieren"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Beschreibung
            </label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Detaillierte Beschreibung des Features..."
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status *
              </label>
              <Select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                options={[
                  { value: 'planned', label: 'Geplant' },
                  { value: 'in-progress', label: 'In Bearbeitung' },
                  { value: 'completed', label: 'Abgeschlossen' },
                ]}
              />
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Priorität
              </label>
              <Input
                id="priority"
                type="number"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: parseInt(e.target.value) || 0 })}
                min={0}
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Niedrigere Zahlen = höhere Priorität
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="targetDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Zieldatum
            </label>
            <Input
              id="targetDate"
              type="date"
              value={formData.targetDate}
              onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={loading}
            >
              Abbrechen
            </Button>
            <Button type="submit" loading={loading}>
              {isEdit ? 'Speichern' : 'Erstellen'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RoadmapForm;
