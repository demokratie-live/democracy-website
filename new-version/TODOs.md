# TODO's

schaue zum vergleich die Seite https://democracy-deutschland.de/ an.

## Now

- [ ] **Endpoints für BugReportForm & HelpOutForm setzen**: `NEXT_PUBLIC_BUG_REPORT_ENDPOINT` und `NEXT_PUBLIC_HELP_OUT_ENDPOINT` (z. B. Formspree, Netlify Forms oder Custom) – solange leer, fällt das Formular auf `mailto:` zurück. Siehe `src/components/mdx/BugReportForm.tsx` und `HelpOutForm.tsx`.
- [ ] new-version/src/components/blocks/AppBadges.tsx: auf http://localhost:3000 die links zu " AAB / APK" fehlen. vergleiche mit https://democracy-deutschland.de/#!home
- [ ] new-version/content/pages/wahlometer.mdx: die ComparisonTable wird nicht gerendet
- [ ] new-version/src/components/blocks/TeamGrid.tsx: Bei "Unser Team" fehlen die Bilder.
- [ ] auf der presse seite sollen alle teaser thumbnails haben.
- [ ] die teaser sollen nach datum sortiert sein, damit die neuesten zuerst kommen.
- [ ] new-version/content/donate/config.yaml: das goal soll aus der config entfernt werden und automatisch auf basis von categories[].amount berechnet werden
- [ ] die PR kommentare https://github.com/demokratie-live/democracy-website/pull/82 analysieren bewerten, commentieren und falls sinvoll umsetzen
- [ ] beim tech stack sollen icons mit angezeigt werden


## Later

- [ ] es soll visual regression tests für componenten geben