import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { logActivity, getClientInfo } from '@/lib/activity-log';

// GET /api/admin/media - List all media entries
export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    const media = await payload.find({
      collection: 'press-articles',
      sort: '-publishDate',
      limit: 100,
    });

    return NextResponse.json({
      success: true,
      data: media.docs,
      totalDocs: media.totalDocs,
    });
  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Presseartikel' },
      { status: 500 }
    );
  }
}

// POST /api/admin/media - Create a new media entry
export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const article = await payload.create({
      collection: 'press-articles',
      data: {
        title: body.title,
        outlet: body.outlet,
        publishDate: body.publishDate,
        url: body.url,
        excerpt: body.excerpt,
        type: body.type,
        featured: body.featured ?? false,
      },
    });

    await logActivity({
      action: 'create',
      entityType: 'Media',
      entityId: String(article.id),
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
    console.error('Error creating media:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Erstellen des Presseartikels' },
      { status: 500 }
    );
  }
}
