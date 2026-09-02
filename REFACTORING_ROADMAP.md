# DEMOCRACY Website - Refactoring Roadmap

## Executive Summary

This document outlines the complete refactoring roadmap for migrating the DEMOCRACY Deutschland website from a legacy PHP-based system to a modern Next.js application with a headless CMS.

## Goals

1. **Complete PHP Elimination**: Remove all PHP and HTML template files
2. **Modern Stack**: Implement Next.js 14+ with TypeScript and Tailwind CSS
3. **Headless CMS**: Integrate self-hosted, open-source CMS for content management
4. **Design Preservation**: Maintain 1:1 visual fidelity with current website
5. **Modern Admin**: Create a contemporary, user-friendly admin interface
6. **Docker Deployment**: Containerize all services for easy local development

## Current System Overview

### Technology Breakdown
- **Lines of Code**: ~5,802 (PHP/HTML/TPL)
- **Pages**: 19 public-facing pages
- **API Endpoints**: 5 main endpoints
- **Admin Modules**: 5 management interfaces
- **Database Tables**: ~20 tables
- **Static Assets**: ~248MB

### Architecture
```
Current: PHP Framework → MySQL → Apache
Target:  Next.js → PostgreSQL → Headless CMS → Docker
```

## Roadmap Phases

### Phase 1: Foundation & Planning (Week 1)
**Status**: ✅ Completed

#### Deliverables
- [x] Complete system analysis
- [x] Project documentation (PROJECT_DOCUMENTATION.md)
- [x] Migration guide (MIGRATION_GUIDE.md)
- [x] Technology stack selection
- [x] Timeline estimation

#### Key Decisions
- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (PostCSS-based, kein tailwind.config)
- **CMS**: Payload CMS (TypeScript-based, self-hosted)
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Docker Compose

---

### Phase 2: Environment Setup (Week 1-2)
**Status**: ✅ Completed

#### Tasks
- [x] Initialize Next.js project with TypeScript
- [x] Configure Tailwind CSS
- [x] Set up ESLint and Prettier
- [x] Configure Git repository structure
- [x] Set up development environment
- [x] Create base folder structure

#### Deliverables
- [x] Working Next.js development environment
- [x] Configuration files (tsconfig, tailwind.config, etc.)
- [x] Development scripts in package.json

---

### Phase 3: Database Design & Setup (Week 2)
**Status**: ✅ Completed

#### Tasks
- [x] Design Prisma schema based on existing MySQL structure
- [x] Set up PostgreSQL with Docker
- [x] Create database migrations
- [x] Set up Prisma Client
- [x] Create seed data scripts
- [x] Document database schema changes

#### Schema Entities
- [x] Pages (dynamic content)
- [x] FAQ entries
- [x] Media/Press items
- [x] Roadmap items
- [x] Donation system (items + settings)
- [x] Beta registration system
- [x] Email system (contacts, lists, templates, sent emails)
- [x] Admin users

#### Deliverables
- [x] Complete Prisma schema file
- [x] Database migrations
- [x] Seed data scripts
- [x] Database documentation

---

### Phase 4: Headless CMS Integration (Week 2-3)
**Status**: ✅ Completed

#### Tasks
- [x] Install and configure Payload CMS
- [x] Create collection schemas for:
  - [x] Pages
  - [x] FAQ
  - [x] Media/Press
  - [x] Roadmap
  - [x] Blog posts
  - [x] Team members
- [x] Configure admin authentication
- [x] Set up file uploads
- [x] Configure rich text editor
- [x] Test CMS functionality

#### Deliverables
- [x] Working Payload CMS instance
- [x] CMS configuration files
- [x] Admin user creation
- [x] Documentation for content editors

---

### Phase 5: API Layer Development (Week 3-4) ✅ COMPLETE

#### API Routes to Implement
- [x] `/api/contact` - Contact form email sending
- [x] `/api/subscribe` - Newsletter subscription
- [x] `/api/beta` - Beta registration with code validation
- [x] `/api/upload` - File upload handling
- [x] `/api/donation-status` - Donation progress data
- [x] `/api/unsubscribe` - Email list unsubscribe

#### Additional Features
- [x] Email service integration (Nodemailer)
- [x] File upload handling
- [x] Input validation (Zod schemas)
- [x] Error handling middleware
- [x] German language responses
- [x] API documentation

