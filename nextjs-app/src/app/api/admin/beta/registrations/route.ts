import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logActivity, getClientInfo } from '@/lib/activity-log';

// GET /api/admin/beta/registrations - List all beta registrations
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const status = searchParams.get('status');

    const where = status ? { status } : {};

    const [registrations, total] = await Promise.all([
      prisma.betaRegistration.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.betaRegistration.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: registrations,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching beta registrations:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Beta-Registrierungen' },
      { status: 500 }
    );
  }
}

// GET statistics for beta registrations
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // If action is 'stats', return statistics
    if (body.action === 'stats') {
      const [total, pending, approved, rejected, last30Days] = await Promise.all([
        prisma.betaRegistration.count(),
        prisma.betaRegistration.count({ where: { status: 'pending' } }),
        prisma.betaRegistration.count({ where: { status: 'approved' } }),
        prisma.betaRegistration.count({ where: { status: 'rejected' } }),
        prisma.betaRegistration.count({
          where: {
            createdAt: {
              gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
            },
          },
        }),
      ]);

      return NextResponse.json({
        success: true,
        data: {
          total,
          pending,
          approved,
          rejected,
          last30Days,
        },
      });
    }

    // If action is 'export', return CSV data
    if (body.action === 'export') {
      const registrations = await prisma.betaRegistration.findMany({
        orderBy: { createdAt: 'desc' },
      });

      const { ipAddress, userAgent } = getClientInfo(request);
      await logActivity({
        action: 'update',
        entityType: 'BetaRegistration',
        entityId: 'export',
        entityTitle: 'Export Beta-Registrierungen',
        details: { count: registrations.length },
        ipAddress,
        userAgent,
      });

      return NextResponse.json({
        success: true,
        data: registrations,
      });
    }

    return NextResponse.json(
      { success: false, error: 'Ungültige Aktion' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing beta registrations:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    );
  }
}
