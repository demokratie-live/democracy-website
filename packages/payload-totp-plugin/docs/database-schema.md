# Datenbank-Schema

Das Plugin erweitert die Admin-Users Collection um:

```typescript
{
  totpEnabled: boolean;          // TOTP aktiviert
  totpSecret: string | null;     // Secret (verschlüsselt speichern)
  totpBackupCodes: string[];     // Backup-Codes
  totpPendingSecret: string | null; // Secret während des Setups
}
```

Die Felder sind im Admin-UI verborgen und nur programmatisch nutzbar.