#### Deliverables
- [x] Complete API route implementations (6 endpoints)
- [x] API documentation (PHASE_5_COMPLETE.md)
- [x] Environment variables documentation
- [x] Integration examples

---

### Phase 6: Component Library (Week 4-5)
**Status**: ✅ Completed

#### UI Components (`src/components/ui/`)
- [x] Button (with loading state, variants)
- [x] Input (with label, error state)
- [x] Textarea (with label, error state)
- [x] Select/Dropdown (with options)
- [x] Checkbox (with label)
- [x] Card (Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription)
- [x] Alert (with variants: success, error, warning, info)
- [x] ComparisonAccordion (for side-by-side comparisons)
- [x] Loading spinner (integrated in Button)

#### Section Components (`src/components/sections/`)
- [x] Header/Navigation (with theme support, mobile menu, scroll behavior)
- [x] Footer (with newsletter link, legal links, social media)
- [x] VideoSection (YouTube embed with title and link)
- [x] PressLogos (logo grid with links)
- [x] AppStoreBadges (App Store/Play Store buttons)
- [x] RectangleInfo (styled info box with tilted subtitle)
- [x] FeatureIconBox (feature highlight with icon)
- [x] MediaArticle (media card with overlay)
- [x] TeamMember (team member card with links)

#### Notes
- Form components (ContactForm, NewsletterForm, BetaForm) are implemented inline in pages
- Hero sections are page-specific and implemented inline
- Index files created for barrel exports (`ui/index.ts`, `sections/index.ts`)

#### Deliverables
- [x] Reusable component library
- [ ] Storybook setup (optional - deferred)
- [x] Component exports via index files
- [x] Tailwind + class-variance-authority patterns

---

### Phase 7: Public Pages Migration (Week 5-7)

**Status**: 🔄 88% Complete (15/17 eigenständige Seiten implementiert)

#### Pages to Migrate (in priority order)

1. **Home Page** (/) ✅
   - [x] Hero section with branding
   - [x] Download badges (App Store, Google Play)
   - [x] Video embed section
   - [x] Feature showcase with interactive badges
   - [x] Target audience sections
   - [x] Press logos

2. **Donate Page** (/spenden) ✅
   - [x] Donation progress display
   - [x] Expense breakdown table
   - [x] Bank details
   - [x] PayPal/DonorBox links
   - [x] Donation modal
   - [x] HIK section
   - [x] Jahresabschlüsse links
   - [x] Redirect /donate → /spenden

3. **FAQ Page** (/faq) ✅
   - [x] Dynamic FAQ loading from Payload CMS
   - [x] Collapsible questions
   - [x] Category filter

4. **Contact Page** (/contact) ✅
   - [x] Contact form
   - [x] Form validation
   - [x] Success/error messages
   - [x] API integration (/api/contact)

5. **About Pages** ✅
   - [x] /about
   - [x] /buerger
   - [x] /politiker
   - [x] /engineering

6. **Legal Pages** ✅
   - [x] /impressum
   - [x] /datenschutz (privacy policy)
   - [x] /nutzungsbedingungen (terms)

7. **Additional Pages**
   - [x] /wahlometer ✅
   - [x] /press ✅
   - [x] /blog ✅
   - [ ] /invite ❌ (FEHLT - benötigt dynamische Route mit Code-Parameter)
   - [ ] /abmelden ❌ (FEHLT - API existiert unter /api/unsubscribe, UI-Seite fehlt)

#### Known Issues
- `/invite/[code]` Seite fehlt komplett (wird in /engineering referenziert)
- `/abmelden` UI-Seite fehlt (nur API implementiert)
- Engineering-Seite hat Referenzen auf `/invite/C1B381E2` die aktuell 404 zurückgeben

#### Design Matching
- [x] Extract all CSS styles
- [x] Convert to Tailwind classes
- [x] Match colors, fonts, spacing exactly
- [x] Ensure responsive behavior matches
- [ ] Test all animations/transitions

#### Deliverables
- [ ] All 17 Seiten migrated (15/17 done - fehlt: /invite, /abmelden)
- [x] Responsive design verified
- [ ] Cross-browser testing complete
- [ ] Accessibility audit passed

---

### Phase 7.4: CMS Content Migration (Week 7)

**Status**: 🔄 In Progress (4 Globals + 8 Collections = 12 CMS-Entitäten vorhanden)

#### Content Management Status

