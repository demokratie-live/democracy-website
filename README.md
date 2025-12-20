# https://democracy-deutschland.de

## ⚠️ WICHTIG: NextJS Refactoring in Arbeit

Dieses Projekt wird gerade komplett auf moderne Technologien umgestellt. Die aktuelle Version nutzt noch PHP, wird aber zu Next.js migriert.

### 📚 Refactoring Dokumentation

- **[PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md)** - Vollständige Dokumentation des aktuellen Systems
- **[MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)** - Schritt-für-Schritt Migrations-Anleitung
- **[REFACTORING_ROADMAP.md](REFACTORING_ROADMAP.md)** - Detaillierter 15-Phasen Roadmap (12-13 Wochen)
- **[SUMMARY.md](SUMMARY.md)** - Zusammenfassung und nächste Schritte

### Geplanter Tech-Stack (Neu)

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **CMS**: Payload CMS (Open-Source, selbst-gehostet)
- **Database**: PostgreSQL mit Prisma ORM
- **Deployment**: Docker Compose

---

## Current Setup (Legacy PHP - wird ersetzt)

### contributing

```bash
git clone https://github.com/demokratie-live/democracy-website
cd democracy-website
```

run your local php server

duplicate `config.dist.php` in root folder and name it `config.php`
setting up your `config.php`

import mysql structure from `democracy_website.sql` into your database

### convert videos

mp4
`ffmpeg -i DDW-List.mp4 -filter:v "crop=540:1080:0:0" -an -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p  DDW-List_croped.mp4 -y`

`ffmpeg -i DDW-List.mp4 -filter:v "crop=540:1080:0:0" -an -c vp9 -b:v 0 -crf 41  DDW-List_croped.webm -y`