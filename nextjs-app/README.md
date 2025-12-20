# DEMOCRACY Deutschland - Next.js Application

This is the modern Next.js application for the DEMOCRACY Deutschland website, implementing Phase 2+ of the refactoring project.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for local database)

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start Docker services (PostgreSQL + MailHog):**
```bash
docker-compose up -d
```

3. **Set up database:**
```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database
npm run db:push
```

4. **Start development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📁 Project Structure

```
nextjs-app/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                     # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (public)/         # Public pages
│   │   ├── admin/            # Admin dashboard
│   │   └── api/              # API routes
│   ├── components/            # React components
│   ├── lib/                   # Utilities
│   └── types/                 # TypeScript types
├── .env.local                 # Environment variables
├── docker-compose.yml         # Local development services
└── package.json
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## 🏗️ Implementation Status

### Phase 2: Environment Setup ✅
- [x] Next.js 14+ with TypeScript
- [x] Tailwind CSS configuration
- [x] Prisma schema design
- [x] Docker Compose setup
- [x] Core utilities

### Next Phases
See [REFACTORING_ROADMAP.md](../REFACTORING_ROADMAP.md) for complete roadmap.

---

**Current Phase**: 2 (Environment Setup) ✅
