/**
 * API Route Handlers
 * 
 * Factory functions for creating TOTP API route handlers.
 * Use these to create consistent API routes in your Next.js app.
 */

import { NextRequest, NextResponse } from 'next/server';
import type { Payload } from 'payload';
import type { ResolvedTotpConfig } from './types';
import {
  generateTotpSecret,
  generateTotpQRCode,
  verifyTotpToken,
  generateBackupCodes,
  verifyBackupCode,
  formatSecretForDisplay,
} from './core';

type RouteHandler = (req: NextRequest) => Promise<NextResponse>;

interface HandlerFactoryOptions {
  config: ResolvedTotpConfig;
  getPayload: () => Promise<Payload>;
  getUserFromRequest: (req: NextRequest) => Promise<{ id: string; email?: string } | null>;
}

/**
 * Creates a success response
 */
function success(data: unknown) {
  return NextResponse.json({ success: true, data });
}

/**
 * Creates an error response
 */
function error(message: string, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

/**
 * Creates a handler to check TOTP status
 * GET /api/admin/totp/status
 */
export function createStatusHandler(options: HandlerFactoryOptions): RouteHandler {
  const { config, getPayload, getUserFromRequest } = options;

  return async (req: NextRequest) => {
    try {
      const user = await getUserFromRequest(req);
      if (!user) {
        return error('Not authenticated', 401);
      }

      const payload = await getPayload();
      const userData = await payload.findByID({
        collection: config.adminUsersCollection as 'users',
        id: user.id,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const totpEnabled = !!(userData as any)?.totpEnabled;

      return success({ totpEnabled });
    } catch (err) {
      console.error('TOTP status check error:', err);
      return error('Internal server error', 500);
    }
  };
}

/**
 * Creates a handler to setup TOTP (generate secret and QR code)
 * POST /api/admin/totp/setup
 */
export function createSetupHandler(options: HandlerFactoryOptions): RouteHandler {
  const { config, getPayload, getUserFromRequest } = options;

  return async (req: NextRequest) => {
    try {
      const user = await getUserFromRequest(req);
      if (!user) {
        return error('Not authenticated', 401);
      }

      const payload = await getPayload();
      const email = user.email || 'admin';

      // Generate secret
      const secret = generateTotpSecret();
      const manualCode = formatSecretForDisplay(secret);

      // Generate QR code
      const qrCode = await generateTotpQRCode(secret, email, config.issuer);

      // Store pending secret (not yet verified)
      await payload.update({
        collection: config.adminUsersCollection as 'users',
        id: user.id,
        data: {
          totpPendingSecret: secret,
        } as Record<string, unknown>,
      });

      return success({ qrCode, manualCode, secret });
    } catch (err) {
      console.error('TOTP setup error:', err);
      return error('Internal server error', 500);
    }
  };
}

/**
 * Creates a handler to verify and finalize TOTP setup
 * POST /api/admin/totp/verify
 */
export function createVerifyHandler(options: HandlerFactoryOptions): RouteHandler {
  const { config, getPayload, getUserFromRequest } = options;

  return async (req: NextRequest) => {
    try {
      const user = await getUserFromRequest(req);
      if (!user) {
        return error('Not authenticated', 401);
      }

      const { token } = await req.json();
      if (!token) {
        return error('Token required');
      }

      const payload = await getPayload();
      const userData = await payload.findByID({
        collection: config.adminUsersCollection as 'users',
        id: user.id,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pendingSecret = (userData as any)?.totpPendingSecret;
      if (!pendingSecret) {
        return error('No pending setup found');
      }

      // Verify token
      const isValid = verifyTotpToken(token, pendingSecret);
      if (!isValid) {
        return error('Invalid code');
      }

      // Generate backup codes
      const backupCodes = generateBackupCodes(8);

      // Enable TOTP
      await payload.update({
        collection: config.adminUsersCollection as 'users',
        id: user.id,
        data: {
          totpEnabled: true,
          totpSecret: pendingSecret,
          totpBackupCodes: backupCodes,
          totpPendingSecret: null,
        } as Record<string, unknown>,
      });

      return success({ backupCodes });
    } catch (err) {
      console.error('TOTP verify error:', err);
      return error('Internal server error', 500);
    }
  };
}

/**
 * Creates a handler to validate TOTP code during login
 * POST /api/admin/totp/validate
 */
export function createValidateHandler(options: HandlerFactoryOptions): RouteHandler {
  const { config, getPayload, getUserFromRequest } = options;

  return async (req: NextRequest) => {
    try {
      const user = await getUserFromRequest(req);
      if (!user) {
        return error('Not authenticated', 401);
      }

      const { token, useBackupCode } = await req.json();
      if (!token) {
        return error('Token required');
      }

      const payload = await getPayload();
      const userData = await payload.findByID({
        collection: config.adminUsersCollection as 'users',
        id: user.id,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const record = userData as any;

      if (!record?.totpEnabled || !record?.totpSecret) {
        return error('TOTP not enabled');
      }

      let isValid = false;

      if (useBackupCode) {
        // Validate backup code
        const { valid, remainingCodes } = verifyBackupCode(token, record.totpBackupCodes || []);
        if (valid) {
          isValid = true;
          // Update remaining backup codes
          await payload.update({
            collection: config.adminUsersCollection as 'users',
            id: user.id,
            data: {
              totpBackupCodes: remainingCodes,
            } as Record<string, unknown>,
          });
        }
      } else {
        // Validate TOTP token
        isValid = verifyTotpToken(token, record.totpSecret);
      }

      if (!isValid) {
        return error('Invalid code');
      }

      // Set verification cookie
      const response = success({ verified: true });
      response.cookies.set(config.cookies.name, 'verified', {
        httpOnly: true,
        secure: config.cookies.secure,
        sameSite: config.cookies.sameSite,
        maxAge: config.cookies.maxAge,
        path: '/',
      });

      return response;
    } catch (err) {
      console.error('TOTP validate error:', err);
      return error('Internal server error', 500);
    }
  };
}

/**
 * Creates a handler to disable TOTP
 * POST /api/admin/totp/disable
 */
export function createDisableHandler(options: HandlerFactoryOptions): RouteHandler {
  const { config, getPayload, getUserFromRequest } = options;

  return async (req: NextRequest) => {
    try {
      const user = await getUserFromRequest(req);
      if (!user) {
        return error('Not authenticated', 401);
      }

      const { token } = await req.json();
      if (!token) {
        return error('Token required');
      }

      const payload = await getPayload();
      const userData = await payload.findByID({
        collection: config.adminUsersCollection as 'users',
        id: user.id,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const record = userData as any;

      if (!record?.totpEnabled || !record?.totpSecret) {
        return error('TOTP not enabled');
      }

      // Verify current token before disabling
      const isValid = verifyTotpToken(token, record.totpSecret);
      if (!isValid) {
        return error('Invalid code');
      }

      // Disable TOTP
      await payload.update({
        collection: config.adminUsersCollection as 'users',
        id: user.id,
        data: {
          totpEnabled: false,
          totpSecret: null,
          totpBackupCodes: null,
          totpPendingSecret: null,
        } as Record<string, unknown>,
      });

      // Clear cookie
      const response = success({ disabled: true });
      response.cookies.delete(config.cookies.name);

      return response;
    } catch (err) {
      console.error('TOTP disable error:', err);
      return error('Internal server error', 500);
    }
  };
}

/**
 * Creates a handler to reset TOTP (admin only)
 * POST /api/admin/totp/reset
 */
export function createResetHandler(options: HandlerFactoryOptions): RouteHandler {
  const { config, getPayload, getUserFromRequest } = options;

  return async (req: NextRequest) => {
    try {
      const user = await getUserFromRequest(req);
      if (!user) {
        return error('Not authenticated', 401);
      }

      const { userId } = await req.json();
      if (!userId) {
        return error('User ID required');
      }

      const payload = await getPayload();

      // Reset target user's TOTP
      await payload.update({
        collection: config.adminUsersCollection as 'users',
        id: userId,
        data: {
          totpEnabled: false,
          totpSecret: null,
          totpBackupCodes: null,
          totpPendingSecret: null,
        } as Record<string, unknown>,
      });

      return success({ reset: true });
    } catch (err) {
      console.error('TOTP reset error:', err);
      return error('Internal server error', 500);
    }
  };
}
