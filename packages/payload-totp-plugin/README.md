# @democracy-deutschland/payload-totp-plugin

Ein vollständiges Payload CMS 3.x Plugin für TOTP (Time-based One-Time Password) Zwei-Faktor-Authentifizierung.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Payload CMS](https://img.shields.io/badge/Payload%20CMS-3.x-green.svg)](https://payloadcms.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Kurzüberblick

- 🔐 TOTP-basierte 2FA (RFC 6238), inkl. Backup-Codes
- 🎨 Vorgefertigte React-Komponenten (Login, Verify, Setup)
- 🛡️ Next.js Middleware + Handler-Factories
- 🌍 Deutsch/Englisch Labels, anpassbar

Vollständige Dokumentation liegt im Ordner [docs](docs/overview.md). Dieser README ist bewusst kurz und verweist auf die einzelnen Kapitel.

---

## Schnellstart

1) Installation: `pnpm add @democracy-deutschland/payload-totp-plugin` und Peers `otplib`, `qrcode` ([details](docs/installation.md)).
2) Plugin konfigurieren in `payload.config.ts` ([Konfiguration](docs/configuration.md)).
3) API-Routen via Handler-Factories anlegen ([API-Routen](docs/api-routes.md)).
4) Login-, Verify- und Setup-Seiten mit Komponenten bauen ([Komponenten](docs/components.md)).
5) Middleware aktivieren für Admin-Schutz ([Middleware](docs/middleware.md)).

Weitere Beispiele: [Quickstart](docs/quickstart.md), [Beispiel-Integration](docs/examples.md).

---

## Detaillierte Doku

- Überblick und Features: [docs/overview.md](docs/overview.md)
- Installation und Setup: [docs/installation.md](docs/installation.md), [docs/quickstart.md](docs/quickstart.md)
- Konfiguration: [docs/configuration.md](docs/configuration.md)
- Komponenten (Login/Verify/Setup/Styles): [docs/components.md](docs/components.md)
- API-Routen und Handler-Factories: [docs/api-routes.md](docs/api-routes.md)
- Middleware: [docs/middleware.md](docs/middleware.md)
- Core-Funktionen: [docs/core-functions.md](docs/core-functions.md)
- Internationalisierung: [docs/i18n.md](docs/i18n.md)
- Datenbank-Schema: [docs/database-schema.md](docs/database-schema.md)
- Sicherheit: [docs/security.md](docs/security.md)
- Troubleshooting: [docs/troubleshooting.md](docs/troubleshooting.md)
- Beispiele: [docs/examples.md](docs/examples.md)

---

## Lizenz

MIT © DEMOCRACY Deutschland e.V.

---

## Links

- [DEMOCRACY Deutschland e.V.](https://democracy-deutschland.de)
- [Payload CMS](https://payloadcms.com)
- [TOTP RFC 6238](https://tools.ietf.org/html/rfc6238)
