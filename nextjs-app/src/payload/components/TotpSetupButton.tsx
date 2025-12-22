'use client';

/**
 * TOTP Setup Button Component for Payload CMS
 * 
 * This component renders a button on the Account page that allows users
 * to set up or manage their TOTP two-factor authentication.
 */

import { useState, useEffect } from 'react';
import { useDocumentInfo } from '@payloadcms/ui';

type TotpStatus = {
  enabled: boolean;
  verified: boolean;
  backupCodesRemaining: number;
};

export const TotpSetupButton: React.FC = () => {
  const { id } = useDocumentInfo();
  const [status, setStatus] = useState<TotpStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/admin/totp/status', {
          credentials: 'include',
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setStatus(data.data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch TOTP status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  const handleSetup = () => {
    // Navigate to TOTP setup page with return URL
    window.location.href = `/admin-setup-totp?redirect=${encodeURIComponent('/admin/account')}`;
  };

  if (loading) {
    return (
      <div style={{ 
        padding: '12px 16px',
        backgroundColor: 'var(--theme-elevation-100)',
        borderRadius: '4px',
        marginTop: '8px'
      }}>
        Wird geladen...
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '16px',
      backgroundColor: 'var(--theme-elevation-100)',
      borderRadius: '4px',
      marginTop: '8px'
    }}>
      {status?.enabled && status?.verified ? (
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '8px'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#22c55e'
            }} />
            <span style={{ fontWeight: 500 }}>TOTP ist aktiviert</span>
          </div>
          <p style={{ 
            color: 'var(--theme-elevation-500)',
            fontSize: '14px',
            marginBottom: '12px'
          }}>
            Verbleibende Backup-Codes: {status.backupCodesRemaining}
          </p>
          <button
            onClick={handleSetup}
            type="button"
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--theme-elevation-200)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '14px'
            }}
          >
            TOTP verwalten
          </button>
        </div>
      ) : (
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '8px'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#6b7280'
            }} />
            <span style={{ fontWeight: 500 }}>TOTP ist nicht aktiviert</span>
          </div>
          <p style={{ 
            color: 'var(--theme-elevation-500)',
            fontSize: '14px',
            marginBottom: '12px'
          }}>
            Erhöhen Sie die Sicherheit Ihres Kontos mit Zwei-Faktor-Authentifizierung.
          </p>
          <button
            onClick={handleSetup}
            type="button"
            style={{
              padding: '10px 20px',
              backgroundColor: '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '14px'
            }}
          >
            TOTP einrichten
          </button>
        </div>
      )}
    </div>
  );
};

export default TotpSetupButton;
