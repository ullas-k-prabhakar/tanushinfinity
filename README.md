# Tanush Infinity Hardware

A static Angular website for a local house construction hardware and building materials shop. The site showcases construction material categories and gives customers simple phone, WhatsApp and enquiry-form contact options.

## Features

- Static Angular application suitable for Cloudflare Pages
- Routes for Home, Products, Product Details, Services, About and Contact
- Editable TypeScript product category data in `src/app/data/product-categories.ts`
- Responsive, mobile-friendly construction hardware theme
- Static enquiry form with client-side success message only
- No backend, database, login, cart, checkout, secrets or server-side functionality

## Local development

```bash
npm install
npm start
```

Open `http://localhost:4200/` in your browser.

## Production build

```bash
npm install
npm run build
```

The production build is generated in:

```text
dist/cloudflare/browser
```

## Cloudflare Pages settings

Use these Cloudflare Pages build settings:

- Framework preset: Angular or None
- Build command: `npm run build`
- Output directory: `dist/cloudflare/browser`
- Environment variables/secrets: none required

Because this is a static Angular site, Cloudflare Pages can host the generated browser files directly.

## Cloudflare configuration note

No `wrangler.toml` file is required for this static Pages site. Cloudflare Pages should use the dashboard build settings above, while `npm run build` writes the Angular browser assets to `dist/cloudflare/browser`.
