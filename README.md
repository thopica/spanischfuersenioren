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
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form (Feature 4) | Yes — sign up at https://web3forms.com (free, 60 sec) and paste the access key |

## Feature roadmap

- [x] **Feature 1** — Foundation, Hero, sticky mobile CTA, Meta Pixel, SEO
- [ ] **Feature 2** — Testimonials + Vorteile (benefits)
- [ ] **Feature 3** — Methode + Preis + Über mich
- [ ] **Feature 4** — FAQ + contact form (wired to Web3Forms → `mcristinacaamano@gmail.com`)
- [ ] **Feature 5** — Footer, Impressum page, sitemap, polish

## Project structure

```
app/
  layout.tsx       # German locale, SEO meta, Meta Pixel
  page.tsx         # Composes the landing page sections
  globals.css      # Tailwind v4 + brand tokens
  icon.svg         # Favicon
components/
  Header.tsx       # Minimal logo header (no nav links — single-goal page)
  Hero.tsx         # Headline, CTAs, trust pills, photo
  StickyMobileCta.tsx  # Fixed bottom bar, mobile only
lib/
  links.ts         # Single source of truth for WhatsApp / email / phone
public/
  images/cristina.jpg  # Photo from existing site
```
