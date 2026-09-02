# Konfiguration

## Plugin-Optionen

| Option | Typ | Standard | Beschreibung |
|--------|-----|----------|--------------|
| enabled | boolean | true | Plugin global aktivieren/deaktivieren |
| required | boolean | false | TOTP für alle Benutzer erzwingen |
| issuer | string | 'Payload CMS' | App-Name in Authenticator |
| backupCodesCount | number | 8 | Anzahl Backup-Codes |
| window | number | 1 | Token-Gültigkeitsfenster (30s-Intervalle) |
| adminUsersCollection | string | 'admin-users' | Slug der Admin-Users Collection |

## Routen-Konfiguration

```typescript
totpPlugin({
  routes: {
    apiPrefix: '/api/admin/totp',
    setupPage: '/admin-setup-totp',
    verifyPage: '/admin-verify-totp',
    loginPage: '/admin/login',
  },
});
```

## Cookie-Konfiguration

```typescript
totpPlugin({
  cookies: {
    name: 'totp-verified',
    maxAge: 86400,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  },
});
```

## Umgebungsvariablen

| Variable | Beschreibung |
|----------|--------------|
| TOTP_ENABLED | 'true' / 'false' |
| TOTP_REQUIRED | 'true' / 'false' |
| TOTP_ISSUER | App-Name für Authenticator |
| TOTP_BACKUP_CODES_COUNT | Anzahl Backup-Codes |
| TOTP_WINDOW | Token-Gültigkeitsfenster |

```typescript
import { mergeWithEnv, totpPlugin } from '@democracy-deutschland/payload-totp-plugin';

totpPlugin(mergeWithEnv({
  // optional overrides
}));
```
