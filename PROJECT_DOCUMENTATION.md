# DEMOCRACY Deutschland - Website Project Documentation

## Project Overview

**Project Name:** DEMOCRACY Deutschland Website  
**Current Technology Stack:** PHP, MySQL, Custom Framework  
**Purpose:** Information website for the DEMOCRACY mobile app, which allows German citizens to participate in parliamentary voting and compare their positions with the Bundestag.

## Current System Architecture

### Technology Stack
- **Backend:** Custom PHP Framework (lib/system)
- **Database:** MySQL
- **Frontend:** HTML Templates (.tpl files), CSS, JavaScript
- **Server:** Apache (via .htaccess)
- **Deployment:** Docker (docker-compose.yml with PHP, MySQL, phpMyAdmin)

### Project Structure

```
democracy-website/
├── index.php                 # Main entry point
├── api.php                   # API entry point
├── config.dist.php           # Configuration template
├── lib/                      # External libraries
│   ├── system/              # Custom framework
│   ├── mail_cannon/         # Email functionality
│   └── ...
├── democracy/               # Main application directory
│   ├── page/               # Page modules (19 pages)
│   ├── api/                # API modules
│   ├── sai/                # Admin interface modules
│   ├── sql/                # Database schemas
│   ├── files/              # Static files (images, downloads)
│   ├── path/               # Path helpers
│   └── config/             # Configuration files
└── videos/                 # Video content
```

## Complete Feature List

### 1. Public Website Pages (19 Pages)

#### 1.1 Home Page (default_home)
**Route:** `#!home` or `/`  
**Features:**
- Hero section with DEMOCRACY branding
- App Store and Google Play download badges
- Link to browser version
- Direct APK/AAB download links
- Animated phone mockup with app screenshots
- Video section with YouTube embed (2:30 intro video)
- Feature showcase with 5 interactive badges:
  - Wähle (Choose): Select parliamentary procedures
  - Informiere (Inform): Read official documents
  - Stimme (Vote): Cast your vote
  - Vergleiche (Compare): Compare with community and Bundestag
  - Analysiere (Analyze): Analyze agreement levels
- Target audience sections (Citizens & Politicians)
- Press logos section (hr-iNFO, MDR, DW, WIRED)

#### 1.2 Wahlometer Page (default_wahlometer)
**Route:** `#!wahlometer`  
**Purpose:** Displays voting comparison tool

#### 1.3 About Page (default_about)
**Route:** `#!about`  
**Purpose:** General information about the project

#### 1.4 Citizen Page (default_citizen)
**Route:** `#!citizen`  
**Purpose:** Information targeted at citizens explaining benefits of DEMOCRACY

#### 1.5 Politicians Page (default_politicians)
**Route:** `#!politicians`  
**Purpose:** Information for politicians about how they can use DEMOCRACY

#### 1.6 Engineering Page (default_engineering)
**Route:** `#!engineering`  
**Purpose:** Technical details about the project

#### 1.7 Donate Page (default_donate)
**Route:** `#!donate`  
**Features:**
- Donation progress bar
- Donation goal tracking
- Detailed spending breakdown with categories (head/data types)
- Team member profiles with photos:
  - Marius Krüger (Founder, Organization & Product)
  - Manuel Ruck (Software Developer)
  - Katrin Engler (Press & PR)
  - Fabian B. (Graphics & Content)
  - Jascha Fabian (Brand Strategy & Campaigns)
  - Elisa Menne (Administration & Communication)
  - Robert Schäfer (Software Developer, Bundestag Interface)
- Volunteer profiles:
  - Léon Trothe (Social Media Marketing Intern)
  - Leyla Niederberger (Social Media Marketing Intern)
  - Timo Sieg (Newsletter & Blog Editor)
  - Jasper Bennink (Blog Editor)
- Project values showcase (6 icons):
  - Gemeinschaftlich (Community-driven)
  - Allgemeinnützig (Public benefit)
  - Fair (Equal rights)
  - Öffentlich (Open Source/Data/Book)
  - Dialogfördernd (Dialogue-promoting)
  - Nicht profitorientiert (Non-profit)

#### 1.8 FAQ Page (default_faq)
**Route:** `#!faq`  
**Features:**
- Dynamic FAQ loading from database
- Collapsible questions with answers
- First question expanded by default
- Animated arrow icons

#### 1.9 Blog Page (default_blog)
**Route:** `#!blog`  
**Purpose:** Blog posts and updates

#### 1.10 Press Page (default_press)
**Route:** `#!press`  
**Features:**
- Media coverage list
- Press articles
- Media kit

#### 1.11 Contact Page (default_contact)
**Route:** `#!contact`  
**Features:**
- Contact form with fields:
  - First name (vorname)
  - Last name (nachname)
  - Email
  - Message
- Form types: contact, bugreport, volunteer

#### 1.12 Impressum Page (default_impressum)
**Route:** `#!impressum`  
**Purpose:** Legal imprint (required in Germany)

#### 1.13 Datenschutz Page (default_datenschutz)
**Route:** `#!datenschutz`  
**Purpose:** Privacy policy (GDPR compliance)

