# GammaGuard

Immersive proposal site for gamma-ray food preservation + nuclear infrastructure,
built for URFU International Hackathon 2026.

## Setup

```bash
npm install
npm run dev
```

## Add your media

Drop these files directly into `public/` (flat, no subfolders) using these exact names,
since the code references them as `/filename.ext`:

- `hero-facility.mp4` — hero background video
- `hero-facility.jpg` — poster/fallback image for the hero video
- `conveyor.mp4` — facility teaser section video
- `product-strawberries.jpg`
- `harvest.jpg`
- `lab-qc.jpg`

If a video file is missing, the browser will just show a blank/black area where
it belongs — the site still renders and functions correctly.

## Routes

- `/` — Home (hero + proposal overview)
- `/technology` — how gamma irradiation preservation works
- `/facility` — proposed nuclear infrastructure
- `/traceability` — full trace timeline + live QR demo
- `/verify/:productId` — the page a QR code on a package opens
- `/contact` — team contact

## Editing the demo data

All product/traceability/stat content lives in `src/data.ts` — edit that one file
to change what appears across the Home, Traceability, and Verify pages.

## Build for deployment

```bash
npm run build
```

Outputs to `dist/` — deploy that folder to Vercel, Netlify, or GitHub Pages, then
point your QR code at `https://your-deployed-url/verify/GG-2026-004471`.