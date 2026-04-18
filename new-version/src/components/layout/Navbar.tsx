"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Navigation, NavItem } from "@/lib/schemas";

interface NavbarProps {
  navigation: Navigation;
}

function itemClasses(item: NavItem, base: string) {
  if (item.highlight) {
    return `${base} rounded-full bg-[var(--color-important)] px-4 py-1.5 text-white hover:bg-[var(--color-important-hover)]`;
  }
  return `${base} text-foreground/80 hover:text-primary-500`;
}

export function Navbar({ navigation }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <Link href="/" aria-label="DEMOCRACY Startseite" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/files/images/logo.png"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full object-contain"
          />
          <span className="font-display text-xl leading-none text-primary-500">DEMOCRACY</span>
          <span className="font-script -ml-1 mt-3 text-2xl leading-none text-primary-500">App</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={itemClasses(item, "text-sm font-medium transition-colors")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-white md:hidden">
          <nav aria-label="Mobile Navigation" className="space-y-1 px-4 py-4">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.highlight
                    ? "mt-2 flex items-center justify-center rounded-full bg-[var(--color-important)] px-4 py-2.5 text-base font-medium text-white transition-colors hover:bg-[var(--color-important-hover)]"
                    : "block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary-500"
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
