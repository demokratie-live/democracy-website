import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface RegistrationWithCode {
  id: string;
  email: string;
  ios: boolean;
  android: boolean;
  newsletter: boolean;
  status: string;
  createdAt: Date;
  code: { code: string } | null;
}

/**
 * GET /api/admin/beta/export
 * Export Beta-Registrierungen als CSV
 */
export async function GET(request: NextRequest) {
  try {
    // Get query params for filtering
    const searchParams = request.nextUrl.searchParams;
    const format = searchParams.get('format') || 'csv';
    const platform = searchParams.get('platform'); // ios, android, all
    const newsletter = searchParams.get('newsletter'); // true, false

    // Build where clause
    const where: Record<string, unknown> = {};
    if (platform === 'ios') {
      where.ios = true;
    } else if (platform === 'android') {
      where.android = true;
    }
    if (newsletter === 'true') {
      where.newsletter = true;
    } else if (newsletter === 'false') {
      where.newsletter = false;
    }

    // Fetch registrations
    const registrations = await prisma.betaRegistration.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        code: {
          select: { code: true },
        },
      },
    });

    if (format === 'json') {
      return NextResponse.json({
        success: true,
        count: registrations.length,
        data: registrations,
      });
    }

    // Generate CSV
    const csvHeaders = [
      'ID',
      'E-Mail',
      'iOS',
      'Android',
      'Newsletter',
      'Status',
      'Beta-Code',
      'Registriert am',
    ];

    const csvRows: (string | number)[][] = registrations.map((reg: RegistrationWithCode) => [
      reg.id,
      reg.email,
      reg.ios ? 'Ja' : 'Nein',
      reg.android ? 'Ja' : 'Nein',
      reg.newsletter ? 'Ja' : 'Nein',
      reg.status,
      reg.code?.code || '',
      reg.createdAt.toISOString(),
    ]);

    const csvContent = [
      csvHeaders.join(';'),
      ...csvRows.map((row: (string | number)[]) => row.map((cell: string | number) => `"${cell}"`).join(';')),
    ].join('\n');

    // Add BOM for Excel UTF-8 compatibility
    const bom = '\uFEFF';
    const csvWithBom = bom + csvContent;

    const filename = `beta-registrierungen-${new Date().toISOString().split('T')[0]}.csv`;

    return new NextResponse(csvWithBom, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { success: false, error: 'Export fehlgeschlagen' },
      { status: 500 }
    );
  }
}
