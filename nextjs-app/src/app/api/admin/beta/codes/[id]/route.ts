import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logActivity, getClientInfo } from '@/lib/activity-log';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/beta/codes/[id] - Get a single beta code
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const code = await prisma.betaCode.findUnique({
      where: { id },
    });

    if (!code) {
      return NextResponse.json(
        { success: false, error: 'Beta-Code nicht gefunden' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: code,
    });
  } catch (error) {
    console.error('Error fetching beta code:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden des Beta-Codes' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/beta/codes/[id] - Update a beta code
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const code = await prisma.betaCode.update({
      where: { id },
      data: {
        code: body.code,
        maxUses: body.maxUses,
        active: body.active,
      },
    });

    await logActivity({
      action: 'update',
      entityType: 'BetaCode',
      entityId: id,
      entityTitle: code.code,
      details: { maxUses: body.maxUses, active: body.active },
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: code,
    });
  } catch (error) {
    console.error('Error updating beta code:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren des Beta-Codes' },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/beta/codes/[id] - Partial update (e.g., toggle active status)
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const code = await prisma.betaCode.update({
      where: { id },
      data: body,
    });

    await logActivity({
      action: 'update',
      entityType: 'BetaCode',
      entityId: id,
      entityTitle: code.code,
      details: body,
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: code,
    });
  } catch (error) {
    console.error('Error patching beta code:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren des Beta-Codes' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/beta/codes/[id] - Delete a beta code
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { ipAddress, userAgent } = getClientInfo(request);

    // Get code details before deletion for logging
    const existingCode = await prisma.betaCode.findUnique({
      where: { id },
    });

    await prisma.betaCode.delete({
      where: { id },
    });

    await logActivity({
      action: 'delete',
      entityType: 'BetaCode',
      entityId: id,
      entityTitle: existingCode?.code || '',
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      message: 'Beta-Code erfolgreich gelöscht',
    });
  } catch (error) {
    console.error('Error deleting beta code:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Löschen des Beta-Codes' },
      { status: 500 }
    );
  }
}
