# Beispiele

## Validate-API mit Auth-Check

```typescript
// src/app/api/admin/totp/validate/route.ts
import { NextRequest } from 'next/server';
import { cookies, headers } from 'next/headers';
import { createValidateHandler, resolveConfig } from '@democracy-deutschland/payload-totp-plugin';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

const config = resolveConfig({ issuer: 'Meine App', required: true, adminUsersCollection: 'admin-users' });

async function getPayloadInstance() {
  return getPayload({ config: configPromise });
}

async function getUserFromRequest() {
  try {
    const payload = await getPayloadInstance();
    const { user } = await payload.auth({ headers: await headers(), cookies: await cookies() });
    return user ? { id: String(user.id), email: user.email } : null;
  } catch {
    return null;
  }
}

const handler = createValidateHandler({
  config,
  getPayload: getPayloadInstance,
  getUserFromRequest,
});

export async function POST(req: NextRequest) {
  return handler(req);
}
```
