import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * Middleware to check if user is authenticated as admin
 * Uses Payload CMS JWT token from cookies
 */
export async function checkAdminAuth(request: NextRequest): Promise<{
  authenticated: boolean;
  user?: { id: string; email: string; role: string };
  error?: string;
}> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('payload-token')?.value;

    if (!token) {
      return { authenticated: false, error: 'Nicht authentifiziert' };
    }

    // Verify token with Payload CMS
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/admin-users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return { authenticated: false, error: 'Token ungültig' };
    }

    const data = await response.json();
    
    if (!data.user) {
      return { authenticated: false, error: 'Benutzer nicht gefunden' };
    }

    return {
      authenticated: true,
      user: {
        id: data.user.id,
        email: data.user.email,
        role: data.user.role || 'admin',
      },
    };
  } catch (error) {
    console.error('Auth check error:', error);
    return { authenticated: false, error: 'Authentifizierungsfehler' };
  }
}

/**
 * Helper to require admin authentication for API routes
 */
export async function requireAdminAuth(request: NextRequest): Promise<NextResponse | null> {
  const auth = await checkAdminAuth(request);

  if (!auth.authenticated) {
    return NextResponse.json(
      { success: false, error: auth.error || 'Nicht autorisiert' },
      { status: 401 }
    );
  }

  return null; // No error, proceed with the request
}

/**
 * Helper to require specific role
 */
export async function requireRole(
  request: NextRequest,
  allowedRoles: string[]
): Promise<NextResponse | null> {
  const auth = await checkAdminAuth(request);

  if (!auth.authenticated) {
    return NextResponse.json(
      { success: false, error: auth.error || 'Nicht autorisiert' },
      { status: 401 }
    );
  }

  if (!auth.user || !allowedRoles.includes(auth.user.role)) {
    return NextResponse.json(
      { success: false, error: 'Keine Berechtigung für diese Aktion' },
      { status: 403 }
    );
  }

  return null; // No error, proceed with the request
}

/**
 * Get current admin user from request
 */
export async function getCurrentAdmin(request: NextRequest): Promise<{
  id: string;
  email: string;
  role: string;
} | null> {
  const auth = await checkAdminAuth(request);
  return auth.user || null;
}
