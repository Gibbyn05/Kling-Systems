# Kling innholdsoversikt

Et lokalt arbeidsverktøy for å samle bilder, tekstutkast og publiseringsplan for Facebook og Instagram.

## Start dashboardet

Kjør fra rotmappen:

```bash
npm run dashboard
```

Åpne deretter [http://127.0.0.1:5180](http://127.0.0.1:5180).

## Hva som lagres

- Publiseringsplan og kanalstatus lagres i nettleseren på denne maskinen.
- Bilder du laster opp lagres lokalt i nettleserens IndexedDB.
- Ingenting sendes til Meta, Facebook, Instagram eller andre tjenester.

Direkte publisering krever en Meta-app, nødvendige Graph API-tillatelser og en serverfunksjon som oppbevarer tilgangsnøkkelen sikkert. Ikke legg tilgangsnøkler i `dashboard.js`, lokal lagring eller andre filer som sendes til Git.
