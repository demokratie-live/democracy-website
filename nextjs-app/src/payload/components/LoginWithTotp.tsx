'use client';

/**
 * Custom Login View with TOTP Support
 * 
 * This component extends the Payload CMS login to support
 * two-factor authentication (TOTP) via a modal after login.
 */

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type LoginState = 'login' | 'totp-required' | 'totp-setup';

type TotpSetupData = {
  qrCode: string;
  manualCode: string;
  secret: string;
};

export function LoginWithTotp() {
  const router = useRouter();
  const [state, setState] = useState<LoginState>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [totpCode, setTotpCode] = useState('');
  const [setupData, setSetupData] = useState<TotpSetupData | null>(null);
  const [backupCodes, setBackupCodes] = useState<string[] | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBackupCode, setIsBackupCode] = useState(false);
  const [showManualCode, setShowManualCode] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');

  // Handle initial login
  const handleLogin = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // First, check if user has TOTP enabled
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
        body: JSON.stringify({ email, password }),
      });

      if (!loginResponse.ok) {
        const loginError = await loginResponse.json();
        setError(loginError.errors?.[0]?.message || 'Anmeldung fehlgeschlagen');
        setLoading(false);
        return;
      }

      const loginData = await loginResponse.json();
      setUserId(loginData.user?.id);

      if (checkData.success && checkData.data?.totpRequired) {
        // TOTP is enabled, show verification modal
        setState('totp-required');
      } else {
        // TOTP not enabled, ask if they want to set it up
        setState('totp-setup');
      }
    } catch {
      setError('Netzwerkfehler bei der Anmeldung');
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  // Handle TOTP verification
  const handleTotpVerify = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/totp/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          token: totpCode,
          isBackupCode,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // TOTP verified, redirect to admin
        router.push('/admin');
      } else {
        setError(data.error || 'Ungültiger Code');
      }
    } catch {
      setError('Fehler bei der Verifizierung');
    } finally {
      setLoading(false);
    }
  }, [userId, totpCode, isBackupCode, router]);

  // Start TOTP setup
  const startTotpSetup = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/totp/setup', {
        method: 'POST',
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
        body: JSON.stringify({ token: verifyCode }),
      });

      const data = await response.json();

      if (data.success) {
        setBackupCodes(data.data.backupCodes);
        setSetupData(null);
      } else {
        setError(data.error || 'Ungültiger Code');
      }
    } catch {
      setError('Fehler bei der Verifizierung');
    } finally {
      setLoading(false);
    }
  }, [verifyCode]);

  // Skip TOTP setup
  const skipSetup = useCallback(() => {
    router.push('/admin');
  }, [router]);

  // Finish setup and go to admin
  const finishSetup = useCallback(() => {
    router.push('/admin');
  }, [router]);

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md">
        {/* Login Form */}
        {state === 'login' && (
          <div className="bg-gray-800 rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white">DEMOCRACY Admin</h1>
              <p className="text-gray-400 mt-2">Melden Sie sich an</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-300 rounded text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="admin@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Passwort
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Anmelden...' : 'Anmelden'}
              </button>
            </form>
          </div>
        )}

        {/* TOTP Verification Modal */}
        {state === 'totp-required' && (
          <div className="bg-gray-800 rounded-lg shadow-xl p-8">
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
                onClick={() => setState('login')}
                className="text-sm text-gray-500 hover:text-gray-400"
              >
                Zurück zur Anmeldung
              </button>
            </div>
          </div>
        )}

        {/* TOTP Setup Prompt */}
        {state === 'totp-setup' && !setupData && !backupCodes && (
          <div className="bg-gray-800 rounded-lg shadow-xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Zwei-Faktor-Authentifizierung einrichten?
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Schützen Sie Ihr Konto mit einer zusätzlichen Sicherheitsebene
              </p>
            </div>

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
                Später einrichten
              </button>
            </div>
          </div>
        )}

        {/* TOTP Setup QR Code */}
        {state === 'totp-setup' && setupData && (
          <div className="bg-gray-800 rounded-lg shadow-xl p-8">
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
                  <code className="flex-1 bg-gray-600 p-2 rounded font-mono text-sm text-white text-center tracking-wider">
                    {setupData.manualCode}
                  </code>
                  <button
                    onClick={() => copyToClipboard(setupData.secret)}
                    className="bg-gray-600 hover:bg-gray-500 p-2 rounded text-white"
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
                Geben Sie den 6-stelligen Code aus Ihrer App ein:
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
        )}

        {/* Backup Codes Display */}
        {backupCodes && (
          <div className="bg-gray-800 rounded-lg shadow-xl p-8">
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
              Zum Admin-Bereich
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginWithTotp;
