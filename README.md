# Tanush Infinity

A responsive Astro site for home construction hardware.

## Local development

Install dependencies:

```bash
npm install
```

Develop locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Cloudflare Pages deployment

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a new project and connect your GitHub repository.
3. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy.

Cloudflare Pages will build the Astro site and publish the static files from `dist/`.
