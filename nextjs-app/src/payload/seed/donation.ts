/**
 * Donation system seeding
 */

import type { Payload } from 'payload';

export async function seedDonationSettings(payload: Payload) {
  const existingSettings = await payload.find({
    collection: 'donation-settings',
    limit: 1,
  });
  
  if (existingSettings.totalDocs > 0) return;
  
  console.log('🌱 Seeding Donation Settings...');
  
  // Values from https://democracy-deutschland.de/#!donate (Stand: 16.12.2025)
  await payload.create({
    collection: 'donation-settings',
    data: {
      currentValue: 1759,
      goalValue: 9300,
      patrons: 387,
      patronsGoal: 2000,
    },
  });
  
  console.log('✅ Created Donation Settings');
}

export async function seedDonationItems(payload: Payload) {
  const existingItems = await payload.find({
    collection: 'donation-items',
    limit: 1,
  });
  
  if (existingItems.totalDocs > 0) return;
  
  console.log('🌱 Seeding Donation Items...');
  
  // Values from https://democracy-deutschland.de/#!donate (Stand: 16.12.2025)
  // Gesamtziel: 9.300€/Monat
  const donationItems = [
    // INFRASTRUKTUR Section
    {
      title: 'INFRASTRUKTUR',
      description: null,
      type: 'head' as const,
      value: 0,
      maxValue: 0,
      order: 1,
      active: true,
    },
    {
      title: 'Live-Betrieb',
      description: 'Serverkosten inkl 19% MwSt.',
      type: 'data' as const,
      value: 0,
      maxValue: 300,
      order: 2,
      active: true,
    },
    {
      title: 'Live-Betrieb',
      description: 'SMS-Versandkosten 4.000 SMS á 7,8 ct (kalkuliert)',
      type: 'data' as const,
      value: 0,
      maxValue: 300,
      order: 3,
      active: true,
    },
    {
      title: 'Developer',
      description: 'AG-Brutto-Gehaltskosten (1.750€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 3000,
      order: 4,
      active: true,
    },
    {
      title: 'Manuel Ruck',
      description: 'AG-Minijob-Kosten (520€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 650,
      order: 5,
      active: true,
    },
    // PRODUKTDESIGN & VERWALTUNG Section
    {
      title: 'PRODUKTDESIGN & VERWALTUNG',
      description: null,
      type: 'head' as const,
      value: 0,
      maxValue: 0,
      order: 6,
      active: true,
    },
    {
      title: 'Operative Projektleitung',
      description: 'AG-Brutto-Gehaltskosten (1.750€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 3000,
      order: 7,
      active: true,
    },
    {
      title: 'Marius Krüger',
      description: 'AG-Minijob-Kosten (520€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 650,
      order: 8,
      active: true,
    },
    {
      title: 'Administration',
      description: 'AG-Minijob-Kosten (520€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 650,
      order: 9,
      active: true,
    },
    {
      title: 'UX-Design',
      description: 'AG-Minijob-Kosten (520€ netto)',
      type: 'data' as const,
      value: 0,
      maxValue: 650,
      order: 10,
      active: true,
    },
    {
      title: 'Lohnabrechnung',
      description: 'Lohnabrechnung inkl 19% MwSt.',
      type: 'data' as const,
      value: 0,
      maxValue: 100,
      order: 11,
      active: true,
    },
  ];
  
  for (const item of donationItems) {
    await payload.create({
      collection: 'donation-items',
      data: item,
    });
  }
  
  console.log(`✅ Created ${donationItems.length} Donation Items`);
}
