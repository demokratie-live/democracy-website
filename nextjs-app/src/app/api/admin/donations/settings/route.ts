import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logActivity, getClientInfo } from '@/lib/activity-log';

// GET /api/admin/donations/settings - Get donation settings
export async function GET() {
  try {
    const settings = await prisma.donationSettings.findFirst();
    const items = await prisma.donationItem.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({
      success: true,
      data: {
        ...settings,
        items,
      },
    });
  } catch (error) {
    console.error('Error fetching donation settings:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Spendeneinstellungen' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/donations/settings - Update donation settings
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    // Check if settings exist
    const existingSettings = await prisma.donationSettings.findFirst();

    let settings;
    if (existingSettings) {
      settings = await prisma.donationSettings.update({
        where: { id: existingSettings.id },
        data: {
          currentValue: body.currentValue,
          goalValue: body.goalValue,
          patrons: body.patrons,
          patronsGoal: body.patronsGoal,
        },
      });
    } else {
      settings = await prisma.donationSettings.create({
        data: {
          currentValue: body.currentValue || 0,
          goalValue: body.goalValue || 0,
          patrons: body.patrons || 0,
          patronsGoal: body.patronsGoal || 0,
        },
      });
    }

    await logActivity({
      action: existingSettings ? 'update' : 'create',
      entityType: 'DonationSettings',
      entityId: settings.id,
      entityTitle: 'Spendeneinstellungen',
      details: {
        goalValue: body.goalValue,
        currentValue: body.currentValue,
      },
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error('Error updating donation settings:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren der Spendeneinstellungen' },
      { status: 500 }
    );
  }
}

// POST /api/admin/donations/settings - Create or update settings (alias for PUT)
export async function POST(request: NextRequest) {
  return PUT(request);
}
