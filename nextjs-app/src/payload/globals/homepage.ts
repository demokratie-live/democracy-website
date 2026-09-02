/**
 * Homepage Global Configuration
 * 
 * Ermöglicht die Verwaltung und Anordnung der Startseiten-Module über Payload CMS.
 * Die Module können per Drag & Drop neu angeordnet werden.
 */

import type { GlobalConfig } from 'payload';
import { isAdmin, isAdminOrEditor } from '../access';

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Startseite',
  admin: {
    group: 'Seitenaufbau',
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
          defaultValue: 'DEMOCRACY - Weil deine Stimme zählt!',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Beschreibung',
          defaultValue: 'DEMOCRACY Deutschland ermöglicht Bürgern, an Abstimmungen des Deutschen Bundestages teilzunehmen.',
        },
      ],
    },
    {
      name: 'sections',
      type: 'blocks',
      label: 'Sektionen',
      labels: {
        singular: 'Sektion',
        plural: 'Sektionen',
      },
      blocks: [
        // Hero Sektion
        {
          slug: 'hero',
          labels: {
            singular: 'Hero Sektion',
            plural: 'Hero Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'DEMOCRACY',
            },
            {
              name: 'version',
              type: 'text',
              label: 'Version',
              defaultValue: '1.5',
            },
            {
              name: 'subtitle',
              type: 'text',
              label: 'Untertitel',
              defaultValue: 'Weil deine Stimme zählt!',
            },
            {
              name: 'heroImage',
              type: 'text',
              label: 'Hero Bild Pfad',
              defaultValue: '/files/images/List.png',
            },
            {
              name: 'backgroundImage',
              type: 'text',
              label: 'Hintergrundbild Pfad',
              defaultValue: '/files/images/Logo-Landingpage.png',
            },
            {
              name: 'appStoreUrl',
              type: 'text',
              label: 'App Store URL',
              defaultValue: 'https://itunes.apple.com/de/app/democracy/id1341311162',
            },
            {
              name: 'playStoreUrl',
              type: 'text',
              label: 'Play Store URL',
              defaultValue: 'https://play.google.com/store/apps/details?id=de.democracydeutschland.app',
            },
            {
              name: 'browserVersionUrl',
              type: 'text',
              label: 'Browser Version URL',
              defaultValue: 'https://democracy-app.de',
            },
            {
              name: 'aabDownloadUrl',
              type: 'text',
              label: 'AAB Download URL',
              defaultValue: '/files/download/democracy-app.aab',
            },
            {
              name: 'apkDownloadUrl',
              type: 'text',
              label: 'APK Download URL',
              defaultValue: '/files/download/democracy-app.apk',
            },
            {
              name: 'apkVersion',
              type: 'text',
              label: 'APK Version',
              defaultValue: 'v1.5.10',
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Aktiv',
              defaultValue: true,
            },
          ],
        },
        // Video Sektion
        {
          slug: 'video',
          labels: {
            singular: 'Video Sektion',
            plural: 'Video Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'Worum geht es bei',
            },
            {
              name: 'titleBold',
              type: 'text',
              label: 'Titel (fett)',
              defaultValue: 'DEMOCRACY',
            },
            {
              name: 'duration',
              type: 'text',
              label: 'Video Dauer',
              defaultValue: '2:30',
            },
            {
              name: 'videoUrl',
              type: 'text',
              label: 'YouTube Video URL (Embed)',
              required: true,
              defaultValue: 'https://www.youtube.com/embed/DFXcnRdXA7k',
            },
            {
              name: 'moreInfoLink',
              type: 'text',
              label: 'Mehr Infos Link',
              defaultValue: '/faq',
            },
            {
              name: 'moreInfoText',
              type: 'text',
              label: 'Mehr Infos Text',
              defaultValue: 'Mehr Informationen zu diesem Film',
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Aktiv',
              defaultValue: true,
            },
          ],
        },
        // Features Sektion
        {
          slug: 'features',
          labels: {
            singular: 'Features Sektion',
            plural: 'Features Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'Alle Funktionen von DEMOCRACY',
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
                  name: 'title',
                  type: 'text',
                  label: 'Titel',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Beschreibung',
                  required: true,
                },
                {
                  name: 'icon',
                  type: 'text',
                  label: 'Icon Pfad',
                  required: true,
                },
                {
                  name: 'iconActive',
                  type: 'text',
                  label: 'Icon Pfad (aktiv)',
                  required: true,
                },
                {
                  name: 'video',
                  type: 'text',
                  label: 'Video Pfad',
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
        // Zielgruppen Sektion
        {
          slug: 'targetAudience',
          labels: {
            singular: 'Zielgruppen Sektion',
            plural: 'Zielgruppen Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'Für wen ist DEMOCRACY?',
            },
            {
              name: 'audiences',
              type: 'array',
              label: 'Zielgruppen',
              maxRows: 2,
              labels: {
                singular: 'Zielgruppe',
                plural: 'Zielgruppen',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Titel',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                  label: 'Untertitel',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Beschreibung',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Link',
                  required: true,
                },
                {
                  name: 'linkText',
                  type: 'text',
                  label: 'Link Text',
                  defaultValue: 'Mehr erfahren',
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
        // Presse Logos Sektion
        {
          slug: 'pressLogos',
          labels: {
            singular: 'Presse Logos Sektion',
            plural: 'Presse Logos Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'bekannt aus',
            },
            {
              name: 'logos',
              type: 'array',
              label: 'Logos',
              labels: {
                singular: 'Logo',
                plural: 'Logos',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Name',
                  required: true,
                },
                {
                  name: 'logo',
                  type: 'text',
                  label: 'Logo Pfad',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                  required: true,
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
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
        // Custom HTML Block (für freie Inhalte)
        {
          slug: 'customContent',
          labels: {
            singular: 'Freier Inhalt',
            plural: 'Freie Inhalte',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Interner Titel (für Admin)',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Inhalt',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Hintergrundfarbe (CSS)',
              defaultValue: '#ffffff',
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
    },
  ],
};
