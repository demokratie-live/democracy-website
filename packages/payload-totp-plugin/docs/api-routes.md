# API-Routen

## Handler Factories

```typescript
import {
  createStatusHandler,
  createSetupHandler,
  createVerifyHandler,
  createValidateHandler,
  createDisableHandler,
  createResetHandler,
} from '@democracy-deutschland/payload-totp-plugin';
```

Alle Handler erwarten:

```typescript
interface HandlerFactoryOptions {
  config: ResolvedTotpConfig;
  getPayload: () => Promise<Payload>;
  getUserFromRequest: (req: NextRequest) => Promise<{ id: string; email?: string } | null>;
}
```

## Endpunkte

| Endpunkt | Methode | Beschreibung | Body | Response |
|----------|---------|--------------|------|----------|
| /api/admin/totp/status | GET | TOTP-Status abrufen | - | `{ totpEnabled: boolean }` |
| /api/admin/totp/setup | POST | TOTP-Setup starten | - | `{ qrCode, manualCode }` |
| /api/admin/totp/verify | POST | Setup verifizieren | `{ token }` | `{ backupCodes }` |
| /api/admin/totp/validate | POST | TOTP-Code prüfen | `{ token, useBackupCode? }` | `{ verified: true }` + Cookie |
| /api/admin/totp/disable | POST | TOTP deaktivieren | `{ token }` | `{ disabled: true }` |
| /api/admin/totp/reset | POST | TOTP zurücksetzen | `{ userId }` | `{ reset: true }` |
