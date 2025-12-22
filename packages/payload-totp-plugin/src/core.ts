/**
 * TOTP Core Utilities
 * 
 * Provides core functionality for two-factor authentication using TOTP.
 * Compatible with Google Authenticator, Authy, and other TOTP apps.
 */

import { authenticator } from 'otplib';
import * as QRCode from 'qrcode';

export interface TotpCoreConfig {
  issuer: string;
  backupCodesCount: number;
  window: number;
}

/**
 * Configure the authenticator with given options
 */
export function configureAuthenticator(window: number = 1): void {
  authenticator.options = {
    digits: 6,
    step: 30, // 30 seconds window
    window,
  };
}

/**
 * Generates a new TOTP secret
 */
export function generateTotpSecret(): string {
  return authenticator.generateSecret();
}

/**
 * Generates a TOTP URI for use with authenticator apps
 */
export function generateTotpUri(secret: string, email: string, issuer: string): string {
  return authenticator.keyuri(email, issuer, secret);
}

/**
 * Generates a QR code data URL for the TOTP URI
 */
export async function generateTotpQRCode(
  secret: string,
  email: string,
  issuer: string
): Promise<string> {
  const uri = generateTotpUri(secret, email, issuer);
  return QRCode.toDataURL(uri, {
    width: 256,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
  });
}

/**
 * Verifies a TOTP token against a secret
 */
export function verifyTotpToken(token: string, secret: string): boolean {
  try {
    return authenticator.verify({ token, secret });
  } catch {
    return false;
  }
}

/**
 * Generates a current TOTP token (for testing only)
 */
export function generateCurrentToken(secret: string): string {
  return authenticator.generate(secret);
}

/**
 * Generates backup codes for recovery
 */
export function generateBackupCodes(count: number = 8): string[] {
  const codes: string[] = [];
  for (let i = 0; i < count; i++) {
    // Generate 8-character alphanumeric codes
    const code = Array.from({ length: 8 }, () => {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude confusing chars like 0, O, I, 1
      return chars.charAt(Math.floor(Math.random() * chars.length));
    }).join('');
    codes.push(code);
  }
  return codes;
}

/**
 * Formats secret for manual entry (groups of 4 characters)
 */
export function formatSecretForDisplay(secret: string): string {
  return secret.match(/.{1,4}/g)?.join(' ') || secret;
}

/**
 * Verifies a backup code and returns the remaining codes if valid
 */
export function verifyBackupCode(
  code: string,
  backupCodes: string[]
): { valid: boolean; remainingCodes: string[] } {
  const normalizedCode = code.toUpperCase().replace(/\s/g, '');
  const index = backupCodes.findIndex(
    (bc) => bc.toUpperCase().replace(/\s/g, '') === normalizedCode
  );

  if (index === -1) {
    return { valid: false, remainingCodes: backupCodes };
  }

  // Remove the used code
  const remainingCodes = [...backupCodes];
  remainingCodes.splice(index, 1);

  return { valid: true, remainingCodes };
}
