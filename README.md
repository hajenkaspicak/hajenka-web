# Hájenka Špičák – web

Jednostránkový web v češtině: úvodní snímek, ubytování s ceníkem, fotogalerie, výlety po okolí, reference z e-chalupy.cz a poptávkový formulář. Postavený na [Astro](https://astro.build), obsah se upravuje v [Sveltia CMS](https://github.com/sveltia/sveltia-cms) na adrese `/admin/`.

## Spuštění

```bash
npm install
npm run dev      # http://localhost:4321, administrace na /admin/
npm run build    # výsledek ve složce dist/
```

Potřebuje Node 22 nebo novější.

## Kde je co

| Obsah | Soubor | V administraci |
| --- | --- | --- |
| Headline, úvodní snímek, galerie, výlety, recenze | `src/content/pages/home.md` | Stránky → Úvodní stránka |
| Hájenka a apartmán včetně ceníku | `src/content/objects/*.md` | Ubytování a ceník |
| Obchodní podmínky, ochrana údajů, cookies, poděkování | `src/content/pages/*.md` | Stránky |
| Adresa, telefon, e-mail, klíč formuláře, captcha | `src/content/settings/site.json` | Nastavení webu a kontakty |
| Fotografie | `src/assets/uploads/` | nahrávají se přes CMS |

Fotografie se při sestavení zmenšují a převádějí do WebP, stačí nahrát originál.

## Formulář

Odesílá přes [Web3Forms](https://web3forms.com) na e-mail, ke kterému patří klíč (Access Key). Proti spamu: skryté pole a captcha. Výchozí je **hCaptcha**, která je ve Web3Forms zdarma (v jejich dashboardu ji zapněte jako Block Spam). **Google reCAPTCHA v3** jde zapnout v Nastavení webu, ale Web3Forms ji podporuje jen v placeném tarifu Pro. Skript captchy se načítá až při vyplňování formuláře.

## Spuštění naostro

Do té doby je web skrytý před vyhledávači (`noindex`, `robots.txt`) a má pruh „Testovací verze“. Při spuštění nastavte v buildu proměnnou `PUBLIC_INDEXABLE=true`.
