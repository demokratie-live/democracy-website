/**
 * FAQ Seed Script for Payload CMS
 * 
 * This script imports the legacy FAQ data into Payload CMS via REST API.
 * Prerequisites:
 * - Dev server must be running on http://localhost:3000
 * - Payload admin user must exist
 * 
 * Run with: pnpm seed:faqs
 */

// Legacy FAQ data to import
const faqData = [
  {
    order: 0,
    question: 'Gebt ihr meine Daten an Dritte weiter?',
    answerHtml: `Die Betreiber der App DEMOCRACY nehmen den Schutz Deiner persönlichen Daten sehr ernst.<br> Unserer Meinung nach sind Nutzerdaten gerade keine handelbaren Wirtschaftsgüter, sondern im Sinne des Grundgesetzes zu schützen. Deshalb behandeln wir Deine personenbezogenen wie Abstimmungs-Daten vertraulich entsprechend den gesetzlichen Datenschutzrichtlinien und geben sie selbstverständlich nicht an Dritte weiter.<br> Damit Du Dich bei der Nutzung unserer App sicher fühlst, informieren wir Dich <a href="/datenschutz">hier</a> zusätzlich zu den gesetzlichen Bestimmungen darüber, welche Daten wir warum erheben und wie wir diese verarbeiten und nutzen.<br> Unser Konzept zur Aufrechterhaltung des Abstimmungs- bzw. Wahlgeheimnis innerhalb der App DEMOCRACY kannst du hier nachlesen: <a href="https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität" target="_blank" rel="noopener noreferrer">https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität</a>.`,
    category: 'datenschutz',
  },
  {
    order: 1,
    question: 'Wie stellt ihr meine Stimmanonymität sicher?',
    answerHtml: `Wahlgeheimnis bedeutet, dass während und nach einer Wahl keine Information bekannt werden darf, die darauf schließen lässt, was ein Wähler gewählt hat. Im Konkreten geht es also um die Trennung von Person und Stimme in Urnenbuch und Auszählung. Die Aufrechterhaltung dieses Abstimmungs- bzw. Wahlgeheimnis ist zentraler Bestandteil der DNA der DEMOCRACY App.<br><br> Unser Konzept sieht dafür vor, jede Deiner Abstimmungsentscheidungen (Ja, Enthaltung, Nein als Stimme) von Deinen personenbezogenen Identifikationsdaten ( – dem Urnenbuch) zu trennen. Technisch lösen wir das ganze durch eine sogenannte serverseitige Profiling-Daten-Vermeidung. Praktisch wird dabei eine Quittung Deiner Abstimmungsentscheidung lediglich lokal auf Deinem Handy gespeichert, während Ihre Stimme serverseitig von Anfang an nur akkumuliert gespeichert wird.<br><br> Deine Stimmnonymität stellen wir also sicher, indem<ul><li>wir Deine Stimme serverseitig nur akkumuliert speichern (für Dich besteht dennoch die Möglichkeit eine Quittung über Deine Stimme auf Deinem Handy unakkumuliert zu speichern)</li><li>wir keinen Servertraffic loggen</li><li>und wir kein Datum zu Deiner Stimmabgabe speichern.</li></ul>Dieses Verfahren führt, und das sei der Vollständigkeit halber gesagt, in Grenzfällen zu Deanonymisierung, nämlich wenn<br><ul><li>nur Du abgestimmt hast</li><li>wenige Nutzer inklusive Dir abgestimmt haben und die Stimme der anderen bekannt ist, so dass Deine Stimme ermittelt werden kann</li><li>Der Netzwerkverkehr überwacht wird und das SSL Zertifikat gebrochen wird.</li></ul>Das vollständige Konzept zur Stimmanonymisierung kannst du hier <a href="https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität" target="_blank" rel="noopener noreferrer">https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität</a> nachlesen.`,
    category: 'datenschutz',
  },
  {
    order: 2,
    question: 'Sensible Daten und Open Source – geht das?',
    answerHtml: `Open Source bedeutet, dass der Quellcode frei und offen ist. Die Daten der Nutzer sind kein Bestandteil des Quellcodes, sondern der entsprechenden Installation des freien Programms auf einem Server. Insofern ist der unberechtigte Zugriff auf Nutzerdaten durch Dritte durch unsere Open-Source-Eigenschaft nicht angetastet. Überdies wird jede Änderung im Code, bevor sie in den Betrieb übergeht, von uns geprüft. Somit wird der hohe Anspruch an guter Programmierung gewahrt und auch verhindert, dass dubioser Code einfließen kann.`,
    category: 'datenschutz',
  },
  {
    order: 3,
    question: 'Auf welchen Plattformen kann ich teilnehmen?',
    answerHtml: `An der Beta teilnehmen kannst Du via Smartphone mit<br> iOS- oder Android-Betriebssystem`,
    category: 'beta',
  },
  {
    order: 4,
    question: 'Wie kann ich die Beta installieren?',
    answerHtml: `Wir verwenden während des Prototyping die Store-eigenen Testkanäle des App- sowie Google PlayStore.<br> Über dieses <a href="/invite/02C67F34">Bewerbungsformular</a> kannst Du uns Deine Apple-ID bzw. Google-Play-Store-Email-Adresse sowie die Informationen, welche Plattform (iOS/Android) Du benutzt mitteilen, sodass wir Dich auf die jeweilige Test-Liste setzen können.<br><br> Nach entsprechender Freischaltung bekommst Du von uns einen Zugangscode sowie Deine Plattform-spezifische Installationsanleitung per Mail übersendet.`,
    category: 'beta',
  },
  {
    order: 5,
    question: 'Welche Funktionen sind in der BETA enthalten?',
    answerHtml: `DEMOCRACY bedeutet 1. Live Daten aus dem Bundestag, 2. eigene AppStimmung durch Dich als Nutzer und 3. eine crowdmodierte Diskussion zu den Anträgen. Im Prototyp realisiert sind davon die Live-Anbindung an die Bundestagsdaten sowie die Nutzerabstimmung. Die vollständige <a href="/engineering">Funktionsübersicht</a> kannst Du dieser Tabelle entnehmen.`,
    category: 'beta',
  },
  {
    order: 6,
    question: 'Wann kommt der Public MVP?',
    answerHtml: `Wir möchten so schnell wie möglich mit DEMOCRACY online gehen – wenn es nach uns geht, noch diesen Herbst. Bis zu diesem Zeitpunkt müssen allerdings noch einige Meilensteine erreicht werden. Dafür brauchen wir Deine Hilfe – Gestalte DEMOCRACY mit Deiner Spende oder Deinen Fähigkeiten. Fragen zum Stand der Entwicklung kannst Du gerne an <a href="mailto:prototyping@democracy-deutschland.de">prototyping@democracy-deutschland.de</a> adressieren. Bis zum Public MVP werden Dir Erweiterungen regelmäßig als Beta-Updates präsentiert.`,
    category: 'mvp',
  },
  {
    order: 7,
    question: 'Wie wird DEMOCRACY finanziert?',
    answerHtml: `DEMOCRACY ist eine gemeinnützige App, das heißt von Menschen, für Menschen, um unsere Politik transparenter und bürgernaher zu machen. Da wir DEMOCRACY als eine werbefreie Plattform ohne Datenverkauf realisieren wollen, kann unser Joker nur die gemeinschaftliche Finanzierung sein. Insofern wird DEMOCRACY, um die laufenden Kosten zu decken, auch nach dem initialen Crowdfunding durch Spenden finanziert.`,
    category: 'finanzen',
  },
  {
    order: 8,
    question: 'Warum braucht ihr Geld?',
    answerHtml: `Während die Konzeption der Plattform bislang hauptsächlich von freiwilliger Arbeit gestemmt wurde, hat der Crowdfundingerfolg DEMOCRACY Deutschland e.V. das Privileg verschafft, 3 Vollzeitangestellte für 6 Monate beschäftigen zu können, die ihre gesamte Zeit und Energie dem Projekt widmen – das hat die Entwicklung von DEMOCRACY extrem vorangebracht.<br><br> Wenn es nach uns geht, möchten wir so schnell wie möglich mit dem DEMOCRACY MVP an den Start gehen, allerdings müssen bis dahin noch einige Meilensteine in der Entwicklung erreicht werden. Und dafür brauchen wir Deine finanzielle Unterstützung, um das Nötige zum Leben zu erhalten.`,
    category: 'finanzen',
  },
  {
    order: 9,
    question: 'Wie ist Bankverbindung von DEMOCRACY Deutschland e.V.?',
    answerHtml: `Kontoinhaber: DEMOCRACY Deutschland e.V.<br> IBAN: DE33 5003 1000 1049 7560 00<br> BIC: TRODDEF1`,
    category: 'finanzen',
  },
];

