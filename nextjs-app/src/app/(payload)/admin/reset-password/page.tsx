'use client';

/**
 * Custom Reset Password Page for Payload CMS
 * 
 * Diese Seite ersetzt die Standard-Passwort-zurücksetzen-Ansicht von Payload CMS
 * mit einem Design, das der Login-Seite entspricht.
 */

import { useState, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

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
    marginBottom: '1rem',
  },
  formGroupLarge: {
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

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Handle reset password
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Die Passwörter stimmen nicht überein');
      return;
    }

    if (password.length < 8) {
      setError('Das Passwort muss mindestens 8 Zeichen lang sein');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/admin-users/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.errors?.[0]?.message || 'Fehler beim Zurücksetzen des Passworts');
        setLoading(false);
        return;
      }

      setSuccess(true);
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/admin/login');
      }, 2000);
    } catch {
      setError('Netzwerkfehler');
    } finally {
      setLoading(false);
    }
  }, [token, password, confirmPassword, router]);

  const isDisabled = loading || !password || !confirmPassword;

  if (!token) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.iconContainer}>
              <span>⚠️</span>
            </div>
            <h1 style={styles.title}>
              Ungültiger Link
            </h1>
            <p style={styles.subtitle}>
              Der Link zum Zurücksetzen des Passworts ist ungültig oder abgelaufen.
            </p>
          </div>

          <div style={styles.backLink}>
            <a
              href="/admin/forgot-password"
              style={styles.link}
            >
              Neuen Link anfordern
            </a>
          </div>

          <div style={styles.footer}>
            <p style={styles.footerText}>
              DEMOCRACY Deutschland e.V.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <span>🔒</span>
          </div>
          <h1 style={styles.title}>
            Neues Passwort
          </h1>
          <p style={styles.subtitle}>
            Geben Sie Ihr neues Passwort ein
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
              Ihr Passwort wurde erfolgreich zurückgesetzt. Sie werden zur Anmeldung weitergeleitet...
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Neues Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                style={styles.input}
                placeholder="••••••••"
              />
            </div>

            <div style={styles.formGroupLarge}>
              <label style={styles.label}>
                Passwort bestätigen
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={styles.input}
                placeholder="••••••••"
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
              {loading ? 'Wird gespeichert...' : 'Passwort speichern'}
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div style={styles.container}>
        <div style={{ color: '#ffffff' }}>Wird geladen...</div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}
