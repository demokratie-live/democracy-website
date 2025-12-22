# Sicherheit

## Best Practices

1. HTTPS erzwingen (Secrets und Backup-Codes nur verschlüsselt übertragen).
2. Secrets in Produktion zusätzlich verschlüsselt speichern.
3. Backup-Codes offline sichern; jeder Code ist einmalig.
4. Cookies: `httpOnly`, in Prod `secure`, `sameSite='lax'` oder strenger.
5. Rate Limiting für Login und TOTP-Validierung implementieren.
6. Fehlversuche loggen und überwachen.

## Produktions-Cookies

```typescript
totpPlugin({
  cookies: {
    secure: true,
    sameSite: 'strict',
    maxAge: 3600,
  },
});
```
