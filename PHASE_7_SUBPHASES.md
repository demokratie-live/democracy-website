# Phase 7: Public Pages Migration - Subphases

Phase 7 wurde in 8 sinnvolle Unterphasen aufgeteilt, die jeweils eigenständig abgeschlossen werden können.

## Phase 7.1: Foundation & Layout Infrastructure ✅
**Geschätzter Aufwand:** 2-3 Stunden  
**Zeilen Code:** ~300-400

**Aufgaben:**
- [x] RootLayout mit Metadata erstellen (`src/app/layout.tsx`)
- [x] Header und Footer Integration
- [x] Error Boundary (`src/app/error.tsx`)
- [x] Not Found Page (`src/app/not-found.tsx`)
- [x] Loading States (`src/app/loading.tsx`)
- [x] Globale Styles anpassen
- [x] Font Optimization

**Deliverables:**
- Funktionierendes Layout mit Header/Footer
- Error Handling
- SEO-ready Metadata Structure

---

## Phase 7.2: Homepage Implementation ✅
**Geschätzter Aufwand:** 3-4 Stunden  
**Zeilen Code:** ~500-700

**Aufgaben:**
- [x] Homepage Route (`src/app/page.tsx`)
- [x] Hero Section mit App Download Badges
- [x] YouTube Video Embed Section
- [x] Feature Badges (5 interaktive Badges)
- [x] Target Audience Sections
- [x] Press Logos Section
- [ ] CMS Integration für dynamischen Content
- [x] SEO Metadata

**Deliverables:**
- Vollständig funktionale Homepage
- 1:1 Design Match zur PHP Version
- Alle interaktiven Elemente

---

## Phase 7.3: Information Pages (About, Citizens, Politicians, Engineering)
**Geschätzter Aufwand:** 4-5 Stunden  
**Zeilen Code:** ~800-1000

**Aufgaben:**
- [ ] About Page (`/about`)
- [ ] Citizens Page (`/buerger`)
- [ ] Politicians Page (`/politiker`)
- [ ] Engineering Page (`/engineering`)
- [ ] CMS Integration für alle 4 Seiten
- [ ] Shared Components für wiederkehrende Sections
- [ ] SEO Metadata für alle Seiten

**Deliverables:**
- 4 funktionale Informationsseiten
- CMS-getriebener Content
- Konsistentes Design

---

## Phase 7.4: Donation & Team Page
**Geschätzter Aufwand:** 2-3 Stunden  
**Zeilen Code:** ~400-500

**Aufgaben:**
- [ ] Donate Page (`/spenden`)
- [ ] DonationWidget Integration
- [ ] Team Member Profiles (aus CMS)
- [ ] Spending Breakdown Section
- [ ] Volunteer Profiles
- [ ] Real-time Progress Display
- [ ] SEO Metadata

**Deliverables:**
- Funktionale Spendenseite
- Live Donation Tracking
- Team Profile Display

---

## Phase 7.5: Dynamic Content Pages (FAQ, Blog, Press)
**Geschätzter Aufwand:** 3-4 Stunden  
**Zeilen Code:** ~600-800

**Aufgaben:**
- [ ] FAQ Page (`/faq`) mit Accordion UI
- [ ] Blog Listing Page (`/blog`)
- [ ] Blog Detail Page (`/blog/[slug]`)
- [ ] Press Page (`/presse`)
- [ ] CMS Integration für alle dynamischen Inhalte
- [ ] Pagination für Blog
- [ ] Search Functionality für FAQ
- [ ] SEO Metadata

**Deliverables:**
- 3 dynamische Content-Seiten
- Vollständige CMS Integration
- Blog mit Pagination

---

## Phase 7.6: Contact & Forms
**Geschätzter Aufwand:** 1-2 Stunden  
**Zeilen Code:** ~300-400

**Aufgaben:**
- [ ] Contact Page (`/kontakt`)
- [ ] ContactForm Integration
- [ ] Office Information Display
- [ ] Map Integration (vorbereitet)
- [ ] Success/Error States
- [ ] SEO Metadata

**Deliverables:**
- Funktionale Kontaktseite
- Voll integriertes Kontaktformular

---

## Phase 7.7: System & Legal Pages
**Geschätzter Aufwand:** 2-3 Stunden  
**Zeilen Code:** ~400-600

**Aufgaben:**
- [ ] Privacy Policy (`/datenschutz`)
- [ ] Legal Notice (`/impressum`)
- [ ] Terms of Service (`/nutzungsbedingungen`)
- [ ] Beta Registration Page (`/beta`)
- [ ] Unsubscribe Page (`/abmelden`)
- [ ] CMS Integration wo sinnvoll
- [ ] SEO Metadata

**Deliverables:**
- 5 System-Seiten
- Rechtliche Inhalte
- Beta & Unsubscribe Funktionalität

---

## Phase 7.8: Testing, Optimization & Documentation
**Geschätzter Aufwand:** 2-3 Stunden  
**Zeilen Code:** ~200-300 (Tests & Docs)

**Aufgaben:**
- [ ] 1:1 Design Verification für alle Seiten
- [ ] Responsive Design Testing (Mobile, Tablet, Desktop)
- [ ] SEO Audit (alle Meta Tags, OG Tags, Twitter Cards)
- [ ] Performance Optimization
- [ ] Accessibility Testing (WCAG 2.1)
- [ ] Browser Compatibility Testing
- [ ] Link Testing (interne & externe Links)
- [ ] CMS Content Testing
- [ ] Error Handling Testing
- [ ] PHASE_7_COMPLETE.md erstellen
- [ ] PHASE_7_VERIFICATION.md erstellen

**Deliverables:**
- Vollständig getestete Seiten
- Performance Metriken
- Umfassende Dokumentation
- Verification Checklist

---

## Zusammenfassung

**Gesamtaufwand:** 19-27 Stunden  
**Gesamtzeilen Code:** ~3,500-5,100

**Progression:**
```
Phase 7.1: Foundation (10%)      → 2-3h
Phase 7.2: Homepage (20%)         → 3-4h
Phase 7.3: Info Pages (30%)       → 4-5h
Phase 7.4: Donations (15%)        → 2-3h
Phase 7.5: Dynamic Content (25%)  → 3-4h
Phase 7.6: Contact (10%)          → 1-2h
Phase 7.7: Legal Pages (15%)      → 2-3h
Phase 7.8: Testing & Docs (10%)   → 2-3h
```

**Reihenfolge:**
Die Phasen sollten in der angegebenen Reihenfolge durchgeführt werden, da spätere Phasen auf früheren aufbauen:
1. 7.1 ist Grundlage für alle anderen
2. 7.2-7.7 können nach 7.1 parallel bearbeitet werden
3. 7.8 sollte als letztes durchgeführt werden

**Benefits der Unterteilung:**
- ✅ Überschaubare Arbeitseinheiten
- ✅ Klare Meilensteine
- ✅ Testbar nach jeder Unterphase
- ✅ Rollback-Punkte bei Problemen
- ✅ Parallelisierung möglich (7.2-7.7)
- ✅ Kontinuierliche Integration möglich
