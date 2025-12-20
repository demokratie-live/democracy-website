import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'admin-users',
    meta: {
      titleSuffix: '- DEMOCRACY CMS',
      favicon: '/favicon.ico',
    },
  },
  collections: [
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'published', 'updatedAt'],
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
          ],
          defaultValue: 'editor',
          label: 'Rolle',
        },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [],
});
