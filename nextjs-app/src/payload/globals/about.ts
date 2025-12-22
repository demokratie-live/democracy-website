import type { GlobalConfig } from 'payload';

/**
 * About Page Global Configuration
 * 
 * Ermöglicht die vollständige Verwaltung der About-Seite über das Payload CMS.
 * Sektionen können per Drag & Drop neu angeordnet werden.
 */
export const About: GlobalConfig = {
  slug: 'about',
  label: 'Über Uns',
  admin: {
    group: 'Seiten',
    description: 'Inhalte der Über-Uns-Seite verwalten',
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
          defaultValue: 'Über Uns - DEMOCRACY Deutschland e.V.',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Beschreibung',
          defaultValue: 'DEMOCRACY Deutschland e.V. - Ein gemeinnütziger Verein, der sich für Demokratie als politische Selbstbestimmung einsetzt.',
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
        // Statement Block
        {
          slug: 'statement',
          label: 'Statement / Header',
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
            },
            {
              name: 'additionalText',
              type: 'textarea',
              label: 'Zusätzlicher Text',
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Aktiv',
              defaultValue: true,
            },
          ],
        },
        // Video Block
        {
          slug: 'aboutVideo',
          label: 'Video Sektion',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              required: true,
            },
            {
              name: 'duration',
              type: 'text',
              label: 'Dauer',
            },
            {
              name: 'videoUrl',
              type: 'text',
              label: 'Video URL (YouTube Embed)',
              required: true,
            },
            {
              name: 'ctaText',
              type: 'text',
              label: 'CTA Text',
            },
            {
              name: 'ctaLink',
              type: 'text',
              label: 'CTA Link',
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Aktiv',
              defaultValue: true,
            },
          ],
        },
        // Democratic Understanding / Comparison Block
        {
          slug: 'democraticUnderstanding',
          label: 'Demokratisches Verständnis',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              required: true,
            },
            {
              name: 'leftHeader',
              type: 'text',
              label: 'Linke Spalte Überschrift',
              defaultValue: 'Das unterstützen wir',
            },
            {
              name: 'leftHeaderColor',
              type: 'text',
              label: 'Linke Spalte Farbe',
              defaultValue: '#4494d3',
            },
            {
              name: 'rightHeader',
              type: 'text',
              label: 'Rechte Spalte Überschrift',
              defaultValue: 'Das unterstützen wir nicht',
            },
            {
              name: 'rightHeaderColor',
              type: 'text',
              label: 'Rechte Spalte Farbe',
              defaultValue: '#e67c89',
            },
            {
              name: 'rows',
              type: 'array',
              label: 'Vergleichszeilen',
              fields: [
                {
                  name: 'leftTitle',
                  type: 'text',
                  label: 'Linker Titel',
                  required: true,
                },
                {
                  name: 'leftContent',
                  type: 'textarea',
                  label: 'Linker Inhalt',
                  required: true,
                },
                {
                  name: 'rightTitle',
                  type: 'text',
                  label: 'Rechter Titel',
                  required: true,
                },
                {
                  name: 'rightContent',
                  type: 'textarea',
                  label: 'Rechter Inhalt',
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
        // Team Block
        {
          slug: 'team',
          label: 'Team Sektion',
          fields: [
            {
              name: 'decoratorImage',
              type: 'text',
              label: 'Decorator Bild URL',
              defaultValue: '/files/images/democracy-bar.png',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Titel',
              required: true,
            },
            {
              name: 'subtitle',
              type: 'text',
              label: 'Untertitel',
            },
            {
              name: 'members',
              type: 'array',
              label: 'Team Mitglieder',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Name',
                  required: true,
                },
                {
                  name: 'role',
                  type: 'text',
                  label: 'Rolle / Beschreibung (HTML erlaubt)',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'text',
                  label: 'Bild URL',
                  required: true,
                },
                {
                  name: 'links',
                  type: 'array',
                  label: 'Kontakt Links',
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: 'Icon',
                      options: [
                        { label: 'E-Mail', value: 'email' },
                        { label: 'Telefon', value: 'phone' },
                        { label: 'Facebook', value: 'facebook' },
                        { label: 'Xing', value: 'xing' },
                        { label: 'LinkedIn', value: 'linkedin' },
                        { label: 'Twitter', value: 'twitter' },
                        { label: 'GitHub', value: 'github' },
                      ],
                    },
                    {
                      name: 'url',
                      type: 'text',
                      label: 'URL',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              name: 'showDiscord',
              type: 'checkbox',
              label: 'Discord Widget anzeigen',
              defaultValue: true,
            },
            {
              name: 'discordServerId',
              type: 'text',
              label: 'Discord Server ID',
              defaultValue: '372403545086885888',
              admin: {
                condition: (data, siblingData) => siblingData?.showDiscord,
              },
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Aktiv',
              defaultValue: true,
            },
          ],
        },
        // Philosophy Block
        {
          slug: 'philosophy',
          label: 'Philosophie Sektion',
          fields: [
            {
              name: 'decoratorImage',
              type: 'text',
              label: 'Decorator Bild URL',
              defaultValue: '/files/images/democracy-bar.png',
            },
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
            },
            {
              name: 'values',
              type: 'array',
              label: 'Werte / Icons',
              fields: [
                {
                  name: 'icon',
                  type: 'text',
                  label: 'Icon Bild URL',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Titel',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  label: 'Untertitel',
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
        // Quote Block
        {
          slug: 'founderQuote',
          label: 'Gründer Zitat',
          fields: [
            {
              name: 'quoteIcon',
              type: 'text',
              label: 'Zitat Icon URL',
              defaultValue: '/files/images/quotes@3x.png',
            },
            {
              name: 'quoteText',
              type: 'textarea',
              label: 'Zitat Text',
              required: true,
            },
            {
              name: 'authorName',
              type: 'text',
              label: 'Autor Name',
              required: true,
            },
            {
              name: 'authorRole',
              type: 'text',
              label: 'Autor Rolle',
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
