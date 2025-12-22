# Komponenten

## LoginPage

```tsx
import { LoginPage } from '@democracy-deutschland/payload-totp-plugin/components';

<LoginPage
  defaultRedirectPath="/admin"
  verifyPagePath="/admin-verify-totp"
  setupPagePath="/admin-setup-totp"
  forgotPasswordPath="/admin/forgot-password"
  loginEndpoint="/api/admin-users/login"
  totpCheckEndpoint="/api/admin/totp/check"
  icon="🏛️"
  footerText="© 2025"
  labels={{ loginTitle: 'Admin Login', loginSubtitle: 'Melden Sie sich an' }}
/>
```

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| defaultRedirectPath | string | '/admin' | Redirect nach Login |
| verifyPagePath | string | '/admin-verify-totp' | Pfad Verifizierung |
| setupPagePath | string | '/admin-setup-totp' | Pfad Setup |
| forgotPasswordPath | string | '/admin/forgot-password' | Passwort vergessen |
| loginEndpoint | string | '/api/admin-users/login' | Login API |
| totpCheckEndpoint | string | '/api/admin/totp/check' | TOTP-Status |
| icon | React.ReactNode | '🔐' | Icon |
| footerText | string | - | Footer |
| labels | Partial<TotpLabels> | Default | Texte |

## VerifyPage

```tsx
import { VerifyPage } from '@democracy-deutschland/payload-totp-plugin/components';

<VerifyPage
  defaultRedirectPath="/admin"
  loginPagePath="/admin/login"
  validateEndpoint="/api/admin/totp/validate"
  logoutEndpoint="/api/admin-users/logout"
  icon="🛡️"
  labels={{ verifyTitle: '2FA', verifySubtitle: 'Code eingeben' }}
/>
```

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| defaultRedirectPath | string | '/admin' | Redirect nach Verifizierung |
| loginPagePath | string | '/admin/login' | Zurück zum Login |
| validateEndpoint | string | '/api/admin/totp/validate' | Validierung |
| logoutEndpoint | string | '/api/admin-users/logout' | Logout |
| icon | React.ReactNode | '🔐' | Icon |
| labels | Partial<TotpLabels> | Default | Texte |

## SetupPage

```tsx
import { SetupPage } from '@democracy-deutschland/payload-totp-plugin/components';

<SetupPage
  defaultRedirectPath="/admin"
  loginPagePath="/admin/login"
  setupEndpoint="/api/admin/totp/setup"
  verifyEndpoint="/api/admin/totp/verify"
  allowSkip={false}
  icon="🛡️"
  labels={{ setupTitle: 'Authenticator einrichten' }}
/>
```

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| defaultRedirectPath | string | '/admin' | Redirect nach Setup |
| loginPagePath | string | '/admin/login' | Zurück zum Login |
| setupEndpoint | string | '/api/admin/totp/setup' | Setup |
| verifyEndpoint | string | '/api/admin/totp/verify' | Verifizieren |
| allowSkip | boolean | true | Setup überspringbar |
| icon | React.ReactNode | '🔐' | Icon |
| labels | Partial<TotpLabels> | Default | Texte |

## Styles

```tsx
import { styles } from '@democracy-deutschland/payload-totp-plugin/components';
```

Verfügbare Keys: `page`, `container`, `card`, `title`, `subtitle`, `form`, `input`, `button`, `buttonDisabled`, `buttonSecondary`, `link`, `footer`, `error`, `success`, `qrCode`, `backupCodes`, `codeGrid`.

Beispiel:

```tsx
<div style={styles.page}>
  <div style={styles.container}>
    <div style={styles.card}>
      <h1 style={styles.title}>Meine Seite</h1>
    </div>
  </div>
</div>
```
