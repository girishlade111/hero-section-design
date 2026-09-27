# Hero Section Design

A pastel, nature-inspired hero section for a creative designer portfolio — animated birds, butterflies, leaves and clouds drifting over a soft gradient sky, a big gradient headline, glassmorphic stats cards, and CTA buttons (portfolio, contact, resume download).

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

**Live demo:** https://girishlade111.github.io/hero-section-design/

## What it does

- **Animated nature scene** (`hero-section.tsx`) — pure-CSS animations: birds flapping across the sky, floating butterflies, drifting leaves, and soft clouds over a rose/sky/violet gradient background.
- **Designer portfolio hero** — large "Creative Designer" gradient headline, tagline, and three CTA buttons (View Portfolio, Contact Me, Download Resume).
- **Stats cards** — glassmorphic frosted-glass cards showing 50+ projects, 3+ years experience, 25+ happy clients (easily editable).
- **Responsive** — text scales from `text-5xl` to `text-8xl`; layout works on mobile through desktop.
- **shadcn/ui component set** — pre-wired Radix primitives (button, dialog, dropdown, tabs, toast, etc.) ready to reuse.

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui (Radix UI primitives), `class-variance-authority`, `clsx`
- **Animation:** CSS keyframe animations (no JS animation library needed)
- **Icons:** Lucide React
- **Other:** `next-themes`, `@vercel/analytics`

## Quick start

Prerequisites: Node.js 18+ and npm.

```bash
# install dependencies
npm install --legacy-peer-deps

# start the dev server
npm run dev
# open http://localhost:3000

# production build (static export to ./out)
npm run build
```

No environment variables are required — the site runs fully client-side.

## Project structure

```
hero-section-design/
├── hero-section.tsx      # The entire hero section component (animations + content)
├── app/
│   ├── page.tsx          # Renders the hero section
│   ├── layout.tsx        # Root layout (theme provider, analytics)
│   └── globals.css       # Tailwind + global styles
├── components/
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui primitives (button, dialog, input, ...)
├── lib/                  # Utilities (cn helper, etc.)
├── public/               # Static assets
├── styles/               # Extra stylesheets
├── next.config.mjs       # Static export (output: 'export') + basePath for GitHub Pages
└── components.json       # shadcn/ui config
```

## Customization

- Edit `hero-section.tsx` to change the headline, tagline, stats, and button labels/links.
- Tweak the animation delays/durations via the inline `style={{ animationDelay }}` props and Tailwind `animate-bounce` / `animate-pulse` classes.
- Replace `public/placeholder.svg` with your own background artwork.

## Deployment

The site is statically exported (`output: 'export'` in `next.config.mjs`), so it can be hosted anywhere that serves static files:

- **GitHub Pages (current):** the `out/` directory from `npm run build` is published to the `gh-pages` branch → https://girishlade111.github.io/hero-section-design/
- **Note on `basePath`:** `next.config.mjs` sets `basePath: '/hero-section-design'` for the GitHub Pages subpath. Remove the `basePath` (and keep `output: 'export'`) if you deploy to a root domain or Vercel.

## Origin

Originally generated with [v0.app](https://v0.app) and customized afterward.

---

Built by Girish Lade — https://ladestack.in
