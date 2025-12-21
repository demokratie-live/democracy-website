/**
 * Wahlometer seed data
 * 
 * Seeds the initial Wahl-O-Meter page configuration with all sections
 */

import type { Payload } from 'payload';

/**
 * Seeds the Wahlometer global with default content
 */
export async function seedWahlometer(payload: Payload) {
  // Check if wahlometer already has sections
  const wahlometer = await payload.findGlobal({
    slug: 'wahlometer',
  });

  // Only seed if no sections exist
  if (wahlometer.sections && wahlometer.sections.length > 0) {
    payload.logger.info('Wahlometer already has sections, skipping seed');
    return;
  }

  payload.logger.info('Seeding Wahlometer configuration...');

  await payload.updateGlobal({
    slug: 'wahlometer',
    data: {
      seo: {
        metaTitle: 'Wahl-O-Meter - Dein faktenbasierter Wahlhelfer | DEMOCRACY',
        metaDescription: 'Der Wahl-O-Meter von DEMOCRACY vergleicht Dein Abstimmungsverhalten mit den Entscheidungen der Parteien und Politiker im Bundestag. Finde heraus, welche Partei Dich wirklich vertritt.',
      },
      sections: [
        // Hero Sektion
        {
          blockType: 'wahlometerHero',
          title: 'Wahl-O-Meter',
          subtitle: 'Dein faktenbasierter Wahlhelfer',
          heroImage: '/files/images/WahlOMeter.png',
          backgroundImage: '/files/images/Logo-Landingpage.png',
          gradientStart: 'rgb(95, 147, 207)',
          gradientEnd: 'rgb(70, 108, 171)',
          appStoreUrl: 'https://itunes.apple.com/de/app/democracy/id1341311162',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracydeutschland.app',
          browserVersionUrl: 'https://democracy-app.de',
          aabDownloadUrl: '/files/download/democracy-app.aab',
          apkDownloadUrl: '/files/download/democracy-app.apk',
          apkVersion: 'v1.5.9',
          enabled: true,
        },
        // Feature Cards Sektion
        {
          blockType: 'featureCards',
          features: [
            {
              icon: '/files/images/crosshair.svg',
              title: 'faktenbasierter\nWahlhelfer',
              description: 'Der Wahl-O-Meter von DEMOCRACY gleicht Deine Stellungnahmen zu Gesetzen & Anträgen des Bundestages mit den Entscheidungen der Fraktionen und Politiker ab und ermittelt Eure Übereinstimmung.',
            },
            {
              icon: '/files/images/edit.svg',
              title: 'schnell &\nindividuell',
              description: 'App herunterladen, Themen anklicken, die dich interessieren, Abstimmen und direkt Dein Ergebnis erhalten – in weniger als 5 Minuten.',
            },
            {
              icon: '/files/images/fingerprint.svg',
              title: 'kostenlos &\ngemeinnützig',
              description: 'DEMOCRACY ist kostenlos – die Entwicklung der App open source und spendenfinanziert. Als gemeinnütziger Verein wollen wir Politik transparenter machen.',
              link: '/about',
              linkText: 'Mehr erfahren',
            },
          ],
          enabled: true,
        },
        // Video Sektion
        {
          blockType: 'video',
          title: 'Wie funktioniert der',
          titleBold: 'Wahl-O-Meter',
          duration: '1:00',
          videoUrl: 'https://www.youtube.com/embed/uWwQquy_MD0',
          ctaLink: '#wom-campaign-container',
          ctaText: 'DEMOCRACY App herunterladen',
          enabled: true,
        },
        // Presse Logos Sektion
        {
          blockType: 'pressLogos',
          title: 'bekannt aus',
          logos: [
            {
              name: 'Tagesschau',
              logo: '/files/images/tagesschau_logo.png',
              url: 'https://www.youtube.com/watch?v=B1N2ySUYXBY?autoplay=0',
              alt: 'Logo der Tagesschau',
            },
            {
              name: 'BR',
              logo: '/files/images/br_logo.png',
              url: 'https://www.br.de/nachrichten/netzwelt/bundestagswahl-alternativen-zum-wahl-o-mat',
              alt: 'Logo des Bayerischen Rundfunks',
            },
            {
              name: 'Golem',
              logo: '/files/images/golem_logo.png',
              url: 'https://www.golem.de/news/democracy-der-verbesserte-wahl-o-mat-in-einer-app-1906-141599.html',
              alt: 'Logo der IT-News-Seite Golem',
            },
            {
              name: 'Focus',
              logo: '/files/images/focus_logo.png',
              url: 'https://www.focus.de/digital/bundestagswahl-2021-mit-dieser-app-koennen-sie-abstimmungen-im-bundestag-mit-ihren-ansichten-vergleichen_id_24262915.html',
              alt: 'Logo der Zeitschrift FOCUS',
              scale: 0.9,
            },
          ],
          enabled: true,
        },
        // Vergleich Sektion
        {
          blockType: 'comparison',
          title: 'Was ist der Unterschied zum Wahl-O-Mat?',
          leftHeader: 'Wahl-O-Mat',
          leftHeaderColor: '#f5a623',
          rightHeader: 'Wahl-O-Meter',
          rightHeaderColor: '#4494d3',
          rows: [
            {
              leftTitle: 'basiert auf Versprechen',
              leftContent: 'Der Wahl-O-Mat ermöglicht den Vergleich eigener Stellungnahmen zu bestimmten Statements mit den autorisierten Antworten der Parteien. Er kreuzt insofern die Wahlversprechen der Parteien mit den eigenen Erwartungen für die Zukunft.',
              rightTitle: 'basiert auf Handlungen',
              rightContent: 'Der Wahl-O-Meter (meter = messen) vergleicht rückblickend das tatsächliche Abstimmungsverhalten der Parteien und Politiker mit den eigenen Stellungnahmen bei konkreten Gesetzen/Anträgen des Bundestag.',
            },
            {
              leftTitle: 'Parteien haben Finger im Spiel',
              leftContent: 'Beim Wahl-O-Mat geben die Parteien ihre theoretischen Positionen zu vorgefertigten Statements über die Zukunft ab.',
              rightTitle: 'Parteien wird auf Finger geschaut',
              rightContent: 'Der Wahl-O-Meter braucht keine Eigenangaben der Parteien, er zieht Parteien und Abgeordnete für ihre Arbeit in der letzten Legislaturperiode zur Rechenschaft.',
            },
            {
              leftTitle: 'macht Wahlkampf einfacher',
              leftContent: 'Der Wahl-O-Mat hilft dabei, die Wahlversprechen der Parteien auf einige verständliche Thesen zu komprimieren.',
              rightTitle: 'macht Politik transparent',
              rightContent: 'Der Wahl-O-Meter stellt die Abstimmungen der Parteien und Politiker im Bundestag in den Fokus und bietet so einen Einblick in den politischen Prozess.',
            },
            {
              leftTitle: 'ausgesuchte Themen',
              leftContent: 'Der Wahl-O-Mat behandelt nur die Themen, welche von einer Redaktion für die Statements ausgesucht werden.',
              rightTitle: 'alle Themen',
              rightContent: 'Der Wahl-O-Meter verarbeitet alle Gesetze und Anträge der vergangenen Legislaturperiode des Bundestags und ist damit nur dadurch begrenzt, wie viel Zeit du den Abstimmungen widmen möchtest.\n\nFalls du trotzdem eine redaktionell ausgewählte Orientierungshilfe möchtest, gibt es bis zur Bundestagswahl 2021 den Reiter \'Empfohlen\'.',
            },
            {
              leftTitle: 'von der Regierung',
              leftContent: 'Der Wahl-O-Mat wird von der Bundeszentrale für politische Bildung betrieben, welche von der Bundesregierung finanziert wird.',
              rightTitle: 'independent',
              rightContent: 'Die DEMOCRACY App und damit auch der Wahl-O-Meter sind unabhängig, gemeinnützig und spendenfinanziert - von Bürgern für Bürger.',
            },
          ],
          enabled: true,
        },
        // Mission Quote Sektion
        {
          blockType: 'missionQuote',
          title: 'Warum gibt es uns?',
          linkText: 'Zur Vision von DEMOCRACY',
          linkUrl: '/about',
          quoteTitle: 'Wir wollen',
          quoteSubtitle: 'Menschen einfachen Zugang zur Politik bieten',
          quoteText: 'Mit DEMOCRACY geben wir Menschen die Möglichkeit, sich über die Abstimmungen im Bundestag zu informieren und ihre Meinung mit den der Parteien und Abgeordneten abzugleichen.',
          authorName: 'Marius Krüger',
          authorRole: 'Gründer',
          enabled: true,
        },
        // Campaign CTA Sektion
        {
          blockType: 'campaignCta',
          title: 'Finde die Partei, die Dich wirklich vertritt',
          appName: 'DEMOCRACY',
          version: '1.5',
          tagline: 'Dein faktenbasierter Wahlhelfer',
          appStoreUrl: 'https://itunes.apple.com/de/app/democracy/id1341311162',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracydeutschland.app',
          campaignImage: '/files/images/campaigncorner@3x.png',
          enabled: true,
        },
      ],
    },
  });

  payload.logger.info('Wahlometer seeded successfully!');
}
