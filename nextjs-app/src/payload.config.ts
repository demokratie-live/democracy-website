import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig, type CollectionConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Reusable access control
const isAdmin = ({ req: { user } }: { req: { user: unknown } }) => {
  const typedUser = user as { role?: string } | null;
  return typedUser?.role === 'admin';
};

const isAdminOrEditor = ({ req: { user } }: { req: { user: unknown } }) => {
  const typedUser = user as { role?: string } | null;
  return typedUser?.role === 'admin' || typedUser?.role === 'editor';
};

// Donation Items Collection
const DonationItems: CollectionConfig = {
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

// Donation Settings (Singleton-like)
const DonationSettingsCollection: CollectionConfig = {
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

// Activity Log Collection (read-only for audit)
const ActivityLogCollection: CollectionConfig = {
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

export default buildConfig({
  admin: {
    user: 'admin-users',
    meta: {
      titleSuffix: '- DEMOCRACY CMS',
    },
    components: {
      beforeDashboard: [],
      afterDashboard: [],
    },
    dateFormat: 'dd.MM.yyyy HH:mm',
  },
  collections: [
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'published', 'updatedAt'],
        group: 'Inhalte',
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
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          label: 'URL Slug',
          admin: {
            description: 'URL-freundlicher Name (z.B. "about-us")',
          },
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          label: 'Inhalt',
        },
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Titel (SEO)',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Beschreibung (SEO)',
        },
        {
          name: 'published',
          type: 'checkbox',
          defaultValue: false,
          label: 'Veröffentlicht',
        },
      ],
    },
    {
      slug: 'faqs',
      admin: {
        useAsTitle: 'question',
        defaultColumns: ['question', 'order', 'active', 'updatedAt'],
        group: 'Inhalte',
      },
      access: {
        read: () => true,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdmin,
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Frage',
        },
        {
          name: 'answer',
          type: 'richText',
          required: true,
          label: 'Antwort',
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
    },
    {
      slug: 'media-coverage',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'outlet', 'publishedAt', 'updatedAt'],
        group: 'Inhalte',
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
          name: 'url',
          type: 'text',
          required: true,
          label: 'Link zur Veröffentlichung',
        },
        {
          name: 'outlet',
          type: 'text',
          label: 'Medium/Publikation',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
        },
        {
          name: 'publishedAt',
          type: 'date',
          required: true,
          label: 'Veröffentlichungsdatum',
        },
      ],
    },
    {
      slug: 'roadmap-items',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'status', 'priority', 'targetDate'],
        group: 'Projekt',
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
          type: 'richText',
          label: 'Beschreibung',
        },
        {
          name: 'priority',
          type: 'number',
          required: true,
          defaultValue: 0,
          label: 'Priorität',
        },
        {
          name: 'status',
          type: 'select',
          required: true,
          options: [
            { label: 'Geplant', value: 'planned' },
            { label: 'In Bearbeitung', value: 'in-progress' },
            { label: 'Abgeschlossen', value: 'completed' },
          ],
          defaultValue: 'planned',
          label: 'Status',
        },
        {
          name: 'targetDate',
          type: 'date',
          label: 'Zieldatum',
        },
      ],
    },
    {
      slug: 'blog-posts',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'publishedAt', 'published'],
        group: 'Inhalte',
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
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          label: 'URL Slug',
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          label: 'Inhalt',
        },
        {
          name: 'excerpt',
          type: 'textarea',
          label: 'Kurzbeschreibung',
        },
        {
          name: 'author',
          type: 'text',
          required: true,
          label: 'Autor',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Beitragsbild',
        },
        {
          name: 'publishedAt',
          type: 'date',
          required: true,
          label: 'Veröffentlichungsdatum',
        },
        {
          name: 'published',
          type: 'checkbox',
          defaultValue: false,
          label: 'Veröffentlicht',
        },
      ],
    },
    {
      slug: 'team-members',
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'order', 'active'],
        group: 'Team',
      },
      access: {
        read: () => true,
        create: isAdminOrEditor,
        update: isAdminOrEditor,
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
          type: 'text',
          required: true,
          label: 'Rolle',
        },
        {
          name: 'bio',
          type: 'richText',
          label: 'Biografie',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Profilbild',
        },
        {
          name: 'email',
          type: 'email',
          label: 'E-Mail',
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter Handle',
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
    },
    {
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
        staticDir: path.resolve(dirname, '../../public/uploads'),
        mimeTypes: ['image/*', 'application/pdf'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          label: 'Alternativtext',
        },
      ],
    },
    {
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
    },
    // Custom collections
    DonationItems,
    DonationSettingsCollection,
    ActivityLogCollection,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
});
