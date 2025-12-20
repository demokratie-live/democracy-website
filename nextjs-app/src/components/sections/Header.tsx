'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-gray-200 py-6 lg:border-none">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="sr-only">DEMOCRACY Deutschland</span>
              <img
                className="h-10 w-auto"
                src="/logo.png"
                alt="DEMOCRACY"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link
              href="/wahlometer"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Wahlometer
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Über uns
            </Link>
            <Link
              href="/faq"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Blog
            </Link>
            <Link
              href="/press"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Presse
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Kontakt
            </Link>
            <Button asChild>
              <Link href="/donate">Spenden</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/wahlometer"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Wahlometer
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Über uns
              </Link>
              <Link
                href="/faq"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/press"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Presse
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Kontakt
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/donate">Spenden</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
