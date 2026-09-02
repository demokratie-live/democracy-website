# Schnellstart

## 1) Plugin in Payload konfigurieren

```typescript
// payload.config.ts
import { buildConfig } from 'payload';
import { totpPlugin } from '@democracy-deutschland/payload-totp-plugin';

export default buildConfig({
  plugins: [
    totpPlugin({
      enabled: true,
      required: true,
      issuer: 'Meine Anwendung',
      adminUsersCollection: 'admin-users',
    }),
  ],
});
```

## 2) API-Routen anlegen (Beispiel: Status)

```typescript
// src/app/api/admin/totp/status/route.ts
import { NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';
import { createStatusHandler, resolveConfig } from '@democracy-deutschland/payload-totp-plugin';
import { getPayload } from '@/lib/payload';

const config = resolveConfig({ issuer: 'Meine Anwendung', adminUsersCollection: 'admin-users' });

const handler = createStatusHandler({
  config,
  getPayload: async () => getPayload(),
  getUserFromRequest: async () => {
    const payload = await getPayload();
    const result = await payload.auth({ headers: await headers(), cookies: await cookies() });
    return result.user ? { id: String(result.user.id), email: result.user.email } : null;
  },
});

export async function GET(req: NextRequest) {
  return handler(req);
}
```

Wiederhole für `setup`, `verify`, `validate`, `disable`, `reset`.

## 3) Login-Seite

```tsx
// src/app/(payload)/admin/login/page.tsx
import { LoginPage } from '@democracy-deutschland/payload-totp-plugin/components';

export default function AdminLogin() {
  return (
    <LoginPage
      icon="🏛️"
      verifyPagePath="/admin-verify-totp"
      setupPagePath="/admin-setup-totp"
      footerText="© 2025"
      labels={{ loginTitle: 'Admin-Login', loginSubtitle: 'Melden Sie sich an' }}
    />
  );
}
```

## 4) Verifizierungs-Seite

```tsx
// src/app/(public)/admin-verify-totp/page.tsx
'use client';
import { Suspense } from 'react';
import { VerifyPage, styles } from '@democracy-deutschland/payload-totp-plugin/components';

export default function VerifyTotpPage() {
  return (
    <Suspense fallback={<div style={styles.page}>Laden...</div>}>
      <VerifyPage icon="🔐" loginPagePath="/admin/login" />
    </Suspense>
  );
}
```

## 5) Setup-Seite

```tsx
// src/app/(public)/admin-setup-totp/page.tsx
'use client';
import { Suspense } from 'react';
import { SetupPage, styles } from '@democracy-deutschland/payload-totp-plugin/components';

export default function SetupTotpPage() {
  return (
    <Suspense fallback={<div style={styles.page}>Laden...</div>}>
      <SetupPage icon="🛡️" loginPagePath="/admin/login" allowSkip={false} />
    </Suspense>
  );
}
```

## 6) Middleware

```typescript
// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith('/admin')) return NextResponse.next();

  const exempt = ['/admin/login', '/admin-verify-totp', '/admin-setup-totp'];
  if (exempt.some((p) => pathname.startsWith(p))) return NextResponse.next();

  if (!request.cookies.get('payload-token')) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  if (!request.cookies.get('totp-verified')) {
    const url = new URL('/admin-verify-totp', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*'] };
```
