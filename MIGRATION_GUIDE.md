# DEMOCRACY Website - Migration to Next.js Guide

## Overview

This document provides a step-by-step guide for migrating the DEMOCRACY Deutschland website from PHP to Next.js with a headless CMS.

## Phase 1: Project Setup

### 1.1 Initialize Next.js Project

```bash
# Create Next.js project with TypeScript
npx create-next-app@latest democracy-nextjs --typescript --tailwind --app --src-dir

cd democracy-nextjs
```

### 1.2 Install Core Dependencies

```bash
# Core dependencies
pnpm install @prisma/client prisma
pnpm install nodemailer
pnpm install bcryptjs jsonwebtoken
pnpm install zod
pnpm install react-hook-form
pnpm install @tanstack/react-query

# Development dependencies
pnpm install -D @types/nodemailer @types/bcryptjs @types/jsonwebtoken
```

### 1.3 Project Structure

```
democracy-nextjs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/          # Public pages
│   │   │   ├── page.tsx       # Home
│   │   │   ├── wahlometer/
│   │   │   ├── donate/
│   │   │   ├── faq/
│   │   │   ├── contact/
│   │   │   └── ...
│   │   ├── admin/             # Admin dashboard
│   │   │   ├── faq/
│   │   │   ├── media/
│   │   │   ├── beta/
│   │   │   └── donations/
│   │   ├── api/               # API routes
│   │   │   ├── mail/
│   │   │   ├── subscribe/
│   │   │   ├── beta/
│   │   │   └── donations/
│   │   └── layout.tsx
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── forms/            # Form components
│   │   ├── sections/         # Page sections
│   │   └── admin/            # Admin components
│   ├── lib/                   # Utilities
│   │   ├── prisma.ts         # Prisma client
│   │   ├── email.ts          # Email utilities
│   │   ├── auth.ts           # Authentication
│   │   └── validation.ts     # Validation schemas
│   └── types/                 # TypeScript types
├── prisma/
│   └── schema.prisma         # Database schema
├── public/                    # Static assets
│   ├── images/
│   ├── videos/
│   └── downloads/
└── docker/
    ├── Dockerfile
    ├── docker-compose.yml
    └── strapi/               # CMS configuration
```

## Phase 2: Database Setup

### 2.1 Prisma Schema

Create `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Content Management
model Page {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  content   Json
  metaTitle String?
  metaDesc  String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Faq {
  id        String   @id @default(cuid())
  question  String
  answer    String   @db.Text
  order     Int
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([order])
}

model Media {
  id          String   @id @default(cuid())
  title       String
  description String?  @db.Text
  url         String
  outlet      String?
  imageUrl    String?
  publishedAt DateTime
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([publishedAt])
}

model Roadmap {
  id          String   @id @default(cuid())
  title       String
  description String?  @db.Text
  priority    Int
  status      String   // planned, in-progress, completed
  targetDate  DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([priority])
}

// Donation System
model DonationItem {
  id          String   @id @default(cuid())
  type        String   // head, data
  order       Int
  title       String
  description String?  @db.Text
  value       Int
  maxValue    Int
  active      Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([order])
}

model DonationSettings {
  id           String   @id @default(cuid())
  currentValue Int
  goalValue    Int
  patrons      Int
  patronsGoal  Int
  updatedAt    DateTime @updatedAt
}

// Beta System
model BetaCode {
  id         String   @id @default(cuid())
  code       String   @unique
  uses       Int      @default(0)
  maxUses    Int      @default(1)
  active     Boolean  @default(true)
  createdAt  DateTime @default(now())
  
  registrations BetaRegistration[]
}

model BetaRegistration {
  id          String   @id @default(cuid())
  email       String   @unique
  ios         Boolean  @default(false)
  android     Boolean  @default(false)
  newsletter  Boolean  @default(false)
  codeId      String?
  code        BetaCode? @relation(fields: [codeId], references: [id])
  createdAt   DateTime @default(now())

  @@index([email])
}

// Email System
model Contact {
  id        String   @id @default(cuid())
  email     String   @unique
  firstName String?
  lastName  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  lists EmailListMember[]
  sentEmails SentEmail[]

  @@index([email])
}

model EmailList {
  id          String   @id @default(cuid())
  name        String   @unique
  description String?
  createdAt   DateTime @default(now())

  members EmailListMember[]
}

model EmailListMember {
  contactId String
  listId    String
  contact   Contact   @relation(fields: [contactId], references: [id], onDelete: Cascade)
  list      EmailList @relation(fields: [listId], references: [id], onDelete: Cascade)
  addedAt   DateTime  @default(now())

  @@id([contactId, listId])
}

model EmailTemplate {
  id       String @id @default(cuid())
  type     String @unique
  subject  String
  bodyText String @db.Text
  bodyHtml String @db.Text

  sentEmails SentEmail[]
}

model SentEmail {
  id         String        @id @default(cuid())
  contactId  String
  templateId String
  contact    Contact       @relation(fields: [contactId], references: [id], onDelete: Cascade)
  template   EmailTemplate @relation(fields: [templateId], references: [id])
  sentAt     DateTime      @default(now())

  @@index([sentAt])
}

// Admin System
model AdminUser {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String
  name         String
  role         String   @default("admin")
  active       Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@index([email])
}
```

