/**
 * TOTP Setup API Route
 * 
 * POST /api/admin/totp/setup
 * Generates a new TOTP secret and returns QR code + manual code for setup.
 * 
 * POST /api/admin/totp/verify
 * Verifies a TOTP token during setup to enable 2FA.
 * 
 * POST /api/admin/totp/validate
 * Validates a TOTP token during login.
 * 
 * POST /api/admin/totp/disable
 * Disables TOTP for the current user.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';
import {
  generateTotpSecret,
  generateTotpQRCode,
  formatSecretForDisplay,
  totpConfig,
} from '@/lib/totp';

type AdminUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  totp?: {
    enabled: boolean;
    secret: string | null;
    verified: boolean;
    backupCodes: string[] | null;
  };
};

export async function POST(request: NextRequest) {
  try {
    // Check if TOTP is enabled globally
    if (!totpConfig.enabled) {
      return NextResponse.json(
        { success: false, error: 'TOTP ist deaktiviert' },
        { status: 400 }
      );
    }

    const payload = await getPayload({ config });
    
    // Get the current user from the session
    const { user } = await payload.auth({ headers: request.headers });
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }

    // Get user details with TOTP fields
    const fullUser = await payload.findByID({
      collection: 'admin-users',
      id: user.id,
    }) as AdminUser;

    // Generate new secret
    const secret = generateTotpSecret();
    const qrCode = await generateTotpQRCode(secret, fullUser.email);
    const manualCode = formatSecretForDisplay(secret);

    // Store the secret (not yet verified)
    await payload.update({
      collection: 'admin-users',
      id: user.id,
      data: {
        totp: {
          enabled: false,
          secret: secret,
          verified: false,
          backupCodes: null,
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        qrCode,
        manualCode,
        secret, // For copying
      },
    });
  } catch (error) {
    console.error('TOTP setup error:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler bei der TOTP-Einrichtung' },
      { status: 500 }
    );
  }
}
