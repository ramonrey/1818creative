# Deployment & CMS

Everything below is **already set up and live**. This doc explains how it
works, plus how to rebuild it from scratch if you ever need to.

## Current setup

| Piece | Where |
| --- | --- |
| Site hosting | Cloudflare Worker `1818creative` (static assets), auto-builds from GitHub `main` |
| Live URLs | `https://1818creative.com`, `https://www.1818creative.com` |
| Fallback URL | `https://1818creative.ramon-bdf.workers.dev` |
| Blog CMS | Sanity, project id `63ekehp8`, dataset `production` (public) |
| Blog editor | `https://creative1818.sanity.studio` |
| Domain | Registered at GoDaddy, DNS on Cloudflare. GoDaddy email untouched. |

## How it works

- **Write a blog post** → publish in the Studio → a Sanity webhook hits the
  Cloudflare deploy hook → the site rebuilds and deploys, ~2 min.
- **Change the code** → push to `main` → Cloudflare rebuilds and deploys.
- Every branch / PR gets its own preview URL.

Build config lives in the Cloudflare dashboard (Workers & Pages → 1818creative
→ Settings → Builds): command `npm run build`, output `dist`, branch `main`.
Build variables set there: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`,
`PUBLIC_WEB3FORMS_ACCESS_KEY`.

## Local development

```bash
npm install
cp .env.example .env      # fill in PUBLIC_SANITY_PROJECT_ID=63ekehp8, dataset, web3forms key
npm run dev               # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Site at localhost:4321 |
| `npm run build` | Production build into `dist/` (needs `.env`) |
| `npm run preview` | Serve the built `dist/` |
| `cd studio && npm run dev` | Run the Studio locally at localhost:3333 |
| `cd studio && npx sanity deploy` | Push schema changes to the hosted Studio |

## Repo layout

| Path | What it is |
| --- | --- |
| `/` | The Astro site. `npm run build` → `dist/` |
| `/src/sanity/lib/` | Read-only Sanity client + GROQ queries for the blog |
| `/src/content/` | Markdown for shop, resources, work (the blog is **not** here) |
| `/studio/` | Sanity Studio — post schema only, own `package.json`, deployed to sanity.studio |

## Common tasks

**Add a blog writer:** [sanity.io/manage/project/63ekehp8](https://www.sanity.io/manage/project/63ekehp8)
→ Members → invite, role **Editor**.

**Change post fields:** edit `studio/schemaTypes/`, then `cd studio && npx sanity deploy`.
If the site reads the new/renamed field, also update `src/sanity/lib/queries.ts` and push.

**Roll the domain back to GoDaddy** (emergency): in Cloudflare DNS for
`1818creative.com`, re-add an `A` record `@ → 208.109.201.79` (proxied) and a
`CNAME` `www → 1818creative.com`, and remove the two custom domains from the
Worker.

---

## Rebuilding from scratch

Only needed if the Sanity project or Cloudflare project is lost.

### 1. Sanity

```bash
npm create sanity@latest -- --template clean --create-project "1818 Creative" --dataset production
# log in; output path anywhere outside this repo (schema already lives in studio/)
```

Put the project id in `.env` (`PUBLIC_SANITY_PROJECT_ID`) and `studio/.env`
(`SANITY_STUDIO_PROJECT_ID`). Then:

```bash
cd studio
npm install               # large; use `bun install` if npm is slow
npx sanity login
npx sanity deploy         # -> https://creative1818.sanity.studio
```

In [sanity.io/manage](https://www.sanity.io/manage) → your project → API →
set the `production` dataset to **Public**. (Content read by a public website
must be public; drafts stay private.)

Writers won't need to install anything — they just use the Studio URL.

### 2. Cloudflare

1. Workers & Pages → Create → connect `ramonrey/1818creative`.
2. Framework preset **Astro**, build `npm run build`, output `dist`, branch `main`.
3. Settings → Builds → Variables: add `PUBLIC_SANITY_PROJECT_ID`,
   `PUBLIC_SANITY_DATASET=production`, `PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. Domains → Add `1818creative.com` and `www.1818creative.com`. If Cloudflare
   complains about existing records, delete the apex `A` and `www` `CNAME`
   first (leave every email record alone).
5. Settings → Builds → Deploy hooks → create "Sanity publish" on `main`, copy
   the URL.
6. sanity.io/manage → API → Webhooks → Create: that URL, trigger
   Create/Update/Delete, filter `_type == "post"`, method POST.