### 2.2 Initialize Database

```bash
# Generate Prisma Client
npx prisma generate

# Create migration
npx prisma migrate dev --name init

# Seed database (optional)
npx prisma db seed
```

## Phase 3: Headless CMS Setup

### 3.1 Choose CMS: Payload CMS (Recommended)

Payload CMS is modern, TypeScript-based, and self-hosted.

Install Payload:

```bash
pnpm install payload @payloadcms/bundler-webpack @payloadcms/db-postgres @payloadcms/richtext-slate
```

### 3.2 Payload Configuration

Create `payload.config.ts`:

```typescript
import { buildConfig } from 'payload/config';
import path from 'path';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  collections: [
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'published',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    // Add more collections for FAQ, Media, etc.
  ],
  admin: {
    user: 'admin-users',
    bundler: webpackBundler(),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
```

### 3.3 Alternative: Strapi

If you prefer Strapi:

```bash
npx create-strapi-app@latest cms --quickstart --typescript
```

Configure content types matching the database schema.

## Phase 4: API Routes Migration

### 4.1 Email API Route

Create `src/app/api/mail/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail, createContact } from '@/lib/email';

const contactSchema = z.object({
  type: z.enum(['contact', 'bugreport', 'volunteer']),
  email: z.string().email(),
  vorname: z.string().optional(),
  nachname: z.string().optional(),
  name: z.string().optional(),
  message: z.string(),
  files: z.any().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Create contact in database
    await createContact(data.email, data.vorname, data.nachname);

    // Send email based on type
    await sendEmail({
      to: 'contact@democracy-deutschland.de',
      type: data.type,
      data,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

### 4.2 Newsletter Subscribe API

Create `src/app/api/subscribe/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

const subscribeSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = subscribeSchema.parse(body);

    // Create or update contact
    const contact = await prisma.contact.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    // Add to newsletter list
    const newsletterList = await prisma.emailList.findUnique({
      where: { name: 'newsletter' },
    });

    if (newsletterList) {
      await prisma.emailListMember.upsert({
        where: {
          contactId_listId: {
            contactId: contact.id,
            listId: newsletterList.id,
          },
        },
        update: {},
        create: {
          contactId: contact.id,
          listId: newsletterList.id,
        },
      });
    }

    // Send confirmation email
    await sendEmail({
      to: email,
      type: 'newsletter_subscribe',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
```

### 4.3 Beta Registration API

Create `src/app/api/beta/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

const betaSchema = z.object({
  ios: z.boolean(),
  android: z.boolean(),
  email: z.string().email(),
  code: z.string(),
  newsletter: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = betaSchema.parse(body);

    // Validate beta code
    const betaCode = await prisma.betaCode.findUnique({
      where: { code: data.code, active: true },
    });

    const codeValid = betaCode && betaCode.uses < betaCode.maxUses;

    // Create contact
    const contact = await prisma.contact.upsert({
      where: { email: data.email },
      update: {},
      create: { email: data.email },
    });

    // Add to alpha list
    const alphaList = await prisma.emailList.findUnique({
      where: { name: 'alpha' },
    });

    if (alphaList) {
      await prisma.emailListMember.upsert({
        where: {
          contactId_listId: {
            contactId: contact.id,
            listId: alphaList.id,
          },
        },
        update: {},
        create: {
          contactId: contact.id,
          listId: alphaList.id,
        },
      });
    }

    // Add to newsletter if requested
    if (data.newsletter) {
      const newsletterList = await prisma.emailList.findUnique({
        where: { name: 'newsletter' },
      });

      if (newsletterList) {
        await prisma.emailListMember.upsert({
          where: {
            contactId_listId: {
              contactId: contact.id,
              listId: newsletterList.id,
            },
          },
          update: {},
          create: {
            contactId: contact.id,
            listId: newsletterList.id,
          },
        });
      }
    }

    // Check existing registration
    const existingReg = await prisma.betaRegistration.findUnique({
      where: { email: data.email },
    });

    if (existingReg) {
      throw new Error('Email already registered for beta');
    }

    // Create beta registration
    await prisma.betaRegistration.create({
      data: {
        email: data.email,
        ios: data.ios,
        android: data.android,
        newsletter: data.newsletter,
        codeId: betaCode?.id,
      },
    });

    // Update code usage
    if (codeValid && betaCode) {
      await prisma.betaCode.update({
        where: { id: betaCode.id },
        data: { uses: { increment: 1 } },
      });
    }

    // Send confirmation email
    await sendEmail({
      to: data.email,
      type: 'alpha_register',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Beta registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to register' },
      { status: 500 }
    );
  }
}
```

### 4.4 Donation Status API

Create `src/app/api/donations/status/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const settings = await prisma.donationSettings.findFirst();
    const items = await prisma.donationItem.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    });

    const response = {
      donation_value: settings?.currentValue || 0,
      donation_value_goal: settings?.goalValue || 0,
      donation_percentage: settings
        ? Math.round((settings.currentValue / settings.goalValue) * 100)
        : 0,
      donation_paten: settings?.patrons || 0,
      donation_paten_goal: settings?.patronsGoal || 0,
      donation_data: items.map((item) => ({
        id: item.id,
        order: item.order,
        type: item.type,
        title: item.title,
        description: item.description,
        value: item.value,
        max: item.maxValue,
        percentage:
          item.type === 'data'
            ? Math.round((item.value / item.maxValue) * 100)
            : 0,
      })),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Donation status error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch donation status' },
      { status: 500 }
    );
  }
}
```

## Phase 5: Frontend Pages

### 5.1 Home Page

Create `src/app/(public)/page.tsx`:

```typescript
import Link from 'next/link';
import Image from 'next/image';
import { FeatureBadges } from '@/components/sections/FeatureBadges';
import { VideoSection } from '@/components/sections/VideoSection';
import { TargetAudience } from '@/components/sections/TargetAudience';
import { PressLogos } from '@/components/sections/PressLogos';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold">DEMOCRACY</h1>
                <div className="flex items-baseline gap-2">
                  <span className="text-8xl font-bold">1.5</span>
                </div>
                <h2 className="text-4xl font-bold">
                  Weil deine Stimme zählt!
                </h2>
                
                {/* Download Badges */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <Link
                    href="https://apps.apple.com/app/democracy/id1341311202"
                    className="block"
                  >
                    <div className="h-16 bg-white/10 rounded-lg hover:bg-white/20 transition" />
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=de.democracy"
                    className="block"
                  >
                    <div className="h-16 bg-white/10 rounded-lg hover:bg-white/20 transition" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="https://app.democracy-deutschland.de"
                    className="text-white hover:underline"
                  >
                    zur Browserversion
                  </Link>
                  <div className="space-x-2">
                    <Link
                      href="/files/download/democracy-app.aab"
                      className="text-white hover:underline"
                    >
                      AAB
                    </Link>
                    <span>/</span>
                    <Link
                      href="/files/download/democracy-app.apk"
                      className="text-white hover:underline"
                    >
                      APK (v1.5.10)
                    </Link>
                    <span> laden</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-1">
              <div className="relative aspect-[9/16] max-w-xs mx-auto">
                <Image
                  src="/images/List.png"
                  alt="DEMOCRACY App Screenshot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-bold mb-8">
                Alle Funktionen von DEMOCRACY
              </h2>
              <FeatureBadges />
            </div>
            <div className="lg:col-span-5">
              {/* Video preview */}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <TargetAudience />

      {/* Press Section */}
      <PressLogos />
    </main>
  );
}
```

### 5.2 Component Example: Feature Badges

Create `src/components/sections/FeatureBadges.tsx`:

```typescript
'use client';

