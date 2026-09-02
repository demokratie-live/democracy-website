/**
 * Email System Collections
 * - Contacts: Contact form submissions and newsletter signups
 * - EmailLists: Mailing list definitions
 * - EmailListMembers: Subscriptions to mailing lists
 * - EmailTemplates: Email templates for automated emails
 * - SentEmails: Log of sent emails
 */

import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminOrEditor } from '../access';

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'type', 'createdAt'],
    group: 'E-Mail',
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
      unique: true,
      label: 'E-Mail',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Kontakt', value: 'contact' },
        { label: 'Bug Report', value: 'bugreport' },
        { label: 'Freiwillig', value: 'volunteer' },
        { label: 'Newsletter', value: 'newsletter' },
        { label: 'Beta', value: 'beta' },
      ],
      defaultValue: 'contact',
      label: 'Typ',
    },
    {
      name: 'vorname',
      type: 'text',
      label: 'Vorname',
    },
    {
      name: 'nachname',
      type: 'text',
      label: 'Nachname',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Nachricht',
    },
    {
      name: 'files',
      type: 'json',
      label: 'Dateien',
    },
  ],
};

export const EmailLists: CollectionConfig = {
  slug: 'email-lists',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'description', 'createdAt'],
    group: 'E-Mail',
  },
  access: {
    read: isAdminOrEditor,
    create: isAdmin,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Listenname',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
    },
  ],
};

export const EmailListMembers: CollectionConfig = {
  slug: 'email-list-members',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'list', 'subscribed', 'createdAt'],
    group: 'E-Mail',
  },
  access: {
    read: isAdminOrEditor,
    create: () => true, // Public can subscribe via API
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
      name: 'list',
      type: 'relationship',
      relationTo: 'email-lists',
      required: true,
      label: 'Liste',
    },
    {
      name: 'subscribed',
      type: 'checkbox',
      defaultValue: true,
      label: 'Abonniert',
    },
  ],
};

export const EmailTemplates: CollectionConfig = {
  slug: 'email-templates',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'subject', 'updatedAt'],
    group: 'E-Mail',
  },
  access: {
    read: isAdminOrEditor,
    create: isAdmin,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Template-Name',
      admin: {
        description: 'z.B. "newsletter_confirmation", "beta_registration"',
      },
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Betreff',
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
      label: 'Inhalt (Text)',
    },
  ],
};

export const SentEmails: CollectionConfig = {
  slug: 'sent-emails',
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['to', 'subject', 'template', 'createdAt'],
    group: 'E-Mail',
  },
  access: {
    read: isAdminOrEditor,
    create: () => true, // Created programmatically
    update: () => false,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'to',
      type: 'email',
      required: true,
      label: 'Empfänger',
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Betreff',
    },
    {
      name: 'template',
      type: 'relationship',
      relationTo: 'email-templates',
      label: 'Template',
    },
    {
      name: 'contact',
      type: 'relationship',
      relationTo: 'contacts',
      label: 'Kontakt',
    },
  ],
};
