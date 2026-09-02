/**
 * TOTP Field Definition for Payload CMS Collections
 */

import type { Field } from 'payload';

/**
 * Creates the TOTP fields to be added to admin users collection
 */
export function createTotpFields(): Field {
  return {
    name: 'totp',
    type: 'group',
    label: 'Zwei-Faktor-Authentifizierung',
    admin: {
      description:
        'Konfigurieren Sie die Zwei-Faktor-Authentifizierung für erhöhte Sicherheit.',
    },
    fields: [
      {
        name: 'enabled',
        type: 'checkbox',
        label: 'TOTP aktiviert',
        defaultValue: false,
        admin: {
          readOnly: true,
          description: 'Wird automatisch gesetzt wenn TOTP eingerichtet wurde.',
        },
      },
      {
        name: 'secret',
        type: 'text',
        label: 'TOTP Secret',
        admin: {
          readOnly: true,
          hidden: true, // Hide from UI for security
        },
      },
      {
        name: 'verified',
        type: 'checkbox',
        label: 'Verifiziert',
        defaultValue: false,
        admin: {
          readOnly: true,
          description: 'Ob TOTP erfolgreich verifiziert wurde.',
        },
      },
      {
        name: 'backupCodes',
        type: 'json',
        label: 'Backup Codes',
        admin: {
          readOnly: true,
          hidden: true, // Hide from UI for security
        },
      },
    ],
  };
}

/**
 * Alternative: Creates individual TOTP fields (not grouped)
 */
export function createFlatTotpFields(): Field[] {
  return [
    {
      name: 'totpEnabled',
      type: 'checkbox',
      label: 'TOTP aktiviert',
      defaultValue: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'totpSecret',
      type: 'text',
      label: 'TOTP Secret',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: 'totpVerified',
      type: 'checkbox',
      label: 'TOTP Verifiziert',
      defaultValue: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'totpBackupCodes',
      type: 'json',
      label: 'Backup Codes',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: 'totpPendingSecret',
      type: 'text',
      label: 'Pending TOTP Secret',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
  ];
}

/**
 * Pre-built flat TOTP fields array for direct use
 */
export const totpFields: Field[] = createFlatTotpFields();