import { useState } from 'react';
import Image from 'next/image';

const features = [
  {
    id: 'list',
    icon: '/images/group6@3x.png',
    iconActive: '/images/group6@3x.t.png',
    title: 'Wähle',
    description:
      'einen aktuellen, vergangenen oder populären Vorgang des Deutschen Bundestages',
    video: '/videos/DDW-List_croped.mp4',
  },
  // ... more features
];

export function FeatureBadges() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <div className="space-y-4">
      {features.map((feature) => (
        <button
          key={feature.id}
          onClick={() => setActiveFeature(feature.id)}
          className={`w-full flex items-start gap-4 p-4 rounded-lg transition ${
            activeFeature === feature.id
              ? 'bg-blue-50'
              : 'hover:bg-gray-50'
          }`}
        >
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={
                activeFeature === feature.id
                  ? feature.iconActive
                  : feature.icon
              }
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="text-left">
            <strong>{feature.title}</strong> {feature.description}
          </div>
        </button>
      ))}
    </div>
  );
}
```

## Phase 6: Admin Dashboard

### 6.1 Admin Layout

Create `src/app/admin/layout.tsx`:

```typescript
import { AdminNav } from '@/components/admin/AdminNav';
import { AdminAuth } from '@/components/admin/AdminAuth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuth>
      <div className="flex h-screen bg-gray-100">
        <AdminNav />
        <main className="flex-1 overflow-auto p-8">{children}</main>
      </div>
    </AdminAuth>
  );
}
```

### 6.2 FAQ Management

Create `src/app/admin/faq/page.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/Button';
import { FaqForm } from '@/components/admin/FaqForm';

