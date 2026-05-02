# Spanisch mit Cristina — Landing Page

Conversion-optimized German landing page for Cristina's Spanish lessons (online in Switzerland, on-site in Zürich). Built for Meta ad traffic. Lead capture via WhatsApp and email form.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` icons
- Inter + Fraunces fonts (Google Fonts via `next/font`)
- Meta Pixel preserved from existing site (ID `1141162654692153`)

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Deploy

This repo auto-deploys to Vercel on push to `main`. To set up the Vercel project the first time:

1. Go to https://vercel.com/new
2. Import `thopica/spanischlandingpage`
3. Accept defaults (Next.js auto-detected)
4. Deploy

After that, every `git push` triggers a new deploy.

## Environment variables (set in Vercel dashboard)

| Var | Used by | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form | Yes — see setup below |

### Web3Forms setup (one-time, ~60 seconds)

1. Go to https://web3forms.com → enter `mcristinacaamano@gmail.com` as the destination email → confirm.
2. Copy the **access key** they email you (looks like a UUID, e.g. `1234abcd-...`).
3. In Vercel: **Settings → Environment Variables → Add**
   - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: *(paste the key)*
   - Environments: Production, Preview, Development (all three)
4. Redeploy (Vercel UI: **Deployments → ... → Redeploy**).

If the key isn't set, the form falls back to a friendly error message pointing users to WhatsApp — so the page never appears broken.

For local dev, create `.env.local` in the project root:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
```

## Feature roadmap

- [x] **Feature 1** — Foundation, Hero, sticky mobile CTA, Meta Pixel, SEO
- [x] **Feature 2** — Testimonials + Vorteile (benefits)
- [x] **Feature 3** — Methode + Preis + Über mich
- [x] **Feature 4** — FAQ + contact form (wired to Web3Forms → `mcristinacaamano@gmail.com`)
- [x] **Feature 5** — Footer, Impressum page, robots/sitemap, structured data, polish

## Pending content TODOs (open in code)

- `app/impressum/page.tsx` — fill in real **Strasse + Hausnummer** and **PLZ + Ort** (Swiss legal requirement when running paid ads)
- `public/images/cristina.jpg` — replace with a real portrait of Cristina (currently the small Über-mich photo is reused; the hero still shows the original landscape promo image)

## Project structure

```
app/
  layout.tsx           # German locale, SEO meta, Meta Pixel
  page.tsx             # Composes the landing page sections + LocalBusiness JSON-LD
  globals.css          # Tailwind v4 + brand tokens
  icon.svg             # Favicon
  robots.ts            # robots.txt (allows all, points to sitemap)
  sitemap.ts           # sitemap.xml (home + impressum)
  impressum/page.tsx   # Swiss legal page (TODO: fill address)
components/
  Header.tsx           # Minimal logo header
  Hero.tsx             # Headline, CTAs, trust pills, photo
  Testimonials.tsx     # 4 student quotes with stars
  Vorteile.tsx         # 4 benefit cards (1:1, 60 Min, flexibel, keine Abos)
  Methode.tsx          # 3-step explainer
  Preis.tsx            # Dark-themed pricing card
  UeberMich.tsx        # Bio + portrait + credential pills
  Faq.tsx              # 5-entry accordion
  Kontakt.tsx          # Form (Web3Forms) + side card with WhatsApp/email
  Footer.tsx           # Contact + Impressum link + copyright
  StickyMobileCta.tsx  # Fixed bottom bar, hides when contact section is visible
  WhatsAppLink.tsx     # Tracked WhatsApp anchor (fires Meta Pixel Lead)
lib/
  links.ts             # Single source of truth for WhatsApp / email / phone
  track.ts             # Meta Pixel helpers (trackLead)
public/
  images/cristina.jpg          # Hero photo
  images/cristina-portrait.jpg # Über mich portrait
```
