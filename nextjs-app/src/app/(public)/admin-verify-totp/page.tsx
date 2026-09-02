'use client';

/**
 * TOTP Verification Page
 * 
 * Uses the @democracy-deutschland/payload-totp-plugin VerifyPage component.
 */

import { Suspense } from 'react';
import { VerifyPage, styles } from '@democracy-deutschland/payload-totp-plugin/components';

function TotpVerifyContent() {
  return (
    <VerifyPage
      icon="🔐"
      defaultRedirectPath="/admin"
      loginPagePath="/admin/login"
      setupPagePath="/admin-setup-totp"
      validateEndpoint="/api/admin/totp/validate"
      statusEndpoint="/api/admin/totp/status"
      meEndpoint="/api/admin-users/me"
      logoutEndpoint="/api/admin-users/logout"
      labels={{
        verifyTitle: 'Zwei-Faktor-Authentifizierung',
        verifySubtitle: 'Geben Sie den Code aus Ihrer Authenticator-App ein',
        verifyButton: 'Verifizieren',
        verifyLoading: 'Wird verifiziert...',
        codeLabel: '6-stelliger Code',
        backupCodeLabel: 'Backup-Code',
        useBackupCode: 'Backup-Code verwenden',
        useAuthenticator: 'Authenticator-App verwenden',
        logoutButton: 'Abmelden',
        invalidCode: 'Ungültiger Code',
        networkError: 'Fehler bei der Verifizierung',
      }}
    />
  );
}

export default function TotpVerifyPage() {
  return (
    <Suspense fallback={
      <div style={styles.container}>
        <div style={styles.loading}>Wird geladen...</div>
      </div>
    }>
      <TotpVerifyContent />
    </Suspense>
  );
}
