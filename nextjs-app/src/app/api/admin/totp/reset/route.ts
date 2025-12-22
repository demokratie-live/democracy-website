/**
 * TOTP Reset API Route
 * 
 * POST /api/admin/totp/reset
 * Resets TOTP for a user (admin only). Used when a user loses access to their authenticator.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

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
    
    // Get the current user from the session (must be admin)
    const { user } = await payload.auth({ headers: request.headers });
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }

    // Check if current user is admin
    const currentUser = await payload.findByID({
      collection: 'admin-users',
      id: user.id,
    }) as AdminUser;

    if (currentUser.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Nur Administratoren können TOTP zurücksetzen' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Benutzer-ID ist erforderlich' },
        { status: 400 }
      );
    }

    // Get the target user
    const targetUser = await payload.findByID({
      collection: 'admin-users',
      id: userId,
    }) as AdminUser;

    if (!targetUser) {
      return NextResponse.json(
        { success: false, error: 'Benutzer nicht gefunden' },
        { status: 404 }
      );
    }

    // Reset TOTP for the target user
    await payload.update({
      collection: 'admin-users',
      id: userId,
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
        message: `TOTP für ${targetUser.email} wurde zurückgesetzt`,
      },
    });
  } catch (error) {
    console.error('TOTP reset error:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Zurücksetzen von TOTP' },
      { status: 500 }
    );
  }
}
