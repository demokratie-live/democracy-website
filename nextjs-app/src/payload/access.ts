/**
 * Reusable access control functions for Payload CMS collections
 */

export const isAdmin = ({ req: { user } }: { req: { user: unknown } }) => {
  const typedUser = user as { role?: string } | null;
  return typedUser?.role === 'admin';
};

export const isAdminOrEditor = ({ req: { user } }: { req: { user: unknown } }) => {
  const typedUser = user as { role?: string } | null;
  return typedUser?.role === 'admin' || typedUser?.role === 'editor';
};
