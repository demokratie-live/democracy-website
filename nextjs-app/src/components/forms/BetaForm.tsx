'use client';

import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Alert, AlertDescription } from '@/components/ui/Alert';

interface BetaFormProps {
  onSuccess?: () => void;
}

export function BetaForm({ onSuccess }: BetaFormProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      betaCode: formData.get('betaCode'),
      platform: formData.get('platform'),
      subscribe: formData.get('subscribe') === 'on',
    };

    try {
      const response = await fetch('/api/beta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Fehler bei der Registrierung');
      }

      setSuccess(true);
      e.currentTarget.reset();
      
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <Alert variant="success">
          <AlertDescription>
            Erfolgreich registriert! Sie wurden zur Alpha-Liste hinzugefügt.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="error">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Input
        type="email"
        name="email"
        label="E-Mail-Adresse"
        placeholder="ihre@email.de"
        required
      />

      <Input
        type="text"
        name="betaCode"
        label="Beta-Code"
        placeholder="Ihr Beta-Code"
        required
      />

      <Select
        name="platform"
        label="Plattform"
        required
        options={[
          { value: 'ios', label: 'iOS' },
          { value: 'android', label: 'Android' },
        ]}
      />

      <Checkbox
        name="subscribe"
        label="Ich möchte den Newsletter abonnieren"
      />

      <Button type="submit" loading={loading} className="w-full">
        Jetzt registrieren
      </Button>
    </form>
  );
}
