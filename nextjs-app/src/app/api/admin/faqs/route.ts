import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { logActivity, getClientInfo } from '@/lib/activity-log';

// GET /api/admin/faqs - List all FAQs
export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    const faqs = await payload.find({
      collection: 'faqs',
      sort: 'order',
      limit: 100,
    });

    return NextResponse.json({
      success: true,
      data: faqs.docs,
      totalDocs: faqs.totalDocs,
    });
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der FAQs' },
      { status: 500 }
    );
  }
}

// POST /api/admin/faqs - Create a new FAQ
export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise });
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const faq = await payload.create({
      collection: 'faqs',
      data: {
        question: body.question,
        answer: body.answer,
        category: body.category,
        order: body.order || 0,
        isActive: body.isActive ?? true,
      },
    });

    await logActivity({
      action: 'create',
      entityType: 'FAQ',
      entityId: String(faq.id),
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
    console.error('Error creating FAQ:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Erstellen des FAQs' },
      { status: 500 }
    );
  }
}
