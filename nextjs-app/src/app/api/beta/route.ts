import { NextRequest, NextResponse } from 'next/server';
import { betaRegistrationSchema } from '@/lib/validation';
import { sendEmail } from '@/lib/email';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validated = betaRegistrationSchema.parse(body);
    
    // Validate beta code
    const betaCode = await prisma.betaCode.findUnique({
      where: { code: validated.code },
    });
    
    if (!betaCode) {
      return NextResponse.json(
        { success: false, error: 'Ungültiger Beta-Code' },
        { status: 400 }
      );
    }
    
    if (!betaCode.active) {
      return NextResponse.json(
        { success: false, error: 'Dieser Beta-Code ist nicht mehr aktiv' },
        { status: 400 }
      );
    }
    
    // Check if code has reached max uses
    const currentUses = await prisma.betaRegistration.count({
      where: { betaCodeId: betaCode.id },
    });
    
    if (betaCode.maxUses && currentUses >= betaCode.maxUses) {
      return NextResponse.json(
        { success: false, error: 'Dieser Beta-Code wurde bereits zu oft verwendet' },
        { status: 400 }
      );
    }
    
    // Check if email already used this code
    const existingRegistration = await prisma.betaRegistration.findFirst({
      where: {
        betaCodeId: betaCode.id,
        email: validated.email,
      },
    });
    
    if (existingRegistration) {
      return NextResponse.json(
        { success: false, error: 'Diese E-Mail wurde bereits mit diesem Code registriert' },
        { status: 400 }
      );
    }
    
    // Check if email already exists in contacts
    let contact = await prisma.contact.findUnique({
      where: { email: validated.email },
    });
    
    // Create contact if doesn't exist
    if (!contact) {
      contact = await prisma.contact.create({
        data: {
          email: validated.email,
          type: 'beta',
          message: 'Beta-Registrierung',
        },
      });
    }
    
    // Create beta registration
    await prisma.betaRegistration.create({
      data: {
        betaCodeId: betaCode.id,
        email: validated.email,
        ios: validated.ios,
        android: validated.android,
      },
    });
    
    // Get alpha list
    const alphaList = await prisma.emailList.findFirst({
      where: { name: 'alpha' },
    });
    
    // Add to alpha list if exists
    if (alphaList) {
      const existingMember = await prisma.emailListMember.findFirst({
        where: {
          listId: alphaList.id,
          email: validated.email,
        },
      });
      
      if (!existingMember) {
        await prisma.emailListMember.create({
          data: {
            listId: alphaList.id,
            email: validated.email,
            subscribed: true,
          },
        });
      }
    }
    
    // Add to newsletter if requested
    if (validated.newsletter) {
      const newsletterList = await prisma.emailList.findFirst({
        where: { name: 'newsletter' },
      });
      
      if (newsletterList) {
        const existingMember = await prisma.emailListMember.findFirst({
          where: {
            listId: newsletterList.id,
            email: validated.email,
          },
        });
        
        if (!existingMember) {
          await prisma.emailListMember.create({
            data: {
              listId: newsletterList.id,
              email: validated.email,
              subscribed: true,
            },
          });
        }
      }
    }
    
    // Get registration email template
    const template = await prisma.emailTemplate.findFirst({
      where: { name: 'beta_registration' },
    });
    
    // Send confirmation email
    const platforms = [];
    if (validated.ios) platforms.push('iOS');
    if (validated.android) platforms.push('Android');
    
    await sendEmail({
      to: validated.email,
      subject: template?.subject || 'Beta-Registrierung bestätigt',
      text: template?.body || `Hallo,

vielen Dank für Ihre Anmeldung zur DEMOCRACY Beta!

Ihre Registrierung für folgende Plattformen wurde erfolgreich gespeichert:
${platforms.join(', ')}

Wir werden uns bei Ihnen melden, sobald die Beta-Version verfügbar ist.

${validated.newsletter ? 'Sie haben sich auch für unseren Newsletter angemeldet und erhalten regelmäßig Updates über das Projekt.\n' : ''}
Mit freundlichen Grüßen
Das DEMOCRACY Team`,
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Beta-Registrierung erfolgreich'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Eingabedaten', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Beta registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}
