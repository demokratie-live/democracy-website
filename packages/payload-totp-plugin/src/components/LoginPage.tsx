'use client';

/**
 * Custom Login Page Component for Payload CMS
 * 
 * Provides a styled login form that integrates with TOTP verification.
 */

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { styles } from './styles';
import type { TotpLabels } from '../types';

export interface LoginPageProps {
  /**
   * Path to the TOTP verify page
   */
  verifyPagePath?: string;

  /**
   * Path to redirect after successful login
   */
  redirectPath?: string;

  /**
   * Path to forgot password page
   */
  forgotPasswordPath?: string;

  /**
   * API endpoint for login
   */
  loginEndpoint?: string;

  /**
   * API endpoint to check TOTP status
   */
  totpCheckEndpoint?: string;

  /**
   * Icon to display in the header
   */
  icon?: string;

  /**
   * Footer text
   */
  footerText?: string;

  /**
   * Labels for internationalization
   */
  labels?: Partial<TotpLabels>;
}

export function LoginPage({
  verifyPagePath = '/admin-verify-totp',
  redirectPath = '/admin',
  forgotPasswordPath = '/admin/forgot-password',
  loginEndpoint = '/api/admin-users/login',
  totpCheckEndpoint = '/api/admin/totp/check',
  icon = '🏛️',
  footerText,
  labels = {},
}: LoginPageProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Merge with default labels
  const l = {
    loginTitle: labels.loginTitle || 'Admin Login',
    loginSubtitle: labels.loginSubtitle || 'Melden Sie sich an, um fortzufahren',
    loginButton: labels.loginButton || 'Anmelden',
    loginLoading: labels.loginLoading || 'Wird angemeldet...',
    emailLabel: labels.emailLabel || 'E-Mail',
    passwordLabel: labels.passwordLabel || 'Passwort',
    forgotPasswordLink: labels.forgotPasswordLink || 'Passwort vergessen?',
    invalidCredentials: labels.invalidCredentials || 'Anmeldung fehlgeschlagen',
    networkError: labels.networkError || 'Netzwerkfehler',
  };

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      try {
        // Check if user has TOTP enabled
        const checkResponse = await fetch(totpCheckEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const checkData = await checkResponse.json();

        // Perform the actual login
        const loginResponse = await fetch(loginEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ email, password }),
        });

        if (!loginResponse.ok) {
          const loginError = await loginResponse.json();
          setError(loginError.errors?.[0]?.message || l.invalidCredentials);
          setLoading(false);
          return;
        }

        if (checkData.success && checkData.data?.totpRequired) {
          // TOTP is enabled, redirect to verification page
          router.push(`${verifyPagePath}?redirect=${encodeURIComponent(redirectPath)}`);
        } else {
          // No TOTP required, redirect to admin dashboard
          router.push(redirectPath);
        }
      } catch {
        setError(l.networkError);
      } finally {
        setLoading(false);
      }
    },
    [email, password, router, verifyPagePath, redirectPath, loginEndpoint, totpCheckEndpoint, l]
  );

  const isDisabled = loading || !email || !password;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <span>{icon}</span>
          </div>
          <h1 style={styles.title}>{l.loginTitle}</h1>
          <p style={styles.subtitle}>{l.loginSubtitle}</p>
        </div>

        {error && <div style={styles.errorBox}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label style={styles.label}>{l.emailLabel}</label>
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
            <label style={styles.label}>{l.passwordLabel}</label>
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
            {loading ? l.loginLoading : l.loginButton}
          </button>
        </form>

        <div style={styles.linkContainer}>
          <a href={forgotPasswordPath} style={styles.link}>
            {l.forgotPasswordLink}
          </a>
        </div>

        {footerText && (
          <div style={styles.footer}>
            <p style={styles.footerText}>{footerText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
