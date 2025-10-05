'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="container-fluid px-0">
      <div className="footer grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 py-12">
        <div className="lg:col-span-4 footer-newsletter">
          <div className="logobox mb-4">
            <div className="edosz text-4xl">DEMOCRACY</div>
            <div className="isabelle_layne text-2xl">Demokratie_live</div>
          </div>
          <br />
          <div className="newsletterbox">
            <div id="formular">
              <input 
                id="email" 
                name="email" 
                type="text" 
                placeholder="News an deine@email.com"
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
              <br />
              <input 
                id="subscribe" 
                name="submit" 
                type="submit" 
                className="mailjet-subscribe w-full p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700" 
                value="EINTRAGEN"
              />
            </div>
            <div id="confirm" className="hidden">
              Bestätigungsmail für die<br />
              Anmeldung wurde gesendet.<br />
              Bitte überprüfen Sie Ihren<br />
              Posteingang.
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 footer-rechtliches">
          <h3 className="text-xl font-bold mb-4">RECHTLICHES</h3>
          <ul className="space-y-2">
            <li><Link href="/nutzungsbedingungen">Nutzungsbedingungen</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
          </ul>
        </div>
        
        <div className="lg:col-span-2 footer-in-touch">
          <h3 className="text-xl font-bold mb-4">IN TOUCH</h3>
          <ul className="space-y-2">
            <li><Link href="/engineering">Programmieren</Link></li>
            <li><Link href="/engineering#help">Mithelfen</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        
        <div className="lg:col-span-3 footer-sm">
          <h3 className="text-xl font-bold mb-4">SOCIAL MEDIA</h3>
          <ul id="sm" className="space-y-2">
            <li className="flex gap-2">
              <a href="https://www.facebook.com/democracygermany/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook facebook"></i>
              </a>
              <a href="https://twitter.com/democracy_de" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC2R4cGTq1LjFZ2DvDaVhDyg" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube youtube"></i>
              </a>
            </li>
            <li className="flex gap-2">
              <a href="https://github.com/demokratie-live/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github github"></i>
              </a>
              <a href="https://discord.gg/ZWcFrEc" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord discord"></i>
              </a>
              <a href="mailto:contact@democracy-deutschland.de" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope mail"></i>
              </a>
            </li>
            <li className="flex gap-2">
              <a href="https://instagram.com/democracy_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="copyright grid grid-cols-1 py-4 text-center border-t border-gray-300">
        <div className="col-span-12">
          <i className="fab fa-creative-commons"></i> BY NC ND 4.0 &mdash; 2024{' '}
          <span className="edosz">DEMOCRACY</span> Deutschland e.V.
        </div>
      </div>
    </div>
  );
}
