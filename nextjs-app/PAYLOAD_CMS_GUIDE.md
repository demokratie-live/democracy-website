# Payload CMS - Anleitung für Content-Editoren

## Einleitung

Willkommen beim DEMOCRACY Deutschland Content Management System (CMS). Diese Anleitung hilft Ihnen beim Erstellen und Verwalten von Inhalten für die Website.

## Zugriff zum Admin-Bereich

### URL
```
http://localhost:3000/admin
```

### Erste Anmeldung
1. Öffnen Sie die Admin-URL in Ihrem Browser
2. Beim ersten Besuch werden Sie aufgefordert, einen Admin-Benutzer zu erstellen
3. Geben Sie Ihre E-Mail-Adresse und ein sicheres Passwort ein
4. Klicken Sie auf "Erstellen"

### Nachfolgende Anmeldungen
1. Geben Sie Ihre E-Mail-Adresse ein
2. Geben Sie Ihr Passwort ein
3. Klicken Sie auf "Anmelden"

## Dashboard-Übersicht

Nach der Anmeldung sehen Sie das Hauptdashboard mit folgenden Bereichen:

### Collections (Sammlungen)
- **Seiten** - Dynamische Website-Seiten
- **FAQs** - Häufig gestellte Fragen
- **Medienberichte** - Presse- und Medienberichterstattung
- **Roadmap** - Projekt-Roadmap
- **Blog-Beiträge** - Blog-Artikel und News
- **Team-Mitglieder** - Team-Profile
- **Medien** - Bilder und Dateien
- **Admin-Benutzer** - Benutzerverwaltung

## Arbeiten mit Inhalten

### Seiten erstellen

1. Klicken Sie auf **"Seiten"** in der Navigation
2. Klicken Sie auf **"Neu erstellen"**
3. Füllen Sie die Felder aus:
   - **Titel**: Seitentitel (z.B. "Über uns")
   - **URL Slug**: URL-freundlicher Name (z.B. "ueber-uns")
   - **Inhalt**: Hauptinhalt der Seite (Rich Text Editor)
   - **Meta Titel**: SEO-Titel (optional)
   - **Meta Beschreibung**: SEO-Beschreibung (optional)
   - **Veröffentlicht**: Häkchen setzen, um die Seite zu veröffentlichen
4. Klicken Sie auf **"Speichern"**

### FAQ-Einträge verwalten

1. Klicken Sie auf **"FAQs"** in der Navigation
2. Klicken Sie auf **"Neu erstellen"**
3. Füllen Sie die Felder aus:
   - **Frage**: Die Frage
   - **Antwort**: Die Antwort (Rich Text)
   - **Reihenfolge**: Sortierungsnummer (z.B. 1, 2, 3)
   - **Aktiv**: Häkchen setzen, um den Eintrag anzuzeigen
4. Klicken Sie auf **"Speichern"**

### Medienberichte hinzufügen

1. Klicken Sie auf **"Medienberichte"** in der Navigation
2. Klicken Sie auf **"Neu erstellen"**
3. Füllen Sie die Felder aus:
   - **Titel**: Titel des Artikels
   - **Beschreibung**: Kurzbeschreibung (optional)
   - **Link zur Veröffentlichung**: URL zum Artikel
   - **Medium/Publikation**: Name der Publikation
   - **Bild**: Wählen Sie ein Bild aus der Medienbibliothek
   - **Veröffentlichungsdatum**: Datum des Artikels
4. Klicken Sie auf **"Speichern"**

### Roadmap-Items erstellen

1. Klicken Sie auf **"Roadmap"** in der Navigation
2. Klicken Sie auf **"Neu erstellen"**
3. Füllen Sie die Felder aus:
   - **Titel**: Name des Features/Projekts
   - **Beschreibung**: Detaillierte Beschreibung (Rich Text)
   - **Priorität**: Sortierungsnummer
   - **Status**: Geplant / In Bearbeitung / Abgeschlossen
   - **Zieldatum**: Geplantes Fertigstellungsdatum (optional)
