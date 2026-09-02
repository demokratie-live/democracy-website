/**
 * Politiker Page seed data
 * 
 * Seeds the initial Politiker page configuration matching the original PHP website
 */

import type { Payload } from 'payload';

/**
 * Seeds the Politiker global with default content
 */
export async function seedPolitiker(payload: Payload) {
  // Check if politiker already has content
  const politiker = await payload.findGlobal({
    slug: 'politiker',
  });

  // Only seed if no hotspots exist (new schema check)
  if (politiker.hero?.hotspots && politiker.hero.hotspots.length > 0) {
    payload.logger.info('Politiker already has content, skipping seed');
    return;
  }

  payload.logger.info('Seeding Politiker configuration...');

  await payload.updateGlobal({
    slug: 'politiker',
    data: {
      seo: {
        metaTitle: 'DEMOCRACY als Stimmungsmesser für Politiker',
        metaDescription: 'DEMOCRACY bietet Politikern ein Stimmungsbild der Bevölkerung zu Bundestagsentscheidungen - addressiert an Abgeordnete.',
      },
      hero: {
        title: 'DEMOCRACY als Stimmungs-',
        titleLine2: 'messer für Politiker',
        heroImage: '/files/images/FurPoli.png',
        hotspots: [
          { 
            number: '1', 
            tooltip: 'Als Politiker erhälst Du vor der offiziellen Entscheidung neben den Fraktionsinformationen ein Stimmungsbild zu jedem Vorgang aus der gesamtdeutschen Nutzerschaft', 
            active: false 
          },
          { 
            number: '2', 
            tooltip: 'Das DEMOCRACY Wahlkreisergebnis liefert Dir zusätzlich die Ergebnisse aus Deinem Repräsentationsgebiet; hiermit kannst Du prüfen, wie die Bürger in Deinem Wahlkreis zu den Vorhaben stehen', 
            active: false 
          },
          { 
            number: '3', 
            tooltip: 'Die dauerhafte Rückkopplung hilft Dir als Abgeordneter, Dich besser positionieren zu können und lädt Dich ein, Deine Entscheidungen der Bevölkerung transparent zu erklären und Vertrauen aufzubauen', 
            active: true 
          },
        ],
        enabled: true,
      },
      featuresSection: {
        title: 'ADDRESSIERT AN POLITIKER',
        subtitle: 'Um eine Veränderung über die real-existierenden politischen Entscheidungswege zu ermöglichen',
        // Features are rendered from hardcoded defaults in the page component
        // because they contain rich HTML content that's complex to store in CMS
        features: [],
        enabled: true,
      },
      ctaSection: {
        image: '/files/images/group8@3x.png',
        title: 'Stärke vertrauen mit DEMOCRACY',
        description: 'Ob parlamentarischer Neuling oder abgeklärter Abgeordneter, ob (bereits) Experte im Crowdsourcing oder (bislang) Uneingeweihter – DEMOCRACY wird Dir eine breit gefächerte Auswahl an Möglichkeiten bieten, Deinen wichtigsten Stakeholdern Gehör zu schenken: den Bürgern. Sei Teil einer Demokratie des 21. Jahrhunderts und repräsentiere würdig.',
        buttons: [
          { text: 'AppGeordneter werden', url: '/contact', variant: 'dark' },
          { text: 'DEMOCRACY testen', url: '/', variant: 'default' },
          { text: 'Spenden', url: '/spenden#donate', variant: 'light' },
        ],
        enabled: true,
      },
      contactSection: {
        title: 'Interesse? Wir sind für Dich da!',
        buttonText: 'KONTAKTFORMULAR',
        buttonUrl: '/contact',
        enabled: true,
      },
    },
  });

  payload.logger.info('Politiker seeded successfully!');
}
