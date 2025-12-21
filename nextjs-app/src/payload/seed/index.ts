/**
 * Initial data seeding for Payload CMS
 */

import type { Payload } from 'payload';
import { seedAdminUser } from './admin';
import { seedFAQs } from './faqs';
import { seedEmailLists, seedEmailTemplates } from './email';
import { seedDonationSettings, seedDonationItems } from './donation';
import { seedHomepage } from './homepage';
import { seedWahlometer } from './wahlometer';
import { seedAbout } from './about';
import { seedBuerger } from './buerger';

/**
 * Seeds all initial data on first start
 */
export async function seedInitialData(payload: Payload) {
  // Seed default admin user for local development
  await seedAdminUser(payload);
  
  // Seed FAQs if none exist
  await seedFAQs(payload);
  
  // Seed Email Lists if none exist
  await seedEmailLists(payload);
  
  // Seed Email Templates if none exist
  await seedEmailTemplates(payload);
  
  // Seed Donation Settings if none exist
  await seedDonationSettings(payload);
  
  // Seed Donation Items if none exist
  await seedDonationItems(payload);
  
  // Seed Homepage configuration if not exists
  await seedHomepage(payload);
  
  // Seed Wahlometer configuration if not exists
  await seedWahlometer(payload);
  
  // Seed About configuration if not exists
  await seedAbout(payload);
  
  // Seed Bürger configuration if not exists
  await seedBuerger(payload);
}
