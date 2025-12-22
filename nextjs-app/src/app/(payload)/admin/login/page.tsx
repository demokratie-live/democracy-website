'use client';

/**
 * Custom Login Page for Payload CMS
 * 
 * Uses the @democracy-deutschland/payload-totp-plugin LoginPage component.
 */

import { LoginPage } from '@democracy-deutschland/payload-totp-plugin/components';

export default function CustomLoginPage() {
  return (
    <LoginPage
      icon="🏛️"
      verifyPagePath="/admin-verify-totp"
      redirectPath="/admin"
      forgotPasswordPath="/admin/forgot-password"
      loginEndpoint="/api/admin-users/login"
      totpCheckEndpoint="/api/admin/totp/check"
      footerText="DEMOCRACY Deutschland e.V."
      labels={{
        loginTitle: 'DEMOCRACY Admin',
        loginSubtitle: 'Melden Sie sich an, um fortzufahren',
        loginButton: 'Anmelden',
        loginLoading: 'Wird angemeldet...',
        emailLabel: 'E-Mail',
        passwordLabel: 'Passwort',
        forgotPasswordLink: 'Passwort vergessen?',
        invalidCredentials: 'Anmeldung fehlgeschlagen',
        networkError: 'Netzwerkfehler bei der Anmeldung',
      }}
    />
  );
}
