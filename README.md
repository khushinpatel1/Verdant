# Verdant Studio — site

Marketing site for Verdant Studio, a privacy-first software studio. Single-page React app,
client-side routed, statically hosted.

## Stack
- React 19 + React Router 7 (`BrowserRouter`)
- Vite 6
- Plain CSS with custom properties (`src/index.css`) — no framework

## Develop
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy
Push to GitHub → Cloudflare Pages builds `dist/`. `public/_redirects` (`/* /index.html 200`)
keeps deep links like `/team/:slug` from 404-ing on direct hits and refreshes.

See `CLAUDE.md` for the file map, design tokens, and working conventions.
