'use client';

/**
 * Custom Forgot Password Page for Payload CMS
 * 
 * Diese Seite ersetzt die Standard-Passwort-vergessen-Ansicht von Payload CMS
 * mit einem Design, das der Login-Seite entspricht.
 */

import { useState, useCallback } from 'react';

// Styles - matching the Login page design
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111827',
    padding: '1rem',
  },
  card: {
    backgroundColor: '#1f2937',
    borderRadius: '0.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '2rem',
    maxWidth: '28rem',
    width: '100%',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '1.5rem',
  },
  iconContainer: {
    width: '4rem',
    height: '4rem',
    backgroundColor: '#2563eb',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    fontSize: '1.875rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: 0,
  },
  subtitle: {
    color: '#9ca3af',
    marginTop: '0.5rem',
    fontSize: '0.875rem',
  },
  errorBox: {
    marginBottom: '1rem',
    padding: '0.75rem',
    backgroundColor: 'rgba(127, 29, 29, 0.5)',
    border: '1px solid #ef4444',
    color: '#fca5a5',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
  },
  successBox: {
    marginBottom: '1rem',
    padding: '0.75rem',
    backgroundColor: 'rgba(22, 101, 52, 0.5)',
    border: '1px solid #22c55e',
    color: '#86efac',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#d1d5db',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#374151',
    border: '1px solid #4b5563',
    borderRadius: '0.25rem',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
  },
  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '0.75rem 1rem',
    borderRadius: '0.25rem',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.15s ease-in-out',
  },
  buttonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  backLink: {
    marginTop: '1.5rem',
    textAlign: 'center' as const,
  },
  link: {
    fontSize: '0.875rem',
    color: '#60a5fa',
    textDecoration: 'none',
  },
  footer: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #374151',
    textAlign: 'center' as const,
  },
  footerText: {
    fontSize: '0.75rem',
    color: '#6b7280',
    margin: 0,
  },
};

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Handle forgot password request
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/admin-users/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.errors?.[0]?.message || 'Fehler beim Zurücksetzen des Passworts');
        setLoading(false);
        return;
      }

      setSuccess(true);
    } catch {
      setError('Netzwerkfehler');
    } finally {
      setLoading(false);
    }
  }, [email]);

  const isDisabled = loading || !email;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <span>🔑</span>
          </div>
          <h1 style={styles.title}>
            Passwort vergessen
          </h1>
          <p style={styles.subtitle}>
            Geben Sie Ihre E-Mail-Adresse ein, um einen Link zum Zurücksetzen zu erhalten
          </p>
        </div>

        {error && (
          <div style={styles.errorBox}>
            {error}
          </div>
        )}

        {success ? (
          <div>
            <div style={styles.successBox}>
              Falls ein Konto mit dieser E-Mail-Adresse existiert, wurde eine E-Mail mit Anweisungen zum Zurücksetzen des Passworts gesendet.
            </div>
            <div style={styles.backLink}>
              <a
                href="/admin/login"
                style={styles.link}
              >
                Zurück zur Anmeldung
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                E-Mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                style={styles.input}
                placeholder="admin@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              style={{
                ...styles.button,
                ...(isDisabled ? styles.buttonDisabled : {}),
              }}
            >
              {loading ? 'Wird gesendet...' : 'Passwort zurücksetzen'}
            </button>

            <div style={styles.backLink}>
              <a
                href="/admin/login"
                style={styles.link}
              >
                Zurück zur Anmeldung
              </a>
            </div>
          </form>
        )}

        <div style={styles.footer}>
          <p style={styles.footerText}>
            DEMOCRACY Deutschland e.V.
          </p>
        </div>
      </div>
    </div>
  );
}
