import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logActivity, getClientInfo } from '@/lib/activity-log';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/beta/registrations/[id] - Get a single registration
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const registration = await prisma.betaRegistration.findUnique({
      where: { id },
    });

    if (!registration) {
      return NextResponse.json(
        { success: false, error: 'Registrierung nicht gefunden' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: registration,
    });
  } catch (error) {
    console.error('Error fetching beta registration:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Registrierung' },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/beta/registrations/[id] - Update status
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const registration = await prisma.betaRegistration.update({
      where: { id },
      data: {
        status: body.status,
      },
    });

    await logActivity({
      action: 'update',
      entityType: 'BetaRegistration',
      entityId: id,
      entityTitle: registration.email,
      details: { status: body.status },
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: registration,
    });
  } catch (error) {
    console.error('Error updating beta registration:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren der Registrierung' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/beta/registrations/[id] - Delete a registration
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { ipAddress, userAgent } = getClientInfo(request);

    // Get registration details before deletion for logging
    const existingRegistration = await prisma.betaRegistration.findUnique({
      where: { id },
    });

    await prisma.betaRegistration.delete({
      where: { id },
    });

    await logActivity({
      action: 'delete',
      entityType: 'BetaRegistration',
      entityId: id,
      entityTitle: existingRegistration?.email || '',
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      message: 'Registrierung erfolgreich gelöscht',
    });
  } catch (error) {
    console.error('Error deleting beta registration:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Löschen der Registrierung' },
      { status: 500 }
    );
  }
}