#### 1.14 Nutzungsbedingungen Page (default_nutzungsbedingungen)
**Route:** `#!nutzungsbedingungen`  
**Purpose:** Terms of service

#### 1.15 Invite Page (default_invite)
**Route:** `#!invite`  
**Purpose:** Beta invitation system

#### 1.16 Unsubscribe Page (default_unsubscribe)
**Route:** `#!unsubscribe/{token}`  
**Purpose:** Newsletter unsubscribe with token validation

#### 1.17 Generic Page (default_page)
**Route:** Dynamic  
**Purpose:** Template for dynamic content pages

#### 1.18 Home Old (default_home_old)
**Purpose:** Legacy home page version (backup)

#### 1.19 Prototyp Page (default_prototyp)
**Route:** `#!prototyp`  
**Purpose:** Information about app prototype

### 2. API Endpoints

#### 2.1 Send Mail (call_send_mail)
**Purpose:** Send various types of emails  
**Parameters:**
- `type`: contact, bugreport, volunteer
- `email`: Sender email
- `name`/`vorname`/`nachname`: Sender name
- `message`: Message content
- `files`: Optional file attachments

**Email Lists:**
- Newsletter (ID: 2)
- Prototype (ID: 3)
- Alpha (ID: 4)
- Email PayPal (ID: 5)
- Email Volunteers (ID: 6)
- Email Contact (ID: 7)
- Email PR (ID: 8)

**Email Types:**
- Website Contact (ID: 10)
- Website Bugreport (ID: 11)
- Website Volunteer (ID: 12)
- Newsletter Subscribe (ID: 20)
- Prototype Register (ID: 30)
- Prototype Access Android (ID: 31)
- Prototype Access iOS (ID: 32)
- Alpha Register (ID: 40)
- Alpha Access Android (ID: 41)
- Alpha Access iOS (ID: 42)

#### 2.2 Send Subscribe (call_send_subscribe)
**Purpose:** Newsletter subscription  
**Parameters:**
- `email`: Subscriber email

**Process:**
1. Create contact record
2. Add to newsletter list
3. Send confirmation email

#### 2.3 Beta Registration (call_beta)
**Purpose:** Beta program registration with code validation  
**Parameters:**
- `ios`: Boolean - Requesting iOS access
- `android`: Boolean - Requesting Android access
- `email`: User email
- `code`: Beta invitation code
- `newsletter`: Boolean - Subscribe to newsletter

**Process:**
1. Validate beta code
2. Create contact record
3. Add to alpha list
4. Optionally add to newsletter
5. Check if email already used a code
6. Store beta registration
7. Send registration confirmation email

#### 2.4 Upload (call_upload)
**Purpose:** File upload for forms  
**Parameters:**
- File via POST (`$_FILES['datei']`)

**Process:**
1. Generate unique filename using MD5 hash
2. Store in upload directory
3. Return filename

#### 2.5 Donation Status (call_donation_status)
**Purpose:** Get current donation information  
**Returns:**
- `donation_value`: Current donation amount
- `donation_value_goal`: Donation goal
- `donation_percentage`: Percentage achieved
- `donation_paten`: Current patrons count
- `donation_paten_goal`: Patrons goal
- `donation_data`: Array of donation line items with:
  - `id`, `order`, `type`, `title`, `description`, `value`, `max`, `percentage`

### 3. Admin Interface (SAI Modules)

#### 3.1 FAQ Management (saimod_faq)
**Features:**
- Create new FAQ entries
- Edit existing FAQs
- Delete FAQs
- Reorder questions
- Fields: question, answer

#### 3.2 Media Management (saimod_media)
**Features:**
- Manage press/media entries
- Upload media files
- Fields: title, description, link, date, media outlet

#### 3.3 Beta Management (saimod_beta)
**Features:**
- View beta registrations
- Manage beta codes
- Track Android/iOS requests
- Email management
- View beta statistics

#### 3.4 Roadmap Management (saimod_roadmap)
**Features:**
- Create roadmap items
- Edit roadmap entries
- Set priorities
- Track completion status

#### 3.5 Donation Management (saimod_donate)
**Features:**
- Update donation progress
- Manage spending categories
- Two types of entries:
  - HEAD: Category headers
  - DATA: Spending items with progress bars
- Fields: type, order, title, description, value, max

### 4. Database Structure

#### 4.1 Core Tables

**system_page:**
- Stores page content and metadata
- Fields: id, name, title, content, meta tags

**system_text:**
- Text snippets for i18n
- Fields: id, key, language, value

**system_api:**
- API configuration
- Fields: id, name, endpoint, permissions

#### 4.2 Content Tables

**faq:**
- FAQ entries
- Fields: id, question, answer, order, active

**media:**
- Press/media coverage
- Fields: id, title, description, url, date, outlet, image

**roadmap:**
- Project roadmap items
- Fields: id, title, description, priority, status, date

**donate:**
- Donation line items
- Fields: id, type, order, title, description, value, max

#### 4.3 Beta System Tables

**beta:**
- Beta registrations
- Fields: id, code, email, android, ios, created_at

**beta_code:**
- Valid beta codes
- Fields: id, code, uses, max_uses, active

