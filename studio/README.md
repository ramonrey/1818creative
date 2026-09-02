# 1818 Creative — Sanity Studio

The blog CMS. Content is edited in the **hosted Studio** at
`https://creative1818.sanity.studio` — writers never need this folder.

This folder only exists so the **schema** (what fields a blog post has) is
version-controlled. You touch it only to change the schema or redeploy the
Studio.

## First-time setup

```bash
cd studio
npm install
cp .env.example .env        # then paste your project id into .env
npx sanity login            # log in with Google/GitHub
npx sanity deploy           # publishes the Studio to creative1818.sanity.studio
```

## Import the existing posts (run once)

```bash
npm run import-seed         # imports ../blog-seed.ndjson into the "production" dataset
```

Delete `../blog-seed.ndjson` afterwards.

## Changing the schema later

1. Edit files in `schemaTypes/`
2. `npx sanity deploy` to push the change to the hosted Studio
3. If you added/renamed a field the site reads, update the GROQ query in
   `../src/sanity/lib/queries.ts` and redeploy the site

## Adding writers

[sanity.io/manage](https://sanity.io/manage) → project → **Members** → invite by
email, role **Editor**.