4. Klicken Sie auf **"Speichern"**

### Blog-Beiträge schreiben

1. Klicken Sie auf **"Blog-Beiträge"** in der Navigation
2. Klicken Sie auf **"Neu erstellen"**
3. Füllen Sie die Felder aus:
   - **Titel**: Titel des Beitrags
   - **URL Slug**: URL-Name (z.B. "neues-feature-2024")
   - **Inhalt**: Haupttext des Beitrags (Rich Text)
   - **Kurzbeschreibung**: Teaser-Text (optional)
   - **Autor**: Ihr Name
   - **Beitragsbild**: Hauptbild für den Beitrag
   - **Veröffentlichungsdatum**: Publikationsdatum
   - **Veröffentlicht**: Häkchen setzen, um zu veröffentlichen
4. Klicken Sie auf **"Speichern"**

### Team-Mitglieder verwalten

1. Klicken Sie auf **"Team-Mitglieder"** in der Navigation
2. Klicken Sie auf **"Neu erstellen"**
3. Füllen Sie die Felder aus:
   - **Name**: Vollständiger Name
   - **Rolle**: Position im Team
   - **Biografie**: Beschreibung (Rich Text)
   - **Profilbild**: Foto des Team-Mitglieds
   - **E-Mail**: Kontakt-E-Mail (optional)
   - **Twitter Handle**: @username (optional)
   - **Reihenfolge**: Sortierungsnummer
   - **Aktiv**: Häkchen setzen, um anzuzeigen
4. Klicken Sie auf **"Speichern"**

## Rich Text Editor

Der Rich Text Editor ermöglicht formatierte Inhalte:

### Formatierungsoptionen
- **Fett**: Text hervorheben
- **Kursiv**: Text betonen
- **Unterstrichen**: Text unterstreichen
- **Überschriften**: H1, H2, H3, H4, H5, H6
- **Listen**: Aufzählungen und nummerierte Listen
- **Links**: Hyperlinks einfügen
- **Bilder**: Bilder einbetten
- **Code**: Code-Blöcke
- **Zitate**: Blockquotes

### Tastenkombinationen
- **Strg/Cmd + B**: Fett
- **Strg/Cmd + I**: Kursiv
- **Strg/Cmd + K**: Link einfügen
- **Strg/Cmd + Z**: Rückgängig
- **Strg/Cmd + Shift + Z**: Wiederholen

## Medien hochladen

### Bilder hochladen

1. Klicken Sie auf **"Medien"** in der Navigation
2. Klicken Sie auf **"Hochladen"**
3. Wählen Sie eine Datei von Ihrem Computer
4. Geben Sie einen **Alternativtext** ein (wichtig für SEO und Barrierefreiheit)
5. Klicken Sie auf **"Speichern"**

### Unterstützte Formate
- **Bilder**: JPG, PNG, GIF, WebP, SVG
- **Dokumente**: PDF

### Bilder in Inhalten verwenden
1. Im Rich Text Editor, klicken Sie auf das Bild-Symbol
2. Wählen Sie ein Bild aus der Medienbibliothek
3. Oder laden Sie ein neues Bild hoch
4. Das Bild wird in den Inhalt eingefügt

## Veröffentlichen vs. Entwurf

### Entwurf speichern
- Lassen Sie das **"Veröffentlicht"** Häkchen leer
- Der Inhalt wird gespeichert, aber nicht auf der Website angezeigt
- Sie können später weiter daran arbeiten

### Veröffentlichen
- Setzen Sie das **"Veröffentlicht"** Häkchen
- Der Inhalt wird sofort auf der Website sichtbar
- Sie können jederzeit Änderungen vornehmen

## Inhalte bearbeiten

