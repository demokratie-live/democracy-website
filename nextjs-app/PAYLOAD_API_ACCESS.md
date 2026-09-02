# Payload CMS API Zugang für Copilot

Diese Dokumentation beschreibt, wie GitHub Copilot die Payload CMS REST API verwenden kann.

## Voraussetzungen

1. **Dev-Server muss laufen** auf Port 3000
2. **Zugangsdaten** müssen in `.env` hinterlegt sein:
   ```env
   PAYLOAD_ADMIN_EMAIL=payloadcms@manuelruck.de
   PAYLOAD_ADMIN_PASSWORD=<passwort>
   ```

## Authentifizierung

Die Auth-Collection heißt **`admin-users`** (nicht `users`).

### Login-Befehl
```bash
curl -s -X POST http://127.0.0.1:3000/api/admin-users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"<PAYLOAD_ADMIN_EMAIL>","password":"<PAYLOAD_ADMIN_PASSWORD>"}' | jq '.'
```

### Erfolgreiche Antwort
```json
{
  "message": "Authentication Passed",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "payloadcms@manuelruck.de",
    "role": "admin"
  }
}
```

### Token verwenden
Bei allen authentifizierten Anfragen den Token im Header mitschicken:
```bash
-H "Authorization: Bearer <token>"
```

## Verfügbare API-Endpunkte

| Collection | Endpunkt | Beschreibung |
|------------|----------|--------------|
| Pages | `/api/pages` | Seiten |
| FAQs | `/api/faqs` | Häufige Fragen |
| Blog Posts | `/api/blog-posts` | Blog-Beiträge |
| Team Members | `/api/team-members` | Team-Mitglieder |
| Media | `/api/media` | Bilder und Dateien |
| Admin Users | `/api/admin-users` | Admin-Benutzer (Auth) |

## CRUD-Operationen

### Lesen (GET)
```bash
# Alle Einträge
curl -s http://127.0.0.1:3000/api/faqs | jq '.'

# Einzelner Eintrag
curl -s http://127.0.0.1:3000/api/faqs/1 | jq '.'

# Mit Query-Parametern
curl -s "http://127.0.0.1:3000/api/faqs?limit=5&sort=-createdAt" | jq '.'
```

### Erstellen (POST)
```bash
curl -s -X POST http://127.0.0.1:3000/api/faqs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"question":"Frage?","answer":"Antwort"}' | jq '.'
```

### Aktualisieren (PATCH)
```bash
curl -s -X PATCH http://127.0.0.1:3000/api/faqs/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"answer":"Neue Antwort"}' | jq '.'
```

### Löschen (DELETE)
```bash
curl -s -X DELETE http://127.0.0.1:3000/api/faqs/1 \
  -H "Authorization: Bearer <token>" | jq '.'
```

## Medien hochladen

```bash
curl -s -X POST http://127.0.0.1:3000/api/media \
  -H "Authorization: Bearer <token>" \
  -F "file=@/pfad/zum/bild.png" \
  -F "alt=Beschreibung" | jq '.'
```

## Query-Parameter

| Parameter | Beschreibung | Beispiel |
|-----------|--------------|----------|
| `limit` | Anzahl Ergebnisse | `?limit=20` |
| `page` | Seitennummer | `?page=2` |
| `sort` | Sortierung (- für desc) | `?sort=-createdAt` |
| `where` | Filter | `?where[status][equals]=published` |
| `depth` | Tiefe für Relations | `?depth=2` |

## Wichtige Hinweise

- **Token-Gültigkeit**: JWT-Token läuft nach einiger Zeit ab, dann erneut einloggen
- **Base-URL**: Immer `http://127.0.0.1:3000` für lokale Entwicklung
- **JSON-Responses**: Alle Antworten sind JSON, `jq '.'` für formatierte Ausgabe
- **Collection-Slugs**: Die Slugs entsprechen den Definitionen in `src/payload.config.ts`
