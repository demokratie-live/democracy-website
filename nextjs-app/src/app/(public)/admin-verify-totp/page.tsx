'use client';

/**
 * TOTP Verification Page
 * 
 * Shown after login if TOTP is enabled but not verified in this session.
 * Redirects to setup page if TOTP is required but not set up.
 */

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function TotpVerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/admin';
  
  const [totpCode, setTotpCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBackupCode, setIsBackupCode] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [needsTotp, setNeedsTotp] = useState(false);

  // Check if user needs TOTP verification
  useEffect(() => {
    const checkUser = async () => {
      try {
        const meResponse = await fetch('/api/admin-users/me', {
          credentials: 'include',
        });
        
        if (!meResponse.ok) {
          // Not logged in, redirect to login
          router.push('/admin/login');
          return;
        }

        const meData = await meResponse.json();
        if (!meData.user) {
          router.push('/admin/login');
          return;
        }

        setUserId(meData.user.id);
        setUserEmail(meData.user.email);

        // Check TOTP status
        const statusResponse = await fetch('/api/admin/totp/status', {
          credentials: 'include',
        });

        if (!statusResponse.ok) {
          // TOTP not available, proceed to admin
          router.push(redirect);
          return;
        }

        const statusData = await statusResponse.json();

        if (statusData.success) {
          const { globalEnabled, required, enabled, verified } = statusData.data;
          
          // If TOTP is not globally enabled, proceed to admin
          if (!globalEnabled) {
            router.push(redirect);
            return;
          }

          // If TOTP is required but not set up, redirect to setup page
          if (required && !enabled) {
            router.push(`/admin-setup-totp?redirect=${encodeURIComponent(redirect)}`);
            return;
          }

          // If user has TOTP enabled and verified, show verification form
          if (enabled && verified) {
            setNeedsTotp(true);
          } else {
            // TOTP not enabled for this user and not required
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
  }, [router, redirect]);

  // Handle TOTP verification
  const handleVerify = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifying(true);
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
        // Cookie is set by the API, redirect to original destination
        router.push(redirect);
      } else {
        setError(data.error || 'Ungültiger Code');
      }
    } catch {
      setError('Fehler bei der Verifizierung');
    } finally {
      setVerifying(false);
    }
  }, [userId, totpCode, isBackupCode, router, redirect]);

  // Logout
  const handleLogout = useCallback(async () => {
    try {
      await fetch('/api/admin-users/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch {
      // Ignore
    }
    router.push('/admin/login');
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Wird geladen...</div>
      </div>
    );
  }

  if (!needsTotp) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔐</span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Zwei-Faktor-Authentifizierung
          </h1>
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

        <form onSubmit={handleVerify}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {isBackupCode ? 'Backup-Code' : '6-stelliger Code'}
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
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded text-center text-2xl tracking-widest font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={verifying || (!isBackupCode && totpCode.length !== 6)}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {verifying ? 'Wird verifiziert...' : 'Verifizieren'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => {
              setIsBackupCode(!isBackupCode);
              setTotpCode('');
              setError(null);
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
  );
}

export default function TotpVerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Wird geladen...</div>
      </div>
    }>
      <TotpVerifyContent />
    </Suspense>
  );
}
