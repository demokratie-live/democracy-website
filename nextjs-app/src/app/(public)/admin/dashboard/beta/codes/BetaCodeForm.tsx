'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/admin';
import { Button, Input, Checkbox } from '@/components/ui';

interface BetaCodeFormData {
  code: string;
  maxUses: number;
  active: boolean;
}

interface BetaCodeFormProps {
  initialData?: {
    id: string;
    code: string;
    uses: number;
    maxUses: number;
    active: boolean;
  };
  isEdit?: boolean;
}

function generateRandomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export function BetaCodeForm({ initialData, isEdit = false }: BetaCodeFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<BetaCodeFormData>({
    code: initialData?.code || generateRandomCode(),
    maxUses: initialData?.maxUses || 1,
    active: initialData?.active ?? true,
  });

  const handleGenerateCode = () => {
    setFormData({ ...formData, code: generateRandomCode() });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = isEdit
        ? `/api/admin/beta/codes/${initialData?.id}`
        : '/api/admin/beta/codes';
      
      const response = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/dashboard/beta/codes');
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
        title={isEdit ? 'Beta-Code bearbeiten' : 'Neuer Beta-Code'}
        description={isEdit ? 'Bearbeiten Sie die Code-Details' : 'Erstellen Sie einen neuen Beta-Zugangs-Code'}
      />

      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Code *
            </label>
            <div className="flex gap-2">
              <Input
                id="code"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                placeholder="z.B. DEMO2024"
                className="font-mono"
                required
                disabled={isEdit}
              />
              {!isEdit && (
                <Button type="button" variant="outline" onClick={handleGenerateCode}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </Button>
              )}
            </div>
            {isEdit && (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Der Code kann nach der Erstellung nicht mehr geändert werden
              </p>
            )}
          </div>

          <div>
            <label htmlFor="maxUses" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Maximale Nutzungen
            </label>
            <Input
              id="maxUses"
              type="number"
              value={formData.maxUses}
              onChange={(e) => setFormData({ ...formData, maxUses: parseInt(e.target.value) || 1 })}
              min={1}
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Wie oft kann dieser Code verwendet werden?
            </p>
            {isEdit && initialData && (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Bereits verwendet: {initialData.uses} mal
              </p>
            )}
          </div>

          <div className="flex items-center">
            <Checkbox
              id="active"
              checked={formData.active}
              onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
            />
            <label htmlFor="active" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Aktiv (Code kann verwendet werden)
            </label>
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

export default BetaCodeForm;
