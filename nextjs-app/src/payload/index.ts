/**
 * Central export for Payload CMS configuration modules
 */

// Access control
export { isAdmin, isAdminOrEditor } from './access';

// All collections
export * from './collections';

// Seeding
export { seedInitialData } from './seed';
