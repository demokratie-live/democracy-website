'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/admin';
import { Button, Input, Textarea, Checkbox } from '@/components/ui';

interface FAQFormData {
  question: string;
  answer: string;
  order: number;
  active: boolean;
}

interface FAQFormProps {
  initialData?: FAQFormData & { id: string };
  isEdit?: boolean;
}

export function FAQForm({ initialData, isEdit = false }: FAQFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FAQFormData>({
    question: initialData?.question || '',
    answer: initialData?.answer || '',
    order: initialData?.order || 0,
    active: initialData?.active ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = isEdit
        ? `/api/admin/faqs/${initialData?.id}`
        : '/api/admin/faqs';
      
      const response = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/dashboard/faqs');
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
        title={isEdit ? 'FAQ bearbeiten' : 'Neue FAQ erstellen'}
        description={isEdit ? 'Bearbeiten Sie die FAQ-Details' : 'Erstellen Sie eine neue häufig gestellte Frage'}
      />

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Frage *
            </label>
            <Input
              id="question"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              placeholder="z.B. Wie funktioniert die App?"
              required
            />
          </div>

          <div>
            <label htmlFor="answer" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Antwort *
            </label>
            <Textarea
              id="answer"
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              placeholder="Geben Sie hier die Antwort ein..."
              rows={6}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="order" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Reihenfolge
              </label>
              <Input
                id="order"
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                min={0}
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Niedrigere Zahlen erscheinen zuerst
              </p>
            </div>

            <div className="flex items-center pt-6">
              <Checkbox
                id="active"
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
              />
              <label htmlFor="active" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Aktiv (auf der Website sichtbar)
              </label>
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

export default FAQForm;
