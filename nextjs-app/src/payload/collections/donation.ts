/**
 * Donation System Collections
 * - DonationItems: Individual donation items/positions
 * - DonationSettings: Global donation settings (singleton-like)
 */

import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminOrEditor } from '../access';

export const DonationItems: CollectionConfig = {
  slug: 'donation-items',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'value', 'maxValue', 'order', 'active'],
    group: 'Finanzen',
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titel',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Kopfzeile', value: 'head' },
        { label: 'Daten', value: 'data' },
      ],
      defaultValue: 'data',
      label: 'Typ',
    },
    {
      name: 'value',
      type: 'number',
      required: true,
      min: 0,
      label: 'Aktueller Wert (€)',
    },
    {
      name: 'maxValue',
      type: 'number',
      required: true,
      min: 0,
      label: 'Zielwert (€)',
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Reihenfolge',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Aktiv',
    },
  ],
};

export const DonationSettings: CollectionConfig = {
  slug: 'donation-settings',
  admin: {
    useAsTitle: 'id',
    group: 'Finanzen',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'currentValue',
      type: 'number',
      required: true,
      min: 0,
      label: 'Aktueller Spendenstand (€)',
    },
    {
      name: 'goalValue',
      type: 'number',
      required: true,
      min: 0,
      label: 'Spendenziel (€)',
    },
    {
      name: 'patrons',
      type: 'number',
      required: true,
      min: 0,
      label: 'Anzahl Unterstützer',
    },
    {
      name: 'patronsGoal',
      type: 'number',
      required: true,
      min: 0,
      label: 'Ziel Unterstützer',
    },
    {
      name: 'lastUpdatedBy',
      type: 'text',
      admin: {
        readOnly: true,
      },
      label: 'Zuletzt aktualisiert von',
    },
  ],
};
