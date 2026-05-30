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
- **Deploy:** push to GitHub → Cloudflare Pages builds it. Because it's a `BrowserRouter`
  SPA with deep links (e.g. `/team/:slug`), `public/_redirects` maps `/* /index.html 200`
  so direct hits and refreshes on deep links don't 404. Keep that file.

## File map
- `index.html` → mounts `src/main.jsx` → `src/App.jsx` (defines routes).
- Pages (`src/pages/`): `Studio.jsx` (home `/`), `Garden.jsx` (`/garden`), `Emerald.jsx`
  (`/emerald`), `Ethos.jsx` (`/about`), `Team.jsx` (`/team`), `Profile.jsx` (`/team/:slug`).
- Components (`src/components/`): `Nav.jsx`, `Footer.jsx`.
- `src/useReveal.js` — scroll-reveal hook.
- `src/index.css` — ALL styles, design tokens at `:root`. This file is large; edit it
  surgically, never rewrite it whole.

## Visual direction
Organic, asymmetric, layered. Watercolor logic — colors bleed at edges, elements overlap.
Never a clean grid. Never default AI symmetry. Multiple depths. Imperfection is intentional.
Think **Diablo III art direction specifically** — the painterly, saturated, hand-illustrated
look it was *criticized* for, not the franchise's gothic tone. The world feels grown, not designed.

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
