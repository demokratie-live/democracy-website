import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';
import { sendEmail } from '@/lib/email';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validated = contactFormSchema.parse(body);
    
    // Create contact record
    const contact = await prisma.contact.create({
      data: {
        email: validated.email,
        type: validated.type,
        vorname: validated.vorname || null,
        nachname: validated.nachname || null,
        name: validated.name || null,
        message: validated.message,
        files: validated.files || null,
      },
    });
    
    // Prepare email based on type
    let emailSubject = '';
    let emailTo = process.env.CONTACT_EMAIL || 'kontakt@democracy-deutschland.de';
    
    switch (validated.type) {
      case 'contact':
        emailSubject = 'Neue Kontaktanfrage';
        break;
      case 'bugreport':
        emailSubject = 'Neuer Bug Report';
        emailTo = process.env.BUG_EMAIL || 'bugs@democracy-deutschland.de';
        break;
      case 'volunteer':
        emailSubject = 'Neue Freiwilligen-Anfrage';
        emailTo = process.env.VOLUNTEER_EMAIL || 'mitmachen@democracy-deutschland.de';
        break;
    }
    
    // Send notification email to admin
    const emailText = `
Neue Nachricht über das Kontaktformular:

Typ: ${validated.type}
Email: ${validated.email}
${validated.vorname ? `Vorname: ${validated.vorname}\n` : ''}${validated.nachname ? `Nachname: ${validated.nachname}\n` : ''}${validated.name ? `Name: ${validated.name}\n` : ''}
Nachricht:
${validated.message}
`;

    await sendEmail({
      to: emailTo,
      subject: emailSubject,
      text: emailText,
    });
    
    // Send confirmation email to user
    await sendEmail({
      to: validated.email,
      subject: 'Danke für Ihre Nachricht',
      text: `Hallo,

vielen Dank für Ihre Nachricht an DEMOCRACY Deutschland.

Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.

Mit freundlichen Grüßen
Das DEMOCRACY Team`,
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Nachricht erfolgreich gesendet',
      id: contact.id 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Eingabedaten', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}
