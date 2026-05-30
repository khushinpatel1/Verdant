# Verdant Studio

> Cross-project working rules live in `~/.claude/CLAUDE.md`. This file is what's really
> going on in *this* project.

## What this is
Marketing site for Verdant Studio — a privacy-first software studio ("software built for
people, not advertisers"). A single-page React app, client-side routed.

## Stack
- React 19 + React Router 7 (SPA, `BrowserRouter`).
- Vite 6. Scripts: `npm run dev` (port 5173) · `npm run build` · `npm run preview`.
- Plain CSS with custom properties in `src/index.css`. No CSS framework.
- No backend, no database, no API routes. Static front-end only.
- **Deploy:** push to GitHub → Cloudflare builds and runs `npx wrangler deploy` (Worker
  named `verdant`, Vite framework preset). Deep-link SPA routing (e.g. `/team/:slug`) is
  handled by the Worker asset config `not_found_handling: "single-page-application"` —
  do **not** add a `public/_redirects` file; Cloudflare's Worker validation rejects the
  `/* /index.html 200` rule as an infinite loop and the deploy fails.

## File map
- `index.html` → mounts `src/main.jsx` → `src/App.jsx` (defines routes).
- Pages (`src/pages/`): `Studio.jsx` (home `/`), `Garden.jsx` (`/garden`), `Emerald.jsx`
  (`/emerald`), `Ethos.jsx` (`/about`), `Team.jsx` (`/team`), `Profile.jsx` (`/team/:slug`).
- Components (`src/components/`): `Nav.jsx`, `Footer.jsx`.
- `src/useReveal.js` — scroll-reveal hook.
- `src/index.css` — ALL styles, design tokens at `:root`. This file is large; edit it
  surgically, never rewrite it whole.

## The muse — the Japanese garden (company-wide)
Verdant's core inspiration, threading every project: **the Japanese garden.** Moon + flower,
green, stillness. **Serenity, meditation, peace of mind. Subtle, but efficient** — meticulously
composed yet effortless; nothing extra, everything intentional. Stillness with life moving
slowly underneath (water, moonlight). When in doubt, ask: *does this feel like a Japanese
garden?* Palette: moonlight whites/creams, moss greens, earthy browns.

## Visual direction
Organic, asymmetric, layered. Watercolor logic — colors bleed at edges, elements overlap.
Never a clean grid. Never default AI symmetry. Multiple depths. Imperfection is intentional.
The current site language is **"Blend"** — editorial-botanical with gallery restraint
(big Newsreader serif, flat cream paper, hairline rules, hand/painted botanical accents, a
muted watercolor-fluid background that whispers). **Never reintroduce the old AI tells:**
glassmorphism/frosted cards, gradient "blob" backgrounds, pill status badges, uniform fat
radii + soft shadows, decorative tickers. The world feels grown, not designed.

## Typography (CSS vars in `src/index.css`)
- `--ff-display`: **Newsreader** — headlines. Editorial high-contrast serif, composed (not whimsical).
- `--ff-body`: **Hanken Grotesque** — UI / body.
- `--ff-mono`: **DM Mono** — data / labels.
Always reference the vars, never hardcode a font name.

## Colors (CSS vars in `src/index.css`)
forest-dark `#15300A` / forest `#2D5016` · moss `#7A9E7E` · sage `#C8D5B9` · parchment `#F4EEE2` ·
cream `#FBF8F2` · amber `#8B6914` · gold `#C8973F` · terra `#6B3F2A`.
Use the `--var` tokens, never raw hex in components.

## Project rules
- One section at a time — finish it before starting the next.
- Ask before structural / layout decisions.
- `src/index.css` is large: surgical edits only, never a whole-file rewrite.
