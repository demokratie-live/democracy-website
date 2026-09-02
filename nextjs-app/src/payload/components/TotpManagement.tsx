'use client';

/**
 * TOTP Management Component
 * 
 * Can be used in account settings to manage TOTP.
 */

import { useState, useEffect, useCallback } from 'react';

type TotpStatus = {
  enabled: boolean;
  verified: boolean;
  backupCodesRemaining: number;
};

type TotpSetupData = {
  qrCode: string;
  manualCode: string;
  secret: string;
};

export function TotpManagement() {
  const [status, setStatus] = useState<TotpStatus | null>(null);
  const [setupData, setSetupData] = useState<TotpSetupData | null>(null);
  const [backupCodes, setBackupCodes] = useState<string[] | null>(null);
  const [verifyCode, setVerifyCode] = useState('');
  const [disableCode, setDisableCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showManualCode, setShowManualCode] = useState(false);

  const fetchStatus = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/totp/status');
      const data = await response.json();
      if (data.success) {
        setStatus(data.data);
      } else {
        setError(data.error);
      }
    } catch {
      setError('Fehler beim Laden des TOTP-Status');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  const startSetup = async () => {
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
        setError(data.error);
      }
    } catch {
      setError('Fehler beim Starten der TOTP-Einrichtung');
    } finally {
      setLoading(false);
    }
  };

  const verifySetup = async () => {
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
        setSuccess('TOTP erfolgreich aktiviert!');
        setSetupData(null);
        setVerifyCode('');
        fetchStatus();
      } else {
        setError(data.error);
      }
    } catch {
      setError('Fehler bei der Verifizierung');
    } finally {
      setLoading(false);
    }
  };

  const disableTotp = async () => {
    if (!disableCode) {
      setError('Bitte geben Sie den aktuellen TOTP-Code ein');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/totp/disable', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: disableCode }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess('TOTP erfolgreich deaktiviert');
        setDisableCode('');
        fetchStatus();
      } else {
        setError(data.error);
      }
    } catch {
      setError('Fehler beim Deaktivieren');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setSuccess('In Zwischenablage kopiert!');
    setTimeout(() => setSuccess(null), 2000);
  };

  if (loading && !setupData && !status) {
    return (
      <div className="animate-pulse p-4">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-4">
        Zwei-Faktor-Authentifizierung (TOTP)
      </h3>

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

      {/* Status Display */}
      {status && !setupData && !backupCodes && (
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

          {status.enabled && (
            <p className="text-sm text-gray-400 mb-4">
              Verbleibende Backup-Codes: {status.backupCodesRemaining}
            </p>
          )}

          {!status.enabled && (
            <button
              onClick={startSetup}
              disabled={loading}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              TOTP einrichten
            </button>
          )}

          {status.enabled && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <h4 className="text-sm font-medium text-gray-300 mb-3">
                TOTP deaktivieren
              </h4>
              <input
                type="text"
                value={disableCode}
                onChange={(e) => setDisableCode(e.target.value.replace(/\D/g, ''))}
                placeholder="6-stelliger Code"
                maxLength={6}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded mb-3 text-center text-white font-mono tracking-widest"
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
        </div>
      )}

      {/* Setup Flow */}
      {setupData && (
        <div>
          <div className="flex justify-center mb-4">
            <img
              src={setupData.qrCode}
              alt="TOTP QR Code"
              className="w-40 h-40 bg-white p-2 rounded"
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
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-gray-600 p-2 rounded font-mono text-sm text-white text-center">
                  {setupData.manualCode}
                </code>
                <button
                  onClick={() => copyToClipboard(setupData.secret)}
                  className="bg-gray-600 hover:bg-gray-500 p-2 rounded text-white"
                >
                  📋
                </button>
              </div>
            </div>
          )}

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
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:opacity-50"
          >
            Aktivieren
          </button>
        </div>
      )}

      {/* Backup Codes */}
      {backupCodes && (
        <div>
          <div className="bg-yellow-900/30 border border-yellow-600 p-3 rounded mb-4">
            <p className="text-yellow-300 text-sm">
              ⚠️ Speichern Sie diese Backup-Codes sicher!
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
            className="w-full bg-gray-700 text-gray-300 py-2 px-4 rounded hover:bg-gray-600 mb-2"
          >
            📋 Alle kopieren
          </button>
          <button
            onClick={() => {
              setBackupCodes(null);
              fetchStatus();
            }}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Fertig
          </button>
        </div>
      )}
    </div>
  );
}

export default TotpManagement;
