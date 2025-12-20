'use client';

import * as React from 'react';
import Link from 'next/link';
import { useHeaderTheme, type HeaderTheme } from '@/contexts/HeaderContext';

interface HeaderProps {
  initialTheme?: HeaderTheme;
}

export default function Header({ initialTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  
  // Try to use context, fallback to initialTheme or 'dark'
  let contextTheme: HeaderTheme = 'dark';
  try {
    const context = useHeaderTheme();
    contextTheme = context.theme;
  } catch {
    // Context not available, use initialTheme
  }
  
  const theme = initialTheme ?? contextTheme;

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme-based styles
  const isDark = theme === 'dark';
  
  // When scrolled, always use branded blue header
  // When not scrolled: dark theme = transparent, light theme = transparent with dark text
  const headerBg = scrolled
    ? 'bg-[#4494d3]/95 backdrop-blur-md shadow-lg'
    : isDark
      ? 'bg-transparent'
      : 'bg-white/80 backdrop-blur-sm shadow-sm';
  
  const textColor = scrolled
    ? 'text-white'
    : isDark
      ? 'text-white'
      : 'text-gray-800';
  
  const textHoverColor = scrolled
    ? 'hover:text-white/80'
    : isDark
      ? 'hover:text-white/80'
      : 'hover:text-[#4494d3]';
  
  const logoSrc = scrolled || isDark
    ? '/files/images/logo.png'
    : '/files/images/logo-blue.png';
  
  const mobileMenuBg = scrolled || isDark
    ? 'bg-[#4494d3]/95'
    : 'bg-white/95 shadow-lg';
  
  const mobileTextColor = scrolled || isDark
    ? 'text-white'
    : 'text-gray-800';
  
  const mobileHoverBg = scrolled || isDark
    ? 'hover:bg-white/20'
    : 'hover:bg-gray-100';

  const menuButtonStyles = scrolled || isDark
    ? 'text-white hover:bg-white/20'
    : 'text-gray-800 hover:bg-gray-100';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2 no-underline ${textColor}`}>
            <img
              className="h-10 w-auto"
              src={logoSrc}
              alt="DEMOCRACY Deutschland Logo"
            />
            <span className={`text-xl ${textColor}`}>&nbsp;&nbsp;DEMOCRACY</span>
            <span className={`text-sm font-normal ${textColor}`}>App</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link
              href="/wahlometer"
              className={`text-base font-medium no-underline transition-colors ${textColor} ${textHoverColor}`}
            >
              Wahl-O-Meter
            </Link>
            <Link
              href="/"
              className={`text-base font-medium no-underline transition-colors ${textColor} ${textHoverColor}`}
            >
              DEMOCRACY
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium no-underline transition-colors ${textColor} ${textHoverColor}`}
            >
              Über Uns
            </Link>
            <Link
              href="/press"
              className={`text-base font-medium no-underline transition-colors ${textColor} ${textHoverColor}`}
            >
              Presse
            </Link>
            <Link
              href="/donate"
              className="text-base font-bold text-white hover:bg-[#3a84c0] no-underline bg-[#4494d3] px-4 py-2 rounded transition-colors"
            >
              Spenden
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2 transition-colors ${menuButtonStyles}`}
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
          <div className={`lg:hidden rounded-lg mb-4 ${mobileMenuBg}`}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/wahlometer"
                className={`block rounded-md px-3 py-2 text-base font-medium ${mobileTextColor} ${mobileHoverBg}`}
              >
                Wahl-O-Meter
              </Link>
              <Link
                href="/"
                className={`block rounded-md px-3 py-2 text-base font-medium ${mobileTextColor} ${mobileHoverBg}`}
              >
                DEMOCRACY
              </Link>
              <Link
                href="/about"
                className={`block rounded-md px-3 py-2 text-base font-medium ${mobileTextColor} ${mobileHoverBg}`}
              >
                Über Uns
              </Link>
              <Link
                href="/press"
                className={`block rounded-md px-3 py-2 text-base font-medium ${mobileTextColor} ${mobileHoverBg}`}
              >
                Presse
              </Link>
              <Link
                href="/donate"
                className="block rounded-md px-3 py-2 text-base font-bold text-white bg-[#4494d3] hover:bg-[#3a84c0]"
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
