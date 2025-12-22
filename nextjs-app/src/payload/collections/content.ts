/**
 * Content Collections
 * - Pages: Static pages with SEO metadata
 * - FAQs: Frequently asked questions
 * - BlogPosts: Blog articles
 * - MediaCoverage: Press and media mentions
 * - RoadmapItems: Project roadmap items
 * - TeamMembers: Team member profiles
 */

import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminOrEditor } from '../access';

export const Pages: CollectionConfig = {
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
};

export const FAQs: CollectionConfig = {
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
};

export const BlogPosts: CollectionConfig = {
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
};

export const MediaCoverage: CollectionConfig = {
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
};

export const RoadmapItems: CollectionConfig = {
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
};

export const TeamMembers: CollectionConfig = {
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
};
