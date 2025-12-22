import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * TOTP Configuration (must match server-side config)
 */
const TOTP_ENABLED = process.env.TOTP_ENABLED !== 'false';

/**
 * Routes that don't require TOTP verification
 */
const TOTP_EXEMPT_ROUTES = [
  '/admin/login',
  '/admin/logout',
  '/admin/forgot-password',
  '/admin/reset-password',
  '/admin-setup-totp',
  '/admin-verify-totp',
  '/api/admin/totp/',
];

/**
 * Check if a path is exempt from TOTP verification
 */
function isTotpExempt(pathname: string): boolean {
  return TOTP_EXEMPT_ROUTES.some(route => pathname.startsWith(route));
}

/**
 * Middleware to protect admin routes.
 * Checks for Payload CMS authentication token in cookies.
 * If TOTP is enabled/required, also checks for TOTP verification.
 */
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect Payload Admin routes (except login, logout, forgot-password)
  if (pathname.startsWith('/admin')) {
    const payloadToken = request.cookies.get('payload-token');
    
    // Not authenticated - let Payload handle the redirect to login
    if (!payloadToken?.value) {
      // Clear any stale totp-verified cookie if user is not authenticated
      if (request.cookies.get('totp-verified')) {
        const response = NextResponse.next();
        response.cookies.delete('totp-verified');
        return response;
      }
      return NextResponse.next();
    }

    // User is authenticated - check TOTP if enabled and not on exempt route
    if (TOTP_ENABLED && !isTotpExempt(pathname)) {
      const totpVerified = request.cookies.get('totp-verified');
      
      // If TOTP not verified, redirect to verify page
      if (!totpVerified?.value) {
        // Store the original URL to redirect back after TOTP verification
        const verifyUrl = new URL('/admin-verify-totp', request.url);
        verifyUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(verifyUrl);
      }
    }

    return NextResponse.next();
  }

  // Protect admin API routes (except TOTP routes which handle their own auth)
  if (pathname.startsWith('/api/admin/') && !pathname.startsWith('/api/admin/totp/')) {
    const payloadToken = request.cookies.get('payload-token');

    if (!payloadToken?.value) {
      return NextResponse.json(
        { success: false, error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }

    // Check TOTP verification for API routes too
    if (TOTP_ENABLED) {
      const totpVerified = request.cookies.get('totp-verified');
      if (!totpVerified?.value) {
        return NextResponse.json(
          { success: false, error: 'TOTP-Verifizierung erforderlich' },
          { status: 403 }
        );
      }
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect all admin routes
    '/admin/:path*',
    // Protect admin API routes
    '/api/admin/:path*',
  ],
};
