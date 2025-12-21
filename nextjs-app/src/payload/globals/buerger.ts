import type { GlobalConfig } from 'payload';
import { isAdminOrEditor } from '../access';

/**
 * Bürger Page Global Configuration
 * 
 * Ermöglicht die vollständige Verwaltung der Bürger-Seite über das Payload CMS.
 * Alle Sektionen, Features, Steps und Benefits können über das CMS gepflegt werden.
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
          defaultValue: 'DEMOCRACY für Bürger - Deine Stimme zählt',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Beschreibung',
          defaultValue: 'Nutze DEMOCRACY als Bürger und stimme über Bundestagsabstimmungen ab. Vergleiche deine Meinung mit deinen Abgeordneten.',
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
          label: 'Titel',
          defaultValue: 'DEMOCRACY für Bürger',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Untertitel',
          defaultValue: 'Deine Stimme zählt! Mit DEMOCRACY kannst du über alle Bundestagsabstimmungen abstimmen und deine Meinung mit deinen Abgeordneten vergleichen.',
        },
        {
          name: 'appStoreUrl',
          type: 'text',
          label: 'App Store URL',
          defaultValue: 'https://apps.apple.com/de/app/democracy-deutschland/id1356447024',
        },
        {
          name: 'appStoreButtonText',
          type: 'text',
          label: 'App Store Button Text',
          defaultValue: '📱 iOS App',
        },
        {
          name: 'playStoreUrl',
          type: 'text',
          label: 'Play Store URL',
          defaultValue: 'https://play.google.com/store/apps/details?id=de.democracy',
        },
        {
          name: 'playStoreButtonText',
          type: 'text',
          label: 'Play Store Button Text',
          defaultValue: '🤖 Android App',
        },
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Aktiv',
          defaultValue: true,
        },
      ],
    },
    // Features Section
    {
      name: 'featuresSection',
      type: 'group',
      label: 'Features Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Was DEMOCRACY dir bietet',
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
              name: 'icon',
              type: 'text',
              label: 'Icon (Emoji)',
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
    // Steps Section
    {
      name: 'stepsSection',
      type: 'group',
      label: 'So funktioniert\'s Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'So funktioniert\'s',
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Schritte',
          labels: {
            singular: 'Schritt',
            plural: 'Schritte',
          },
          fields: [
            {
              name: 'number',
              type: 'text',
              label: 'Nummer',
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
    // Benefits Section
    {
      name: 'benefitsSection',
      type: 'group',
      label: 'Vorteile Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Deine Vorteile',
        },
        {
          name: 'benefits',
          type: 'array',
          label: 'Vorteile',
          labels: {
            singular: 'Vorteil',
            plural: 'Vorteile',
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
    // Example Section
    {
      name: 'exampleSection',
      type: 'group',
      label: 'Beispiel Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Ein Beispiel',
        },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Absätze',
          labels: {
            singular: 'Absatz',
            plural: 'Absätze',
          },
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Text',
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
    // CTA Section
    {
      name: 'ctaSection',
      type: 'group',
      label: 'Call-to-Action Sektion',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'Bereit loszulegen?',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Untertitel',
          defaultValue: 'Lade DEMOCRACY jetzt herunter und werde Teil einer neuen Form der Bürgerbeteiligung!',
        },
        {
          name: 'appStoreUrl',
          type: 'text',
          label: 'App Store URL',
          defaultValue: 'https://apps.apple.com/de/app/democracy-deutschland/id1356447024',
        },
        {
          name: 'appStoreButtonText',
          type: 'text',
          label: 'App Store Button Text',
          defaultValue: '📱 Jetzt für iOS herunterladen',
        },
        {
          name: 'playStoreUrl',
          type: 'text',
          label: 'Play Store URL',
          defaultValue: 'https://play.google.com/store/apps/details?id=de.democracy',
        },
        {
          name: 'playStoreButtonText',
          type: 'text',
          label: 'Play Store Button Text',
          defaultValue: '🤖 Jetzt für Android herunterladen',
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
