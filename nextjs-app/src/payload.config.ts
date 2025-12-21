/**
 * Payload CMS Configuration
 * 
 * This is the main configuration file for Payload CMS.
 * Collections and seeding logic are organized in separate modules.
 * 
 * @see src/payload/collections/ - Collection definitions
 * @see src/payload/seed/ - Initial data seeding
 * @see src/payload/access.ts - Access control functions
 */

import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig, type Payload } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Import globals
import { Homepage, Wahlometer } from './payload/globals';

// Import collections
import {
  // Content
  Pages,
  FAQs,
  BlogPosts,
  MediaCoverage,
  RoadmapItems,
  TeamMembers,
  // Beta
  BetaCodes,
  BetaRegistrations,
  // Email
  Contacts,
  EmailLists,
  EmailListMembers,
  EmailTemplates,
  SentEmails,
  // Donation
  DonationItems,
  DonationSettings,
  // System
  AdminUsers,
  Media,
  ActivityLog,
} from './payload/collections';

// Import seeding
import { seedInitialData } from './payload/seed';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'admin-users',
    meta: {
      titleSuffix: '- DEMOCRACY CMS',
    },
    components: {
      beforeDashboard: [],
      afterDashboard: [],
    },
    dateFormat: 'dd.MM.yyyy HH:mm',
  },
  collections: [
    // Content collections
    Pages,
    FAQs,
    BlogPosts,
    MediaCoverage,
    RoadmapItems,
    TeamMembers,
    Media,
    // Beta collections
    BetaCodes,
    BetaRegistrations,
    // Email collections
    Contacts,
    EmailLists,
    EmailListMembers,
    EmailTemplates,
    SentEmails,
    // Donation collections
    DonationItems,
    DonationSettings,
    // System collections
    AdminUsers,
    ActivityLog,
  ],
  globals: [Homepage, Wahlometer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || '',
    },
    push: true, // Auto-create/update schema on dev server start
  }),
  sharp,
  plugins: [],
  // Initialize default data on first start
  onInit: async (payload: Payload) => {
    await seedInitialData(payload);
  },
});
