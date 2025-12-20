'use client';

import * as React from 'react';

interface FeatureIconBoxProps {
  icon: string;
  iconAlt?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function FeatureIconBox({
  icon,
  iconAlt = 'Feature Icon',
  title,
  children,
  className = '',
}: FeatureIconBoxProps) {
  return (
    <div className={`flex-1 ${className}`}>
      <div className="pt-16">
        <div className="relative">
          <div className="w-[118px] h-[116px] rounded bg-[#efeff4] mb-2"></div>
          <img
            src={icon.replace('.svg', '.svg')}
            alt={iconAlt}
            onError={(e) => {
              // Fallback to PNG if SVG fails
              if (icon.endsWith('.svg')) {
                e.currentTarget.src = icon.replace('.svg', '.png');
              }
            }}
            className="w-[76px] h-[76px] object-contain absolute top-[-20px] left-[80px] z-10"
          />
        </div>
        <p className="text-2xl font-bold mt-4" style={{ fontFamily: 'helvetica, sans-serif' }}>
          {title}
        </p>
      </div>
      <div className="mt-4 text-xl leading-normal w-[85%]">
        {children}
      </div>
    </div>
  );
}