Die folgende Übersicht zeigt, welche Seiteninhalte bereits über Payload CMS pflegbar sind und welche noch statisch im Code liegen.

##### ✅ Bereits über CMS pflegbar:

| Seite | CMS Global/Collection | Datei |
|-------|----------------------|-------|
| Homepage (`/`) | `Homepage` Global | `src/payload/globals/homepage.ts` |
| Über uns (`/about`) | `About` Global | `src/payload/globals/about.ts` |
| Wahl-O-Meter (`/wahlometer`) | `Wahlometer` Global | `src/payload/globals/wahlometer.ts` |
| Bürger (`/buerger`) | `Buerger` Global | `src/payload/globals/buerger.ts` |
| FAQ (`/faq`) | `faqs` Collection | `src/payload/collections/content.ts` |
| Spenden (`/spenden`) | `donation-settings`, `donation-items` Collections | `src/payload/collections/donation.ts` |
| Blog Posts | `blog-posts` Collection | `src/payload/collections/content.ts` |
| Team Members | `team-members` Collection | `src/payload/collections/content.ts` |
| Media Coverage | `media-coverage` Collection | `src/payload/collections/content.ts` |
| Roadmap Items | `roadmap-items` Collection | `src/payload/collections/content.ts` |
| Beta System | `beta-codes`, `beta-registrations` Collections | `src/payload/collections/beta.ts` |

##### ❌ Noch statische Inhalte (ausstehend):

| Seite | Statische Inhalte | Priorität | Aufwand |
|-------|-------------------|-----------|---------|
| **Politiker** (`/politiker`) | 6 Benefits, 3 Use Cases, 3 Stats, 5 FAQs, SEO | **Hoch** | 2-3h |
| **Engineering** (`/engineering`) | 68 Roadmap-Items, Tech-Stack, Formulare | **Hoch** | 4-6h |
| **Presse** (`/press`) | 6 Press-Kit Items, 9 Blog Posts, 20 Presseartikel, 6 Publikationen | **Hoch** | 3-4h |
| **Datenschutz** (`/datenschutz`) | Gesamte Datenschutzerklärung (~2000 Wörter) | Mittel | 1-2h |
| **Impressum** (`/impressum`) | Impressum, Adresse, Kontaktdaten | Mittel | 1h |
| **Nutzungsbedingungen** (`/nutzungsbedingungen`) | Gesamte AGB (~11 Abschnitte) | Mittel | 1-2h |
| **Kontakt** (`/contact`) | Kontaktdaten (Adresse, Telefon, Email) | Niedrig | 0.5h |

##### Empfohlene Implementierungsreihenfolge:

1. **Politiker Global** (`src/payload/globals/politiker.ts`)
   - [ ] Global Schema erstellen (benefits, useCases, stats, faqs Sektionen)
   - [ ] Seed-Datei erstellen
   - [ ] Seite refaktorieren

2. **Engineering Global** (`src/payload/globals/engineering.ts`)
   - [ ] Global Schema erstellen (roadmap, techStack, forms Sektionen)
   - [ ] Seed-Datei erstellen
   - [ ] Seite refaktorieren

3. **Presse-Seite** - MediaCoverage Collection nutzen
   - [ ] Bestehende `media-coverage` Collection in `/press/page.tsx` einbinden
   - [ ] Press-Kit als separate Sektion/Global

4. **Legal Pages Global** (`src/payload/globals/legal.ts`)
   - [ ] Datenschutz, Impressum, Nutzungsbedingungen als Rich-Text Felder
   - [ ] Seiten refaktorieren

#### Deliverables
- [ ] Politiker Global + Seed + Page Refactoring
- [ ] Engineering Global + Seed + Page Refactoring
- [ ] Presse-Seite mit CMS-Daten
- [ ] Legal Pages Global
- [ ] 100% der Inhalte über CMS pflegbar

---

### Phase 8: Admin Dashboard (Week 7-9)

**Status**: ✅ ~90% Complete

#### Admin Layout
- [x] Sidebar navigation (`src/components/admin/AdminSidebar.tsx`)
- [x] Header with user menu (`src/components/admin/AdminHeader.tsx`)
- [x] Breadcrumbs (`src/components/admin/Breadcrumbs.tsx`)
- [x] Responsive design (mobile sidebar toggle, collapsible)
- [x] Dark mode toggle

#### Management Interfaces

