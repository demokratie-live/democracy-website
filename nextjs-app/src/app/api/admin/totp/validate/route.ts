/**
 * TOTP Validate API Route
 * 
 * POST /api/admin/totp/validate
 * Validates a TOTP token during login (used for 2FA step).
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { verifyTotpToken, verifyBackupCode } from '@/lib/totp';

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
    
    const body = await request.json();
    const { userId, token, isBackupCode } = body;

    if (!userId || !token) {
      return NextResponse.json(
        { success: false, error: 'Benutzer-ID und TOTP-Code sind erforderlich' },
        { status: 400 }
      );
    }

    // Get user details with TOTP fields
    const fullUser = await payload.findByID({
      collection: 'admin-users',
      id: userId,
    }) as AdminUser;

    if (!fullUser.totp?.enabled || !fullUser.totp?.secret) {
      return NextResponse.json(
        { success: false, error: 'TOTP ist für diesen Benutzer nicht aktiviert' },
        { status: 400 }
      );
    }

    let isValid = false;

    if (isBackupCode) {
      // Verify backup code
      const backupCodes = fullUser.totp.backupCodes || [];
      const result = verifyBackupCode(token, backupCodes);
      
      if (result.valid) {
        isValid = true;
        // Update remaining backup codes
        await payload.update({
          collection: 'admin-users',
          id: userId,
          data: {
            totp: {
              ...fullUser.totp,
              backupCodes: result.remainingCodes,
            },
          },
        });
      }
    } else {
      // Verify TOTP token
      isValid = verifyTotpToken(token.replace(/\s/g, ''), fullUser.totp.secret);
    }

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Ungültiger Code' },
        { status: 400 }
      );
    }

    // Create response with totp-verified cookie
    const response = NextResponse.json({
      success: true,
      data: {
        valid: true,
        message: 'TOTP erfolgreich validiert',
      },
    });

    // Set a session cookie to mark TOTP as verified for this session
    // This cookie is HttpOnly and Secure (in production) to prevent XSS attacks
    response.cookies.set('totp-verified', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      // No maxAge = session cookie (expires when browser closes)
    });

    return response;
  } catch (error) {
    console.error('TOTP validate error:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler bei der TOTP-Validierung' },
      { status: 500 }
    );
  }
}
