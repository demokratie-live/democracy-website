import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to protect admin routes.
 * Checks for Payload CMS authentication token in cookies.
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only protect admin dashboard routes (not Payload CMS admin)
  if (pathname.startsWith('/admin/dashboard')) {
    // Check for Payload CMS token in cookies
    const payloadToken = request.cookies.get('payload-token');

    if (!payloadToken?.value) {
      // Redirect to Payload CMS login
      const loginUrl = new URL('/admin', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Token exists - allow access
    // Note: Full token validation happens server-side in API routes
    return NextResponse.next();
  }

  // Protect admin API routes
  if (pathname.startsWith('/api/admin/')) {
    const payloadToken = request.cookies.get('payload-token');

    if (!payloadToken?.value) {
      return NextResponse.json(
        { success: false, error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect admin dashboard routes
    '/admin/dashboard/:path*',
    // Protect admin API routes
    '/api/admin/:path*',
  ],
};
