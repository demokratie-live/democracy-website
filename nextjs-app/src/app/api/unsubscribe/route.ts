import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { z } from 'zod';

const unsubscribeSchema = z.object({
  email: z.string().email(),
  list: z.string().optional(), // Optional list name, defaults to all lists
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validated = unsubscribeSchema.parse(body);
    
    const payload = await getPayload({ config: configPromise });
    
    if (validated.list) {
      // Unsubscribe from specific list
      const list = await payload.find({
        collection: 'email-lists',
        where: { name: { equals: validated.list } },
        limit: 1,
      });
      
      if (list.totalDocs === 0) {
        return NextResponse.json(
          { success: false, error: 'Liste nicht gefunden' },
          { status: 404 }
        );
      }
      
      // Find and update member
      const member = await payload.find({
        collection: 'email-list-members',
        where: {
          and: [
            { list: { equals: list.docs[0].id } },
            { email: { equals: validated.email } },
          ],
        },
        limit: 1,
      });
      
      if (member.docs[0]) {
        await payload.update({
          collection: 'email-list-members',
          id: member.docs[0].id,
          data: {
            subscribed: false,
          },
        });
      }
      
      return NextResponse.json({ 
        success: true, 
        message: `Sie wurden erfolgreich von der Liste "${list.docs[0].name}" abgemeldet`
      });
    } else {
      // Unsubscribe from all lists
      const members = await payload.find({
        collection: 'email-list-members',
        where: { email: { equals: validated.email } },
        limit: 100,
      });
      
      for (const member of members.docs) {
        await payload.update({
          collection: 'email-list-members',
          id: member.id,
          data: {
            subscribed: false,
          },
        });
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Sie wurden erfolgreich von allen Listen abgemeldet'
      });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Ungültige E-Mail-Adresse', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}

// Also support GET with email parameter for one-click unsubscribe links
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get('email');
    const list = searchParams.get('list');
    
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'E-Mail-Adresse fehlt' },
        { status: 400 }
      );
    }
    
    // Validate email
    const validated = unsubscribeSchema.parse({ email, list: list || undefined });
    
    const payload = await getPayload({ config: configPromise });
    
    if (validated.list) {
      // Unsubscribe from specific list
      const emailList = await payload.find({
        collection: 'email-lists',
        where: { name: { equals: validated.list } },
        limit: 1,
      });
      
      if (emailList.totalDocs === 0) {
        return new NextResponse('Liste nicht gefunden', { status: 404 });
      }
      
      const member = await payload.find({
        collection: 'email-list-members',
        where: {
          and: [
            { list: { equals: emailList.docs[0].id } },
            { email: { equals: validated.email } },
          ],
        },
        limit: 1,
      });
      
      if (member.docs[0]) {
        await payload.update({
          collection: 'email-list-members',
          id: member.docs[0].id,
          data: {
            subscribed: false,
          },
        });
      }
      
      return new NextResponse(
        `Sie wurden erfolgreich von der Liste "${emailList.docs[0].name}" abgemeldet.`,
        { 
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        }
      );
    } else {
      // Unsubscribe from all lists
      const members = await payload.find({
        collection: 'email-list-members',
        where: { email: { equals: validated.email } },
        limit: 100,
      });
      
      for (const member of members.docs) {
        await payload.update({
          collection: 'email-list-members',
          id: member.id,
          data: {
            subscribed: false,
          },
        });
      }
      
      return new NextResponse(
        'Sie wurden erfolgreich von allen Listen abgemeldet.',
        { 
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        }
      );
    }
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return new NextResponse('Ein Fehler ist aufgetreten', { status: 500 });
  }
}
