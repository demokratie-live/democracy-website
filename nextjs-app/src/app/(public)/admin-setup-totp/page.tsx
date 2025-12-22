'use client';

/**
 * TOTP Setup Page
 * 
 * Allows admin users to set up two-factor authentication.
 * Uses styles from @democracy-deutschland/payload-totp-plugin.
 */

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { styles } from '@democracy-deutschland/payload-totp-plugin/components';

type TotpSetupData = {
  qrCode: string;
  manualCode: string;
  secret: string;
};

type TotpStatus = {
  globalEnabled: boolean;
  required: boolean;
  enabled: boolean;
  verified: boolean;
  backupCodesRemaining: number;
};

function TotpSetupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/admin';
  const isOptional = searchParams.get('optional') === 'true';
  
  const [status, setStatus] = useState<TotpStatus | null>(null);
  const [setupData, setSetupData] = useState<TotpSetupData | null>(null);
  const [backupCodes, setBackupCodes] = useState<string[] | null>(null);
  const [verifyCode, setVerifyCode] = useState('');
  const [disableCode, setDisableCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showManualCode, setShowManualCode] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // Check user and fetch status
  useEffect(() => {
    const checkUser = async () => {
      try {
        const meResponse = await fetch('/api/admin-users/me', {
          credentials: 'include',
        });
        
        if (!meResponse.ok) {
          router.push('/admin/login');
          return;
        }

        const meData = await meResponse.json();
        if (!meData.user) {
          router.push('/admin/login');
          return;
        }

        setUserId(meData.user.id);

        // Fetch TOTP status
        const statusResponse = await fetch('/api/admin/totp/status', {
          credentials: 'include',
        });

        if (statusResponse.ok) {
          const statusData = await statusResponse.json();
          if (statusData.success) {
            setStatus(statusData.data);
          }
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Fehler beim Laden');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  const startSetup = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/totp/setup', {
        method: 'POST',
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setSetupData(data.data);
      } else {
        setError(data.error);
      }
    } catch {
      setError('Fehler beim Starten der TOTP-Einrichtung');
    } finally {
      setLoading(false);
    }
  }, []);

  const verifySetup = useCallback(async () => {
    if (!verifyCode || verifyCode.length !== 6) {
      setError('Bitte geben Sie den 6-stelligen Code ein');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/totp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ token: verifyCode }),
      });
      const data = await response.json();
      if (data.success) {
        setBackupCodes(data.data.backupCodes);
        setSuccess('TOTP erfolgreich aktiviert!');
        setSetupData(null);
        setVerifyCode('');
        // Mark as verified in session
        if (userId) {
          sessionStorage.setItem(`totp_verified_${userId}`, 'true');
        }
      } else {
        setError(data.error);
      }
    } catch {
      setError('Fehler bei der Verifizierung');
    } finally {
      setLoading(false);
    }
  }, [verifyCode, userId]);

  const disableTotp = useCallback(async () => {
    if (!disableCode || disableCode.length !== 6) {
      setError('Bitte geben Sie den 6-stelligen Code ein');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/totp/disable', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ token: disableCode }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess('TOTP erfolgreich deaktiviert');
        setDisableCode('');
        // Refresh status
        const statusResponse = await fetch('/api/admin/totp/status', {
          credentials: 'include',
        });
        if (statusResponse.ok) {
          const statusData = await statusResponse.json();
          if (statusData.success) {
            setStatus(statusData.data);
          }
        }
      } else {
        setError(data.error);
      }
    } catch {
      setError('Fehler beim Deaktivieren');
    } finally {
      setLoading(false);
    }
  }, [disableCode]);

  const skipSetup = useCallback(() => {
    if (userId) {
      sessionStorage.setItem(`totp_setup_dismissed_${userId}`, 'true');
    }
    router.push(redirect);
  }, [router, redirect, userId]);

  const finishSetup = useCallback(() => {
    router.push(redirect);
  }, [router, redirect]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setSuccess('In Zwischenablage kopiert!');
    setTimeout(() => setSuccess(null), 2000);
  };

  if (loading && !setupData && !status) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Wird geladen...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ ...styles.title, textAlign: 'center', marginBottom: '0.5rem' }}>
          Zwei-Faktor-Authentifizierung
        </h1>
        <p style={{ ...styles.subtitle, textAlign: 'center', marginBottom: '1.5rem' }}>
          Schützen Sie Ihr Konto mit TOTP
        </p>

        {error && <div style={styles.errorBox}>{error}</div>}
        {success && <div style={styles.successBox}>{success}</div>}

        {/* TOTP Globally Disabled */}
        {status && !status.globalEnabled && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ ...styles.iconContainer, backgroundColor: '#4b5563', margin: '0 auto 1rem' }}>
              <span>🔒</span>
            </div>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              Zwei-Faktor-Authentifizierung ist derzeit vom Administrator deaktiviert.
            </p>
            <button
              onClick={() => router.push(redirect)}
              style={styles.button}
            >
              Zurück
            </button>
          </div>
        )}

        {/* Status Display */}
        {status && status.globalEnabled && !setupData && !backupCodes && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '50%',
                  backgroundColor: status.enabled ? '#22c55e' : '#6b7280',
                }}
              />
              <span style={{ color: '#d1d5db' }}>
                Status: {status.enabled ? 'Aktiviert' : 'Nicht aktiviert'}
              </span>
            </div>

            {status.required && !status.enabled && (
              <div style={styles.warningBox}>
                ⚠️ Zwei-Faktor-Authentifizierung ist für alle Benutzer erforderlich.
              </div>
            )}

            {status.enabled && (
              <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
                Verbleibende Backup-Codes: {status.backupCodesRemaining}
              </p>
            )}

            {!status.enabled && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={startSetup}
                  disabled={loading}
                  style={{
                    ...styles.buttonGreen,
                    ...(loading ? styles.buttonDisabled : {}),
                  }}
                >
                  {loading ? 'Wird geladen...' : 'TOTP einrichten'}
                </button>

                {isOptional && !status.required && (
                  <button
                    onClick={skipSetup}
                    style={styles.buttonSecondary}
                  >
                    Später einrichten
                  </button>
                )}
              </div>
            )}

            {status.enabled && !status.required && (
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #374151' }}>
                <h3 style={{ ...styles.title, fontSize: '1.125rem', marginBottom: '1rem' }}>
                  TOTP deaktivieren
                </h3>
                <input
                  type="text"
                  value={disableCode}
                  onChange={(e) => setDisableCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="6-stelliger Code"
                  maxLength={6}
                  style={{ ...styles.inputCode, marginBottom: '0.75rem' }}
                />
                <button
                  onClick={disableTotp}
                  disabled={loading || disableCode.length !== 6}
                  style={{
                    ...styles.button,
                    backgroundColor: '#dc2626',
                    ...(loading || disableCode.length !== 6 ? styles.buttonDisabled : {}),
                  }}
                >
                  Deaktivieren
                </button>
              </div>
            )}

            {status.enabled && status.required && (
              <div style={{ ...styles.warningBox, marginTop: '1rem', backgroundColor: 'rgba(55, 65, 81, 0.5)', borderColor: '#4b5563', color: '#9ca3af' }}>
                ℹ️ TOTP kann nicht deaktiviert werden, da es für alle Benutzer erforderlich ist.
              </div>
            )}

            {status.enabled && (
              <div style={{ marginTop: '1rem' }}>
                <button
                  onClick={() => router.push(redirect)}
                  style={styles.button}
                >
                  Zurück
                </button>
              </div>
            )}
          </div>
        )}

        {/* Setup Flow */}
        {setupData && (
          <div>
            <div style={styles.qrContainer}>
              <img
                src={setupData.qrCode}
                alt="TOTP QR Code"
                style={styles.qrCode}
              />
            </div>

            <div style={styles.linkContainer}>
              <button
                onClick={() => setShowManualCode(!showManualCode)}
                style={styles.link}
              >
                {showManualCode ? 'QR-Code verwenden' : 'Code manuell eingeben'}
              </button>
            </div>

            {showManualCode && (
              <div style={styles.manualCodeContainer}>
                <p style={styles.manualCodeLabel}>Manueller Code:</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <code style={{ ...styles.manualCode, flex: 1, padding: '0.5rem', backgroundColor: '#4b5563', borderRadius: '0.25rem' }}>
                    {setupData.manualCode}
                  </code>
                  <button
                    onClick={() => copyToClipboard(setupData.secret)}
                    style={{
                      background: '#4b5563',
                      border: 'none',
                      borderRadius: '0.25rem',
                      padding: '0.5rem',
                      cursor: 'pointer',
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    📋
                  </button>
                </div>
              </div>
            )}

            <div style={{ borderTop: '1px solid #374151', paddingTop: '1rem', marginTop: '1rem' }}>
              <p style={{ ...styles.subtitle, marginBottom: '0.75rem' }}>
                Geben Sie den 6-stelligen Code ein:
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
                onClick={verifySetup}
                disabled={loading || verifyCode.length !== 6}
                style={{
                  ...styles.buttonGreen,
                  ...(loading || verifyCode.length !== 6 ? styles.buttonDisabled : {}),
                }}
              >
                {loading ? 'Wird verifiziert...' : 'Aktivieren'}
              </button>
            </div>

            {isOptional && (
              <div style={styles.linkContainer}>
                <button
                  onClick={skipSetup}
                  style={styles.linkMuted}
                >
                  Überspringen
                </button>
              </div>
            )}
          </div>
        )}

        {/* Backup Codes */}
        {backupCodes && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <div style={{ ...styles.iconContainer, backgroundColor: '#16a34a', margin: '0 auto 1rem' }}>
                <span>✅</span>
              </div>
              <h2 style={{ ...styles.title, fontSize: '1.25rem' }}>
                TOTP aktiviert!
              </h2>
            </div>

            <div style={styles.warningBox}>
              <strong>⚠️ Speichern Sie diese Backup-Codes sicher!</strong>
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
              onClick={() => copyToClipboard(backupCodes.join('\n'))}
              style={{ ...styles.buttonSecondary, marginBottom: '0.75rem' }}
            >
              📋 Alle kopieren
            </button>

            <button
              onClick={finishSetup}
              style={styles.button}
            >
              Zum Admin-Bereich
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TotpSetupPage() {
  return (
    <Suspense fallback={
      <div style={styles.container}>
        <div style={styles.loading}>Wird geladen...</div>
      </div>
    }>
      <TotpSetupContent />
    </Suspense>
  );
}
