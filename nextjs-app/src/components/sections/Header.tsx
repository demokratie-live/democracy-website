'use client';

import * as React from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white no-underline">
            <img
              className="h-10 w-auto"
              src="/files/images/logo.png"
              alt="DEMOCRACY Deutschland Logo"
            />
            <span className="text-white text-xl">&nbsp;&nbsp;DEMOCRACY</span>
            <span className="text-white text-sm font-normal">App</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link
              href="/wahlometer"
              className="text-base font-medium text-white hover:text-white/80 no-underline"
            >
              Wahl-O-Meter
            </Link>
            <Link
              href="/"
              className="text-base font-medium text-white hover:text-white/80 no-underline"
            >
              DEMOCRACY
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-white hover:text-white/80 no-underline"
            >
              Über Uns
            </Link>
            <Link
              href="/press"
              className="text-base font-medium text-white hover:text-white/80 no-underline"
            >
              Presse
            </Link>
            <Link
              href="/donate"
              className="text-base font-bold text-white hover:text-white/80 no-underline bg-[#4494d3] px-4 py-2 rounded"
            >
              Spenden
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/20"
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
          <div className="lg:hidden bg-[#4494d3]/95 rounded-lg mb-4">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/wahlometer"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/20"
              >
                Wahl-O-Meter
              </Link>
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/20"
              >
                DEMOCRACY
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/20"
              >
                Über Uns
              </Link>
              <Link
                href="/press"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/20"
              >
                Presse
              </Link>
              <Link
                href="/donate"
                className="block rounded-md px-3 py-2 text-base font-bold text-white hover:bg-white/20"
              >
                Spenden
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
