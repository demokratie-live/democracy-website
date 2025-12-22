import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { logActivity, getClientInfo } from '@/lib/activity-log';

// GET /api/admin/roadmap - List all roadmap items
export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    const items = await payload.find({
      collection: 'roadmap',
      sort: 'order',
      limit: 100,
    });

    return NextResponse.json({
      success: true,
      data: items.docs,
      totalDocs: items.totalDocs,
    });
  } catch (error) {
    console.error('Error fetching roadmap:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Roadmap' },
      { status: 500 }
    );
  }
}

// POST /api/admin/roadmap - Create a new roadmap item
export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const item = await payload.create({
      collection: 'roadmap',
      data: {
        title: body.title,
        description: body.description,
        status: body.status || 'planned',
        category: body.category,
        order: body.order || 0,
        targetDate: body.targetDate,
      },
    });

    await logActivity({
      action: 'create',
      entityType: 'Roadmap',
      entityId: String(item.id),
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
    console.error('Error creating roadmap item:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Erstellen des Roadmap-Eintrags' },
      { status: 500 }
    );
  }
}
