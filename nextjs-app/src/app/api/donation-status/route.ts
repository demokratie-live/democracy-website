import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    // Get donation settings
    const settingsResult = await payload.find({
      collection: 'donation-settings',
      limit: 1,
      sort: '-createdAt',
    });
    
    const settings = settingsResult.docs[0];
    
    if (!settings) {
      return NextResponse.json(
        { success: false, error: 'Keine Spenden-Einstellungen gefunden' },
        { status: 404 }
      );
    }
    
    // Get all donation items
    const itemsResult = await payload.find({
      collection: 'donation-items',
      where: { active: { equals: true } },
      sort: 'order',
      limit: 100,
    });
    
    const items = itemsResult.docs;
    
    // Calculate percentages
    const donationPercentage = settings.goalValue > 0 
      ? Math.round((settings.currentValue / settings.goalValue) * 100)
      : 0;
    
    const patensPercentage = settings.patronsGoal > 0
      ? Math.round((settings.patrons / settings.patronsGoal) * 100)
      : 0;
    
    // Format donation items
    const donationData = items.map(item => {
      const percentage = item.maxValue > 0
        ? Math.round((item.value / item.maxValue) * 100)
        : 0;
      
      return {
        id: item.id,
        order: item.order,
        type: item.type,
        title: item.title,
        description: item.description,
        value: item.value,
        max: item.maxValue,
        percentage: percentage,
      };
    });
    
    return NextResponse.json({ 
      success: true,
      donation_value: settings.currentValue,
      donation_value_goal: settings.goalValue,
      donation_percentage: donationPercentage,
      donation_patens: settings.patrons,
      donation_patens_goal: settings.patronsGoal,
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
