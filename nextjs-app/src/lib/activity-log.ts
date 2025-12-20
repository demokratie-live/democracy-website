import { prisma } from '@/lib/prisma';

type ActivityAction = 'create' | 'update' | 'delete' | 'login' | 'logout';
type EntityType = 'FAQ' | 'Media' | 'Roadmap' | 'Donation' | 'BetaCode' | 'BetaRegistration' | 'User' | 'DonationSettings';

interface LogActivityParams {
  action: ActivityAction;
  entityType: EntityType;
  entityId: string;
  entityTitle?: string;
  details?: Record<string, unknown>;
  userId?: string;
  ipAddress?: string;
  userAgent?: string;
}

/**
 * Log an activity to the activity log
 */
export async function logActivity({
  action,
  entityType,
  entityId,
  entityTitle,
  details,
  userId,
  ipAddress,
  userAgent,
}: LogActivityParams) {
  try {
    await prisma.activityLog.create({
      data: {
        action,
        entityType,
        entityId,
        entityTitle: entityTitle || null,
        details: details ? JSON.stringify(details) : null,
        userId: userId || null,
        ipAddress: ipAddress || null,
        userAgent: userAgent || null,
      },
    });
  } catch (error) {
    // Don't throw - activity logging should not break the main operation
    console.error('Failed to log activity:', error);
  }
}

/**
 * Extract client info from request headers
 */
export function getClientInfo(request: Request) {
  const ipAddress =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';
  const userAgent = request.headers.get('user-agent') || undefined;

  return { ipAddress, userAgent };
}
