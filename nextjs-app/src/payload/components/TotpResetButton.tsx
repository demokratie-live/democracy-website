'use client';

/**
 * TOTP Reset Button Component for Payload CMS
 * 
 * This component renders a button on the admin-users edit page that allows
 * administrators to reset TOTP for a user who has lost access to their authenticator.
 */

import { useState, useEffect } from 'react';
import { useDocumentInfo } from '@payloadcms/ui';

type TotpData = {
  enabled: boolean;
  verified: boolean;
};

export const TotpResetButton: React.FC = () => {
  const { id } = useDocumentInfo();
  const [totpData, setTotpData] = useState<TotpData | null>(null);
  const [loading, setLoading] = useState(true);
  const [resetting, setResetting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/admin-users/${id}`, {
          credentials: 'include',
        });
        
        if (response.ok) {
          const data = await response.json();
          setTotpData({
            enabled: data.totp?.enabled || false,
            verified: data.totp?.verified || false,
          });
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleReset = async () => {
    if (!id) return;

    const confirmed = window.confirm(
      'Sind Sie sicher, dass Sie die Zwei-Faktor-Authentifizierung für diesen Benutzer zurücksetzen möchten?\n\nDer Benutzer muss TOTP erneut einrichten.'
    );

    if (!confirmed) return;

    setResetting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/admin/totp/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ userId: id }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'TOTP wurde erfolgreich zurückgesetzt' });
        setTotpData({ enabled: false, verified: false });
      } else {
        setMessage({ type: 'error', text: data.error || 'Fehler beim Zurücksetzen' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Netzwerkfehler beim Zurücksetzen' });
    } finally {
      setResetting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ 
        padding: '12px 16px',
        backgroundColor: 'var(--theme-elevation-100)',
        borderRadius: '4px',
        marginTop: '16px'
      }}>
        Wird geladen...
      </div>
    );
  }

  // Don't show button if no ID (new user)
  if (!id) {
    return null;
  }

  const isTotpActive = totpData?.enabled && totpData?.verified;

  return (
    <div style={{ 
      padding: '16px',
      backgroundColor: 'var(--theme-elevation-100)',
      borderRadius: '4px',
      marginTop: '16px',
      borderLeft: isTotpActive ? '4px solid #22c55e' : '4px solid #6b7280',
    }}>
      <h4 style={{ 
        margin: '0 0 12px 0', 
        fontSize: '14px', 
        fontWeight: 600,
        color: 'var(--theme-elevation-800)'
      }}>
        TOTP Admin-Aktionen
      </h4>

      {message && (
        <div style={{
          padding: '8px 12px',
          marginBottom: '12px',
          borderRadius: '4px',
          fontSize: '13px',
          backgroundColor: message.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          color: message.type === 'success' ? '#22c55e' : '#ef4444',
          border: `1px solid ${message.type === 'success' ? '#22c55e' : '#ef4444'}`,
        }}>
          {message.text}
        </div>
      )}

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        marginBottom: '12px'
      }}>
        <div style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: isTotpActive ? '#22c55e' : '#6b7280'
        }} />
        <span style={{ fontSize: '14px', color: 'var(--theme-elevation-600)' }}>
          Status: {isTotpActive ? 'Aktiviert & Verifiziert' : 'Nicht aktiv'}
        </span>
      </div>

      {isTotpActive && (
        <button
          onClick={handleReset}
          disabled={resetting}
          type="button"
          style={{
            padding: '10px 16px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: resetting ? 'not-allowed' : 'pointer',
            fontWeight: 500,
            fontSize: '14px',
            opacity: resetting ? 0.6 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          {resetting ? 'Wird zurückgesetzt...' : '🔄 TOTP zurücksetzen'}
        </button>
      )}

      {!isTotpActive && (
        <p style={{ 
          margin: 0,
          fontSize: '13px',
          color: 'var(--theme-elevation-500)',
          fontStyle: 'italic'
        }}>
          TOTP ist für diesen Benutzer nicht aktiviert.
        </p>
      )}
    </div>
  );
};

export default TotpResetButton;
