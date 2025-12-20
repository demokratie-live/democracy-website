import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { logActivity, getClientInfo } from '@/lib/activity-log';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/media/[id] - Get a single media entry
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });

    const article = await payload.findByID({
      collection: 'press-articles',
      id,
    });

    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Presseartikel nicht gefunden' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: article,
    });
  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden des Presseartikels' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/media/[id] - Update a media entry
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const article = await payload.update({
      collection: 'press-articles',
      id,
      data: {
        title: body.title,
        outlet: body.outlet,
        publishDate: body.publishDate,
        url: body.url,
        excerpt: body.excerpt,
        type: body.type,
        featured: body.featured,
      },
    });

    await logActivity({
      action: 'update',
      entityType: 'Media',
      entityId: String(id),
      entityTitle: body.title,
      details: { outlet: body.outlet, type: body.type },
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: article,
    });
  } catch (error) {
    console.error('Error updating media:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren des Presseartikels' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/media/[id] - Delete a media entry
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });
    const { ipAddress, userAgent } = getClientInfo(request);

    // Get article details before deletion for logging
    const existingArticle = await payload.findByID({
      collection: 'press-articles',
      id,
    });

    await payload.delete({
      collection: 'press-articles',
      id,
    });

    await logActivity({
      action: 'delete',
      entityType: 'Media',
      entityId: String(id),
      entityTitle: String(existingArticle?.title || ''),
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      message: 'Presseartikel erfolgreich gelöscht',
    });
  } catch (error) {
    console.error('Error deleting media:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Löschen des Presseartikels' },
      { status: 500 }
    );
  }
}
