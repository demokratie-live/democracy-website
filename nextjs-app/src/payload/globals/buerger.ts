import type { GlobalConfig } from 'payload';
import { isAdminOrEditor } from '../access';

/**
 * Bürger Page Global Configuration
 * 
 * Ermöglicht die vollständige Verwaltung der Bürger-Seite über das Payload CMS.
 * Struktur entspricht exakt der Original-PHP-Seite.
 */
export const Buerger: GlobalConfig = {
  slug: 'buerger',
  label: 'Für Bürger',
  admin: {
    group: 'Seiten',
    description: 'Inhalte der Bürger-Seite verwalten',
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
          defaultValue: 'DEMOCRACY als Informations- und Beteiligungsplattform für Bürger',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Beschreibung',
          defaultValue: 'DEMOCRACY ist speziell dafür entwickelt, Bürgerlobbyismus und Politikcontrolling zu fördern. Nutze deine Stimme!',
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
          defaultValue: 'DEMOCRACY als Informations- und',
        },
        {
          name: 'titleLine2',
          type: 'text',
          label: 'Titel (Zeile 2)',
          defaultValue: 'Beteiligungsplattform für Bürger',
        },
        {
          name: 'heroImage',
          type: 'text',
          label: 'Hero-Bild URL',
          defaultValue: '/files/images/Fur_Burger.png',
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
    // Features Section - "Gemacht für Bürger"
    {
      name: 'featuresSection',
      type: 'group',
      label: 'Features Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'GEMACHT FÜR BÜRGER',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Untertitel',
          defaultValue: 'DEMOCRACY ist speziell dafür entwickelt, Bürgerlobbyismus und Politikcontrolling zu fördern',
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
    // Video/CTA Section - "Werde ein Teil von DEMOCRACY"
    {
      name: 'ctaSection',
      type: 'group',
      label: 'CTA Sektion',
      fields: [
        {
          name: 'videoThumbnail',
          type: 'text',
          label: 'Video-Vorschaubild URL',
          defaultValue: '/files/images/juli.png',
        },
        {
          name: 'videoUrl',
          type: 'text',
          label: 'Video URL',
          defaultValue: 'https://www.youtube.com/watch?v=ouzgAqvJUA8',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Werde ein Teil von DEMOCRACY',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschreibung',
          defaultValue: 'Ob jung oder alt, ob (bereits) Politikexperte oder (bislang) uninformiert – DEMOCRACY wird Dir eine breit gefächerte Auswahl an Möglichkeiten bieten, politisch aktiv zu werden, und dabei fast automatisch Dein Wissen, Deinen Einblick in pol. Prozesse sowie Dein Potential, auf die Politik Einfluss zu nehmen, vergrößern. Sei Teil der Veränderung und nutze Deine Stimme.',
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
          defaultValue: 'Noch nicht ganz verstanden? Wir sind für Dich da!',
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
