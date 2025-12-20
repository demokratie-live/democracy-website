import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Get donation settings
    const settings = await prisma.donationSettings.findFirst({
      orderBy: { createdAt: 'desc' },
    });
    
    if (!settings) {
      return NextResponse.json(
        { success: false, error: 'Keine Spenden-Einstellungen gefunden' },
        { status: 404 }
      );
    }
    
    // Get all donation items
    const items = await prisma.donationItem.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    });
    
    // Calculate percentages
    const donationPercentage = settings.goal > 0 
      ? Math.round((settings.currentAmount / settings.goal) * 100)
      : 0;
    
    const patensPercentage = settings.patensGoal > 0
      ? Math.round((settings.currentPatens / settings.patensGoal) * 100)
      : 0;
    
    // Format donation items
    const donationData = items.map(item => {
      const percentage = item.max > 0
        ? Math.round((item.value / item.max) * 100)
        : 0;
      
      return {
        id: item.id,
        order: item.order,
        type: item.type,
        title: item.title,
        description: item.description,
        value: item.value,
        max: item.max,
        percentage: percentage,
      };
    });
    
    return NextResponse.json({ 
      success: true,
      donation_value: settings.currentAmount,
      donation_value_goal: settings.goal,
      donation_percentage: donationPercentage,
      donation_patens: settings.currentPatens,
      donation_patens_goal: settings.patensGoal,
      patens_percentage: patensPercentage,
      donation_data: donationData,
    });
  } catch (error) {
    console.error('Donation status error:', error);
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}

// Enable caching for 5 minutes
export const revalidate = 300;
