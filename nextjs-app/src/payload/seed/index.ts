/**
 * Initial data seeding for Payload CMS
 */

import type { Payload } from 'payload';
import { seedAdminUser } from './admin';
import { seedFAQs } from './faqs';
import { seedEmailLists, seedEmailTemplates } from './email';
import { seedDonationSettings, seedDonationItems } from './donation';
import { seedHomepage } from './homepage';

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
}