#### 4.4 Email System Tables

**email_list:**
- Email lists (newsletter, alpha, etc.)
- Fields: id, name, description

**email_template:**
- Email templates
- Fields: id, type, subject, body_text, body_html

**email_sent:**
- Email sending log
- Fields: id, email, template_id, sent_at

**contact:**
- Contact database
- Fields: id, email, firstname, lastname, created_at

**contact_email_list:**
- Many-to-many relation between contacts and lists
- Fields: contact_id, list_id

### 5. Email Configuration

The system supports multiple email accounts:
- **Contact Email:** For contact form submissions
- **Prototyping Email:** For prototype program
- **Crowdfunding Email:** For donation-related emails
- **Krueger Email:** Personal email for founder

Each configured with:
- IMAP settings (host, port, SSL)
- SMTP settings (host, port, auth)
- Username and password

### 6. File Structure

**Static Assets:**
- `/democracy/files/images/` - Images
- `/democracy/files/download/` - APK/AAB files
- `/democracy/files/wir/` - Team photos
- `/democracy/files/medien/` - Press materials
- `/democracy/files/font/` - Custom fonts
- `/democracy/files/icons/` - Icons
- `/videos/` - Video files

**Generated Files:**
- `/democracy/files/cache/` - Cache files
- `/democracy/files/log/` - Log files
- `/democracy/files/upload/` - User uploads

### 7. Current Design System

**Color Scheme:**
- Primary: Blue (DEMOCRACY brand)
- Background: White with gradient overlays
- Text: Dark gray (#4A4A4A)

**Typography:**
- Headers: Large, bold
- Body: Clean, readable

**Components:**
- Badges: App store download buttons
- Info badges: Feature showcase items
- Rectangle info boxes: Two-part info cards
- Team member cards: Photo + hover effect + social links
- Video embeds: Responsive YouTube iframes
- Progress bars: Donation tracking
- Form elements: Contact forms

**Responsive Design:**
- Mobile-first approach
- Bootstrap grid system
- Breakpoints for tablets and desktop

### 8. Third-Party Integrations

**Current:**
- YouTube video embeds
- App Store links
- Google Play links
- Email system (IMAP/SMTP)

**Assets:**
- Font Awesome icons
- Custom icon set
- Bootstrap (implied from grid usage)

### 9. Routing System

Current routing uses hash-based navigation:
- Format: `#!{page_name}`
- Examples:
  - `#!home` → Home page
  - `#!donate` → Donate page
  - `#!faq` → FAQ page

Special routes:
- `#!unsubscribe/{token}` → Unsubscribe with token
- Default route → Wahlometer page

### 10. Build and Deployment

**Local Development:**
```bash
# Clone repository
git clone https://github.com/demokratie-live/democracy-website
cd democracy-website

# Copy config
cp config.dist.php config.php

# Start Docker
docker-compose up

# Access points:
# - Website: http://localhost:8001
# - phpMyAdmin: http://localhost:8000
```

**Requirements:**
- PHP 7.x+
- MySQL 5.7+
- Apache with mod_rewrite
- IMAP/SMTP access for email

### 11. Security Considerations

**Current Implementation:**
- SQL injection protection via prepared statements
- Email validation
- File upload validation
- Token-based unsubscribe
- Beta code validation

**Areas Needing Enhancement:**
- CSRF protection
- Rate limiting on API endpoints
- Input sanitization
- Session management for admin
- HTTPS enforcement

### 12. Localization

**Current Status:**
- Single language: German (deDE)
- Text system supports multiple languages
- All content stored in database or templates

**Structure:**
- Language-agnostic page logic
- Text retrieved via `\SYSTEM\PAGE\text::get()` and `\SYSTEM\PAGE\text::tag()`
- Template variables for dynamic content

## Modernization Requirements

### Target Architecture: Next.js

**Goals:**
1. ✅ Remove all PHP code
2. ✅ Remove all HTML template files
3. ✅ Implement modern Next.js with App Router
4. ✅ Integrate headless CMS for content management
5. ✅ Maintain 1:1 visual design
6. ✅ Redesign admin interface with modern UX

**Recommended Stack:**
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Strapi or Payload CMS (open source, self-hosted)
- **Database:** PostgreSQL with Prisma ORM
- **Email:** Nodemailer or similar
- **Deployment:** Docker containers
- **Admin UI:** Modern React-based dashboard

**Migration Strategy:**
1. Set up Next.js project with TypeScript
2. Configure headless CMS with Docker
3. Design and implement database schema in Prisma
4. Create API routes for all endpoints
5. Build frontend pages matching current design
6. Implement new admin dashboard
7. Migrate content from MySQL to new system
8. Set up email functionality
9. Test all features
10. Deploy with Docker

## Notes

- Total lines of code: ~5,802 (PHP/HTML/TPL)
- Static files: ~248MB
- Active pages: 19
- API endpoints: 5
- Admin modules: 5
- Database tables: ~20
- Email configurations: 4

---

**Document Version:** 1.0  
**Date:** December 2024  
**Prepared for:** Complete NextJS Refactoring Project
