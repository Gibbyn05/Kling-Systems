# Kling innholdsoversikt

Et lokalt arbeidsverktøy for å samle bilder, tekstutkast og publiseringsplan for Instagram.

## Start dashboardet

Kjør fra rotmappen:

```bash
npm run dashboard
```

Åpne deretter [http://127.0.0.1:5180](http://127.0.0.1:5180).

## Hva som lagres

- Publiseringsplan og kanalstatus lagres i nettleseren på denne maskinen.
- Bilder du laster opp lagres lokalt i nettleserens IndexedDB.
- Et innlegg sendes bare til Instagram når du velger «Publiser nå» og bekrefter handlingen.
- Token og bruker-ID leses av den lokale Vite-serveren fra `.env.local`. De sendes ikke til nettleseren.

Direkte publisering krever `INSTAGRAM_ACCESS_TOKEN` og `INSTAGRAM_USER_ID` i `.env.local`. Ikke legg tilgangsnøkler i `dashboard.js`, lokal lagring eller andre filer som sendes til Git.

Bildet må være offentlig tilgjengelig for Instagram. De godkjente standardbildene leveres gjennom `/api/instagram-media` på klingsystems.no. Lokalt opplastede bilder kan ikke publiseres direkte før en offentlig bildelagring er koblet til.
