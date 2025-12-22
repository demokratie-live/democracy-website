/**
 * Default Labels for TOTP Plugin (German)
 */

import type { TotpLabels } from './types';

export const defaultLabels: Required<TotpLabels> = {
  // Login page
  loginTitle: 'Admin Login',
  loginSubtitle: 'Melden Sie sich an, um fortzufahren',
  loginButton: 'Anmelden',
  loginLoading: 'Wird angemeldet...',
  emailLabel: 'E-Mail',
  passwordLabel: 'Passwort',
  forgotPasswordLink: 'Passwort vergessen?',

  // Verify page
  verifyTitle: 'Zwei-Faktor-Authentifizierung',
  verifySubtitle: 'Geben Sie den Code aus Ihrer Authenticator-App ein',
  verifyButton: 'Verifizieren',
  verifyLoading: 'Wird verifiziert...',
  codeLabel: '6-stelliger Code',
  backupCodeLabel: 'Backup-Code',
  useBackupCode: 'Backup-Code verwenden',
  useAuthenticator: 'Authenticator-App verwenden',
  logoutButton: 'Abmelden',

  // Setup page
  setupTitle: 'Authenticator-App einrichten',
  setupSubtitle: 'Scannen Sie den QR-Code mit Ihrer App',
  scanQrCode: 'QR-Code scannen',
  manualCode: 'Code manuell eingeben',
  verifySetup: 'Aktivieren',
  skipSetup: 'Überspringen',
  setupComplete: 'TOTP aktiviert!',
  saveBackupCodes: 'Speichern Sie diese Backup-Codes sicher!',

  // Error messages
  invalidCredentials: 'Anmeldung fehlgeschlagen',
  invalidCode: 'Ungültiger Code',
  networkError: 'Netzwerkfehler',
  notAuthenticated: 'Nicht authentifiziert',

  // Success messages
  totpEnabled: 'Zwei-Faktor-Authentifizierung wurde aktiviert',
  totpDisabled: 'Zwei-Faktor-Authentifizierung wurde deaktiviert',
  totpReset: 'Zwei-Faktor-Authentifizierung wurde zurückgesetzt',
};

/**
 * English Labels
 */
export const englishLabels: Required<TotpLabels> = {
  // Login page
  loginTitle: 'Admin Login',
  loginSubtitle: 'Sign in to continue',
  loginButton: 'Sign In',
  loginLoading: 'Signing in...',
  emailLabel: 'Email',
  passwordLabel: 'Password',
  forgotPasswordLink: 'Forgot password?',

  // Verify page
  verifyTitle: 'Two-Factor Authentication',
  verifySubtitle: 'Enter the code from your authenticator app',
  verifyButton: 'Verify',
  verifyLoading: 'Verifying...',
  codeLabel: '6-digit code',
  backupCodeLabel: 'Backup Code',
  useBackupCode: 'Use backup code',
  useAuthenticator: 'Use authenticator app',
  logoutButton: 'Sign out',

  // Setup page
  setupTitle: 'Set up Authenticator App',
  setupSubtitle: 'Scan the QR code with your app',
  scanQrCode: 'Scan QR Code',
  manualCode: 'Enter code manually',
  verifySetup: 'Enable',
  skipSetup: 'Skip',
  setupComplete: 'TOTP enabled!',
  saveBackupCodes: 'Save these backup codes securely!',

  // Error messages
  invalidCredentials: 'Invalid credentials',
  invalidCode: 'Invalid code',
  networkError: 'Network error',
  notAuthenticated: 'Not authenticated',

  // Success messages
  totpEnabled: 'Two-factor authentication has been enabled',
  totpDisabled: 'Two-factor authentication has been disabled',
  totpReset: 'Two-factor authentication has been reset',
};
