/**
 * Wahl-O-Meter Page Global Configuration
 * 
 * Ermöglicht die Verwaltung und Anordnung der Wahl-O-Meter-Seiten-Module über Payload CMS.
 * Die Module können per Drag & Drop neu angeordnet werden.
 */

import type { GlobalConfig } from 'payload';
import { isAdminOrEditor } from '../access';

export const Wahlometer: GlobalConfig = {
  slug: 'wahlometer',
  label: 'Wahl-O-Meter Seite',
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
          defaultValue: 'Wahl-O-Meter - Dein faktenbasierter Wahlhelfer | DEMOCRACY',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Beschreibung',
          defaultValue: 'Der Wahl-O-Meter von DEMOCRACY vergleicht Dein Abstimmungsverhalten mit den Entscheidungen der Parteien und Politiker im Bundestag.',
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
        // Hero Sektion (Wahl-O-Meter spezifisch)
        {
          slug: 'wahlometerHero',
          labels: {
            singular: 'Hero Sektion',
            plural: 'Hero Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'Wahl-O-Meter',
            },
            {
              name: 'subtitle',
              type: 'text',
              label: 'Untertitel',
              defaultValue: 'Dein faktenbasierter Wahlhelfer',
            },
            {
              name: 'heroImage',
              type: 'text',
              label: 'Hero Bild Pfad',
              defaultValue: '/files/images/WahlOMeter.png',
            },
            {
              name: 'backgroundImage',
              type: 'text',
              label: 'Hintergrundbild Pfad',
              defaultValue: '/files/images/Logo-Landingpage.png',
            },
            {
              name: 'gradientStart',
              type: 'text',
              label: 'Gradient Startfarbe',
              defaultValue: 'rgb(95, 147, 207)',
            },
            {
              name: 'gradientEnd',
              type: 'text',
              label: 'Gradient Endfarbe',
              defaultValue: 'rgb(70, 108, 171)',
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
              defaultValue: 'v1.5.9',
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Aktiv',
              defaultValue: true,
            },
          ],
        },
        // Features/Symbol Panel Sektion
        {
          slug: 'featureCards',
          labels: {
            singular: 'Feature Karten Sektion',
            plural: 'Feature Karten Sektionen',
          },
          fields: [
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
                  name: 'icon',
                  type: 'text',
                  label: 'Icon Pfad (SVG/PNG)',
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
                  type: 'textarea',
                  label: 'Beschreibung',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Link (optional)',
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
              defaultValue: 'Wie funktioniert der',
            },
            {
              name: 'titleBold',
              type: 'text',
              label: 'Titel (fett)',
              defaultValue: 'Wahl-O-Meter',
            },
            {
              name: 'duration',
              type: 'text',
              label: 'Video Dauer',
              defaultValue: '1:00',
            },
            {
              name: 'videoUrl',
              type: 'text',
              label: 'YouTube Video URL (Embed)',
              required: true,
              defaultValue: 'https://www.youtube.com/embed/uWwQquy_MD0',
            },
            {
              name: 'ctaLink',
              type: 'text',
              label: 'CTA Link',
              defaultValue: '#wom-campaign-container',
            },
            {
              name: 'ctaText',
              type: 'text',
              label: 'CTA Text',
              defaultValue: 'DEMOCRACY App herunterladen',
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
                {
                  name: 'scale',
                  type: 'number',
                  label: 'Skalierung (0.1-2)',
                  min: 0.1,
                  max: 2,
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
        // Vergleich Sektion (Wahl-O-Mat vs Wahl-O-Meter)
        {
          slug: 'comparison',
          labels: {
            singular: 'Vergleichs-Sektion',
            plural: 'Vergleichs-Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'Was ist der Unterschied zum Wahl-O-Mat?',
            },
            {
              name: 'leftHeader',
              type: 'text',
              label: 'Linke Spalte Header',
              defaultValue: 'Wahl-O-Mat',
            },
            {
              name: 'leftHeaderColor',
              type: 'text',
              label: 'Linke Spalte Farbe',
              defaultValue: '#f5a623',
            },
            {
              name: 'rightHeader',
              type: 'text',
              label: 'Rechte Spalte Header',
              defaultValue: 'Wahl-O-Meter',
            },
            {
              name: 'rightHeaderColor',
              type: 'text',
              label: 'Rechte Spalte Farbe',
              defaultValue: '#4494d3',
            },
            {
              name: 'rows',
              type: 'array',
              label: 'Vergleichszeilen',
              labels: {
                singular: 'Zeile',
                plural: 'Zeilen',
              },
              fields: [
                {
                  name: 'leftTitle',
                  type: 'text',
                  label: 'Linke Spalte Titel',
                  required: true,
                },
                {
                  name: 'leftContent',
                  type: 'textarea',
                  label: 'Linke Spalte Inhalt',
                  required: true,
                },
                {
                  name: 'rightTitle',
                  type: 'text',
                  label: 'Rechte Spalte Titel',
                  required: true,
                },
                {
                  name: 'rightContent',
                  type: 'textarea',
                  label: 'Rechte Spalte Inhalt',
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
        // Quote/Mission Sektion
        {
          slug: 'missionQuote',
          labels: {
            singular: 'Mission/Zitat Sektion',
            plural: 'Mission/Zitat Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'Warum gibt es uns?',
            },
            {
              name: 'linkText',
              type: 'text',
              label: 'Link Text',
              defaultValue: 'Zur Vision von DEMOCRACY',
            },
            {
              name: 'linkUrl',
              type: 'text',
              label: 'Link URL',
              defaultValue: '/about',
            },
            {
              name: 'quoteTitle',
              type: 'text',
              label: 'Zitat Titel',
              defaultValue: 'Wir wollen',
            },
            {
              name: 'quoteSubtitle',
              type: 'text',
              label: 'Zitat Untertitel',
              defaultValue: 'Menschen einfachen Zugang zur Politik bieten',
            },
            {
              name: 'quoteText',
              type: 'textarea',
              label: 'Zitat Text',
              defaultValue: 'Mit DEMOCRACY geben wir Menschen die Möglichkeit, sich über die Abstimmungen im Bundestag zu informieren und ihre Meinung mit den der Parteien und Abgeordneten abzugleichen.',
            },
            {
              name: 'authorName',
              type: 'text',
              label: 'Autor Name',
              defaultValue: 'Marius Krüger',
            },
            {
              name: 'authorRole',
              type: 'text',
              label: 'Autor Rolle',
              defaultValue: 'Gründer',
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Aktiv',
              defaultValue: true,
            },
          ],
        },
        // CTA/Campaign Sektion
        {
          slug: 'campaignCta',
          labels: {
            singular: 'Campaign CTA Sektion',
            plural: 'Campaign CTA Sektionen',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              defaultValue: 'Finde die Partei, die Dich wirklich vertritt',
            },
            {
              name: 'appName',
              type: 'text',
              label: 'App Name',
              defaultValue: 'DEMOCRACY',
            },
            {
              name: 'version',
              type: 'text',
              label: 'Version',
              defaultValue: '1.5',
            },
            {
              name: 'tagline',
              type: 'text',
              label: 'Tagline',
              defaultValue: 'Dein faktenbasierter Wahlhelfer',
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
              name: 'campaignImage',
              type: 'text',
              label: 'Campaign Corner Bild',
              defaultValue: '/files/images/campaigncorner@3x.png',
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
