/**
 * TOTP Verify API Route
 * 
 * POST /api/admin/totp/verify
 * Verifies a TOTP token during setup to enable 2FA.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { verifyTotpToken, generateBackupCodes } from '@/lib/totp';

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
    const payload = await getPayload({ config });
    
    // Get the current user from the session
    const { user } = await payload.auth({ headers: request.headers });
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { token } = body;

    if (!token || typeof token !== 'string') {
      return NextResponse.json(
        { success: false, error: 'TOTP-Code ist erforderlich' },
        { status: 400 }
      );
    }

    // Get user details with TOTP fields
    const fullUser = await payload.findByID({
      collection: 'admin-users',
      id: user.id,
    }) as AdminUser;

    const secret = fullUser.totp?.secret;

    if (!secret) {
      return NextResponse.json(
        { success: false, error: 'Kein TOTP-Secret gefunden. Bitte zuerst einrichten.' },
        { status: 400 }
      );
    }

    // Verify the token
    const isValid = verifyTotpToken(token.replace(/\s/g, ''), secret);

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Ungültiger TOTP-Code' },
        { status: 400 }
      );
    }

    // Generate backup codes
    const backupCodes = generateBackupCodes(8);

    // Enable TOTP
    await payload.update({
      collection: 'admin-users',
      id: user.id,
      data: {
        totp: {
          enabled: true,
          secret: secret,
          verified: true,
          backupCodes: backupCodes,
        },
      },
    });

    // Create response with totp-verified cookie
    const response = NextResponse.json({
      success: true,
      data: {
        enabled: true,
        backupCodes,
        message: 'TOTP erfolgreich aktiviert',
      },
    });

    // Set a session cookie to mark TOTP as verified for this session
    response.cookies.set('totp-verified', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('TOTP verify error:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler bei der TOTP-Verifizierung' },
      { status: 500 }
    );
  }
}
