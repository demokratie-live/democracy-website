'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components/ui';

interface DonationSettings {
  id: string;
  currentValue: number;
  goalValue: number;
  patrons: number;
  patronsGoal: number;
}

interface DonationSettingsFormProps {
  settings: DonationSettings | null;
}

export function DonationSettingsForm({ settings }: DonationSettingsFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    currentValue: settings?.currentValue || 0,
    goalValue: settings?.goalValue || 0,
    patrons: settings?.patrons || 0,
    patronsGoal: settings?.patronsGoal || 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/admin/donations/settings', {
        method: settings ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        router.refresh();
        setTimeout(() => setSuccess(false), 3000);
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
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Spendenstand aktualisieren
      </h2>

      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-sm text-green-600 dark:text-green-400">
              ✓ Einstellungen erfolgreich gespeichert!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="currentValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Aktueller Spendenstand (€)
            </label>
            <Input
              id="currentValue"
              type="number"
              value={formData.currentValue}
              onChange={(e) => setFormData({ ...formData, currentValue: parseInt(e.target.value) || 0 })}
              min={0}
            />
          </div>

          <div>
            <label htmlFor="goalValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Spendenziel (€)
            </label>
            <Input
              id="goalValue"
              type="number"
              value={formData.goalValue}
              onChange={(e) => setFormData({ ...formData, goalValue: parseInt(e.target.value) || 0 })}
              min={0}
            />
          </div>

          <div>
            <label htmlFor="patrons" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Aktuelle Unterstützer
            </label>
            <Input
              id="patrons"
              type="number"
              value={formData.patrons}
              onChange={(e) => setFormData({ ...formData, patrons: parseInt(e.target.value) || 0 })}
              min={0}
            />
          </div>

          <div>
            <label htmlFor="patronsGoal" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Ziel Unterstützer
            </label>
            <Input
              id="patronsGoal"
              type="number"
              value={formData.patronsGoal}
              onChange={(e) => setFormData({ ...formData, patronsGoal: parseInt(e.target.value) || 0 })}
              min={0}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button type="submit" loading={loading}>
            Speichern
          </Button>
        </div>
      </form>
    </div>
  );
}
