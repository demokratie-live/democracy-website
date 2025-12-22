/**
 * TOTP Middleware for Next.js
 * 
 * Provides middleware to protect admin routes with TOTP verification.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { TotpMiddlewareConfig } from './types';

/**
 * Default middleware configuration
 */
export const defaultMiddlewareConfig: TotpMiddlewareConfig = {
  enabled: true,
  required: false,
  cookieName: 'totp-verified',
  exemptRoutes: [
    '/admin/login',
    '/admin/logout',
    '/admin/forgot-password',
    '/admin/reset-password',
    '/admin-setup-totp',
    '/admin-verify-totp',
    '/api/admin/totp/',
  ],
  verifyPagePath: '/admin-verify-totp',
};

/**
 * Check if a path is exempt from TOTP verification
 */
export function isTotpExempt(
  pathname: string,
  exemptRoutes: string[]
): boolean {
  return exemptRoutes.some((route) => pathname.startsWith(route));
}

/**
 * Creates TOTP middleware handler
 */
export function createTotpMiddleware(config: Partial<TotpMiddlewareConfig> = {}) {
  const resolvedConfig: TotpMiddlewareConfig = {
    ...defaultMiddlewareConfig,
    ...config,
    exemptRoutes: config.exemptRoutes || defaultMiddlewareConfig.exemptRoutes,
  };

  return async function totpMiddleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Skip if TOTP is not enabled
    if (!resolvedConfig.enabled) {
      return NextResponse.next();
    }

    // Protect admin routes
    if (pathname.startsWith('/admin')) {
      const payloadToken = request.cookies.get('payload-token');

      // Not authenticated - let Payload handle the redirect to login
      if (!payloadToken?.value) {
        // Clear any stale totp-verified cookie if user is not authenticated
        if (request.cookies.get(resolvedConfig.cookieName)) {
          const response = NextResponse.next();
          response.cookies.delete(resolvedConfig.cookieName);
          return response;
        }
        return NextResponse.next();
      }

      // User is authenticated - check TOTP if not on exempt route
      if (!isTotpExempt(pathname, resolvedConfig.exemptRoutes)) {
        const totpVerified = request.cookies.get(resolvedConfig.cookieName);

        // If TOTP not verified, redirect to verify page
        if (!totpVerified?.value) {
          const verifyUrl = new URL(resolvedConfig.verifyPagePath, request.url);
          verifyUrl.searchParams.set('redirect', pathname);
          return NextResponse.redirect(verifyUrl);
        }
      }

      return NextResponse.next();
    }

    // Protect admin API routes (except TOTP routes which handle their own auth)
    if (
      pathname.startsWith('/api/admin/') &&
      !pathname.startsWith('/api/admin/totp/')
    ) {
      const payloadToken = request.cookies.get('payload-token');

      if (!payloadToken?.value) {
        return NextResponse.json(
          { success: false, error: 'Nicht authentifiziert' },
          { status: 401 }
        );
      }

      // Check TOTP verification for API routes too
      const totpVerified = request.cookies.get(resolvedConfig.cookieName);
      if (!totpVerified?.value) {
        return NextResponse.json(
          { success: false, error: 'TOTP-Verifizierung erforderlich' },
          { status: 403 }
        );
      }

      return NextResponse.next();
    }

    return NextResponse.next();
  };
}

/**
 * Matcher configuration for Next.js middleware
 */
export const middlewareMatcher = [
  '/admin/:path*',
  '/api/admin/:path*',
];
