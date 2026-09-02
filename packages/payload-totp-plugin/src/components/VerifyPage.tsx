'use client';

/**
 * TOTP Verify Page Component
 * 
 * Provides a styled verification form for TOTP codes.
 */

import React, { useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { styles } from './styles';
import type { TotpLabels } from '../types';

export interface VerifyPageProps {
  /**
   * Path to redirect after successful verification
   */
  defaultRedirectPath?: string;

  /**
   * Path to login page
   */
  loginPagePath?: string;

  /**
   * Path to TOTP setup page
   */
  setupPagePath?: string;

  /**
   * API endpoint to validate TOTP
   */
  validateEndpoint?: string;

  /**
   * API endpoint to check TOTP status
   */
  statusEndpoint?: string;

  /**
   * API endpoint to get current user
   */
  meEndpoint?: string;

  /**
   * API endpoint for logout
   */
  logoutEndpoint?: string;

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

export function VerifyPage({
  defaultRedirectPath = '/admin',
  loginPagePath = '/admin/login',
  setupPagePath = '/admin-setup-totp',
  validateEndpoint = '/api/admin/totp/validate',
  statusEndpoint = '/api/admin/totp/status',
  meEndpoint = '/api/admin-users/me',
  logoutEndpoint = '/api/admin-users/logout',
  icon = '🔐',
  footerText,
  labels = {},
}: VerifyPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || defaultRedirectPath;

  const [totpCode, setTotpCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBackupCode, setIsBackupCode] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [needsTotp, setNeedsTotp] = useState(false);

  // Merge with default labels
  const l = {
    verifyTitle: labels.verifyTitle || 'Zwei-Faktor-Authentifizierung',
    verifySubtitle: labels.verifySubtitle || 'Geben Sie den Code aus Ihrer Authenticator-App ein',
    verifyButton: labels.verifyButton || 'Verifizieren',
    verifyLoading: labels.verifyLoading || 'Wird verifiziert...',
    codeLabel: labels.codeLabel || '6-stelliger Code',
    backupCodeLabel: labels.backupCodeLabel || 'Backup-Code',
    useBackupCode: labels.useBackupCode || 'Backup-Code verwenden',
    useAuthenticator: labels.useAuthenticator || 'Authenticator-App verwenden',
    logoutButton: labels.logoutButton || 'Abmelden',
    invalidCode: labels.invalidCode || 'Ungültiger Code',
    networkError: labels.networkError || 'Netzwerkfehler',
  };

  // Check if user needs TOTP verification
  useEffect(() => {
    const checkUser = async () => {
      try {
        const meResponse = await fetch(meEndpoint, {
          credentials: 'include',
        });

        if (!meResponse.ok) {
          router.push(loginPagePath);
          return;
        }

        const meData = await meResponse.json();
        if (!meData.user) {
          router.push(loginPagePath);
          return;
        }

        setUserId(meData.user.id);
        setUserEmail(meData.user.email);

        // Check TOTP status
        const statusResponse = await fetch(statusEndpoint, {
          credentials: 'include',
        });

        if (!statusResponse.ok) {
          router.push(redirect);
          return;
        }

        const statusData = await statusResponse.json();

        if (statusData.success) {
          const { globalEnabled, required, enabled, verified } = statusData.data;

          if (!globalEnabled) {
            router.push(redirect);
            return;
          }

          if (required && !enabled) {
            router.push(`${setupPagePath}?redirect=${encodeURIComponent(redirect)}`);
            return;
          }

          if (enabled && verified) {
            setNeedsTotp(true);
          } else {
            router.push(redirect);
          }
        } else {
          router.push(redirect);
        }
      } catch (err) {
        console.error('TOTP check error:', err);
        router.push(redirect);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [router, redirect, meEndpoint, statusEndpoint, loginPagePath, setupPagePath]);

  // Handle TOTP verification
  const handleVerify = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setVerifying(true);
      setError(null);

      try {
        const response = await fetch(validateEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            userId,
            token: totpCode,
            isBackupCode,
          }),
        });

        const data = await response.json();

        if (data.success) {
          router.push(redirect);
        } else {
          setError(data.error || l.invalidCode);
        }
      } catch {
        setError(l.networkError);
      } finally {
        setVerifying(false);
      }
    },
    [userId, totpCode, isBackupCode, router, redirect, validateEndpoint, l]
  );

  // Logout
  const handleLogout = useCallback(async () => {
    try {
      await fetch(logoutEndpoint, {
        method: 'POST',
        credentials: 'include',
      });
    } catch {
      // Ignore
    }
    router.push(loginPagePath);
  }, [router, logoutEndpoint, loginPagePath]);

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Wird geladen...</div>
      </div>
    );
  }

  if (!needsTotp) {
    return null;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <span>{icon}</span>
          </div>
          <h1 style={styles.title}>{l.verifyTitle}</h1>
          <p style={styles.subtitle}>{l.verifySubtitle}</p>
          {userEmail && <p style={styles.userEmail}>{userEmail}</p>}
        </div>

        {error && <div style={styles.errorBox}>{error}</div>}

        <form onSubmit={handleVerify}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              {isBackupCode ? l.backupCodeLabel : l.codeLabel}
            </label>
            <input
              type="text"
              value={totpCode}
              onChange={(e) => {
                if (isBackupCode) {
                  setTotpCode(e.target.value.toUpperCase());
                } else {
                  setTotpCode(e.target.value.replace(/\D/g, ''));
                }
              }}
              placeholder={isBackupCode ? 'XXXXXXXX' : '000000'}
              maxLength={isBackupCode ? 8 : 6}
              autoFocus
              style={styles.inputCode}
            />
          </div>

          <button
            type="submit"
            disabled={verifying || (!isBackupCode && totpCode.length !== 6)}
            style={{
              ...styles.button,
              ...(verifying || (!isBackupCode && totpCode.length !== 6)
                ? styles.buttonDisabled
                : {}),
            }}
          >
            {verifying ? l.verifyLoading : l.verifyButton}
          </button>
        </form>

        <div style={styles.linkContainer}>
          <button
            type="button"
            onClick={() => {
              setIsBackupCode(!isBackupCode);
              setTotpCode('');
              setError(null);
            }}
            style={styles.link}
          >
            {isBackupCode ? l.useAuthenticator : l.useBackupCode}
          </button>
        </div>

        <div style={styles.linkContainer}>
          <button type="button" onClick={handleLogout} style={styles.linkMuted}>
            {l.logoutButton}
          </button>
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

export default VerifyPage;
