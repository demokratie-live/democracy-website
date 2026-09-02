import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logActivity, getClientInfo } from '@/lib/activity-log';
import { randomBytes } from 'crypto';

// Generate a random beta code
function generateBetaCode(): string {
  return randomBytes(4).toString('hex').toUpperCase();
}

// GET /api/admin/beta/codes - List all beta codes
export async function GET() {
  try {
    const codes = await prisma.betaCode.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      success: true,
      data: codes,
    });
  } catch (error) {
    console.error('Error fetching beta codes:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Beta-Codes' },
      { status: 500 }
    );
  }
}

// POST /api/admin/beta/codes - Create a new beta code
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ipAddress, userAgent } = getClientInfo(request);

    const code = body.code || generateBetaCode();

    const betaCode = await prisma.betaCode.create({
      data: {
        code,
        maxUses: body.maxUses || 1,
        uses: 0,
        active: body.active ?? true,
      },
    });

    await logActivity({
      action: 'create',
      entityType: 'BetaCode',
      entityId: betaCode.id,
      entityTitle: code,
      details: { maxUses: body.maxUses },
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: betaCode,
    });
  } catch (error) {
    console.error('Error creating beta code:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Erstellen des Beta-Codes' },
      { status: 500 }
    );
  }
}
