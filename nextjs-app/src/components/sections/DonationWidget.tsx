'use client';

import * as React from 'react';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface DonationProgress {
  currentAmount: number;
  goalAmount: number;
  currentPatrons: number;
  goalPatrons: number;
  items: Array<{
    id: string;
    title: string;
    amount: number;
    percentage: number;
  }>;
}

export function DonationWidget() {
  const [data, setData] = React.useState<DonationProgress | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/api/donation-status')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Spendenstand</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const donationPercentage = (data.currentAmount / data.goalAmount) * 100;
  const patronsPercentage = (data.currentPatrons / data.goalPatrons) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spendenstand</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall donation progress */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {formatCurrency(data.currentAmount)} von {formatCurrency(data.goalAmount)}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {formatPercentage(donationPercentage)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(donationPercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Patrons progress */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {data.currentPatrons} von {data.goalPatrons} Unterstützer*innen
            </span>
            <span className="text-sm font-medium text-gray-700">
              {formatPercentage(patronsPercentage)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(patronsPercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Individual items */}
        {data.items.length > 0 && (
          <div className="space-y-4 pt-4 border-t">
            <h4 className="text-sm font-semibold text-gray-900">
              Verwendung der Spenden
            </h4>
            {data.items.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">{item.title}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(item.amount)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${Math.min(item.percentage, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
