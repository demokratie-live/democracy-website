# Database Schema Documentation

## Overview

This document describes the database schema for the DEMOCRACY Deutschland website, implemented using Prisma ORM with PostgreSQL.

## Database Setup

### Connection Details
- **Database**: PostgreSQL 15
- **Host**: localhost:5432 (Docker)
- **Database Name**: democracy_db
- **User**: democracy
- **Password**: democracy_pass (development only)

### Schema Location
- Primary schema: `prisma/schema.prisma`
- Seed data: `prisma/seed.ts`

## Models

### 1. Content Management Models

#### Page
Dynamic content pages for the website.

**Fields:**
- `id` (String, CUID) - Primary key
- `slug` (String, unique) - URL slug
- `title` (String) - Page title
- `content` (JSON) - Page content (flexible structure)
- `metaTitle` (String?, optional) - SEO title
- `metaDesc` (String?, optional) - SEO description
- `published` (Boolean, default: false) - Publication status
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

**Indexes:** None

---

#### Faq
Frequently asked questions.

**Fields:**
- `id` (String, CUID) - Primary key
- `question` (String) - Question text
- `answer` (String, Text) - Answer text
- `order` (Int) - Display order
- `active` (Boolean, default: true) - Visibility status
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

**Indexes:**
- `order` - For sorting queries

**Seed Data:** 3 sample FAQ entries created

---

#### Media
Press and media coverage.

**Fields:**
- `id` (String, CUID) - Primary key
- `title` (String) - Media title
- `description` (String?, Text, optional) - Description
- `url` (String) - External link
- `outlet` (String?, optional) - Media outlet name
- `imageUrl` (String?, optional) - Image URL
- `publishedAt` (DateTime) - Publication date
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

**Indexes:**
- `publishedAt` - For chronological sorting

---

#### Roadmap
Project roadmap items.

**Fields:**
- `id` (String, CUID) - Primary key
- `title` (String) - Item title
- `description` (String?, Text, optional) - Detailed description
- `priority` (Int) - Priority order
- `status` (String) - Status: "planned", "in-progress", "completed"
- `targetDate` (DateTime?, optional) - Target completion date
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

**Indexes:**
- `priority` - For priority sorting

**Seed Data:** 3 sample roadmap items (completed, in-progress, planned)

---

### 2. Donation System Models

#### DonationItem
Individual spending categories and items.

**Fields:**
- `id` (String, CUID) - Primary key
- `type` (String) - Type: "head" (category header) or "data" (actual item)
- `order` (Int) - Display order
- `title` (String) - Item title
- `description` (String?, Text, optional) - Description
- `value` (Int) - Current value (in cents/€ cents)
- `maxValue` (Int) - Maximum/goal value
- `active` (Boolean, default: true) - Visibility status
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

**Indexes:**
- `order` - For display sorting

**Seed Data:** 4 items (1 header + 3 data items)

---

#### DonationSettings
Global donation progress tracking (singleton).

**Fields:**
- `id` (String, CUID) - Primary key (use "default" for singleton)
- `currentValue` (Int) - Current total donations (in cents)
- `goalValue` (Int) - Donation goal (in cents)
- `patrons` (Int) - Current number of patrons
- `patronsGoal` (Int) - Patron goal number
- `updatedAt` (DateTime) - Last update timestamp

**Seed Data:** €15,000 of €50,000 goal, 45 of 100 patrons

---

### 3. Beta System Models

#### BetaCode
Invitation codes for beta access.

**Fields:**
- `id` (String, CUID) - Primary key
- `code` (String, unique) - The actual code
- `uses` (Int, default: 0) - Number of times used
- `maxUses` (Int, default: 1) - Maximum allowed uses
- `active` (Boolean, default: true) - Code validity
- `createdAt` (DateTime) - Creation timestamp

**Relations:**
- `registrations` - One-to-many with BetaRegistration

**Seed Data:** "BETA2024" code with 100 max uses

---

#### BetaRegistration
Beta program registrations.

**Fields:**
- `id` (String, CUID) - Primary key
- `email` (String, unique) - User email
- `ios` (Boolean, default: false) - Requesting iOS access
- `android` (Boolean, default: false) - Requesting Android access
- `newsletter` (Boolean, default: false) - Newsletter subscription
- `codeId` (String?, optional) - Foreign key to BetaCode
- `code` (BetaCode?, optional) - Related beta code
- `createdAt` (DateTime) - Registration timestamp

**Indexes:**
- `email` - For lookup queries

**Relations:**
- `code` - Many-to-one with BetaCode

---

### 4. Email System Models

#### Contact
Contact database for email management.

**Fields:**
- `id` (String, CUID) - Primary key
- `email` (String, unique) - Email address
- `firstName` (String?, optional) - First name
- `lastName` (String?, optional) - Last name
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

**Indexes:**
- `email` - For lookup queries

**Relations:**
- `lists` - Many-to-many with EmailList via EmailListMember
- `sentEmails` - One-to-many with SentEmail

---

#### EmailList
Email lists (newsletter, alpha, etc.).

**Fields:**
- `id` (String, CUID) - Primary key
- `name` (String, unique) - List name
- `description` (String?, optional) - Description
- `createdAt` (DateTime) - Creation timestamp

