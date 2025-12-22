# @democracy-deutschland/payload-totp-plugin

Ein Payload CMS 3.x Plugin für TOTP (Time-based One-Time Password) Zwei-Faktor-Authentifizierung.

## Features

- 🔐 **TOTP-basierte 2FA** - Kompatibel mit Google Authenticator, Authy, 1Password, etc.
- 🎨 **Anpassbare Login-Seiten** - Vorgefertigte React-Komponenten
- 🌍 **Mehrsprachig** - Deutsch und Englisch out-of-the-box
- 🔧 **Flexibel konfigurierbar** - Alle Endpunkte und Pfade anpassbar
- 📱 **Backup-Codes** - Für den Notfall-Zugang
- 🛡️ **Next.js Middleware** - Schutz der Admin-Routen

## Installation

```bash
pnpm add @democracy-deutschland/payload-totp-plugin

# Peer dependencies
pnpm add otplib qrcode
pnpm add -D @types/qrcode
```

## Schnellstart

### 1. Plugin in Payload konfigurieren

```typescript
// payload.config.ts
import { buildConfig } from 'payload';
import { totpPlugin } from '@democracy-deutschland/payload-totp-plugin';

export default buildConfig({
  // ... andere Konfiguration
  plugins: [
    totpPlugin({
      enabled: true,
      required: true,
      issuer: 'Meine Anwendung',
    }),
  ],
});
```

### 2. API-Routen erstellen

Erstelle die folgenden API-Routen in deiner Next.js App:

```typescript
// src/app/api/admin/totp/status/route.ts
import { NextRequest } from 'next/server';
import { createStatusHandler } from '@democracy-deutschland/payload-totp-plugin';
import { getPayload } from '@/lib/payload';

const handler = createStatusHandler({
  config: { /* deine Config */ },
  getPayload,
  getUserFromRequest: async (req) => {
    // Implementiere User-Extraktion aus Request
  },
});

export async function GET(req: NextRequest) {
  return handler(req);
}
```

### 3. Login-Seiten erstellen

```tsx
// src/app/(payload)/admin/login/page.tsx
import { LoginPage } from '@democracy-deutschland/payload-totp-plugin/components';

export default function AdminLogin() {
  return (
    <LoginPage
      icon="🏛️"
      footerText="© 2025 Meine Organisation"
    />
  );
}
```

```tsx
// src/app/(public)/admin-verify-totp/page.tsx
import { VerifyPage } from '@democracy-deutschland/payload-totp-plugin/components';

export default function VerifyTotp() {
  return <VerifyPage />;
}
```

```tsx
// src/app/(public)/admin-setup-totp/page.tsx
import { SetupPage } from '@democracy-deutschland/payload-totp-plugin/components';

export default function SetupTotp() {
  return <SetupPage />;
}
```

### 4. Middleware einrichten

```typescript
// src/middleware.ts
import { createTotpMiddleware } from '@democracy-deutschland/payload-totp-plugin/middleware';

const totpMiddleware = createTotpMiddleware({
  enabled: true,
  required: true,
  routes: {
    apiPrefix: '/api/admin/totp',
    setupPage: '/admin-setup-totp',
    verifyPage: '/admin-verify-totp',
    loginPage: '/admin/login',
  },
});

export function middleware(request: NextRequest) {
  return totpMiddleware(request);
}

export const config = {
  matcher: ['/admin/:path*'],
};
```

## Konfiguration

### Plugin-Optionen

| Option | Typ | Standard | Beschreibung |
|--------|-----|----------|--------------|
| `enabled` | `boolean` | `true` | TOTP aktivieren/deaktivieren |
| `required` | `boolean` | `false` | TOTP für alle Benutzer erzwingen |
| `issuer` | `string` | `'Payload CMS'` | App-Name in Authenticator |
| `adminUsersCollection` | `string` | `'admin-users'` | Collection-Slug |
| `routes.apiPrefix` | `string` | `'/api/admin/totp'` | API-Endpunkt-Prefix |
| `routes.setupPage` | `string` | `'/admin-setup-totp'` | Setup-Seite Pfad |
| `routes.verifyPage` | `string` | `'/admin-verify-totp'` | Verifikations-Seite Pfad |
| `routes.loginPage` | `string` | `'/admin/login'` | Login-Seite Pfad |
| `cookie.name` | `string` | `'totp-verified'` | Cookie-Name |
| `cookie.maxAge` | `number` | `86400` | Cookie-Gültigkeit (Sekunden) |

