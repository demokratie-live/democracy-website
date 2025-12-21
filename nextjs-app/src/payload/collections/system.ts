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
    update: isAdmin,
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
