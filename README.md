# Kong Visual — Landing Page

A Next.js (App Router) + TypeScript + Tailwind marketing page for **Kong Visual**,
built to the brand brief: primary blue `#0B5FFF`, white, and red `#E53935` used
only for CTAs and highlights.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's included

- `app/layout.tsx` — fonts (Space Grotesk / Inter / IBM Plex Mono) and metadata
- `app/page.tsx` — assembles the sections below
- `components/Nav.tsx` — sticky header with mobile menu
- `components/Hero.tsx` + `components/PromptDemo.tsx` — the signature moment:
  an animated "type a prompt → watch a flyer assemble itself" demo, built
  with real layout elements (no external images), looping automatically
- `components/Features.tsx` — the six core tools
- `components/TemplateShowcase.tsx` — filterable template grid with CSS-drawn
  layout schematics standing in for real template thumbnails
- `components/Testimonials.tsx`, `components/FAQ.tsx`, `components/Contact.tsx`,
  `components/Footer.tsx`

## Design tokens

| Token | Value |
|---|---|
| `brand.blue` | `#0B5FFF` |
| `brand.blueDark` | `#0A1A3C` |
| `brand.blueTint` | `#F3F6FF` |
| `brand.red` | `#E53935` (CTAs/accents only) |
| `brand.ink` | `#10131A` |
| Display font | Space Grotesk |
| Body font | Inter |
| Utility/mono font | IBM Plex Mono |

## Notes on scope

This is the **marketing landing page only** — it's static and has no backend.
It doesn't include auth, the dashboard, the drag-and-drop editor, AI image
generation, or file export, since those need real infrastructure (Supabase,
Cloudinary, an image-gen API, etc.) and API keys to function. The full product
brief for those is much larger in scope; happy to scaffold the dashboard or
editor next as a follow-up.

## Stack

Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, lucide-react.
