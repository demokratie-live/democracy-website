import { NextRequest, NextResponse } from 'next/server';
import { betaRegistrationSchema } from '@/lib/validation';
import { sendEmail } from '@/lib/email';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validated = betaRegistrationSchema.parse(body);
    
    const payload = await getPayload({ config: configPromise });
    
    // Validate beta code
    const betaCodeResult = await payload.find({
      collection: 'beta-codes',
      where: { code: { equals: validated.code } },
      limit: 1,
    });
    
    const betaCode = betaCodeResult.docs[0];
    
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
    if (betaCode.maxUses && (betaCode.usedCount || 0) >= betaCode.maxUses) {
      return NextResponse.json(
        { success: false, error: 'Dieser Beta-Code wurde bereits zu oft verwendet' },
        { status: 400 }
      );
    }
    
    // Check if email already used this code
    const existingRegistration = await payload.find({
      collection: 'beta-registrations',
      where: {
        and: [
          { betaCode: { equals: betaCode.id } },
          { email: { equals: validated.email } },
        ],
      },
      limit: 1,
    });
    
    if (existingRegistration.totalDocs > 0) {
      return NextResponse.json(
        { success: false, error: 'Diese E-Mail wurde bereits mit diesem Code registriert' },
        { status: 400 }
      );
    }
    
    // Check if contact exists, create if not
    const existingContact = await payload.find({
      collection: 'contacts',
      where: { email: { equals: validated.email } },
      limit: 1,
    });
    
    if (existingContact.totalDocs === 0) {
      await payload.create({
        collection: 'contacts',
        data: {
          email: validated.email,
          type: 'beta',
          message: 'Beta-Registrierung',
        },
      });
    }
    
    // Create beta registration
    await payload.create({
      collection: 'beta-registrations',
      data: {
        betaCode: betaCode.id,
        email: validated.email,
        ios: validated.ios,
        android: validated.android,
        newsletter: validated.newsletter,
      },
    });
    
    // Update beta code usage count
    await payload.update({
      collection: 'beta-codes',
      id: betaCode.id,
      data: {
        usedCount: (betaCode.usedCount || 0) + 1,
      },
    });
    
    // Get alpha list and add member
    const alphaList = await payload.find({
      collection: 'email-lists',
      where: { name: { equals: 'alpha' } },
      limit: 1,
    });
    
    if (alphaList.docs[0]) {
      const existingMember = await payload.find({
        collection: 'email-list-members',
        where: {
          and: [
            { list: { equals: alphaList.docs[0].id } },
            { email: { equals: validated.email } },
          ],
        },
        limit: 1,
      });
      
      if (existingMember.totalDocs === 0) {
        await payload.create({
          collection: 'email-list-members',
          data: {
            list: alphaList.docs[0].id,
            email: validated.email,
            subscribed: true,
          },
        });
      }
    }
    
    // Add to newsletter if requested
    if (validated.newsletter) {
      const newsletterList = await payload.find({
        collection: 'email-lists',
        where: { name: { equals: 'newsletter' } },
        limit: 1,
      });
      
      if (newsletterList.docs[0]) {
        const existingMember = await payload.find({
          collection: 'email-list-members',
          where: {
            and: [
              { list: { equals: newsletterList.docs[0].id } },
              { email: { equals: validated.email } },
            ],
          },
          limit: 1,
        });
        
        if (existingMember.totalDocs === 0) {
          await payload.create({
            collection: 'email-list-members',
            data: {
              list: newsletterList.docs[0].id,
              email: validated.email,
              subscribed: true,
            },
          });
        }
      }
    }
    
    // Get registration email template
    const template = await payload.find({
      collection: 'email-templates',
      where: { name: { equals: 'beta_registration' } },
      limit: 1,
    });
    
    // Send confirmation email
    const platforms = [];
    if (validated.ios) platforms.push('iOS');
    if (validated.android) platforms.push('Android');
    
    await sendEmail({
      to: validated.email,
      subject: template.docs[0]?.subject || 'Beta-Registrierung bestätigt',
      text: template.docs[0]?.body || `Hallo,

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
