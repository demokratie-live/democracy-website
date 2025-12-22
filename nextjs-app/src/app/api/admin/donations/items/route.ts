import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logActivity, getClientInfo } from '@/lib/activity-log';

// GET /api/admin/donations/items - List all donation items
export async function GET() {
  try {
    const items = await prisma.donationItem.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json({
      success: true,
      data: items,
    });
  } catch (error) {
    console.error('Error fetching donation items:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Ausgabenkategorien' },
      { status: 500 }
    );
  }
}

// POST /api/admin/donations/items - Create a new donation item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const item = await prisma.donationItem.create({
      data: {
        type: body.type || 'data',
        title: body.title,
        description: body.description,
        value: body.value || 0,
        maxValue: body.maxValue || 0,
        order: body.order || 0,
        active: body.active ?? true,
      },
    });

    await logActivity({
      action: 'create',
      entityType: 'Donation',
      entityId: item.id,
      entityTitle: body.title,
      details: { value: body.value, maxValue: body.maxValue },
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error('Error creating donation item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Erstellen der Ausgabenkategorie' },
      { status: 500 }
    );
  }
}