1. Öffnen Sie die entsprechende Collection
2. Klicken Sie auf den Eintrag, den Sie bearbeiten möchten
3. Nehmen Sie Ihre Änderungen vor
4. Klicken Sie auf **"Speichern"**

## Inhalte löschen

1. Öffnen Sie die entsprechende Collection
2. Klicken Sie auf den Eintrag, den Sie löschen möchten
3. Scrollen Sie nach unten
4. Klicken Sie auf **"Löschen"**
5. Bestätigen Sie den Löschvorgang

**Achtung**: Gelöschte Inhalte können nicht wiederhergestellt werden!

## Sortierung

Einträge mit einem **"Reihenfolge"** Feld können sortiert werden:
- Niedrigere Nummern erscheinen zuerst
- Beispiel: 1, 2, 3, 4, 5
- Sie können auch Dezimalzahlen verwenden: 1.5, 2.3, etc.

## Benutzerrollen

### Admin
- Voller Zugriff auf alle Funktionen
- Kann Benutzer verwalten
- Kann alle Inhalte bearbeiten und löschen

### Editor
- Kann Inhalte erstellen und bearbeiten
- Kann eigene Inhalte löschen
- Kein Zugriff auf Benutzerverwaltung

## Tipps & Best Practices

### SEO-Optimierung
1. Füllen Sie immer Meta-Titel und Meta-Beschreibung aus
2. Verwenden Sie beschreibende URL-Slugs
3. Fügen Sie Alternativtext für alle Bilder hinzu
4. Verwenden Sie Überschriften hierarchisch (H1 → H2 → H3)

### Bilder
1. Komprimieren Sie Bilder vor dem Hochladen
2. Empfohlene Größe: Max. 2 MB pro Bild
3. Verwenden Sie aussagekräftige Dateinamen
4. Fügen Sie immer Alternativtext hinzu

### Inhalte
1. Verwenden Sie kurze, prägnante Sätze
2. Strukturieren Sie lange Texte mit Überschriften
3. Nutzen Sie Listen für bessere Lesbarkeit
4. Überprüfen Sie Rechtschreibung und Grammatik

### Workflow
1. Speichern Sie regelmäßig als Entwurf
2. Überprüfen Sie Vorschau vor Veröffentlichung
3. Testen Sie Links auf Funktionalität
4. Lassen Sie wichtige Inhalte von anderen überprüfen

## Häufige Probleme

### Kann mich nicht anmelden
- Überprüfen Sie Ihre E-Mail-Adresse
- Überprüfen Sie Ihr Passwort (Groß-/Kleinschreibung beachten)
- Kontaktieren Sie einen Administrator für Passwort-Reset

### Änderungen werden nicht angezeigt
- Überprüfen Sie, ob "Veröffentlicht" aktiviert ist
- Leeren Sie Ihren Browser-Cache
- Warten Sie einige Sekunden und aktualisieren Sie die Seite

### Bild wird nicht hochgeladen
- Überprüfen Sie die Dateigröße (max. 2 MB empfohlen)
- Überprüfen Sie das Dateiformat (JPG, PNG, GIF)
- Stellen Sie sicher, dass die Datei nicht beschädigt ist

### Rich Text Editor funktioniert nicht
- Aktualisieren Sie die Seite
- Versuchen Sie einen anderen Browser
- Leeren Sie den Browser-Cache

## Kontakt & Support

Bei Fragen oder Problemen:
- Kontaktieren Sie Ihren Administrator
- Lesen Sie die technische Dokumentation
- Erstellen Sie ein Issue auf GitHub (für technische Probleme)

## Weitere Ressourcen

- **Payload CMS Dokumentation**: https://payloadcms.com/docs
- **Projekt-Dokumentation**: Siehe `PROJECT_DOCUMENTATION.md`
- **Technische Details**: Siehe `PHASE_4_COMPLETE.md`

---

**Version**: 1.0  
**Letzte Aktualisierung**: Dezember 2024  
**Für**: DEMOCRACY Deutschland Website Redakteure
