# DevNest

> A curated directory of the best tools for developers, designers, and indie hackers.

![DevNest Preview](./public/og.png)

## Overview

DevNest is a modern directory/listing website built with:

- **Next.js 14** (App Router)
- **Tailwind CSS** (Violet/Purple theme)
- **TypeScript**
- **next-themes** (Dark mode)
- **Static mock data** (no database needed to run locally)

## Features

- 🔍 **Browse & search** 24+ curated developer tools
- 🏷️ **Categories** — AI, Design, Dev Tools, Productivity, Marketing, Analytics
- 🌓 **Dark/Light mode** toggle
- 📤 **Submit a tool** form
- 📋 **Tool detail pages** with related tools
- 📱 **Responsive** — mobile-first layout
- ⚡ **Zero config** — no database or auth needed for local preview

## Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Copy `.env.example` and fill in optional values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | No | App base URL |

## Pages

| Path | Description |
|---|---|
| `/` | Homepage with hero, featured tools, categories |
| `/tools` | Browse & filter all tools |
| `/tools/[slug]` | Individual tool detail page |
| `/categories` | All categories with counts |
| `/submit` | Submit a new tool form |
| `/about` | About DevNest |

## Tech Stack Explanation

- Static tool data lives in `lib/data/` — no DB needed
- To add a real database, you can swap `lib/data/tools.ts` with Prisma/Supabase queries
- Auth (GitHub/Google) can be added with NextAuth

## License

MIT
