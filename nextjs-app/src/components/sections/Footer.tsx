"use client";

import * as React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4">
        <div className="footer flex flex-wrap py-12">
          {/* Newsletter Section */}
          <div className="w-full lg:w-4/12 footer-newsletter mb-8 lg:mb-0">
            <div className="logobox mb-4">
              <div className="text-white text-2xl font-bold" style={{ fontFamily: 'helvetica, sans-serif' }}>DEMOCRACY</div>
              <div className="text-gray-400 text-sm">Demokratie_live</div>
            </div>
            <div className="newsletterbox">
              <a 
                href="https://listmonk.democracy-app.de/subscription/form" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-[#4494d3] hover:bg-[#336daf] text-white font-medium py-2 px-4 rounded transition-colors"
                role="button" 
                aria-label="Newsletter abonnieren - öffnet in neuem Tab"
              >
                NEWSLETTER ABONNIEREN
              </a>
            </div>
          </div>

          {/* RECHTLICHES */}
          <div className="w-full lg:w-3/12 footer-rechtliches mb-8 lg:mb-0">
            <h3 className="text-white text-sm font-semibold uppercase mb-4">RECHTLICHES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nutzungsbedingungen" className="text-gray-300 hover:text-white text-sm">
                  Nutzungsbedingungen
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-300 hover:text-white text-sm">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-gray-300 hover:text-white text-sm">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* IN TOUCH */}
          <div className="w-full lg:w-2/12 footer-in-touch mb-8 lg:mb-0">
            <h3 className="text-white text-sm font-semibold uppercase mb-4">IN TOUCH</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/engineering" className="text-gray-300 hover:text-white text-sm">
                  Programmieren
                </Link>
              </li>
              <li>
                <Link href="/engineering#help" className="text-gray-300 hover:text-white text-sm">
                  Mithelfen
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="w-full lg:w-3/12 footer-sm">
            <h3 className="text-white text-sm font-semibold uppercase mb-4">SOCIAL MEDIA</h3>
            <ul id="sm" className="space-y-2">
              <li className="flex gap-4 text-2xl">
                <a href="https://www.facebook.com/democracygermany/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877f2]">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/democracy_de" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1da1f2]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC2R4cGTq1LjFZ2DvDaVhDyg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff0000]">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="flex gap-4 text-2xl">
                <a href="https://github.com/demokratie-live/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://discord.gg/ZWcFrEc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865f2]">
                  <i className="fab fa-discord"></i>
                </a>
                <a href="mailto:contact@democracy-deutschland.de" className="text-gray-400 hover:text-white">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="flex gap-4 text-2xl items-center">
                <a href="https://instagram.com/democracy_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e4405f]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://t.me/democracy_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0088cc]">
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright border-t border-gray-700 py-6 text-center">
          <div className="text-gray-400 text-sm">
            <i className="fab fa-creative-commons"></i> BY NC ND 4.0 — {new Date().getFullYear()} <span style={{ fontFamily: 'helvetica, sans-serif' }}>DEMOCRACY</span> Deutschland e.V.
          </div>
        </div>
      </div>
    </footer>
  );
}
