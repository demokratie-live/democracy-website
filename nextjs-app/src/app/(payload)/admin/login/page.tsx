'use client';

/**
 * Custom Login Page for Payload CMS
 * 
 * Diese Seite ersetzt die Standard-Login-Ansicht von Payload CMS
 * mit einem Design, das der TOTP-Verifizierungsseite entspricht.
 */

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Styles - matching the TOTP verification page design
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
  forgotLink: {
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

export default function CustomLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle login
  const handleLogin = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Check if user has TOTP enabled
      const checkResponse = await fetch('/api/admin/totp/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const checkData = await checkResponse.json();

      // Perform the actual login
      const loginResponse = await fetch('/api/admin-users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (!loginResponse.ok) {
        const loginError = await loginResponse.json();
        setError(loginError.errors?.[0]?.message || 'Anmeldung fehlgeschlagen');
        setLoading(false);
        return;
      }

      if (checkData.success && checkData.data?.totpRequired) {
        // TOTP is enabled, redirect to verification page
        router.push('/admin-verify-totp?redirect=/admin');
      } else {
        // No TOTP required, redirect to admin dashboard
        router.push('/admin');
      }
    } catch {
      setError('Netzwerkfehler bei der Anmeldung');
    } finally {
      setLoading(false);
    }
  }, [email, password, router]);

  const isDisabled = loading || !email || !password;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <span>🏛️</span>
          </div>
          <h1 style={styles.title}>
            DEMOCRACY Admin
          </h1>
          <p style={styles.subtitle}>
            Melden Sie sich an, um fortzufahren
          </p>
        </div>

        {error && (
          <div style={styles.errorBox}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
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

          <div style={styles.formGroupLarge}>
            <label style={styles.label}>
              Passwort
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? 'Wird angemeldet...' : 'Anmelden'}
          </button>
        </form>

        <div style={styles.forgotLink}>
          <a
            href="/admin/forgot-password"
            style={styles.link}
          >
            Passwort vergessen?
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
