'use client';

/**
 * TOTP Setup Page Component
 * 
 * Provides a styled setup form for configuring TOTP.
 */

import React, { useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { styles } from './styles';
import type { TotpLabels } from '../types';

interface SetupData {
  qrCode: string;
  manualCode: string;
  secret: string;
}

export interface SetupPageProps {
  /**
   * Path to redirect after successful setup
   */
  defaultRedirectPath?: string;

  /**
   * Path to login page
   */
  loginPagePath?: string;

  /**
   * API endpoint to setup TOTP
   */
  setupEndpoint?: string;

  /**
   * API endpoint to verify TOTP setup
   */
  verifyEndpoint?: string;

  /**
   * API endpoint to get current user
   */
  meEndpoint?: string;

  /**
   * Whether setup can be skipped
   */
  allowSkip?: boolean;

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

export function SetupPage({
  defaultRedirectPath = '/admin',
  loginPagePath = '/admin/login',
  setupEndpoint = '/api/admin/totp/setup',
  verifyEndpoint = '/api/admin/totp/verify',
  meEndpoint = '/api/admin-users/me',
  allowSkip = true,
  icon = '🛡️',
  footerText,
  labels = {},
}: SetupPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || defaultRedirectPath;

  const [loading, setLoading] = useState(true);
  const [setupData, setSetupData] = useState<SetupData | null>(null);
  const [verifyCode, setVerifyCode] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [backupCodes, setBackupCodes] = useState<string[] | null>(null);
  const [showManualCode, setShowManualCode] = useState(false);

  // Merge with default labels
  const l = {
    setupTitle: labels.setupTitle || 'Authenticator-App einrichten',
    setupSubtitle: labels.setupSubtitle || 'Scannen Sie den QR-Code mit Ihrer App',
    scanQrCode: labels.scanQrCode || 'QR-Code scannen',
    manualCode: labels.manualCode || 'Code manuell eingeben',
    verifySetup: labels.verifySetup || 'Aktivieren',
    skipSetup: labels.skipSetup || 'Überspringen',
    setupComplete: labels.setupComplete || 'TOTP aktiviert!',
    saveBackupCodes: labels.saveBackupCodes || 'Speichern Sie diese Backup-Codes sicher!',
    codeLabel: labels.codeLabel || '6-stelliger Code',
    invalidCode: labels.invalidCode || 'Ungültiger Code',
    networkError: labels.networkError || 'Netzwerkfehler',
  };

  // Check if user is logged in and start setup
  useEffect(() => {
    const initSetup = async () => {
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

        // Start TOTP setup
        const setupResponse = await fetch(setupEndpoint, {
          method: 'POST',
          credentials: 'include',
        });

        if (setupResponse.ok) {
          const data = await setupResponse.json();
          if (data.success) {
            setSetupData(data.data);
          } else {
            setError(data.error || 'Setup fehlgeschlagen');
          }
        } else {
          setError('Setup fehlgeschlagen');
        }
      } catch (err) {
        console.error('TOTP setup error:', err);
        setError(l.networkError);
      } finally {
        setLoading(false);
      }
    };

    initSetup();
  }, [router, loginPagePath, meEndpoint, setupEndpoint, l.networkError]);

  // Handle TOTP verification
  const handleVerify = useCallback(async () => {
    if (!verifyCode || verifyCode.length !== 6) {
      setError('Bitte geben Sie den 6-stelligen Code ein');
      return;
    }

    setVerifying(true);
    setError(null);

    try {
      const response = await fetch(verifyEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ token: verifyCode }),
      });

      const data = await response.json();

      if (data.success) {
        setBackupCodes(data.data.backupCodes);
        setSetupData(null);
      } else {
        setError(data.error || l.invalidCode);
      }
    } catch {
      setError(l.networkError);
    } finally {
      setVerifying(false);
    }
  }, [verifyCode, verifyEndpoint, l]);

  // Skip setup
  const handleSkip = useCallback(() => {
    router.push(redirect);
  }, [router, redirect]);

  // Finish setup
  const handleFinish = useCallback(() => {
    router.push(redirect);
  }, [router, redirect]);

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Wird geladen...</div>
      </div>
    );
  }

  // Show backup codes after successful setup
  if (backupCodes) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={{ ...styles.iconContainer, backgroundColor: '#16a34a' }}>
              <span>✅</span>
            </div>
            <h1 style={styles.title}>{l.setupComplete}</h1>
          </div>

          <div style={styles.warningBox}>
            <strong>⚠️ {l.saveBackupCodes}</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.75rem' }}>
              Falls Sie keinen Zugriff auf Ihre App haben, können Sie einen dieser Codes verwenden.
            </p>
          </div>

          <div style={styles.backupCodesGrid}>
            {backupCodes.map((code, index) => (
              <div key={index} style={styles.backupCode}>
                {code}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => copyToClipboard(backupCodes.join('\n'))}
            style={{ ...styles.buttonSecondary, marginBottom: '0.5rem' }}
          >
            📋 Kopieren
          </button>

          <button type="button" onClick={handleFinish} style={styles.button}>
            Weiter
          </button>

          {footerText && (
            <div style={styles.footer}>
              <p style={styles.footerText}>{footerText}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Show setup form
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <span>{icon}</span>
          </div>
          <h1 style={styles.title}>{l.setupTitle}</h1>
          <p style={styles.subtitle}>{l.setupSubtitle}</p>
        </div>

        {error && <div style={styles.errorBox}>{error}</div>}

        {setupData && (
          <>
            {/* QR Code */}
            <div style={styles.qrContainer}>
              <img src={setupData.qrCode} alt="TOTP QR Code" style={styles.qrCode} />
            </div>

            {/* Toggle manual code */}
            <div style={styles.linkContainer}>
              <button
                type="button"
                onClick={() => setShowManualCode(!showManualCode)}
                style={styles.link}
              >
                {showManualCode ? l.scanQrCode : l.manualCode}
              </button>
            </div>

            {showManualCode && (
              <div style={styles.manualCodeContainer}>
                <p style={styles.manualCodeLabel}>Manueller Code:</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <code style={{ ...styles.manualCode, flex: 1 }}>
                    {setupData.manualCode}
                  </code>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(setupData.secret)}
                    style={{
                      background: '#4b5563',
                      border: 'none',
                      borderRadius: '0.25rem',
                      padding: '0.5rem',
                      cursor: 'pointer',
                      color: '#fff',
                    }}
                  >
                    📋
                  </button>
                </div>
              </div>
            )}

            {/* Verification */}
            <div
              style={{
                borderTop: '1px solid #374151',
                paddingTop: '1rem',
                marginTop: '1rem',
              }}
            >
              <p style={{ ...styles.subtitle, marginBottom: '0.75rem' }}>
                Geben Sie den 6-stelligen Code aus Ihrer App ein:
              </p>
              <input
                type="text"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                maxLength={6}
                style={{ ...styles.inputCode, marginBottom: '0.75rem' }}
              />
              <button
                type="button"
                onClick={handleVerify}
                disabled={verifying || verifyCode.length !== 6}
                style={{
                  ...styles.buttonGreen,
                  ...(verifying || verifyCode.length !== 6 ? styles.buttonDisabled : {}),
                }}
              >
                {verifying ? 'Wird verifiziert...' : l.verifySetup}
              </button>
            </div>

            {allowSkip && (
              <div style={styles.linkContainer}>
                <button type="button" onClick={handleSkip} style={styles.linkMuted}>
                  {l.skipSetup}
                </button>
              </div>
            )}
          </>
        )}

        {footerText && (
          <div style={styles.footer}>
            <p style={styles.footerText}>{footerText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SetupPage;