// Convert HTML to Lexical format
function htmlToLexical(html: string): object {
  // Parse HTML and convert to Lexical nodes
  const children: object[] = [];
  
  // Split by <br> and paragraphs
  const parts = html.split(/<br\s*\/?>/gi);
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (!part) continue;
    
    // Check for lists
    const ulMatch = part.match(/<ul>([\s\S]*?)<\/ul>/gi);
    const olMatch = part.match(/<ol>([\s\S]*?)<\/ol>/gi);
    
    if (ulMatch || olMatch) {
      // Process text before list
      const beforeList = part.split(/<[uo]l>/i)[0].trim();
      if (beforeList) {
        children.push(createParagraph(beforeList));
      }
      
      // Process list
      const listMatch = ulMatch ? ulMatch[0] : olMatch![0];
      const listType = ulMatch ? 'bullet' : 'number';
      const listItems = listMatch.match(/<li>([\s\S]*?)<\/li>/gi) || [];
      
      const listChildren = listItems.map(item => {
        const content = item.replace(/<\/?li>/gi, '').trim();
        return {
          type: 'listitem',
          version: 1,
          value: 1,
          children: [createParagraphNode(content)],
        };
      });
      
      if (listChildren.length > 0) {
        children.push({
          type: 'list',
          version: 1,
          listType,
          start: 1,
          tag: listType === 'bullet' ? 'ul' : 'ol',
          children: listChildren,
        });
      }
      
      // Process text after list
      const afterList = part.split(/<\/[uo]l>/i)[1]?.trim();
      if (afterList) {
        children.push(createParagraph(afterList));
      }
    } else {
      children.push(createParagraph(part));
    }
  }
  
  if (children.length === 0) {
    children.push(createParagraph(html));
  }
  
  return {
    root: {
      type: 'root',
      version: 1,
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
    },
  };
}

