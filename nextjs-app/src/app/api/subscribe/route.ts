import { NextRequest, NextResponse } from 'next/server';
import { subscribeSchema } from '@/lib/validation';
import { sendEmail } from '@/lib/email';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validated = subscribeSchema.parse(body);
    
    const payload = await getPayload({ config: configPromise });
    
    // Check if contact exists
    const existingContact = await payload.find({
      collection: 'contacts',
      where: { email: { equals: validated.email } },
      limit: 1,
    });
    
    // Create contact if doesn't exist
    if (existingContact.totalDocs === 0) {
      await payload.create({
        collection: 'contacts',
        data: {
          email: validated.email,
          type: 'newsletter',
          message: 'Newsletter-Anmeldung',
        },
      });
    }
    
    // Get newsletter list
    const newsletterList = await payload.find({
      collection: 'email-lists',
      where: { name: { equals: 'newsletter' } },
      limit: 1,
    });
    
    if (newsletterList.totalDocs === 0) {
      throw new Error('Newsletter list not found');
    }
    
    const listId = newsletterList.docs[0].id;
    
    // Check if already subscribed
    const existingMember = await payload.find({
      collection: 'email-list-members',
      where: {
        and: [
          { list: { equals: listId } },
          { email: { equals: validated.email } },
        ],
      },
      limit: 1,
    });
    
    if (existingMember.totalDocs > 0) {
      // Check if currently subscribed
      if (existingMember.docs[0].subscribed) {
        return NextResponse.json({
          success: true,
          message: 'Diese E-Mail ist bereits für den Newsletter registriert',
        });
      }
      
      // Re-subscribe
      await payload.update({
        collection: 'email-list-members',
        id: existingMember.docs[0].id,
        data: {
          subscribed: true,
        },
      });
    } else {
      // Add to newsletter list
      await payload.create({
        collection: 'email-list-members',
        data: {
          list: listId,
          email: validated.email,
          subscribed: true,
        },
      });
    }
    
    // Get confirmation email template
    const template = await payload.find({
      collection: 'email-templates',
      where: { name: { equals: 'newsletter_confirmation' } },
      limit: 1,
    });
    
    // Send confirmation email
    await sendEmail({
      to: validated.email,
      subject: template.docs[0]?.subject || 'Newsletter-Anmeldung bestätigt',
      text: template.docs[0]?.body || `Hallo,

vielen Dank für Ihre Anmeldung zum DEMOCRACY Newsletter!

Sie erhalten ab sofort regelmäßig Updates über die App und das Projekt.

Falls Sie sich wieder abmelden möchten, können Sie dies jederzeit über den Link am Ende jeder E-Mail tun.

Mit freundlichen Grüßen
Das DEMOCRACY Team`,
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Newsletter-Anmeldung erfolgreich'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Ungültige E-Mail-Adresse', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}
