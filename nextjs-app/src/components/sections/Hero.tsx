import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  imageSrc?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
}: HeroProps) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          {subtitle && (
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-blue-600">{subtitle}</span>
              </div>
            </div>
          )}
          
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
          )}
          
          <div className="mt-10 flex items-center gap-x-6">
            {primaryCta && (
              <Button asChild size="lg">
                <Link href={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </div>
        
        {imageSrc && (
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <img
                src={imageSrc}
                alt={title}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