1. **FAQ Management** (`src/app/(public)/admin/dashboard/faqs/`) - via API, nicht direkt Payload
   - [x] List view with search/filter
   - [x] Create new FAQ (`/new/`)
   - [x] Edit existing FAQ (`/[id]/`)
   - [x] Delete FAQ (via FAQActions component)
   - [ ] Reorder FAQs (drag-and-drop) - nur Order-Feld vorhanden
   - [ ] Bulk actions

2. **Media/Press Management** (`src/app/(public)/admin/dashboard/media/`)
   - [x] List view with thumbnails
   - [x] Create new entry (`/new/`)
   - [x] Edit existing entry (`/[id]/`)
   - [x] Delete entry (via MediaActions component)
   - [x] Image upload (via Payload CMS)
   - [x] Date filtering (sortiert nach publishedAt)

3. **Beta Management** (`src/app/(public)/admin/dashboard/beta/`)
   - [x] Registration list (`/registrations/`)
   - [x] Code management (`/codes/`)
   - [x] Statistics dashboard (Plattform-Verteilung, Charts)
   - [x] Export functionality (`ExportButton.tsx` + `/api/admin/beta/export/`)
   - [x] Email subscribers (Newsletter-Spalte in Registrierungen)

4. **Roadmap Management** (`src/app/(public)/admin/dashboard/roadmap/`)
   - [x] Kanban board view (`RoadmapBoard.tsx`)
   - [x] Create/edit roadmap items (`/new/`, `/[id]/`)
   - [x] Status updates (planned, in-progress, completed)
   - [x] Priority management
   - [x] RoadmapForm.tsx für Bearbeitung

5. **Donation Management** (`src/app/(public)/admin/dashboard/donations/`)
   - [x] Current progress overview (ProgressBar, Stats)
   - [x] Update donation amounts (`DonationSettingsForm.tsx`)
   - [x] Manage spending categories (`DonationItemActions.tsx`)
   - [x] Analytics (Fortschrittsbalken, Statistiken)

6. **Additional Admin Pages**
   - [x] Activity Log (`/activity/`)
   - [x] Settings (`/settings/`)
   - [x] Profile (`/profile/`)

#### Admin Features
- [x] Authentication (login/logout) - Payload CMS Auth + `admin-auth.ts` Middleware
- [x] Role-based access control (`src/lib/admin-auth.ts` mit `requireRole()`)
- [x] Activity logging (`/activity/` Seite + ActivityLog Model)
- [x] Dark mode toggle (im Header)
- [x] User profile management (`/profile/` Seite)

#### API Routes für Admin (`/src/app/api/admin/`)
- [x] FAQs CRUD (`/api/admin/faqs/`)
- [x] Media CRUD (`/api/admin/media/`)
- [x] Roadmap CRUD (`/api/admin/roadmap/`)
- [x] Donations Settings + Items (`/api/admin/donations/`)
- [x] Beta Codes + Registrations (`/api/admin/beta/`)

#### Deliverables
- [x] Complete admin dashboard
- [x] All 5 management interfaces
- [ ] Admin user guide
- [ ] Security audit

**Hinweis:** Admin-Dashboard ist unter `/admin/dashboard` erreichbar, Payload CMS unter `/admin`.

---

### Phase 9: Data Migration (Week 9)

#### Migration Strategy
1. **Export from Current System**
   - [ ] Create PHP export script
   - [ ] Export all database tables to JSON
   - [ ] Export file attachments
   - [ ] Verify data integrity

2. **Transform Data**
   - [ ] Map old schema to new schema
   - [ ] Clean and validate data
   - [ ] Handle special cases
   - [ ] Create migration logs

3. **Import to New System**
   - [ ] Create TypeScript import script
   - [ ] Import in correct order (respecting foreign keys)
   - [ ] Verify all data imported correctly
   - [ ] Generate reports

#### Content Migration
- [ ] Copy all images to new public folder
- [ ] Copy video files
- [ ] Copy downloadable files (APK, AAB)
- [ ] Update file paths in database

#### Deliverables
- [ ] Export scripts
- [ ] Import scripts
- [ ] Migration documentation
- [ ] Data verification report

---

### Phase 10: Docker Configuration (Week 10)

**Status**: ✅ Development Docker bereits implementiert

#### Services bereits containerisiert (Development)
- [x] Next.js application (via Dockerfile.dev)
- [x] PostgreSQL database
- [x] MailHog (Email Testing)
- [x] docker-compose.yml für Development

