'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top startpage">
      <div className="container mx-auto px-4">
        <Link className="navbar-brand flex items-center" href="/">
          <img src="/images/logo.png" alt="DEMOCRACY Deutschland Logo" className="h-10 w-10" />
          &nbsp;&nbsp;
          <span className="edosz text-4xl">DEMOCRACY</span>
          <h3 id="navbar-brand-suffix" className="inline text-base font-light ml-1">App</h3>
        </Link>
        
        <button 
          className="navbar-toggler lg:hidden" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`navbar-collapse ${isMenuOpen ? 'block' : 'hidden lg:block'}`} id="navbar-collapse">
          <ul className="navbar-nav flex flex-col lg:flex-row lg:ml-auto">
            <li className="nav-item">
              <Link id="menu_wahlometer" className="nav-link" href="/wahlometer">
                Wahl-O-Meter
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu_home" className="nav-link" href="/">
                DEMOCRACY
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu_about" className="nav-link" href="/about">
                Über Uns
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu_press" className="nav-link" href="/press">
                Presse
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu_donate" className="nav-link menu-important" href="/donate">
                Spenden
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
