import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig, type CollectionConfig, type Payload } from 'payload';
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

// ==================== BETA SYSTEM COLLECTIONS ====================

const BetaCodes: CollectionConfig = {
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

const BetaRegistrations: CollectionConfig = {
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

// ==================== EMAIL SYSTEM COLLECTIONS ====================

const Contacts: CollectionConfig = {
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

const EmailLists: CollectionConfig = {
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

const EmailListMembers: CollectionConfig = {
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
  indexes: [
    {
      fields: { email: 1, list: 1 },
      unique: true,
    },
  ],
};

const EmailTemplates: CollectionConfig = {
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

const SentEmails: CollectionConfig = {
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
    timezones: {
      defaultTimezone: 'Europe/Berlin',
      supportedTimezones: ['Europe/Berlin', 'UTC'],
    },
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
          name: 'category',
          type: 'select',
          required: true,
          defaultValue: 'allgemein',
          label: 'Kategorie',
          options: [
            { label: 'Beta', value: 'beta' },
            { label: 'MVP', value: 'mvp' },
            { label: 'Finanzen', value: 'finanzen' },
            { label: 'Datenschutz', value: 'datenschutz' },
            { label: 'Allgemein', value: 'allgemein' },
          ],
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
    // Donation collections
    DonationItems,
    DonationSettingsCollection,
    // Beta collections
    BetaCodes,
    BetaRegistrations,
    // Email collections
    Contacts,
    EmailLists,
    EmailListMembers,
    EmailTemplates,
    SentEmails,
    // System collections
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
    push: true, // Auto-create/update schema on dev server start
  }),
  sharp,
  plugins: [],
  // Initialize default data on first start
  onInit: async (payload: Payload) => {
    await seedInitialData(payload);
  },
});

// ==================== INITIAL DATA SEEDING ====================

async function seedInitialData(payload: Payload) {
  // Seed default admin user for local development
  await seedAdminUser(payload);
  
  // Seed FAQs if none exist
  await seedFAQs(payload);
  
  // Seed Email Lists if none exist
  await seedEmailLists(payload);
  
  // Seed Email Templates if none exist
  await seedEmailTemplates(payload);
  
  // Seed Donation Settings if none exist
  await seedDonationSettings(payload);
  
  // Seed Donation Items if none exist
  await seedDonationItems(payload);
}

async function seedAdminUser(payload: Payload) {
  // Only seed admin user in development mode
  if (process.env.NODE_ENV === 'production' && !process.env.SEED_ADMIN_USER) {
    return;
  }
  
  const existingUsers = await payload.find({
    collection: 'admin-users',
    limit: 1,
  });
  
  if (existingUsers.totalDocs > 0) return;
  
  console.log('🌱 Seeding default admin user...');
  
  // Get credentials from environment variables or use defaults for local development
  const email = process.env.ADMIN_EMAIL || 'admin@democracy-deutschland.de';
  const password = process.env.ADMIN_PASSWORD || 'admin123';
  const name = process.env.ADMIN_NAME || 'Admin';
  
  await payload.create({
    collection: 'admin-users',
    data: {
      email,
      password,
      name,
      role: 'admin',
    },
  });
  
  console.log(`✅ Created admin user: ${email}`);
  console.log(`   Password: ${password}`);
  console.log('   ⚠️  Change this password in production!');
}

async function seedFAQs(payload: Payload) {
  const existingFAQs = await payload.find({
    collection: 'faqs',
    limit: 1,
  });
  
  if (existingFAQs.totalDocs > 0) return;
  
  console.log('🌱 Seeding FAQs...');
  
  const faqs = [
    {
      question: 'Was ist DEMOCRACY?',
      answer: createLexicalContent('DEMOCRACY ist eine App, mit der du die Abstimmungen des Deutschen Bundestags live mitverfolgen und selbst abstimmen kannst. Unsere Vision ist es, die parlamentarische Arbeit transparenter zu machen und die Bürger näher an die politischen Entscheidungen heranzuführen.'),
      category: 'allgemein' as const,
      order: 1,
      active: true,
    },
    {
      question: 'Wie kann ich die App herunterladen?',
      answer: createLexicalContent('Die DEMOCRACY App ist sowohl für iOS (App Store) als auch für Android (Google Play Store) verfügbar. Suche einfach nach "DEMOCRACY" oder folge den Links auf unserer Website.'),
      category: 'allgemein' as const,
      order: 2,
      active: true,
    },
    {
      question: 'Was ist die Beta-Version?',
      answer: createLexicalContent('Die Beta-Version ist eine Vorabversion der App, die noch in Entwicklung ist. Als Beta-Tester hilfst du uns, Fehler zu finden und die App zu verbessern, bevor sie für alle veröffentlicht wird. Du brauchst einen speziellen Beta-Code, um dich anzumelden.'),
      category: 'beta' as const,
      order: 3,
      active: true,
    },
    {
      question: 'Wie bekomme ich einen Beta-Code?',
      answer: createLexicalContent('Beta-Codes werden bei speziellen Aktionen verteilt oder können über unseren Newsletter erhalten werden. Folge uns auf Social Media oder melde dich für unseren Newsletter an, um keine Aktion zu verpassen.'),
      category: 'beta' as const,
      order: 4,
      active: true,
    },
    {
      question: 'Was bedeutet MVP?',
      answer: createLexicalContent('MVP steht für "Minimum Viable Product" - die erste funktionsfähige Version unserer App mit den wichtigsten Grundfunktionen. Der MVP ermöglicht es dir, Abstimmungen zu verfolgen und selbst abzustimmen.'),
      category: 'mvp' as const,
      order: 5,
      active: true,
    },
    {
      question: 'Welche Funktionen sind im MVP enthalten?',
      answer: createLexicalContent('Der MVP enthält: Übersicht aller aktuellen Bundestagsabstimmungen, Möglichkeit selbst abzustimmen, Vergleich deiner Stimme mit den Ergebnissen des Bundestags, Benachrichtigungen bei neuen Abstimmungen, und grundlegende Statistiken.'),
      category: 'mvp' as const,
      order: 6,
      active: true,
    },
    {
      question: 'Wie finanziert sich DEMOCRACY?',
      answer: createLexicalContent('DEMOCRACY ist ein gemeinnütziges Projekt und finanziert sich ausschließlich durch Spenden. Wir verzichten bewusst auf Werbung und den Verkauf von Nutzerdaten. Jede Spende hilft uns, die App weiterzuentwickeln und die Server zu betreiben.'),
      category: 'finanzen' as const,
      order: 7,
      active: true,
    },
    {
      question: 'Wie kann ich spenden?',
      answer: createLexicalContent('Du kannst über unsere Website per Überweisung, PayPal oder Kreditkarte spenden. Wir bieten auch die Möglichkeit, regelmäßig zu spenden und so ein "Pate" von DEMOCRACY zu werden. Alle Spenden sind steuerlich absetzbar.'),
      category: 'finanzen' as const,
      order: 8,
      active: true,
    },
    {
      question: 'Wie werden meine Daten geschützt?',
      answer: createLexicalContent('Datenschutz hat bei uns höchste Priorität. Wir speichern nur die minimal notwendigen Daten, verwenden Ende-zu-Ende-Verschlüsselung wo möglich, und verkaufen niemals Nutzerdaten. Unsere Datenschutzerklärung findest du in der App und auf unserer Website.'),
      category: 'datenschutz' as const,
      order: 9,
      active: true,
    },
    {
      question: 'Werden meine Abstimmungen gespeichert?',
      answer: createLexicalContent('Deine Abstimmungen werden anonymisiert gespeichert, um Statistiken zu erstellen. Es ist nicht möglich, eine Abstimmung einer bestimmten Person zuzuordnen. Du kannst in den App-Einstellungen auch eine vollständig anonyme Nutzung aktivieren.'),
      category: 'datenschutz' as const,
      order: 10,
      active: true,
    },
  ];
  
  for (const faq of faqs) {
    await payload.create({
      collection: 'faqs',
      data: faq,
    });
  }
  
  console.log(`✅ Created ${faqs.length} FAQs`);
}

async function seedEmailLists(payload: Payload) {
  const existingLists = await payload.find({
    collection: 'email-lists',
    limit: 1,
  });
  
  if (existingLists.totalDocs > 0) return;
  
  console.log('🌱 Seeding Email Lists...');
  
  const lists = [
    { name: 'newsletter', description: 'Allgemeiner Newsletter' },
    { name: 'alpha', description: 'Alpha-Tester Liste' },
    { name: 'beta', description: 'Beta-Tester Liste' },
  ];
  
  for (const list of lists) {
    await payload.create({
      collection: 'email-lists',
      data: list,
    });
  }
  
  console.log(`✅ Created ${lists.length} Email Lists`);
}

async function seedEmailTemplates(payload: Payload) {
  const existingTemplates = await payload.find({
    collection: 'email-templates',
    limit: 1,
  });
  
  if (existingTemplates.totalDocs > 0) return;
  
  console.log('🌱 Seeding Email Templates...');
  
  const templates = [
    {
      name: 'newsletter_confirmation',
      subject: 'Newsletter-Anmeldung bestätigt',
      body: `Hallo,

vielen Dank für Ihre Anmeldung zum DEMOCRACY Newsletter!

Sie erhalten ab sofort regelmäßig Updates über die App und das Projekt.

Falls Sie sich wieder abmelden möchten, können Sie dies jederzeit über den Link am Ende jeder E-Mail tun.

Mit freundlichen Grüßen
Das DEMOCRACY Team`,
    },
    {
      name: 'beta_registration',
      subject: 'Beta-Registrierung bestätigt',
      body: `Hallo,

vielen Dank für Ihre Anmeldung zur DEMOCRACY Beta!

Wir werden uns bei Ihnen melden, sobald die Beta-Version verfügbar ist.

Mit freundlichen Grüßen
Das DEMOCRACY Team`,
    },
  ];
  
  for (const template of templates) {
    await payload.create({
      collection: 'email-templates',
      data: template,
    });
  }
  
  console.log(`✅ Created ${templates.length} Email Templates`);
}

async function seedDonationSettings(payload: Payload) {
  const existingSettings = await payload.find({
    collection: 'donation-settings',
    limit: 1,
  });
  
  if (existingSettings.totalDocs > 0) return;
  
  console.log('🌱 Seeding Donation Settings...');
  
  // Values from https://democracy-deutschland.de/#!donate (Stand: 16.12.2025)
  await payload.create({
    collection: 'donation-settings',
    data: {
      currentValue: 1759,
      goalValue: 9300,
      patrons: 387,
      patronsGoal: 2000,
    },
  });
  
  console.log('✅ Created Donation Settings');
}

async function seedDonationItems(payload: Payload) {
  const existingItems = await payload.find({
    collection: 'donation-items',
    limit: 1,
  });
  
  if (existingItems.totalDocs > 0) return;
  
  console.log('🌱 Seeding Donation Items...');
  
  // Values from https://democracy-deutschland.de/#!donate (Stand: 16.12.2025)
  // Gesamtziel: 9.300€/Monat
  const donationItems = [
    // INFRASTRUKTUR Section
    {
      title: 'INFRASTRUKTUR',
      description: null,
      type: 'head' as const,
      value: 0,
      maxValue: 0,
      order: 1,
      active: true,
    },
    {
      title: 'Live-Betrieb',
      description: 'Serverkosten inkl 19% MwSt.',
      type: 'data' as const,
      value: 0,
      maxValue: 300,
      order: 2,
      active: true,
    },
    {
      title: 'Live-Betrieb',
      description: 'SMS-Versandkosten 4.000 SMS á 7,8 ct (kalkuliert)',
      type: 'data' as const,
      value: 0,
      maxValue: 300,
      order: 3,
      active: true,
    },
    {
      title: 'Developer',
      description: 'AG-Brutto-Gehaltskosten (1.750€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 3000,
      order: 4,
      active: true,
    },
    {
      title: 'Manuel Ruck',
      description: 'AG-Minijob-Kosten (520€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 650,
      order: 5,
      active: true,
    },
    // PRODUKTDESIGN & VERWALTUNG Section
    {
      title: 'PRODUKTDESIGN & VERWALTUNG',
      description: null,
      type: 'head' as const,
      value: 0,
      maxValue: 0,
      order: 6,
      active: true,
    },
    {
      title: 'Operative Projektleitung',
      description: 'AG-Brutto-Gehaltskosten (1.750€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 3000,
      order: 7,
      active: true,
    },
    {
      title: 'Marius Krüger',
      description: 'AG-Minijob-Kosten (520€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 650,
      order: 8,
      active: true,
    },
    {
      title: 'Administration',
      description: 'AG-Minijob-Kosten (520€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 650,
      order: 9,
      active: true,
    },
    {
      title: 'UX-Design',
      description: 'AG-Minijob-Kosten (520€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 650,
      order: 10,
      active: true,
    },
    {
      title: 'Lohnabrechnung',
      description: 'Lohnabrechnung inkl 19% MwSt.',
      type: 'data' as const,
      value: 0,
      maxValue: 100,
      order: 11,
      active: true,
    },
  ];
  
  for (const item of donationItems) {
    await payload.create({
      collection: 'donation-items',
      data: item,
    });
  }
  
  console.log(`✅ Created ${donationItems.length} Donation Items`);
}

// Helper function to create Lexical content structure
function createLexicalContent(text: string) {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: text,
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          textFormat: 0,
        },
      ],
      direction: 'ltr',
    },
  };
}
