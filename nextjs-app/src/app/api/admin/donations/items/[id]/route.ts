import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logActivity, getClientInfo } from '@/lib/activity-log';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/donations/items/[id] - Get a single donation item
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const item = await prisma.donationItem.findUnique({
      where: { id },
    });

    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Ausgabenkategorie nicht gefunden' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error('Error fetching donation item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Ausgabenkategorie' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/donations/items/[id] - Update a donation item
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const item = await prisma.donationItem.update({
      where: { id },
      data: {
        type: body.type,
        title: body.title,
        description: body.description,
        value: body.value,
        maxValue: body.maxValue,
        order: body.order,
        active: body.active,
      },
    });

    await logActivity({
      action: 'update',
      entityType: 'Donation',
      entityId: id,
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
    console.error('Error updating donation item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren der Ausgabenkategorie' },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/donations/items/[id] - Partial update
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const item = await prisma.donationItem.update({
      where: { id },
      data: body,
    });

    await logActivity({
      action: 'update',
      entityType: 'Donation',
      entityId: id,
      entityTitle: item.title,
      details: body,
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error('Error patching donation item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren der Ausgabenkategorie' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/donations/items/[id] - Delete a donation item
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { ipAddress, userAgent } = getClientInfo(request);

    // Get item details before deletion for logging
    const existingItem = await prisma.donationItem.findUnique({
      where: { id },
    });

    await prisma.donationItem.delete({
      where: { id },
    });

    await logActivity({
      action: 'delete',
      entityType: 'Donation',
      entityId: id,
      entityTitle: existingItem?.title || '',
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      message: 'Ausgabenkategorie erfolgreich gelöscht',
    });
  } catch (error) {
    console.error('Error deleting donation item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Löschen der Ausgabenkategorie' },
      { status: 500 }
    );
  }
}
