/**
 * Admin user seeding
 */

import type { Payload } from 'payload';

export async function seedAdminUser(payload: Payload) {
  // Only seed admin user in development mode
  if (process.env.NODE_ENV === 'production' && !process.env.SEED_ADMIN_USER) {
    return;
  }
  
  const existingUsers = await payload.find({
    collection: 'admin-users',
    limit: 1,
  });
  
  if (existingUsers.totalDocs > 0) return;
  
  console.log('🌱 Seeding default admin user...');
  
  // Get credentials from environment variables or use defaults for local development
  const email = process.env.ADMIN_EMAIL || 'admin@democracy-deutschland.de';
  const password = process.env.ADMIN_PASSWORD || 'admin123';
  const name = process.env.ADMIN_NAME || 'Admin';
  
  await payload.create({
    collection: 'admin-users',
    data: {
      email,
      password,
      name,
      role: 'admin',
    },
  });
  
  console.log(`✅ Created admin user: ${email}`);
  console.log(`   Password: ${password}`);
  console.log('   ⚠️  Change this password in production!');
}
