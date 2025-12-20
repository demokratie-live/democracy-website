'use client';

import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Alert, AlertDescription } from '@/components/ui/Alert';

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: formData.get('type'),
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Fehler beim Senden der Nachricht');
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
            Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="error">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Select
        name="type"
        label="Art der Anfrage"
        required
        options={[
          { value: 'contact', label: 'Allgemeine Anfrage' },
          { value: 'bugreport', label: 'Fehler melden' },
          { value: 'volunteer', label: 'Mithelfen' },
        ]}
      />

      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="Ihr Name"
        required
      />

      <Input
        type="email"
        name="email"
        label="E-Mail"
        placeholder="ihre@email.de"
        required
      />

      <Input
        type="text"
        name="subject"
        label="Betreff"
        placeholder="Betreff Ihrer Nachricht"
        required
      />

      <Textarea
        name="message"
        label="Nachricht"
        placeholder="Ihre Nachricht an uns..."
        required
        rows={6}
      />

      <Button type="submit" loading={loading} className="w-full">
        Nachricht senden
      </Button>
    </form>
  );
}
