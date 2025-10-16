# JoeyLLM Website

A Next.js front-end for JoeyLLM — sovereign Australian open-source AI.

## Getting Started

This repository contains the Next.js front-end for the JoeyLLM website. It uses the App Router, Tailwind CSS, and TypeScript. 
## Quick start

Requirements:
- Node.js 18+ (LTS recommended)
- npm

Install dependencies and run in development:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## High-level structure

- `src/app/` - Next.js App Router routes and layouts
	- `src/app/(web)/(home)` - Home route and colocated content
- `src/components/` - Shared UI components (Feature Card, GlassCard, Footer, .etc)

## Development notes

- Tailwind CSS powers styling. Adjust `tailwind.config.js` for theme and font changes.
- Manrope font is included via Next's font helper and exposed as a CSS variable for Tailwind.
- Keep interactive logic inside client components (`'use client'`) and keep larger components server-rendered for performance.

## Ideas / Next steps

- Add lightweight analytics to measure layout choice (A/B testing)
- Add subtle animations (Framer Motion) to GapFlow/Roadmap for extra polish
- Consider MDX/Contentlayer if you want editor-friendly content files

## Where to edit content

- The home page content lives at `src/app/(web)/(home)/content.ts`. Edit that file to change headings, and text content.
- Route-level content can be colocated as `content.ts` files next to each `page.tsx`.

## Build & lint

Run a production build and typecheck:

```bash
npm run build
```

Run linters (ESLint) and fix issues:

```bash
npm run lint
```



