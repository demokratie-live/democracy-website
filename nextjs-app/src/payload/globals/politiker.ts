import type { GlobalConfig } from 'payload';
import { isAdminOrEditor } from '../access';

/**
 * Politiker Page Global Configuration
 * 
 * Ermöglicht die vollständige Verwaltung der Politiker-Seite über das Payload CMS.
 * Struktur entspricht exakt der Original-PHP-Seite.
 */
export const Politiker: GlobalConfig = {
  slug: 'politiker',
  label: 'Für Politiker',
  admin: {
    group: 'Seiten',
    description: 'Inhalte der Politiker-Seite verwalten',
  },
  access: {
    read: () => true,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Einstellungen',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Titel',
          defaultValue: 'DEMOCRACY als Stimmungsmesser für Politiker',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Beschreibung',
          defaultValue: 'DEMOCRACY bietet Politikern ein Stimmungsbild der Bevölkerung zu Bundestagsentscheidungen - addressiert an Abgeordnete.',
        },
      ],
    },
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel (Zeile 1)',
          defaultValue: 'DEMOCRACY als Stimmungs-',
        },
        {
          name: 'titleLine2',
          type: 'text',
          label: 'Titel (Zeile 2)',
          defaultValue: 'messer für Politiker',
        },
        {
          name: 'heroImage',
          type: 'text',
          label: 'Hero-Bild URL',
          defaultValue: '/files/images/FurPoli.png',
        },
        {
          name: 'hotspots',
          type: 'array',
          label: 'Hotspots',
          labels: {
            singular: 'Hotspot',
            plural: 'Hotspots',
          },
          fields: [
            {
              name: 'number',
              type: 'text',
              label: 'Nummer',
              required: true,
            },
            {
              name: 'tooltip',
              type: 'textarea',
              label: 'Tooltip-Text',
              required: true,
            },
            {
              name: 'active',
              type: 'checkbox',
              label: 'Aktiv (blau statt grau)',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Aktiv',
          defaultValue: true,
        },
      ],
    },
    // Features Section - "Addressiert an Politiker"
    {
      name: 'featuresSection',
      type: 'group',
      label: 'Features Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'ADDRESSIERT AN POLITIKER',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Untertitel',
          defaultValue: 'Um eine Veränderung über die real-existierenden politischen Entscheidungswege zu ermöglichen',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          labels: {
            singular: 'Feature',
            plural: 'Features',
          },
          fields: [
            {
              name: 'iconUrl',
              type: 'text',
              label: 'Icon URL',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              required: true,
            },
            {
              name: 'description',
              type: 'richText',
              label: 'Beschreibung (mit Fettdruck)',
              required: true,
            },
          ],
        },
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Aktiv',
          defaultValue: true,
        },
      ],
    },
    // CTA Section - "Stärke Vertrauen mit DEMOCRACY"
    {
      name: 'ctaSection',
      type: 'group',
      label: 'CTA Sektion',
      fields: [
        {
          name: 'image',
          type: 'text',
          label: 'Bild URL',
          defaultValue: '/files/images/group8@3x.png',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Stärke vertrauen mit DEMOCRACY',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          defaultValue: 'Ob parlamentarischer Neuling oder abgeklärter Abgeordneter, ob (bereits) Experte im Crowdsourcing oder (bislang) Uneingeweihter – DEMOCRACY wird Dir eine breit gefächerte Auswahl an Möglichkeiten bieten, Deinen wichtigsten Stakeholdern Gehör zu schenken: den Bürgern. Sei Teil einer Demokratie des 21. Jahrhunderts und repräsentiere würdig.',
        },
        {
          name: 'buttons',
          type: 'array',
          label: 'Buttons',
          labels: {
            singular: 'Button',
            plural: 'Buttons',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button-Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
            {
              name: 'variant',
              type: 'select',
              label: 'Variante',
              options: [
                { label: 'Standard (Blau)', value: 'default' },
                { label: 'Dunkel', value: 'dark' },
                { label: 'Hell', value: 'light' },
              ],
              defaultValue: 'default',
            },
          ],
        },
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Aktiv',
          defaultValue: true,
        },
      ],
    },
    // Contact CTA Section
    {
      name: 'contactSection',
      type: 'group',
      label: 'Kontakt Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Interesse? Wir sind für Dich da!',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button-Text',
          defaultValue: 'KONTAKTFORMULAR',
        },
        {
          name: 'buttonUrl',
          type: 'text',
          label: 'Button-URL',
          defaultValue: '/contact',
        },
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Aktiv',
          defaultValue: true,
        },
      ],
    },
  ],
};
