'use client';

/**
 * TOTP Provider for Payload CMS Admin
 * 
 * This provider wraps the admin interface and shows a TOTP modal
 * when the user is logged in but hasn't verified TOTP yet.
 */

import { useEffect, useState, useCallback, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type TotpSetupData = {
  qrCode: string;
  manualCode: string;
  secret: string;
};

type TotpProviderProps = {
  children: ReactNode;
};

export function TotpProvider({ children }: TotpProviderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [showTotpModal, setShowTotpModal] = useState(false);
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [totpRequired, setTotpRequired] = useState(false);
  const [setupData, setSetupData] = useState<TotpSetupData | null>(null);
  const [backupCodes, setBackupCodes] = useState<string[] | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [totpCode, setTotpCode] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBackupCode, setIsBackupCode] = useState(false);
  const [showManualCode, setShowManualCode] = useState(false);
  const [checked, setChecked] = useState(false);

  // Check TOTP status after login
  useEffect(() => {
    // Skip on login page
    if (pathname?.includes('/login') || pathname?.includes('/forgot')) {
      return;
    }

    const checkTotpStatus = async () => {
      try {
        // Get current user
        const meResponse = await fetch('/api/admin-users/me', {
          credentials: 'include',
        });
        
        if (!meResponse.ok) {
          setChecked(true);
          return;
        }

        const meData = await meResponse.json();
        if (!meData.user) {
          setChecked(true);
          return;
        }

        setUserId(meData.user.id);
        setUserEmail(meData.user.email);

        // Check TOTP status
        const statusResponse = await fetch('/api/admin/totp/status', {
          credentials: 'include',
        });

        if (!statusResponse.ok) {
          setChecked(true);
          return;
        }

        const statusData = await statusResponse.json();

        if (statusData.success) {
          const { enabled, verified } = statusData.data;
          
          // Check localStorage for TOTP verification state
          const totpVerifiedSession = sessionStorage.getItem(`totp_verified_${meData.user.id}`);
          
          if (enabled && verified && !totpVerifiedSession) {
            // TOTP is enabled but not verified in this session
            setTotpRequired(true);
            setShowTotpModal(true);
          } else if (!enabled) {
            // TOTP not set up - optionally prompt to set up
            const dismissedSetup = sessionStorage.getItem(`totp_setup_dismissed_${meData.user.id}`);
            if (!dismissedSetup) {
              setShowSetupModal(true);
            }
          }
        }
        
        setChecked(true);
      } catch (err) {
        console.error('TOTP check error:', err);
        setChecked(true);
      }
    };

    checkTotpStatus();
  }, [pathname]);

  // Handle TOTP verification
  const handleTotpVerify = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/totp/validate', {
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
        // Mark as verified in session
        sessionStorage.setItem(`totp_verified_${userId}`, 'true');
        setShowTotpModal(false);
        setTotpRequired(false);
      } else {
        setError(data.error || 'Ungültiger Code');
      }
    } catch {
      setError('Fehler bei der Verifizierung');
    } finally {
      setLoading(false);
    }
  }, [userId, totpCode, isBackupCode]);

  // Start TOTP setup
  const startTotpSetup = useCallback(async () => {
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
        setError(data.error || 'Fehler beim Setup');
      }
    } catch {
      setError('Fehler beim Starten des TOTP-Setup');
    } finally {
      setLoading(false);
    }
  }, []);

  // Verify TOTP setup
  const verifyTotpSetup = useCallback(async () => {
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
        setSetupData(null);
        sessionStorage.setItem(`totp_verified_${userId}`, 'true');
      } else {
        setError(data.error || 'Ungültiger Code');
      }
    } catch {
      setError('Fehler bei der Verifizierung');
    } finally {
      setLoading(false);
    }
  }, [verifyCode, userId]);

  // Skip TOTP setup
  const skipSetup = useCallback(() => {
    sessionStorage.setItem(`totp_setup_dismissed_${userId}`, 'true');
    setShowSetupModal(false);
  }, [userId]);

  // Finish setup
  const finishSetup = useCallback(() => {
    setBackupCodes(null);
    setShowSetupModal(false);
  }, []);

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Cancel and logout
  const handleLogout = useCallback(async () => {
    try {
      await fetch('/api/admin-users/logout', {
        method: 'POST',
        credentials: 'include',
      });
      router.push('/admin/login');
    } catch {
      router.push('/admin/login');
    }
  }, [router]);

  // If on login page, just render children
  if (pathname?.includes('/login') || pathname?.includes('/forgot')) {
    return <>{children}</>;
  }

  // If TOTP is required and not verified, block access
  if (totpRequired && showTotpModal) {
    return (
      <>
        {/* Dark overlay */}
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔐</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Zwei-Faktor-Authentifizierung
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Geben Sie den Code aus Ihrer Authenticator-App ein
              </p>
              {userEmail && (
                <p className="text-gray-500 mt-1 text-xs">
                  {userEmail}
                </p>
              )}
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-300 rounded text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleTotpVerify}>
              <div className="mb-4">
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
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded text-center text-2xl tracking-widest font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading || (!isBackupCode && totpCode.length !== 6)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Wird verifiziert...' : 'Verifizieren'}
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsBackupCode(!isBackupCode);
                  setTotpCode('');
                }}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                {isBackupCode ? 'Authenticator-App verwenden' : 'Backup-Code verwenden'}
              </button>
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-gray-400"
              >
                Abmelden
              </button>
            </div>
          </div>
        </div>
        {children}
      </>
    );
  }

  // Show setup prompt modal
  if (showSetupModal && !setupData && !backupCodes && checked) {
    return (
      <>
        {/* Setup prompt overlay */}
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Konto schützen
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Aktivieren Sie die Zwei-Faktor-Authentifizierung für mehr Sicherheit
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-300 rounded text-sm">
                {error}
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={startTotpSetup}
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 px-4 rounded font-medium hover:bg-green-700 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Wird geladen...' : 'Jetzt einrichten'}
              </button>

              <button
                onClick={skipSetup}
                className="w-full bg-gray-700 text-gray-300 py-3 px-4 rounded font-medium hover:bg-gray-600 transition-colors"
              >
                Später erinnern
              </button>
            </div>
          </div>
        </div>
        {children}
      </>
    );
  }

  // Show setup QR code modal
  if (showSetupModal && setupData) {
    return (
      <>
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">
                Authenticator-App einrichten
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Scannen Sie den QR-Code mit Ihrer App
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-300 rounded text-sm">
                {error}
              </div>
            )}

            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <img
                src={setupData.qrCode}
                alt="TOTP QR Code"
                className="w-48 h-48 bg-white p-2 rounded"
              />
            </div>

            {/* Manual Code Toggle */}
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
                    title="Kopieren"
                  >
                    📋
                  </button>
                </div>
              </div>
            )}

            {/* Verification */}
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
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-center text-xl tracking-widest font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              />
              <button
                onClick={verifyTotpSetup}
                disabled={loading || verifyCode.length !== 6}
                className="w-full bg-green-600 text-white py-3 px-4 rounded font-medium hover:bg-green-700 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Wird verifiziert...' : 'Aktivieren'}
              </button>
            </div>

            <button
              onClick={skipSetup}
              className="w-full mt-3 text-gray-500 hover:text-gray-400 text-sm"
            >
              Überspringen
            </button>
          </div>
        </div>
        {children}
      </>
    );
  }

  // Show backup codes modal
  if (showSetupModal && backupCodes) {
    return (
      <>
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
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

            <div className="flex gap-2 mb-4">
              <button
                onClick={() => copyToClipboard(backupCodes.join('\n'))}
                className="flex-1 bg-gray-700 text-gray-300 py-2 px-4 rounded hover:bg-gray-600 text-sm"
              >
                📋 Kopieren
              </button>
            </div>

            <button
              onClick={finishSetup}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded font-medium hover:bg-blue-700 transition-colors"
            >
              Fertig
            </button>
          </div>
        </div>
        {children}
      </>
    );
  }

  return <>{children}</>;
}

export default TotpProvider;
