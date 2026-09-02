/**
 * TOTP Check API Route
 * 
 * POST /api/admin/totp/check
 * Checks if a user has TOTP enabled (used during login to determine if 2FA is required).
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
    
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'E-Mail ist erforderlich' },
        { status: 400 }
      );
    }

    // Find user by email
    const users = await payload.find({
      collection: 'admin-users',
      where: {
        email: {
          equals: email,
        },
      },
      limit: 1,
    });

    if (users.docs.length === 0) {
      // Don't reveal if user exists
      return NextResponse.json({
        success: true,
        data: {
          totpRequired: false,
        },
      });
    }

    const user = users.docs[0] as AdminUser;
    const totpRequired = user.totp?.enabled && user.totp?.verified;

    return NextResponse.json({
      success: true,
      data: {
        totpRequired: !!totpRequired,
        userId: totpRequired ? user.id : null,
      },
    });
  } catch (error) {
    console.error('TOTP check error:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Prüfen des TOTP-Status' },
      { status: 500 }
    );
  }
}
