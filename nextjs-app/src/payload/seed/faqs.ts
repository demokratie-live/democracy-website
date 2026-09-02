/**
 * FAQ seeding
 */

import type { Payload } from 'payload';
import { createLexicalContent } from './utils';

export async function seedFAQs(payload: Payload) {
  const existingFAQs = await payload.find({
    collection: 'faqs',
    limit: 1,
  });
  
  if (existingFAQs.totalDocs > 0) return;
  
  console.log('🌱 Seeding FAQs...');
  
  const faqs = [
    {
      question: 'Was ist DEMOCRACY?',
      answer: createLexicalContent('DEMOCRACY ist eine App, mit der du die Abstimmungen des Deutschen Bundestags live mitverfolgen und selbst abstimmen kannst. Unsere Vision ist es, die parlamentarische Arbeit transparenter zu machen und die Bürger näher an die politischen Entscheidungen heranzuführen.'),
      category: 'allgemein' as const,
      order: 1,
      active: true,
    },
    {
      question: 'Wie kann ich die App herunterladen?',
      answer: createLexicalContent('Die DEMOCRACY App ist sowohl für iOS (App Store) als auch für Android (Google Play Store) verfügbar. Suche einfach nach "DEMOCRACY" oder folge den Links auf unserer Website.'),
      category: 'allgemein' as const,
      order: 2,
      active: true,
    },
    {
      question: 'Was ist die Beta-Version?',
      answer: createLexicalContent('Die Beta-Version ist eine Vorabversion der App, die noch in Entwicklung ist. Als Beta-Tester hilfst du uns, Fehler zu finden und die App zu verbessern, bevor sie für alle veröffentlicht wird. Du brauchst einen speziellen Beta-Code, um dich anzumelden.'),
      category: 'beta' as const,
      order: 3,
      active: true,
    },
    {
      question: 'Wie bekomme ich einen Beta-Code?',
      answer: createLexicalContent('Beta-Codes werden bei speziellen Aktionen verteilt oder können über unseren Newsletter erhalten werden. Folge uns auf Social Media oder melde dich für unseren Newsletter an, um keine Aktion zu verpassen.'),
      category: 'beta' as const,
      order: 4,
      active: true,
    },
    {
      question: 'Was bedeutet MVP?',
      answer: createLexicalContent('MVP steht für "Minimum Viable Product" - die erste funktionsfähige Version unserer App mit den wichtigsten Grundfunktionen. Der MVP ermöglicht es dir, Abstimmungen zu verfolgen und selbst abzustimmen.'),
      category: 'mvp' as const,
      order: 5,
      active: true,
    },
    {
      question: 'Welche Funktionen sind im MVP enthalten?',
      answer: createLexicalContent('Der MVP enthält: Übersicht aller aktuellen Bundestagsabstimmungen, Möglichkeit selbst abzustimmen, Vergleich deiner Stimme mit den Ergebnissen des Bundestags, Benachrichtigungen bei neuen Abstimmungen, und grundlegende Statistiken.'),
      category: 'mvp' as const,
      order: 6,
      active: true,
    },
    {
      question: 'Wie finanziert sich DEMOCRACY?',
      answer: createLexicalContent('DEMOCRACY ist ein gemeinnütziges Projekt und finanziert sich ausschließlich durch Spenden. Wir verzichten bewusst auf Werbung und den Verkauf von Nutzerdaten. Jede Spende hilft uns, die App weiterzuentwickeln und die Server zu betreiben.'),
      category: 'finanzen' as const,
      order: 7,
      active: true,
    },
    {
      question: 'Wie kann ich spenden?',
      answer: createLexicalContent('Du kannst über unsere Website per Überweisung, PayPal oder Kreditkarte spenden. Wir bieten auch die Möglichkeit, regelmäßig zu spenden und so ein "Pate" von DEMOCRACY zu werden. Alle Spenden sind steuerlich absetzbar.'),
      category: 'finanzen' as const,
      order: 8,
      active: true,
    },
    {
      question: 'Wie werden meine Daten geschützt?',
      answer: createLexicalContent('Datenschutz hat bei uns höchste Priorität. Wir speichern nur die minimal notwendigen Daten, verwenden Ende-zu-Ende-Verschlüsselung wo möglich, und verkaufen niemals Nutzerdaten. Unsere Datenschutzerklärung findest du in der App und auf unserer Website.'),
      category: 'datenschutz' as const,
      order: 9,
      active: true,
    },
    {
      question: 'Werden meine Abstimmungen gespeichert?',
      answer: createLexicalContent('Deine Abstimmungen werden anonymisiert gespeichert, um Statistiken zu erstellen. Es ist nicht möglich, eine Abstimmung einer bestimmten Person zuzuordnen. Du kannst in den App-Einstellungen auch eine vollständig anonyme Nutzung aktivieren.'),
      category: 'datenschutz' as const,
      order: 10,
      active: true,
    },
  ];
  
  for (const faq of faqs) {
    await payload.create({
      collection: 'faqs',
      data: faq,
    });
  }
  
  console.log(`✅ Created ${faqs.length} FAQs`);
}
