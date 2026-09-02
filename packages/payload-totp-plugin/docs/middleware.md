# Middleware

## Factory

```typescript
import { createTotpMiddleware } from '@democracy-deutschland/payload-totp-plugin/middleware';

const totpMiddleware = createTotpMiddleware({
  enabled: true,
  required: true,
  cookieName: 'totp-verified',
  exemptRoutes: [
    '/admin/login',
    '/admin/forgot-password',
    '/admin-verify-totp',
    '/admin-setup-totp',
  ],
  verifyPagePath: '/admin-verify-totp',
});
```

Binde die Middleware in `src/middleware.ts` ein oder kombiniere sie mit weiteren Checks.
