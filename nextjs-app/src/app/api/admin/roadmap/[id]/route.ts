import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { logActivity, getClientInfo } from '@/lib/activity-log';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/roadmap/[id] - Get a single roadmap item
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });

    const item = await payload.findByID({
      collection: 'roadmap',
      id,
    });

    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Roadmap-Eintrag nicht gefunden' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error('Error fetching roadmap item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden des Roadmap-Eintrags' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/roadmap/[id] - Update a roadmap item
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const item = await payload.update({
      collection: 'roadmap',
      id,
      data: {
        title: body.title,
        description: body.description,
        status: body.status,
        category: body.category,
        order: body.order,
        targetDate: body.targetDate,
      },
    });

    await logActivity({
      action: 'update',
      entityType: 'Roadmap',
      entityId: String(id),
      entityTitle: body.title,
      details: { status: body.status, category: body.category },
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error('Error updating roadmap item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren des Roadmap-Eintrags' },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/roadmap/[id] - Partial update (e.g., status change)
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const item = await payload.update({
      collection: 'roadmap',
      id,
      data: body,
    });

    await logActivity({
      action: 'update',
      entityType: 'Roadmap',
      entityId: String(id),
      entityTitle: String(item.title || ''),
      details: body,
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error('Error patching roadmap item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren des Roadmap-Eintrags' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/roadmap/[id] - Delete a roadmap item
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });
    const { ipAddress, userAgent } = getClientInfo(request);

    // Get item details before deletion for logging
    const existingItem = await payload.findByID({
      collection: 'roadmap',
      id,
    });

    await payload.delete({
      collection: 'roadmap',
      id,
    });

    await logActivity({
      action: 'delete',
      entityType: 'Roadmap',
      entityId: String(id),
      entityTitle: String(existingItem?.title || ''),
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      message: 'Roadmap-Eintrag erfolgreich gelöscht',
    });
  } catch (error) {
    console.error('Error deleting roadmap item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Löschen des Roadmap-Eintrags' },
      { status: 500 }
    );
  }
}
