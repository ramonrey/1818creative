# Deployment & CMS setup

The site is a static Astro build. The blog is managed in **Sanity** (hosted
Studio), and the whole thing deploys automatically from GitHub to
**Cloudflare Pages**.

Do these setups once. After that the workflow is:

- **Write a blog post:** go to `https://1818creative.sanity.studio`, write,
  hit Publish. A deploy hook rebuilds the site (~1 min).
- **Change the site:** push to `main` → Cloudflare rebuilds and deploys.

---

## 1. Sanity (blog CMS)

### 1a. Create the project

```bash
npm create sanity@latest -- --template clean --create-project "1818 Creative" --dataset production
```

When prompted:
- Log in with Google or GitHub
- Output path: **anything outside this repo** (or press Ctrl-C once the project
  is created — you don't need the generated folder, the schema already lives in
  `studio/`)
- TypeScript: yes

Note the **project id** it prints. Put it in two places:

**`.env`** (copy from `.env.example`):
```
PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
PUBLIC_SANITY_DATASET=production
PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-key
```

**`studio/.env`** (copy from `studio/.env.example`):
```
SANITY_STUDIO_PROJECT_ID=xxxxxxxx
SANITY_STUDIO_DATASET=production
```

### 1b. Deploy the hosted Studio

```bash
cd studio
npm install
npx sanity login
npx sanity deploy        # publishes to https://1818creative.sanity.studio
```

(If the name `1818creative` is taken, change `studioHost` in
`studio/sanity.cli.ts` and re-run.)

### 1c. Import the two existing posts (run once)

```bash
# from the studio/ folder
npm run import-seed
```

This creates "Welcome to 1818 Agency" and "Top Design Trends for 2026" with
their images. Delete `blog-seed.ndjson` afterwards.

### 1d. Allow the site to read from Sanity

[sanity.io/manage](https://sanity.io/manage) → project → **API** →
**CORS origins** → add these (no credentials needed, it's public read):

- `http://localhost:4321`
- `https://1818creative.com`
- your Cloudflare preview domain, e.g. `https://1818creative.pages.dev`

### 1e. Add writers

sanity.io/manage → project → **Members** → invite by email, role **Editor**.
They log in at `https://1818creative.sanity.studio` — nothing to install.

### 1f. Check it locally

```bash
npm install
npm run dev            # http://localhost:4321/blog now loads from Sanity
```

---

## 2. Cloudflare Pages (hosting + auto-deploy)

Your domain's DNS is already on Cloudflare, so this is just adding the Pages
project.

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** → pick `ramonrey/1818creative`.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** leave as `/` (the `studio/` folder is ignored — it has
     no build step here)
3. **Environment variables** (add under both *Production* and *Preview*):
   ```
   PUBLIC_SANITY_PROJECT_ID    = xxxxxxxx
   PUBLIC_SANITY_DATASET       = production
   PUBLIC_WEB3FORMS_ACCESS_KEY = your-key
   ```
4. **Save and Deploy.** First build lands at `https://1818creative.pages.dev`.
5. **Custom domains** tab → add `1818creative.com` and `www.1818creative.com`.
   Cloudflare adds the DNS records for you since the zone is already here.

Once the custom domain resolves correctly, stop uploading `dist/` to GoDaddy —
Cloudflare serves the site now.

### Rebuild when a blog post is published

1. Cloudflare Pages project → **Settings** → **Builds & deployments** →
   **Deploy hooks** → create one named "Sanity publish", branch `main`. Copy the
   URL.
2. sanity.io/manage → project → **API** → **Webhooks** → **Create webhook**:
   - **URL:** the deploy hook URL
   - **Trigger on:** Create, Update, Delete
   - **Filter:** `_type == "post"`
   - **HTTP method:** POST

Now publishing or editing a post triggers a rebuild automatically.

---

## Repo layout

| Path | What it is |
| --- | --- |
| `/` | The Astro site. `npm run build` → `dist/` |
| `/src/sanity/` | Read-only client + GROQ queries the site uses to fetch posts |
| `/studio/` | Sanity Studio — schema only, deployed to sanity.studio. Has its own `package.json` |
| `/blog-seed.ndjson` | One-time import of the original Markdown posts. Delete after importing |

## Local commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Site at localhost:4321 |
| `npm run build` | Production build into `dist/` (needs `.env`) |
| `npm run preview` | Serve the built `dist/` |
| `cd studio && npm run dev` | Run the Studio locally at localhost:3333 |
| `cd studio && npx sanity deploy` | Push schema changes to the hosted Studio |