export default function AdminFaqPage() {
  const [editing, setEditing] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { data: faqs } = useQuery({
    queryKey: ['admin', 'faqs'],
    queryFn: () => fetch('/api/admin/faq').then((r) => r.json()),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/admin/faq/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'faqs'] });
    },
  });

  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">FAQ Management</h1>
        <Button onClick={() => setEditing('new')}>Add New FAQ</Button>
      </div>

      {editing && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow">
          <FaqForm
            faqId={editing === 'new' ? undefined : editing}
            onSuccess={() => {
              setEditing(null);
              queryClient.invalidateQueries({ queryKey: ['admin', 'faqs'] });
            }}
            onCancel={() => setEditing(null)}
          />
        </div>
      )}

      <div className="space-y-4">
        {faqs?.map((faq: any) => (
          <div key={faq.id} className="p-6 bg-white rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditing(faq.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteMutation.mutate(faq.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Phase 7: Docker Configuration

### 7.1 Dockerfile for Next.js

Create `docker/Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN pnpm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build Next.js
RUN pnpm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### 7.2 Docker Compose

Create `docker/docker-compose.yml`:

```yaml
version: '3.9'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: democracy
      POSTGRES_PASSWORD: democracy_pass
      POSTGRES_DB: democracy_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U democracy"]
      interval: 10s
      timeout: 5s
      retries: 5

  nextjs:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://democracy:democracy_pass@postgres:5432/democracy_db
      NEXTAUTH_URL: http://localhost:3000
      NEXTAUTH_SECRET: your-secret-key-here
    depends_on:
      postgres:
        condition: service_healthy
    volumes:
      - ../public:/app/public

volumes:
  postgres_data:
```

## Phase 8: Data Migration

### 8.1 Export Existing Data

Create migration script `scripts/export-data.php`:

```php
<?php
// Run on old system to export data
require_once 'config.php';

$tables = ['faq', 'media', 'roadmap', 'donate', 'beta', 'contact'];
$data = [];

foreach ($tables as $table) {
    $result = $db->query("SELECT * FROM $table");
    $data[$table] = $result->fetch_all(MYSQLI_ASSOC);
}

file_put_contents('migration-data.json', json_encode($data, JSON_PRETTY_PRINT));
```

### 8.2 Import to New System

Create `scripts/import-data.ts`:

```typescript
import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function importData() {
  const data = JSON.parse(fs.readFileSync('migration-data.json', 'utf-8'));

  // Import FAQ
  for (const faq of data.faq) {
    await prisma.faq.create({
      data: {
        question: faq.question,
        answer: faq.answer,
        order: parseInt(faq.order),
        active: Boolean(faq.active),
      },
    });
  }

  // Import Media
  for (const media of data.media) {
    await prisma.media.create({
      data: {
        title: media.title,
        description: media.description,
        url: media.url,
        outlet: media.outlet,
        imageUrl: media.image_url,
        publishedAt: new Date(media.published_at),
      },
    });
  }

  // Continue for other tables...
  
  console.log('Data import completed!');
}

importData()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

Run the import:

```bash
npx ts-node scripts/import-data.ts
```

## Phase 9: Testing

### 9.1 Setup Testing

```bash
pnpm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
pnpm install -D @playwright/test
```

### 9.2 Example Test

Create `src/app/(public)/__tests__/page.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByText('DEMOCRACY')).toBeInTheDocument();
  });

  it('displays download links', () => {
    render(<HomePage />);
    expect(screen.getByText('zur Browserversion')).toBeInTheDocument();
  });
});
```

## Phase 10: Deployment Checklist

- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Set up email service (SMTP)
- [ ] Configure domain and SSL
- [ ] Set up CI/CD pipeline
- [ ] Migrate production data
- [ ] Test all functionality
- [ ] Set up monitoring and logging
- [ ] Create backup strategy
- [ ] Update DNS records
- [ ] Deploy!

## Environment Variables

Create `.env.example`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/democracy_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Email
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="your-email@example.com"
SMTP_PASSWORD="your-password"
SMTP_FROM="noreply@democracy-deutschland.de"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

## Migration Timeline Estimate

- **Phase 1-2:** Setup (1-2 days)
- **Phase 3:** CMS Setup (2-3 days)
- **Phase 4:** API Migration (3-4 days)
- **Phase 5:** Frontend Pages (5-7 days)
- **Phase 6:** Admin Dashboard (3-5 days)
- **Phase 7:** Docker (1-2 days)
- **Phase 8:** Data Migration (2-3 days)
- **Phase 9:** Testing (3-5 days)
- **Phase 10:** Deployment (2-3 days)

**Total Estimated Time:** 22-36 days (depending on team size and complexity)

## Support and Resources

- Next.js Documentation: https://nextjs.org/docs
- Prisma Documentation: https://www.prisma.io/docs
- Payload CMS: https://payloadcms.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

**Last Updated:** December 2024
