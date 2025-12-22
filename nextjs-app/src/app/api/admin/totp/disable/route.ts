/**
 * TOTP Disable API Route
 * 
 * POST /api/admin/totp/disable
 * Disables TOTP for the current user.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { verifyTotpToken, totpConfig } from '@/lib/totp';

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
    // Check if TOTP is required - prevent disabling if required
    if (totpConfig.required) {
      return NextResponse.json(
        { success: false, error: 'TOTP ist für alle Benutzer erforderlich und kann nicht deaktiviert werden' },
        { status: 403 }
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

    const body = await request.json();
    const { token } = body;

    if (!token || typeof token !== 'string') {
      return NextResponse.json(
        { success: false, error: 'TOTP-Code ist erforderlich um TOTP zu deaktivieren' },
        { status: 400 }
      );
    }

    // Get user details with TOTP fields
    const fullUser = await payload.findByID({
      collection: 'admin-users',
      id: user.id,
    }) as AdminUser;

    const secret = fullUser.totp?.secret;

    if (!secret || !fullUser.totp?.enabled) {
      return NextResponse.json(
        { success: false, error: 'TOTP ist nicht aktiviert' },
        { status: 400 }
      );
    }

    // Verify the token before disabling
    const isValid = verifyTotpToken(token.replace(/\s/g, ''), secret);

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Ungültiger TOTP-Code' },
        { status: 400 }
      );
    }

    // Disable TOTP
    await payload.update({
      collection: 'admin-users',
      id: user.id,
      data: {
        totp: {
          enabled: false,
          secret: null,
          verified: false,
          backupCodes: null,
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        enabled: false,
        message: 'TOTP erfolgreich deaktiviert',
      },
    });
  } catch (error) {
    console.error('TOTP disable error:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Deaktivieren von TOTP' },
      { status: 500 }
    );
  }
}
