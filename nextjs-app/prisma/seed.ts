import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create email lists
  console.log('Creating email lists...');
  const newsletterList = await prisma.emailList.upsert({
    where: { name: 'newsletter' },
    update: {},
    create: {
      name: 'newsletter',
      description: 'Newsletter subscribers',
    },
  });

  const alphaList = await prisma.emailList.upsert({
    where: { name: 'alpha' },
    update: {},
    create: {
      name: 'alpha',
      description: 'Alpha testers',
    },
  });

  console.log(`✅ Created email lists: ${newsletterList.name}, ${alphaList.name}`);

  // Create email templates
  console.log('Creating email templates...');
  await prisma.emailTemplate.upsert({
    where: { type: 'newsletter_subscribe' },
    update: {},
    create: {
      type: 'newsletter_subscribe',
      subject: 'Willkommen bei DEMOCRACY',
      bodyText:
        'Vielen Dank für Ihre Anmeldung zum DEMOCRACY Newsletter! Sie erhalten nun regelmäßig Updates zu unserem Projekt.',
      bodyHtml:
        '<p>Vielen Dank für Ihre Anmeldung zum DEMOCRACY Newsletter!</p><p>Sie erhalten nun regelmäßig Updates zu unserem Projekt.</p>',
    },
  });

  await prisma.emailTemplate.upsert({
    where: { type: 'alpha_register' },
    update: {},
    create: {
      type: 'alpha_register',
      subject: 'DEMOCRACY Alpha Registrierung',
      bodyText:
        'Herzlich willkommen im DEMOCRACY Alpha Programm! Ihre Registrierung war erfolgreich.',
      bodyHtml:
        '<p>Herzlich willkommen im DEMOCRACY Alpha Programm!</p><p>Ihre Registrierung war erfolgreich.</p>',
    },
  });

  await prisma.emailTemplate.upsert({
    where: { type: 'contact_confirmation' },
    update: {},
    create: {
      type: 'contact_confirmation',
      subject: 'Ihre Nachricht an DEMOCRACY',
      bodyText:
        'Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns baldmöglichst bei Ihnen melden.',
      bodyHtml:
        '<p>Vielen Dank für Ihre Nachricht.</p><p>Wir haben Ihre Anfrage erhalten und werden uns baldmöglichst bei Ihnen melden.</p>',
    },
  });

  console.log('✅ Created email templates');

  // Create sample FAQ entries
  console.log('Creating FAQ entries...');
  await prisma.faq.upsert({
    where: { id: 'sample-faq-1' },
    update: {},
    create: {
      id: 'sample-faq-1',
      question: 'Was ist DEMOCRACY?',
      answer:
        'DEMOCRACY ist eine App, mit der du über Abstimmungen im Deutschen Bundestag mitentscheiden kannst, als wärst du selbst Bundestagsabgeordneter.',
      order: 1,
      active: true,
    },
  });

  await prisma.faq.upsert({
    where: { id: 'sample-faq-2' },
    update: {},
    create: {
      id: 'sample-faq-2',
      question: 'Wie funktioniert DEMOCRACY?',
      answer:
        'Du lädst dir die App herunter, wählst Themen aus, die dich interessieren, informierst dich über die Vorgänge und stimmst ab. Deine Stimme wird mit dem tatsächlichen Abstimmungsergebnis des Bundestages verglichen.',
      order: 2,
      active: true,
    },
  });

  await prisma.faq.upsert({
    where: { id: 'sample-faq-3' },
    update: {},
    create: {
      id: 'sample-faq-3',
      question: 'Ist DEMOCRACY kostenlos?',
      answer:
        'Ja, DEMOCRACY ist komplett kostenlos und wird durch Spenden finanziert. Es gibt keine Werbung und keine versteckten Kosten.',
      order: 3,
      active: true,
    },
  });

  console.log('✅ Created FAQ entries');

  // Create donation settings
  console.log('Creating donation settings...');
  await prisma.donationSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      currentValue: 15000,
      goalValue: 50000,
      patrons: 45,
      patronsGoal: 100,
    },
  });

  console.log('✅ Created donation settings');

  // Create sample donation items
  console.log('Creating donation items...');
  await prisma.donationItem.upsert({
    where: { id: 'item-1' },
    update: {},
    create: {
      id: 'item-1',
      type: 'head',
      order: 1,
      title: 'Personalkosten',
      description: 'Gehälter für das Team',
      value: 0,
      maxValue: 0,
      active: true,
    },
  });

  await prisma.donationItem.upsert({
    where: { id: 'item-2' },
    update: {},
    create: {
      id: 'item-2',
      type: 'data',
      order: 2,
      title: 'Entwicklung',
      description: 'App- und Backend-Entwicklung',
      value: 8000,
      maxValue: 15000,
      active: true,
    },
  });

  await prisma.donationItem.upsert({
    where: { id: 'item-3' },
    update: {},
    create: {
      id: 'item-3',
      type: 'data',
      order: 3,
      title: 'Design & Content',
      description: 'Grafikdesign und Contentproduktion',
      value: 3000,
      maxValue: 8000,
      active: true,
    },
  });

  await prisma.donationItem.upsert({
    where: { id: 'item-4' },
    update: {},
    create: {
      id: 'item-4',
      type: 'data',
      order: 4,
      title: 'Marketing',
      description: 'Öffentlichkeitsarbeit und Social Media',
      value: 2000,
      maxValue: 5000,
      active: true,
    },
  });

  console.log('✅ Created donation items');

  // Create sample beta codes
  console.log('Creating beta codes...');
  await prisma.betaCode.upsert({
    where: { code: 'BETA2024' },
    update: {},
    create: {
      code: 'BETA2024',
      uses: 0,
      maxUses: 100,
      active: true,
    },
  });

  console.log('✅ Created beta codes');

  // Create admin user (password: admin123)
  console.log('Creating admin user...');
  const bcrypt = await import('bcryptjs');
  const hashedPassword = await bcrypt.hash('admin123', 10);

  await prisma.adminUser.upsert({
    where: { email: 'admin@democracy-deutschland.de' },
    update: {},
    create: {
      email: 'admin@democracy-deutschland.de',
      passwordHash: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      active: true,
    },
  });

  console.log('✅ Created admin user (email: admin@democracy-deutschland.de, password: admin123)');

  // Create sample roadmap items
  console.log('Creating roadmap items...');
  await prisma.roadmap.upsert({
    where: { id: 'roadmap-1' },
    update: {},
    create: {
      id: 'roadmap-1',
      title: 'Bundestag Integration',
      description: 'Anbindung an die offizielle Bundestags-API',
      priority: 1,
      status: 'completed',
      targetDate: new Date('2024-06-01'),
    },
  });

  await prisma.roadmap.upsert({
    where: { id: 'roadmap-2' },
    update: {},
    create: {
      id: 'roadmap-2',
      title: 'Push Notifications',
      description: 'Benachrichtigungen für neue Abstimmungen',
      priority: 2,
      status: 'in-progress',
      targetDate: new Date('2025-03-01'),
    },
  });

  await prisma.roadmap.upsert({
    where: { id: 'roadmap-3' },
    update: {},
    create: {
      id: 'roadmap-3',
      title: 'Browser Version',
      description: 'Vollständige Web-Version der App',
      priority: 3,
      status: 'planned',
      targetDate: new Date('2025-06-01'),
    },
  });

  console.log('✅ Created roadmap items');

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
