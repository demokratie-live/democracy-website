'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface BreadcrumbItem {
  label: string;
  href?: string;
}

const routeLabels: Record<string, string> = {
  'admin': 'Admin',
  'dashboard': 'Dashboard',
  'faqs': 'FAQs',
  'media': 'Medien & Presse',
  'roadmap': 'Roadmap',
  'donations': 'Spenden',
  'beta': 'Beta-Programm',
  'registrations': 'Registrierungen',
  'codes': 'Beta-Codes',
  'activity': 'Aktivitätsprotokoll',
  'profile': 'Profil',
  'settings': 'Einstellungen',
  'new': 'Neu',
  'edit': 'Bearbeiten',
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    
    // Don't make the last segment a link
    const isLast = index === segments.length - 1;
    
    return {
      label,
      href: isLast ? undefined : href,
    };
  });

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-1 text-sm mb-4">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-white font-medium">
              {crumb.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <Breadcrumbs />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </div>
  );
}

export default Breadcrumbs;
