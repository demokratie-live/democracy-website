/**
 * System Collections
 * - AdminUsers: CMS admin user accounts
 * - Media: Uploaded files and images
 * - ActivityLog: Audit log for system activities
 */

import type { CollectionConfig } from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';
import { isAdmin, isAdminOrEditor } from '../access';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const AdminUsers: CollectionConfig = {
  slug: 'admin-users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'System',
  },
  access: {
    read: isAdminOrEditor,
    create: isAdmin,
    update: ({ req: { user }, id }) => {
      // Admins can update anyone
      // Users can update their own record (for TOTP reset)
      const typedUser = user as { id?: string; role?: string } | null;
      if (typedUser?.role === 'admin') return true;
      if (typedUser?.id && id && String(typedUser.id) === String(id)) return true;
      return false;
    },
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Viewer', value: 'viewer' },
      ],
      defaultValue: 'editor',
      label: 'Rolle',
    },
    {
      name: 'lastLogin',
      type: 'date',
      admin: {
        readOnly: true,
      },
      label: 'Letzte Anmeldung',
    },
    // TOTP Two-Factor Authentication
    {
      type: 'group',
      name: 'totp',
      label: 'Zwei-Faktor-Authentifizierung (TOTP)',
      admin: {
        description: 'Konfigurieren Sie die Zwei-Faktor-Authentifizierung für erhöhte Sicherheit. Besuchen Sie /admin-setup-totp um TOTP einzurichten.',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'TOTP aktiviert',
          defaultValue: false,
          admin: {
            description: 'Wenn aktiviert, ist bei der Anmeldung ein TOTP-Code erforderlich. Deaktivieren um TOTP zurückzusetzen.',
          },
        },
        {
          name: 'secret',
          type: 'text',
          label: 'TOTP-Secret',
          admin: {
            hidden: true,
          },
        },
        {
          name: 'verified',
          type: 'checkbox',
          label: 'TOTP verifiziert',
          defaultValue: false,
          admin: {
            description: 'Zeigt an, ob der Benutzer die TOTP-Einrichtung erfolgreich abgeschlossen hat. Deaktivieren um TOTP zurückzusetzen.',
          },
        },
        {
          name: 'backupCodes',
          type: 'json',
          label: 'Backup-Codes',
          admin: {
            hidden: true,
          },
        },
      ],
    },
  ],
};

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Medien',
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  upload: {
    // Path relative to this file: src/payload/collections/ -> public/uploads
    staticDir: path.resolve(dirname, '../../../../public/uploads'),
    mimeTypes: ['image/*', 'application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alternativtext',
    },
  ],
};

export const ActivityLog: CollectionConfig = {
  slug: 'activity-logs',
  admin: {
    useAsTitle: 'action',
    defaultColumns: ['action', 'entityType', 'entityTitle', 'createdAt'],
    group: 'System',
  },
  access: {
    read: isAdmin,
    create: () => false, // Only created programmatically
    update: () => false,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'action',
      type: 'select',
      required: true,
      options: [
        { label: 'Erstellt', value: 'create' },
        { label: 'Aktualisiert', value: 'update' },
        { label: 'Gelöscht', value: 'delete' },
        { label: 'Anmeldung', value: 'login' },
        { label: 'Abmeldung', value: 'logout' },
      ],
      label: 'Aktion',
    },
    {
      name: 'entityType',
      type: 'text',
      required: true,
      label: 'Entitätstyp',
    },
    {
      name: 'entityId',
      type: 'text',
      label: 'Entitäts-ID',
    },
    {
      name: 'entityTitle',
      type: 'text',
      label: 'Entitäts-Titel',
    },
    {
      name: 'details',
      type: 'json',
      label: 'Details',
    },
    {
      name: 'userId',
      type: 'text',
      label: 'Benutzer-ID',
    },
    {
      name: 'userName',
      type: 'text',
      label: 'Benutzername',
    },
    {
      name: 'ipAddress',
      type: 'text',
      label: 'IP-Adresse',
    },
  ],
};
