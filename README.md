# Esakkimuthu Sivaraman — Portfolio

A fast, professional portfolio website built with **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion**, statically exported and deployed for free on **GitHub Pages** via GitHub Actions.

Live sections: Hero, About, Tech Stack, Experience, Projects, Education, and Contact (mailto).

## Tech stack

- **Next.js 16** — static export (`output: "export"`) for zero-cost, fast hosting
- **React 19 + TypeScript**
- **Tailwind CSS v4** — CSS-first theming, dark/light mode via `next-themes`
- **Framer Motion** — scroll-reveal animations
- **lucide-react** — icons

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All resume/profile content lives in one place:

```
src/data/resume.ts
```

Edit that file to update your name, summary, skills, experience, projects, education, or contact links — every section on the site reads from it. To change the resume PDF, replace:

```
public/resume/Esakkimuthu_Sivaraman_Backend_Engineer.pdf
```

(keep the same filename, or update `resumeUrl` in `src/data/resume.ts`).

The email address is defined once in `src/data/resume.ts` and rendered everywhere through `src/components/ui/obfuscated-email.tsx`, which only assembles the real `mailto:` link client-side (after the page loads) rather than baking it into the static HTML — this meaningfully cuts down on automated email scraping. There is no phone number anywhere in the app by design.

## Building a static export

```bash
npm run build
```

This produces a fully static site in the `out/` folder, which can be hosted anywhere (GitHub Pages, Netlify, S3, etc.).

## Deploying to GitHub Pages (already configured)

This repo includes `.github/workflows/deploy.yml`, which automatically builds and deploys the site to GitHub Pages on every push to `main`.

This repo is named `MuthuEsakkiS.github.io`, which makes it a GitHub **user site** — it's served at the root domain: **https://muthuesakkis.github.io**

**One-time setup after pushing this repo to GitHub:**

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab). The workflow will build the site and deploy it automatically.
4. Once deployed, check **Enforce HTTPS** in the same Pages settings screen.

The workflow uses `actions/configure-pages` to detect the correct base path automatically, so this also works unmodified if the repo is ever renamed to a project-style repo (`https://muthuesakkis.github.io/repo-name/`).

## Updating the resume PDF

`Esakkimuthu_Sivaraman_Backend_Engineer.pdf` (in the project root) is the source of truth for both the site's downloadable resume and the content in `src/data/resume.ts`. To update either, edit that PDF's source document, re-export it, and overwrite both the root copy and `public/resume/Esakkimuthu_Sivaraman_Backend_Engineer.pdf`.

## SEO / social sharing

- `src/app/opengraph-image.png` — the image shown when the link is shared on LinkedIn, Slack, iMessage, etc. It's a static PNG (not generated per-request) so it always gets served with the correct `image/png` content type on GitHub Pages. Regenerate it by editing and briefly re-adding an `opengraph-image.tsx` (using `next/og`'s `ImageResponse`) locally, running `npm run build`, and copying the generated `out/opengraph-image.png` back over this file.
- `src/app/manifest.ts`, `src/app/robots.ts`, `src/app/sitemap.ts` — standard Next.js metadata file conventions, all statically generated at build time.
- `src/lib/site.ts` — the single source of truth for the canonical site URL, used by the metadata above.

## Project structure

```
src/
  app/                 App Router entry: layout, page, metadata, global styles,
                       manifest/robots/sitemap, OG image
  components/
    layout/            Chrome shared across the whole page (Navbar, Footer)
    sections/          One file per page section (Hero, About, Skills, ...)
    ui/                 Small reusable primitives (Reveal, SectionHeading, icons,
                       ThemeToggle, GradientMesh, ObfuscatedEmail)
  data/
    resume.ts          Single source of truth for all content on the site
  lib/
    site.ts            Site-level config (canonical URL)
public/
  resume/              Downloadable resume PDF
```
