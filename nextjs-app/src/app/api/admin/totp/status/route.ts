/**
 * TOTP Status API Route
 * 
 * GET /api/admin/totp/status
 * Returns the TOTP status for the current user.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { totpConfig } from '@/lib/totp';

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

export async function GET(request: NextRequest) {
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

    // Get user details with TOTP fields
    const fullUser = await payload.findByID({
      collection: 'admin-users',
      id: user.id,
    }) as AdminUser;

    const userTotpEnabled = fullUser.totp?.enabled || false;
    const totpVerified = fullUser.totp?.verified || false;
    const backupCodesCount = fullUser.totp?.backupCodes?.length || 0;

    return NextResponse.json({
      success: true,
      data: {
        // Global TOTP configuration
        globalEnabled: totpConfig.enabled,
        required: totpConfig.required,
        // User-specific TOTP status
        enabled: userTotpEnabled,
        verified: totpVerified,
        backupCodesRemaining: backupCodesCount,
      },
    });
  } catch (error) {
    console.error('TOTP status error:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Abrufen des TOTP-Status' },
      { status: 500 }
    );
  }
}
