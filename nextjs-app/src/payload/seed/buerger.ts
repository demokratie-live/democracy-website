/**
 * Bürger Page seed data
 * 
 * Seeds the initial Bürger page configuration matching the original PHP website
 */

import type { Payload } from 'payload';

/**
 * Seeds the Buerger global with default content
 */
export async function seedBuerger(payload: Payload) {
  // Check if buerger already has content
  const buerger = await payload.findGlobal({
    slug: 'buerger',
  });

  // Only seed if no hotspots exist (new schema check)
  if (buerger.hero?.hotspots && buerger.hero.hotspots.length > 0) {
    payload.logger.info('Bürger already has content, skipping seed');
    return;
  }

  payload.logger.info('Seeding Bürger configuration...');

  await payload.updateGlobal({
    slug: 'buerger',
    data: {
      seo: {
        metaTitle: 'DEMOCRACY als Informations- und Beteiligungsplattform für Bürger',
        metaDescription: 'DEMOCRACY ist speziell dafür entwickelt, Bürgerlobbyismus und Politikcontrolling zu fördern. Nutze deine Stimme!',
      },
      hero: {
        title: 'DEMOCRACY als Informations- und',
        titleLine2: 'Beteiligungsplattform für Bürger',
        heroImage: '/files/images/Fur_Burger.png',
        hotspots: [
          { number: '1', tooltip: 'Im Parlament wird ein Gesetzgebungsverfahren initiiert', active: false },
          { number: '2', tooltip: 'DEMOCRACY informiert Dich über das neue Papier', active: true },
          { number: '3', tooltip: 'Als virtueller Bundestags-abgeordneter kannst Du noch vor der offiziellen Entscheidung selbst über den Antrag abstimmen', active: true },
          { number: '4', tooltip: 'Sobald die Entscheidung im Bundestag vorliegt, kannst Du Dein und das Abstimmungsverhalten der Community mit dem der Politiker und Fraktionen vergleichen', active: false },
        ],
        enabled: true,
      },
      featuresSection: {
        title: 'GEMACHT FÜR BÜRGER',
        subtitle: 'DEMOCRACY ist speziell dafür entwickelt, Bürgerlobbyismus und Politikcontrolling zu fördern',
        // Features are rendered from hardcoded defaults in the page component
        // because they contain rich HTML content that's complex to store in CMS
        features: [],
        enabled: true,
      },
      ctaSection: {
        videoThumbnail: '/files/images/juli.png',
        videoUrl: 'https://www.youtube.com/watch?v=ouzgAqvJUA8',
        title: 'Werde ein Teil von DEMOCRACY',
        description: 'Ob jung oder alt, ob (bereits) Politikexperte oder (bislang) uninformiert – DEMOCRACY wird Dir eine breit gefächerte Auswahl an Möglichkeiten bieten, politisch aktiv zu werden, und dabei fast automatisch Dein Wissen, Deinen Einblick in pol. Prozesse sowie Dein Potential, auf die Politik Einfluss zu nehmen, vergrößern. Sei Teil der Veränderung und nutze Deine Stimme.',
        buttons: [
          { text: 'Jetzt Pate werden', url: '/spenden#donate', variant: 'dark' },
          { text: 'DEMOCRACY testen', url: '/', variant: 'default' },
          { text: 'Spenden', url: '/spenden#donate', variant: 'light' },
        ],
        enabled: true,
      },
      contactSection: {
        title: 'Noch nicht ganz verstanden? Wir sind für Dich da!',
        buttonText: 'KONTAKTFORMULAR',
        buttonUrl: '/contact',
        enabled: true,
      },
    },
  });

  payload.logger.info('Bürger seeded successfully!');
}
