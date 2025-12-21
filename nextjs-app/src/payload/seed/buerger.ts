/**
 * Bürger Page seed data
 * 
 * Seeds the initial Bürger page configuration with all sections
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

  // Only seed if no features exist
  if (buerger.featuresSection?.features && buerger.featuresSection.features.length > 0) {
    payload.logger.info('Bürger already has content, skipping seed');
    return;
  }

  payload.logger.info('Seeding Bürger configuration...');

  await payload.updateGlobal({
    slug: 'buerger',
    data: {
      seo: {
        metaTitle: 'DEMOCRACY für Bürger - Deine Stimme zählt',
        metaDescription: 'Nutze DEMOCRACY als Bürger und stimme über Bundestagsabstimmungen ab. Vergleiche deine Meinung mit deinen Abgeordneten.',
      },
      hero: {
        title: 'DEMOCRACY für Bürger',
        subtitle: 'Deine Stimme zählt! Mit DEMOCRACY kannst du über alle Bundestagsabstimmungen abstimmen und deine Meinung mit deinen Abgeordneten vergleichen.',
        appStoreUrl: 'https://apps.apple.com/de/app/democracy-deutschland/id1356447024',
        appStoreButtonText: '📱 iOS App',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracy',
        playStoreButtonText: '🤖 Android App',
        enabled: true,
      },
      featuresSection: {
        title: 'Was DEMOCRACY dir bietet',
        features: [
          { icon: '🗳️', title: 'Über alles abstimmen', description: 'Stimme über alle Bundestagsabstimmungen ab - einfach, schnell und direkt in der App.' },
          { icon: '📄', title: 'Informiert entscheiden', description: 'Lies die offiziellen Dokumente, Begründungen und Argumente zu jeder Abstimmung.' },
          { icon: '📊', title: 'Ergebnisse vergleichen', description: 'Vergleiche deine Abstimmungen mit denen deiner Abgeordneten und der Community.' },
          { icon: '🔔', title: 'Benachrichtigungen', description: 'Erhalte Push-Benachrichtigungen zu wichtigen Abstimmungen, die dich interessieren.' },
          { icon: '🔒', title: 'Deine Privatsphäre', description: 'Deine Daten gehören dir. Wir verkaufen keine Daten und zeigen keine Werbung.' },
          { icon: '⚡', title: 'Einfach & schnell', description: 'In wenigen Sekunden abstimmen - wann und wo du willst.' },
        ],
        enabled: true,
      },
      stepsSection: {
        title: 'So funktioniert\'s',
        steps: [
          { number: '1', title: 'App herunterladen', description: 'Lade DEMOCRACY kostenlos aus dem App Store oder Google Play Store herunter.' },
          { number: '2', title: 'Abstimmung wählen', description: 'Wähle eine aktuelle oder vergangene Bundestagsabstimmung aus der Liste.' },
          { number: '3', title: 'Informieren', description: 'Lies die Informationen zur Abstimmung und bilde dir deine Meinung.' },
          { number: '4', title: 'Abstimmen', description: 'Stimme mit Ja, Nein oder Enthaltung ab - so wie im Bundestag.' },
          { number: '5', title: 'Vergleichen', description: 'Sieh, wie deine Abgeordneten abgestimmt haben und vergleiche deine Übereinstimmung.' },
        ],
        enabled: true,
      },
      benefitsSection: {
        title: 'Deine Vorteile',
        benefits: [
          { title: 'Mehr Transparenz', description: 'Erfahre, wie deine Abgeordneten abstimmen und ob sie deine Interessen vertreten.' },
          { title: 'Mehr Kontrolle', description: 'Behalte den Überblick über alle Bundestagsabstimmungen und politische Entwicklungen.' },
          { title: 'Mehr Beteiligung', description: 'Werde aktiver Teil der Demokratie und bringe deine Meinung ein.' },
          { title: 'Mehr Verständnis', description: 'Verstehe politische Entscheidungen besser durch Zugang zu allen relevanten Dokumenten.' },
        ],
        enabled: true,
      },
      exampleSection: {
        title: 'Ein Beispiel',
        paragraphs: [
          { text: 'Der Bundestag stimmt über ein neues Klimaschutzgesetz ab. Du öffnest die DEMOCRACY App und findest die Abstimmung in deiner Liste. Du liest die Zusammenfassung, schaust dir die offiziellen Dokumente an und bildest dir deine Meinung.' },
          { text: 'Du stimmst mit "Ja" ab, weil du den Klimaschutz wichtig findest. Sofort siehst du, wie die anderen Nutzer abgestimmt haben und wie deine Abgeordneten aus deinem Wahlkreis im Bundestag gestimmt haben.' },
          { text: 'Du stellst fest: Deine Abgeordnete hat anders abgestimmt als du. Das ist spannend! Du kannst jetzt ihre Begründung lesen und vielleicht bei der nächsten Wahl jemanden wählen, der besser zu deinen Ansichten passt.' },
        ],
        enabled: true,
      },
      ctaSection: {
        title: 'Bereit loszulegen?',
        subtitle: 'Lade DEMOCRACY jetzt herunter und werde Teil einer neuen Form der Bürgerbeteiligung!',
        appStoreUrl: 'https://apps.apple.com/de/app/democracy-deutschland/id1356447024',
        appStoreButtonText: '📱 Jetzt für iOS herunterladen',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracy',
        playStoreButtonText: '🤖 Jetzt für Android herunterladen',
        enabled: true,
      },
    },
  });

  payload.logger.info('Bürger seeded successfully!');
}