function createParagraph(html: string): object {
  return {
    type: 'paragraph',
    version: 1,
    children: parseInlineElements(html),
    direction: 'ltr',
    format: '',
    indent: 0,
    textFormat: 0,
    textStyle: '',
  };
}

function createParagraphNode(html: string): object {
  return {
    type: 'paragraph',
    version: 1,
    children: parseInlineElements(html),
    direction: 'ltr',
    format: '',
    indent: 0,
    textFormat: 0,
    textStyle: '',
  };
}

function parseInlineElements(html: string): object[] {
  const children: object[] = [];
  
  // Remove list tags that might have slipped through
  html = html.replace(/<\/?[uo]l>/gi, '').replace(/<\/?li>/gi, '');
  
  // Match links and text
  const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"(?:\s+[^>]*)?>([^<]*)<\/a>/gi;
  let lastIndex = 0;
  let match;
  
  while ((match = linkRegex.exec(html)) !== null) {
    // Add text before link
    if (match.index > lastIndex) {
      const textBefore = html.slice(lastIndex, match.index);
      if (textBefore.trim()) {
        children.push({
          type: 'text',
          version: 1,
          text: cleanText(textBefore),
          format: 0,
          mode: 'normal',
          style: '',
          detail: 0,
        });
      }
    }
    
    // Add link
    const url = match[1];
    const linkText = match[2];
    const isExternal = url.startsWith('http') || url.startsWith('mailto:');
    
    children.push({
      type: 'link',
      version: 3,
      children: [
        {
          type: 'text',
          version: 1,
          text: linkText,
          format: 0,
          mode: 'normal',
          style: '',
          detail: 0,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      fields: {
        linkType: isExternal ? 'custom' : 'internal',
        url: url,
        newTab: isExternal,
      },
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < html.length) {
    const remainingText = html.slice(lastIndex);
    if (remainingText.trim()) {
      children.push({
        type: 'text',
        version: 1,
        text: cleanText(remainingText),
        format: 0,
        mode: 'normal',
        style: '',
        detail: 0,
      });
    }
  }
  
  if (children.length === 0) {
    children.push({
      type: 'text',
      version: 1,
      text: cleanText(html),
      format: 0,
      mode: 'normal',
      style: '',
      detail: 0,
    });
  }
  
  return children;
}

function cleanText(text: string): string {
  return text
    .replace(/<[^>]+>/g, '') // Remove any remaining HTML tags
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const BASE_URL = process.env.PAYLOAD_URL || 'http://localhost:3000';
const ADMIN_EMAIL = process.env.PAYLOAD_ADMIN_EMAIL || 'payloadcms@manuelruck.de';
const ADMIN_PASSWORD = process.env.PAYLOAD_ADMIN_PASSWORD || '';

async function login(): Promise<string> {
  const response = await fetch(`${BASE_URL}/api/admin-users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  });
  
  if (!response.ok) {
    throw new Error(`Login failed: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.token;
}

async function checkExistingFAQs(): Promise<number> {
  const response = await fetch(`${BASE_URL}/api/faqs?limit=1`);
  const data = await response.json();
  return data.totalDocs || 0;
}

async function createFAQ(token: string, faq: { question: string; answerHtml: string; category: string; order: number }): Promise<boolean> {
  const lexicalContent = htmlToLexical(faq.answerHtml);
  
  const response = await fetch(`${BASE_URL}/api/faqs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      question: faq.question,
      answer: lexicalContent,
      category: faq.category,
      order: faq.order,
      active: true,
    }),
  });
  
  return response.ok;
}

async function seedFAQs() {
  console.log('🌱 Starting FAQ seed via REST API...');
  console.log(`   Server: ${BASE_URL}`);
  
  if (!ADMIN_PASSWORD) {
    console.error('❌ PAYLOAD_ADMIN_PASSWORD environment variable is required');
    console.log('   Set it in your .env file or pass it directly:');
    console.log('   PAYLOAD_ADMIN_PASSWORD=your-password pnpm seed:faqs');
    process.exit(1);
  }
  
  // Check server availability
  try {
    const healthCheck = await fetch(`${BASE_URL}/api/faqs?limit=1`);
    if (!healthCheck.ok) {
      throw new Error('API not responding');
    }
  } catch {
    console.error('❌ Server is not running on', BASE_URL);
    console.log('   Please start the dev server first: pnpm dev');
    process.exit(1);
  }
  
  // Check existing FAQs
  const existingCount = await checkExistingFAQs();
  if (existingCount > 0) {
    console.log(`⚠️  Found ${existingCount} existing FAQs. Skipping seed.`);
    console.log('   To reseed, delete existing FAQs in Payload Admin first.');
    process.exit(0);
  }
  
  // Login
  console.log('🔐 Logging in...');
  let token: string;
  try {
    token = await login();
    console.log('   ✅ Login successful');
  } catch (error) {
    console.error('❌ Login failed:', error);
    process.exit(1);
  }
  
  // Create FAQs
  console.log(`📝 Creating ${faqData.length} FAQs...`);
  
  let successCount = 0;
  for (const faq of faqData) {
    try {
      const success = await createFAQ(token, faq);
      if (success) {
        console.log(`   ✅ Created: ${faq.question.substring(0, 50)}...`);
        successCount++;
      } else {
        console.log(`   ❌ Failed: ${faq.question.substring(0, 50)}...`);
      }
    } catch (error) {
      console.error(`   ❌ Error: ${faq.question.substring(0, 50)}...`, error);
    }
  }
  
  console.log(`\n✅ FAQ seed completed! ${successCount}/${faqData.length} FAQs created.`);
  process.exit(0);
}

seedFAQs().catch((error) => {
  console.error('❌ Seed failed:', error);
  process.exit(1);
});