### Labels anpassen

```typescript
totpPlugin({
  labels: {
    de: {
      loginTitle: 'Admin-Login',
      loginSubtitle: 'Melden Sie sich an',
      verifyTitle: '2FA Verifizierung',
      // ... weitere Labels
    },
    en: {
      loginTitle: 'Admin Login',
      loginSubtitle: 'Sign in to continue',
      verifyTitle: '2FA Verification',
    },
  },
});
```

## API-Endpunkte

Das Plugin definiert folgende API-Routen:

| Endpunkt | Methode | Beschreibung |
|----------|---------|--------------|
| `/api/admin/totp/status` | GET | TOTP-Status des Benutzers |
| `/api/admin/totp/setup` | POST | TOTP-Setup starten (QR-Code) |
| `/api/admin/totp/verify` | POST | Setup verifizieren |
| `/api/admin/totp/validate` | POST | TOTP-Code validieren |
| `/api/admin/totp/disable` | POST | TOTP deaktivieren |
| `/api/admin/totp/reset` | POST | TOTP zurücksetzen (Admin) |

## Komponenten

### LoginPage

```tsx
import { LoginPage } from '@democracy-deutschland/payload-totp-plugin/components';

<LoginPage
  defaultRedirectPath="/admin"
  verifyPagePath="/admin-verify-totp"
  setupPagePath="/admin-setup-totp"
  loginEndpoint="/api/admin-users/login"
  totpCheckEndpoint="/api/admin/totp/check"
  icon="🔐"
  footerText="© 2025"
  labels={{
    loginTitle: 'Admin-Login',
  }}
/>
```

### VerifyPage

```tsx
import { VerifyPage } from '@democracy-deutschland/payload-totp-plugin/components';

<VerifyPage
  defaultRedirectPath="/admin"
  loginPagePath="/admin/login"
  validateEndpoint="/api/admin/totp/validate"
  logoutEndpoint="/api/admin-users/logout"
  icon="🛡️"
  labels={{
    verifyTitle: '2FA-Code eingeben',
  }}
/>
```

### SetupPage

```tsx
import { SetupPage } from '@democracy-deutschland/payload-totp-plugin/components';

<SetupPage
  defaultRedirectPath="/admin"
  loginPagePath="/admin/login"
  setupEndpoint="/api/admin/totp/setup"
  verifyEndpoint="/api/admin/totp/verify"
  allowSkip={true}
  icon="🛡️"
/>
```

## Core-Funktionen

Für eigene Implementierungen stehen Core-Funktionen zur Verfügung:

```typescript
import {
  generateTotpSecret,
  generateQRCode,
  verifyTotpToken,
  generateBackupCodes,
  verifyBackupCode,
} from '@democracy-deutschland/payload-totp-plugin';

// Secret generieren
const { secret, manualCode, otpauthUrl } = generateTotpSecret('MyApp', 'user@example.com');

// QR-Code erstellen
const qrCode = await generateQRCode(otpauthUrl);

// Token verifizieren
const isValid = verifyTotpToken('123456', secret);

// Backup-Codes generieren
const backupCodes = generateBackupCodes(8);

// Backup-Code verwenden
const { valid, remainingCodes } = verifyBackupCode('ABCD-1234', backupCodes);
```

## Datenbank-Schema

Das Plugin fügt folgende Felder zur Admin-Users Collection hinzu:

```typescript
{
  totpEnabled: boolean;      // TOTP aktiviert
  totpSecret: string;        // Verschlüsseltes Secret
  totpBackupCodes: string[]; // Backup-Codes
  totpPendingSecret: string; // Temporäres Secret während Setup
}
```

## Sicherheitshinweise

1. **HTTPS verwenden** - TOTP-Secrets sollten nur über verschlüsselte Verbindungen übertragen werden
2. **Secrets verschlüsseln** - In Produktion sollten Secrets in der Datenbank verschlüsselt sein
3. **Backup-Codes sicher aufbewahren** - Benutzer sollten ihre Backup-Codes offline speichern
4. **Cookie-Sicherheit** - Das Verifikations-Cookie ist `httpOnly` und `secure` in Produktion

## Entwicklung

```bash
# Abhängigkeiten installieren
pnpm install

# Build
pnpm build

# Watch-Modus
pnpm dev
```

## Lizenz

MIT © DEMOCRACY Deutschland e.V.
