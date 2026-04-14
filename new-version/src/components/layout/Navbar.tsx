"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import type { Navigation } from "@/lib/schemas";

interface NavbarProps {
  navigation: Navigation;
}

export function Navbar({ navigation }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary-500">DEMOCRACY</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary-500"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/spenden"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          >
            <Heart className="h-4 w-4" />
            Spenden
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary-500"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/spenden"
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-primary-500 px-4 py-2.5 text-base font-medium text-white transition-colors hover:bg-primary-600"
              onClick={() => setMobileOpen(false)}
            >
              <Heart className="h-4 w-4" />
              Spenden
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
