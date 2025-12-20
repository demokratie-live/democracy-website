import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
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
    
    if (validated.list) {
      // Unsubscribe from specific list
      const list = await prisma.emailList.findFirst({
        where: { name: validated.list },
      });
      
      if (!list) {
        return NextResponse.json(
          { success: false, error: 'Liste nicht gefunden' },
          { status: 404 }
        );
      }
      
      await prisma.emailListMember.updateMany({
        where: {
          listId: list.id,
          email: validated.email,
        },
        data: {
          subscribed: false,
        },
      });
      
      return NextResponse.json({ 
        success: true, 
        message: `Sie wurden erfolgreich von der Liste "${list.name}" abgemeldet`
      });
    } else {
      // Unsubscribe from all lists
      await prisma.emailListMember.updateMany({
        where: {
          email: validated.email,
        },
        data: {
          subscribed: false,
        },
      });
      
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
    
    if (validated.list) {
      // Unsubscribe from specific list
      const emailList = await prisma.emailList.findFirst({
        where: { name: validated.list },
      });
      
      if (!emailList) {
        return new NextResponse('Liste nicht gefunden', { status: 404 });
      }
      
      await prisma.emailListMember.updateMany({
        where: {
          listId: emailList.id,
          email: validated.email,
        },
        data: {
          subscribed: false,
        },
      });
      
      return new NextResponse(
        `Sie wurden erfolgreich von der Liste "${emailList.name}" abgemeldet.`,
        { 
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        }
      );
    } else {
      // Unsubscribe from all lists
      await prisma.emailListMember.updateMany({
        where: {
          email: validated.email,
        },
        data: {
          subscribed: false,
        },
      });
      
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
