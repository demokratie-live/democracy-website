# Troubleshooting

## "Module not found" beim Import

```bash
pnpm add @democracy-deutschland/payload-totp-plugin
pnpm add otplib qrcode
```

## TOTP-Code wird nicht akzeptiert
- Server- und Gerätezeit synchron halten
- TOTP ist zeitbasiert (30s). Erhöhe `window`, falls nötig

## Cookie wird nicht gesetzt
- `secure: true` nur in Produktion nutzen
- In Dev ggf. `secure: false`
- Browser-Konsole auf Cookie-Warnungen prüfen

## QR-Code fehlt
- `qrcode` installiert?
- Browser-Konsole auf Fehler prüfen
