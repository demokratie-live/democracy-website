# DEMOCRACY Deutschland Website

Official website for DEMOCRACY Deutschland - **Weil deine Stimme zählt!**

🌐 **Live:** [https://democracy-deutschland.de](https://democracy-deutschland.de)

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 20+ and pnpm

### Installation

```bash
git clone https://github.com/demokratie-live/democracy-website
cd democracy-website
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

### Linting

```bash
pnpm lint
```

## Project Structure

```
democracy-website/
├── src/
│   └── app/           # Next.js App Router pages
│       ├── layout.tsx # Root layout
│       ├── page.tsx   # Home page
│       └── globals.css # Global styles
├── public/            # Static assets
│   ├── images/        # Image files
│   ├── videos/        # Video files
│   ├── download/      # Downloadable files
│   └── fonts/         # Font files
└── package.json       # Dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

See [LICENSE](LICENSE) file for details.