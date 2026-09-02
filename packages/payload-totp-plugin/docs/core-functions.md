# Core-Funktionen

```typescript
import {
  generateTotpSecret,
  generateTotpQRCode,
  verifyTotpToken,
  generateBackupCodes,
  verifyBackupCode,
  formatSecretForDisplay,
} from '@democracy-deutschland/payload-totp-plugin';
```

## Beispiele

```typescript
const secret = generateTotpSecret();
const manual = formatSecretForDisplay(secret);
const qr = await generateTotpQRCode(secret, 'user@example.com', 'My App');
const valid = verifyTotpToken('123456', secret);
const codes = generateBackupCodes(8);
const { valid: ok, remainingCodes } = verifyBackupCode('ABCD-1234', codes);
```