#### Services to Containerize (Production)
- [ ] Next.js application (Production Build)
- [ ] PostgreSQL database (Production)
- [ ] Redis (for caching, optional)

#### Configuration Files
- [x] Dockerfile.dev für Next.js (Development)
- [ ] Dockerfile für Next.js (Production)
- [x] docker-compose.yml für Development
- [ ] docker-compose.prod.yml für Production
- [x] .dockerignore
- [x] Environment variable templates (.env, .env.docker, .env.example)

#### Features
- [ ] Hot reload in development
- [ ] Volume mounts for persistent data
- [ ] Health checks
- [ ] Logging configuration
- [ ] Multi-stage builds for optimization

#### Deliverables
- [ ] Complete Docker setup
- [ ] Docker documentation
- [ ] Start/stop scripts
- [ ] Production deployment guide

---

### Phase 11: Testing & Quality Assurance (Week 10-11)

#### Unit Tests
- [ ] API route tests
- [ ] Component tests
- [ ] Utility function tests
- [ ] Database operation tests

#### Integration Tests
- [ ] User flow tests
- [ ] API integration tests
- [ ] Database integration tests

#### E2E Tests
- [ ] Critical user journeys
- [ ] Form submissions
- [ ] Admin workflows

#### Testing Tools
- [ ] Jest for unit tests
- [ ] React Testing Library
- [ ] Playwright for E2E tests

#### Quality Checks
- [ ] TypeScript strict mode enabled
- [ ] ESLint with no errors
- [ ] Lighthouse audit (performance, accessibility, SEO)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Load testing

#### Deliverables
- [ ] Test suite with >80% coverage
- [ ] E2E test scenarios
- [ ] QA report
- [ ] Performance benchmarks

---

### Phase 12: Security Audit (Week 11)

#### Security Checklist
- [ ] HTTPS enforcement
- [ ] CSRF protection
- [ ] XSS prevention
- [ ] SQL injection prevention (via Prisma)
- [ ] Rate limiting on all endpoints
- [ ] Authentication security
  - [ ] Password hashing (bcrypt)
  - [ ] JWT token security
  - [ ] Session management
- [ ] Input validation on all forms
- [ ] File upload restrictions
- [ ] Environment variable security
- [ ] Dependency vulnerability scan
- [ ] Security headers configuration

#### Tools
- [ ] pnpm audit
- [ ] Snyk or similar
- [ ] OWASP ZAP
- [ ] Manual code review

#### Deliverables
- [ ] Security audit report
- [ ] Vulnerability fixes
- [ ] Security documentation

---

### Phase 13: Documentation (Week 11-12)

#### User Documentation
- [ ] Content editor guide
- [ ] Admin user manual
- [ ] FAQ for common tasks
- [ ] Video tutorials (optional)

#### Developer Documentation
- [ ] README.md update
- [ ] Architecture overview
- [ ] API documentation
- [ ] Component documentation
- [ ] Database schema documentation
- [ ] Deployment guide
- [ ] Troubleshooting guide

#### Operations Documentation
- [ ] Deployment procedures
- [ ] Backup and restore procedures
- [ ] Monitoring setup
- [ ] Incident response plan

#### Deliverables
- [ ] Complete documentation suite
- [ ] Onboarding guide for new developers
- [ ] Operations runbook

---

### Phase 14: Deployment Preparation (Week 12)

#### Production Environment Setup
- [ ] Domain configuration
- [ ] SSL certificate setup
- [ ] CDN configuration (optional)
- [ ] Email service configuration
- [ ] Database backup setup
- [ ] Monitoring setup
  - [ ] Error tracking (Sentry or similar)
  - [ ] Performance monitoring
  - [ ] Uptime monitoring

#### Deployment Strategy
- [ ] Blue-green deployment plan
- [ ] Rollback procedure
- [ ] Database migration plan
- [ ] DNS cutover plan

#### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Security audit complete
- [ ] Performance benchmarks met
- [ ] Content migrated and verified
- [ ] Admin users created
- [ ] Email templates configured
- [ ] Backup strategy in place

#### Deliverables
- [ ] Production environment configured
- [ ] Deployment runbook
- [ ] Rollback plan
- [ ] Go-live checklist

---

### Phase 15: Launch & Monitoring (Week 12-13)

