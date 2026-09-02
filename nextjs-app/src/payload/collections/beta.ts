/**
 * Beta System Collections
 * - BetaCodes: Beta access codes with usage limits
 * - BetaRegistrations: User registrations for beta access
 */

import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminOrEditor } from '../access';

export const BetaCodes: CollectionConfig = {
  slug: 'beta-codes',
  admin: {
    useAsTitle: 'code',
    defaultColumns: ['code', 'maxUses', 'usedCount', 'active', 'createdAt'],
    group: 'Beta',
  },
  access: {
    read: isAdminOrEditor,
    create: isAdmin,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      label: 'Beta-Code',
    },
    {
      name: 'maxUses',
      type: 'number',
      required: true,
      defaultValue: 1,
      min: 1,
      label: 'Maximale Nutzungen',
    },
    {
      name: 'usedCount',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
      label: 'Bereits genutzt',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Aktiv',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Beschreibung',
      admin: {
        description: 'Optionale interne Notiz zum Code',
      },
    },
  ],
};

export const BetaRegistrations: CollectionConfig = {
  slug: 'beta-registrations',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'ios', 'android', 'betaCode', 'createdAt'],
    group: 'Beta',
  },
  access: {
    read: isAdminOrEditor,
    create: () => true, // Public can create via API
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'E-Mail',
    },
    {
      name: 'ios',
      type: 'checkbox',
      defaultValue: false,
      label: 'iOS',
    },
    {
      name: 'android',
      type: 'checkbox',
      defaultValue: false,
      label: 'Android',
    },
    {
      name: 'betaCode',
      type: 'relationship',
      relationTo: 'beta-codes',
      required: true,
      label: 'Beta-Code',
    },
    {
      name: 'newsletter',
      type: 'checkbox',
      defaultValue: false,
      label: 'Newsletter abonniert',
    },
  ],
};