**Relations:**
- `members` - Many-to-many with Contact via EmailListMember

**Seed Data:**
- "newsletter" - Newsletter subscribers
- "alpha" - Alpha testers

---

#### EmailListMember
Junction table for Contact-EmailList many-to-many relationship.

**Fields:**
- `contactId` (String) - Foreign key to Contact
- `listId` (String) - Foreign key to EmailList
- `addedAt` (DateTime, default: now) - Subscription timestamp

**Primary Key:** Composite of `[contactId, listId]`

**Relations:**
- `contact` - Many-to-one with Contact (cascade delete)
- `list` - Many-to-one with EmailList (cascade delete)

---

#### EmailTemplate
Email templates for automated messages.

**Fields:**
- `id` (String, CUID) - Primary key
- `type` (String, unique) - Template type identifier
- `subject` (String) - Email subject line
- `bodyText` (String, Text) - Plain text body
- `bodyHtml` (String, Text) - HTML body

**Relations:**
- `sentEmails` - One-to-many with SentEmail

**Seed Data:**
- "newsletter_subscribe" - Newsletter confirmation
- "alpha_register" - Alpha registration confirmation
- "contact_confirmation" - Contact form confirmation

---

#### SentEmail
Log of sent emails.

**Fields:**
- `id` (String, CUID) - Primary key
- `contactId` (String) - Foreign key to Contact
- `templateId` (String) - Foreign key to EmailTemplate
- `sentAt` (DateTime, default: now) - Send timestamp

**Indexes:**
- `sentAt` - For chronological queries

**Relations:**
- `contact` - Many-to-one with Contact (cascade delete)
- `template` - Many-to-one with EmailTemplate

---

### 5. Admin System Models

#### AdminUser
Admin user accounts.

**Fields:**
- `id` (String, CUID) - Primary key
- `email` (String, unique) - Email address
- `passwordHash` (String) - Hashed password (bcrypt)
- `name` (String) - Display name
- `role` (String, default: "admin") - User role
- `active` (Boolean, default: true) - Account status
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

**Indexes:**
- `email` - For login queries

**Seed Data:**
- Email: admin@democracy-deutschland.de
- Password: admin123 (CHANGE IN PRODUCTION!)

---

## Relationships Summary

```
BetaCode (1) ─── (many) BetaRegistration
Contact (many) ─── (many) EmailList [via EmailListMember]
Contact (1) ─── (many) SentEmail
EmailTemplate (1) ─── (many) SentEmail
```

## Seeded Data Summary

The database is pre-populated with:
- **2 Email Lists**: newsletter, alpha
- **3 Email Templates**: newsletter_subscribe, alpha_register, contact_confirmation
- **3 FAQ Entries**: Sample questions about DEMOCRACY
- **1 Donation Settings**: €15k of €50k, 45/100 patrons
- **4 Donation Items**: 1 header + 3 spending categories
- **1 Beta Code**: "BETA2024" (100 uses available)
- **1 Admin User**: admin@democracy-deutschland.de / admin123
- **3 Roadmap Items**: Sample project milestones

## Database Operations

### Regenerate Prisma Client
```bash
pnpm run db:generate
```

### Push Schema Changes (Development)
```bash
pnpm run db:push
```

### Create Migration (Production)
```bash
pnpm run db:migrate
```

### Seed Database
```bash
pnpm run db:seed
```

### Open Prisma Studio (GUI)
```bash
pnpm run db:studio
```
Access at: http://localhost:5555

### Reset Database
```bash
docker compose down -v  # Delete volumes
docker compose up -d    # Restart containers
pnpm run db:push         # Push schema
pnpm run db:seed         # Reseed data
```

## Migration Strategy

For production deployments:
1. Create migration: `npx prisma migrate dev --name description`
2. Review generated SQL in `prisma/migrations/`
3. Test migration on staging
4. Deploy: `npx prisma migrate deploy`

## Backup Strategy

### Development
Docker volume: `nextjs-app_postgres_data`

### Production
- Regular automated backups (pg_dump)
- Point-in-time recovery enabled
- Backup retention: 30 days minimum

## Security Considerations

1. **Passwords**: All passwords are hashed with bcrypt (cost factor: 10)
2. **Email Privacy**: Email addresses are unique and indexed
3. **Cascade Deletes**: EmailListMember and SentEmail cascade on Contact deletion
4. **Default Admin**: Change admin password immediately in production!

## Performance Optimizations

**Indexes Created:**
- `Faq.order` - FAQ sorting
- `Media.publishedAt` - Chronological media queries
- `Roadmap.priority` - Priority sorting
- `DonationItem.order` - Display sorting
- `BetaRegistration.email` - Lookup queries
- `Contact.email` - Lookup queries
- `SentEmail.sentAt` - Chronological queries
- `AdminUser.email` - Login queries

## Future Enhancements (Phase 4+)

- Add full-text search on FAQ answers
- Implement soft deletes for sensitive data
- Add audit logging for admin actions
- Consider partitioning SentEmail by date
- Add database replication for high availability

---

**Last Updated:** Phase 3 Implementation  
**Schema Version:** 1.0  
**Prisma Version:** 5.22.0  
**PostgreSQL Version:** 15
