'use client';

import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Alert, AlertDescription } from '@/components/ui/Alert';

interface NewsletterFormProps {
  inline?: boolean;
  showLabel?: boolean;
}

export function NewsletterForm({ inline = false, showLabel = true }: NewsletterFormProps) {
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
    };

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Fehler bei der Anmeldung');
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  if (inline) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        {success && (
          <Alert variant="success">
            <AlertDescription>
              Erfolgreich angemeldet! Bitte bestätigen Sie Ihre E-Mail-Adresse.
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="error">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="flex gap-2">
          <Input
            type="email"
            name="email"
            placeholder="ihre@email.de"
            required
            className="flex-1"
          />
          <Button type="submit" loading={loading}>
            Anmelden
          </Button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <Alert variant="success">
          <AlertDescription>
            Erfolgreich angemeldet! Bitte bestätigen Sie Ihre E-Mail-Adresse.
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
        label={showLabel ? 'E-Mail-Adresse' : undefined}
        placeholder="ihre@email.de"
        required
      />

      <Button type="submit" loading={loading} className="w-full">
        Zum Newsletter anmelden
      </Button>
    </form>
  );
}
