/**
 * Email system seeding
 */

import type { Payload } from 'payload';

export async function seedEmailLists(payload: Payload) {
  const existingLists = await payload.find({
    collection: 'email-lists',
    limit: 1,
  });
  
  if (existingLists.totalDocs > 0) return;
  
  console.log('🌱 Seeding Email Lists...');
  
  const lists = [
    { name: 'newsletter', description: 'Allgemeiner Newsletter' },
    { name: 'alpha', description: 'Alpha-Tester Liste' },
    { name: 'beta', description: 'Beta-Tester Liste' },
  ];
  
  for (const list of lists) {
    await payload.create({
      collection: 'email-lists',
      data: list,
    });
  }
  
  console.log(`✅ Created ${lists.length} Email Lists`);
}

export async function seedEmailTemplates(payload: Payload) {
  const existingTemplates = await payload.find({
    collection: 'email-templates',
    limit: 1,
  });
  
  if (existingTemplates.totalDocs > 0) return;
  
  console.log('🌱 Seeding Email Templates...');
  
  const templates = [
    {
      name: 'newsletter_confirmation',
      subject: 'Newsletter-Anmeldung bestätigt',
      body: `Hallo,

vielen Dank für Ihre Anmeldung zum DEMOCRACY Newsletter!

Sie erhalten ab sofort regelmäßig Updates über die App und das Projekt.

Falls Sie sich wieder abmelden möchten, können Sie dies jederzeit über den Link am Ende jeder E-Mail tun.

Mit freundlichen Grüßen
Das DEMOCRACY Team`,
    },
    {
      name: 'beta_registration',
      subject: 'Beta-Registrierung bestätigt',
      body: `Hallo,

vielen Dank für Ihre Anmeldung zur DEMOCRACY Beta!

Wir werden uns bei Ihnen melden, sobald die Beta-Version verfügbar ist.

Mit freundlichen Grüßen
Das DEMOCRACY Team`,
    },
  ];
  
  for (const template of templates) {
    await payload.create({
      collection: 'email-templates',
      data: template,
    });
  }
  
  console.log(`✅ Created ${templates.length} Email Templates`);
}
