'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/admin';
import { Button, Input, Textarea } from '@/components/ui';

interface MediaFormData {
  title: string;
  description: string;
  url: string;
  outlet: string;
  imageUrl: string;
  publishedAt: string;
}

interface MediaFormProps {
  initialData?: {
    id: string;
    title: string;
    description: string | null;
    url: string;
    outlet: string | null;
    imageUrl: string | null;
    publishedAt: Date;
  };
  isEdit?: boolean;
}

export function MediaForm({ initialData, isEdit = false }: MediaFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<MediaFormData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    url: initialData?.url || '',
    outlet: initialData?.outlet || '',
    imageUrl: initialData?.imageUrl || '',
    publishedAt: initialData?.publishedAt
      ? new Date(initialData.publishedAt).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = isEdit
        ? `/api/admin/media/${initialData?.id}`
        : '/api/admin/media';
      
      const response = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/dashboard/media');
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
        title={isEdit ? 'Pressebeitrag bearbeiten' : 'Neuer Pressebeitrag'}
        description={isEdit ? 'Bearbeiten Sie die Details' : 'Fügen Sie einen neuen Medienbeitrag hinzu'}
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
              placeholder="z.B. DEMOCRACY App im Tagesschau-Bericht"
              required
            />
          </div>

          <div>
            <label htmlFor="outlet" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Medium/Publikation
            </label>
            <Input
              id="outlet"
              value={formData.outlet}
              onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
              placeholder="z.B. Tagesschau, Süddeutsche Zeitung"
            />
          </div>

          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Link zur Veröffentlichung *
            </label>
            <Input
              id="url"
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="https://..."
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
              placeholder="Kurze Beschreibung des Beitrags..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Bild-URL
              </label>
              <Input
                id="imageUrl"
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                placeholder="https://..."
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Oder laden Sie Bilder über das Payload CMS hoch
              </p>
            </div>

            <div>
              <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Veröffentlichungsdatum *
              </label>
              <Input
                id="publishedAt"
                type="date"
                value={formData.publishedAt}
                onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                required
              />
            </div>
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

export default MediaForm;
