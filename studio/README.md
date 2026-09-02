# 1818 Creative — Sanity Studio

The blog CMS. Content is edited in the **hosted Studio** at
`https://creative1818.sanity.studio` — writers never need this folder.

This folder only exists so the **schema** (what fields a blog post has) is
version-controlled. You touch it only to change the schema or redeploy the
Studio.

Already deployed. `.env` here holds `SANITY_STUDIO_PROJECT_ID=63ekehp8` and
`SANITY_STUDIO_DATASET=production`.

## Changing the schema later

1. Edit files in `schemaTypes/`
2. From this folder: `npm install` (first time only — large tree; `bun install`
   is faster), then `npx sanity deploy` to push the change to the hosted Studio
3. If you added or renamed a field the site reads, also update the GROQ query
   in `../src/sanity/lib/queries.ts` and push to `main`

## Adding writers

[sanity.io/manage](https://sanity.io/manage) → project → **Members** → invite by
email, role **Editor**.
