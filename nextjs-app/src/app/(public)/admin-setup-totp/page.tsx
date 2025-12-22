'use client';

/**
 * TOTP Setup Page
 * 
 * Allows admin users to set up two-factor authentication.
 */

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

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
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Wird geladen...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-white mb-2 text-center">
            Zwei-Faktor-Authentifizierung
          </h1>
          <p className="text-gray-400 text-sm text-center mb-6">
            Schützen Sie Ihr Konto mit TOTP
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-300 rounded text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-900/50 border border-green-500 text-green-300 rounded text-sm">
              {success}
            </div>
          )}

          {/* TOTP Globally Disabled */}
          {status && !status.globalEnabled && (
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <p className="text-gray-300 mb-4">
                Zwei-Faktor-Authentifizierung ist derzeit vom Administrator deaktiviert.
              </p>
              <button
                onClick={() => router.push(redirect)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Zurück
              </button>
            </div>
          )}

          {/* Status Display */}
          {status && status.globalEnabled && !setupData && !backupCodes && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-3 h-3 rounded-full ${
                    status.enabled ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                ></div>
                <span className="text-gray-300">
                  Status: {status.enabled ? 'Aktiviert' : 'Nicht aktiviert'}
                </span>
              </div>

              {status.required && !status.enabled && (
                <div className="mb-4 p-3 bg-yellow-900/50 border border-yellow-500 text-yellow-300 rounded text-sm">
                  ⚠️ Zwei-Faktor-Authentifizierung ist für alle Benutzer erforderlich.
                </div>
              )}

              {status.enabled && (
                <p className="text-sm text-gray-400 mb-4">
                  Verbleibende Backup-Codes: {status.backupCodesRemaining}
                </p>
              )}

              {!status.enabled && (
                <div className="space-y-3">
                  <button
                    onClick={startSetup}
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded font-medium hover:bg-green-700 disabled:opacity-50"
                  >
                    {loading ? 'Wird geladen...' : 'TOTP einrichten'}
                  </button>

                  {isOptional && !status.required && (
                    <button
                      onClick={skipSetup}
                      className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded font-medium hover:bg-gray-600"
                    >
                      Später einrichten
                    </button>
                  )}
                </div>
              )}

              {status.enabled && !status.required && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-4">
                    TOTP deaktivieren
                  </h3>
                  <input
                    type="text"
                    value={disableCode}
                    onChange={(e) => setDisableCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="6-stelliger Code"
                    maxLength={6}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded mb-3 text-center text-white font-mono tracking-widest"
                  />
                  <button
                    onClick={disableTotp}
                    disabled={loading || disableCode.length !== 6}
                    className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    Deaktivieren
                  </button>
                </div>
              )}

              {status.enabled && status.required && (
                <div className="mt-4 p-3 bg-gray-700/50 border border-gray-600 text-gray-400 rounded text-sm">
                  ℹ️ TOTP kann nicht deaktiviert werden, da es für alle Benutzer erforderlich ist.
                </div>
              )}

              {status.enabled && (
                <div className="mt-4">
                  <button
                    onClick={() => router.push(redirect)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
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
              <div className="flex justify-center mb-4">
                <img
                  src={setupData.qrCode}
                  alt="TOTP QR Code"
                  className="w-48 h-48 bg-white p-2 rounded"
                />
              </div>

              <button
                onClick={() => setShowManualCode(!showManualCode)}
                className="w-full text-blue-400 hover:text-blue-300 text-sm mb-4"
              >
                {showManualCode ? 'QR-Code verwenden' : 'Code manuell eingeben'}
              </button>

              {showManualCode && (
                <div className="bg-gray-700 p-3 rounded mb-4">
                  <p className="text-gray-400 text-xs mb-2">Manueller Code:</p>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 bg-gray-600 p-2 rounded font-mono text-sm text-white text-center tracking-wider break-all">
                      {setupData.manualCode}
                    </code>
                    <button
                      onClick={() => copyToClipboard(setupData.secret)}
                      className="bg-gray-600 hover:bg-gray-500 p-2 rounded text-white flex-shrink-0"
                    >
                      📋
                    </button>
                  </div>
                </div>
              )}

              <div className="border-t border-gray-700 pt-4 mt-4">
                <p className="text-gray-400 text-sm mb-3">
                  Geben Sie den 6-stelligen Code ein:
                </p>
                <input
                  type="text"
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="000000"
                  maxLength={6}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-center text-xl font-mono text-white mb-3"
                />
                <button
                  onClick={verifySetup}
                  disabled={loading || verifyCode.length !== 6}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded font-medium hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? 'Wird verifiziert...' : 'Aktivieren'}
                </button>
              </div>

              {isOptional && (
                <button
                  onClick={skipSetup}
                  className="w-full mt-3 text-gray-500 hover:text-gray-400 text-sm"
                >
                  Überspringen
                </button>
              )}
            </div>
          )}

          {/* Backup Codes */}
          {backupCodes && (
            <div>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  TOTP aktiviert!
                </h2>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-600 p-4 rounded mb-4">
                <p className="text-yellow-300 text-sm font-medium mb-2">
                  ⚠️ Speichern Sie diese Backup-Codes sicher!
                </p>
                <p className="text-yellow-200/70 text-xs">
                  Falls Sie keinen Zugriff auf Ihre App haben, können Sie einen dieser Codes verwenden.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {backupCodes.map((code, index) => (
                  <code
                    key={index}
                    className="bg-gray-700 p-2 rounded font-mono text-sm text-center text-white"
                  >
                    {code}
                  </code>
                ))}
              </div>

              <button
                onClick={() => copyToClipboard(backupCodes.join('\n'))}
                className="w-full bg-gray-700 text-gray-300 py-2 px-4 rounded hover:bg-gray-600 mb-3"
              >
                📋 Alle kopieren
              </button>

              <button
                onClick={finishSetup}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded font-medium hover:bg-blue-700"
              >
                Zum Admin-Bereich
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TotpSetupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Wird geladen...</div>
      </div>
    }>
      <TotpSetupContent />
    </Suspense>
  );
}
