import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { logActivity, getClientInfo } from '@/lib/activity-log';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/faqs/[id] - Get a single FAQ
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });

    const faq = await payload.findByID({
      collection: 'faqs',
      id,
    });

    if (!faq) {
      return NextResponse.json(
        { success: false, error: 'FAQ nicht gefunden' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: faq,
    });
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden des FAQs' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/faqs/[id] - Update a FAQ
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const faq = await payload.update({
      collection: 'faqs',
      id,
      data: {
        question: body.question,
        answer: body.answer,
        category: body.category,
        order: body.order,
        isActive: body.isActive,
      },
    });

    await logActivity({
      action: 'update',
      entityType: 'FAQ',
      entityId: String(id),
      entityTitle: body.question,
      details: { category: body.category },
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: faq,
    });
  } catch (error) {
    console.error('Error updating FAQ:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren des FAQs' },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/faqs/[id] - Partial update (e.g., toggle status)
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const faq = await payload.update({
      collection: 'faqs',
      id,
      data: body,
    });

    await logActivity({
      action: 'update',
      entityType: 'FAQ',
      entityId: String(id),
      entityTitle: String(faq.question || ''),
      details: body,
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: faq,
    });
  } catch (error) {
    console.error('Error patching FAQ:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren des FAQs' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/faqs/[id] - Delete a FAQ
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const payload = await getPayload({ config: configPromise });
    const { ipAddress, userAgent } = getClientInfo(request);

    // Get FAQ details before deletion for logging
    const existingFaq = await payload.findByID({
      collection: 'faqs',
      id,
    });

    await payload.delete({
      collection: 'faqs',
      id,
    });

    await logActivity({
      action: 'delete',
      entityType: 'FAQ',
      entityId: String(id),
      entityTitle: String(existingFaq?.question || ''),
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      message: 'FAQ erfolgreich gelöscht',
    });
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Löschen des FAQs' },
      { status: 500 }
    );
  }
}
