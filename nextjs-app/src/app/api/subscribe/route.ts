import { NextRequest, NextResponse } from 'next/server';
import { subscribeSchema } from '@/lib/validation';
import { sendEmail } from '@/lib/email';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validated = subscribeSchema.parse(body);
    
    // Check if email already exists in contacts
    let contact = await prisma.contact.findUnique({
      where: { email: validated.email },
    });
    
    // Create contact if doesn't exist
    if (!contact) {
      contact = await prisma.contact.create({
        data: {
          email: validated.email,
          type: 'newsletter',
          message: 'Newsletter-Anmeldung',
        },
      });
    }
    
    // Get newsletter list
    const newsletterList = await prisma.emailList.findFirst({
      where: { name: 'newsletter' },
    });
    
    if (!newsletterList) {
      throw new Error('Newsletter list not found');
    }
    
    // Check if already subscribed
    const existingMember = await prisma.emailListMember.findFirst({
      where: {
        listId: newsletterList.id,
        email: validated.email,
      },
    });
    
    if (existingMember) {
      return NextResponse.json({
        success: true,
        message: 'Diese E-Mail ist bereits für den Newsletter registriert',
      });
    }
    
    // Add to newsletter list
    await prisma.emailListMember.create({
      data: {
        listId: newsletterList.id,
        email: validated.email,
        subscribed: true,
      },
    });
    
    // Get confirmation email template
    const template = await prisma.emailTemplate.findFirst({
      where: { name: 'newsletter_confirmation' },
    });
    
    // Send confirmation email
    await sendEmail({
      to: validated.email,
      subject: template?.subject || 'Newsletter-Anmeldung bestätigt',
      text: template?.body || `Hallo,

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