#### Launch Steps
1. [ ] Final content review
2. [ ] Performance testing under load
3. [ ] Backup current production system
4. [ ] Deploy to production
5. [ ] Smoke testing
6. [ ] DNS cutover
7. [ ] Monitor for issues
8. [ ] Announce launch

#### Post-Launch Monitoring (First 48 hours)
- [ ] Error rate monitoring
- [ ] Performance metrics
- [ ] User feedback collection
- [ ] Bug triage and fixes

#### Handoff
- [ ] Training session for content editors
- [ ] Training session for administrators
- [ ] Knowledge transfer
- [ ] Support channel setup

#### Deliverables
- [ ] Successful production deployment
- [ ] Launch report
- [ ] Post-launch monitoring report
- [ ] Support documentation

---

## Success Criteria

### Technical
- ✅ Zero PHP/HTML template files remaining
- ✅ All pages and features migrated
- ✅ Performance meets or exceeds current site
- ✅ Lighthouse score >90 across all categories
- ✅ Zero critical security vulnerabilities
- ✅ Test coverage >80%

### User Experience
- ✅ Visual design matches 100%
- ✅ All forms functional
- ✅ Mobile experience excellent
- ✅ Load time <2 seconds
- ✅ Accessibility WCAG 2.1 AA compliant

### Admin Experience
- ✅ Intuitive, modern interface
- ✅ All content manageable via CMS
- ✅ No technical knowledge required for content updates
- ✅ Comprehensive admin documentation

### Operational
- ✅ Automated deployment pipeline
- ✅ Monitoring and alerting in place
- ✅ Backup and restore procedures tested
- ✅ Documentation complete

---

## Risk Management

### Identified Risks

1. **Data Loss During Migration**
   - **Mitigation**: Multiple backups, thorough testing, rollback plan

2. **Performance Degradation**
   - **Mitigation**: Load testing, performance monitoring, optimization

3. **Security Vulnerabilities**
   - **Mitigation**: Security audit, penetration testing, code review

4. **User Adoption Issues**
   - **Mitigation**: Training, documentation, support channel

5. **Timeline Overruns**
   - **Mitigation**: Buffer time in schedule, regular progress reviews

---

## Resource Requirements

### Team
- **Lead Developer**: Full-time (12-13 weeks)
- **Frontend Developer**: Full-time (8-10 weeks)
- **Backend Developer**: Part-time (4-6 weeks)
- **Designer/QA**: Part-time (3-4 weeks)
- **DevOps Engineer**: Part-time (2-3 weeks)

### Tools & Services
- Development tools (covered by existing subscriptions)
- Cloud hosting for staging environment
- Monitoring services
- Security scanning tools

---

## Timeline Summary

| Phase | Duration | Status |
|-------|----------|--------|
| 1. Foundation & Planning | 1 week | ✅ Complete |
| 2. Environment Setup | 1 week | ✅ Complete |
| 3. Database Design | 1 week | ✅ Complete |
| 4. CMS Integration | 1-2 weeks | ✅ Complete |
| 5. API Development | 1-2 weeks | ✅ Complete |
| 6. Component Library | 1-2 weeks | ✅ Complete |
| 7. Pages Migration | 2-3 weeks | 🔄 88% Complete (15/17) |
| 7.4 CMS Content Migration | 1 week | 🔄 In Progress (~70%) |
| 8. Admin Dashboard | 2-3 weeks | ✅ ~90% Complete |
| 9. Data Migration | 1 week | ⏳ Pending |
| 10. Docker Config | 1 week | 🔄 Dev Complete, Prod Pending |
| 11. Testing & QA | 1-2 weeks | ⏳ Pending |
| 12. Security Audit | 1 week | ⏳ Pending |
| 13. Documentation | 1-2 weeks | 🔄 Teilweise vorhanden |
| 14. Deployment Prep | 1 week | ⏳ Pending |
| 15. Launch & Monitoring | 1-2 weeks | ⏳ Pending |

**Total Duration**: 12-13 weeks (3 months)

---

## Next Steps

1. ✅ Review and approve this roadmap
2. ⏳ Set up development environment (Phase 2)
3. ⏳ Begin database schema design (Phase 3)
4. ⏳ Schedule regular progress reviews (weekly)

---

**Document Version**: 1.2  
**Last Updated**: 21. Dezember 2025  
**Owner**: DEMOCRACY Deutschland Development Team
