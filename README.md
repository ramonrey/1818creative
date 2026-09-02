# 1818 Agency Website

A modern, responsive website for a design and development agency built with Astro.js.

## Features

- ✨ Modern, minimalist design inspired by high-end agency sites
- 📱 Fully responsive across all devices
- ⚡ Lightning-fast performance with Astro
- 📝 Blog managed in Sanity CMS (hosted Studio, no code to publish)
- 🌗 Light / dark theme
- 🛍️ Digital shop for selling products
- 🎁 Free resources section
- 🎨 Clean, maintainable code structure

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env      # then fill in the Sanity + Web3Forms values

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to view the site. The blog loads from Sanity; a
build with no `PUBLIC_SANITY_PROJECT_ID` set will show an empty blog rather
than fail.

## Managing Content

### Blog Posts (Sanity CMS)

The blog is managed in **Sanity**, not in the codebase. No files, no Git, no
build steps.

**To write or edit a post:**

1. Go to **https://creative1818.sanity.studio**
2. Log in with Google or GitHub (the account you were invited with)
3. Click **Blog post** in the sidebar → **＋** for a new one, or pick an
   existing post to edit
4. Fill in the fields:
   - **Title** – the headline
   - **Slug** – auto-generated from the title; this is the URL
     (`/blog/your-slug`). You can edit it.
   - **Excerpt** – 1–2 sentences shown on the blog list and in search results
   - **Published date** – defaults to now
   - **Author** – defaults to "1818 Team"
   - **Cover image** – drag in an image; add alt text
   - **Tags** – type and press enter
   - **Featured** – toggle on to show the post in the highlighted section at
     the top of the blog
   - **Body** – the article. Headings, bold/italic, links, bullet lists, and
     inline images all work.
5. Click **Publish**

Within about two minutes the site rebuilds itself and the post is live at
`https://1818creative.com/blog/`. Editing or deleting a published post also
triggers a rebuild.

**Adding a writer:** [sanity.io/manage/project/63ekehp8](https://www.sanity.io/manage/project/63ekehp8)
→ **Members** → invite by email, role **Editor**.

**Changing what fields a post has:** edit the schema in `studio/schemaTypes/`,
then from the `studio/` folder run `npx sanity deploy`. If you add or rename a
field the site reads, also update the GROQ query in
`src/sanity/lib/queries.ts` and push.

### Digital Shop Products

Products are stored in `src/content/shop/`. To add a new product:

1. Create a new `.md` file in `src/content/shop/`
2. Add frontmatter:

```markdown
---
title: "Product Name"
description: "Product description"
price: 49  # Price in dollars (number)
image: "/images/shop/product-image.jpg"
category: "templates"  # templates, ui-kits, icons, fonts, mockups, other
tags: ["design", "figma"]
featured: true  # Optional: feature on shop page
previewLink: "https://demo.example.com"  # Optional
---

# Product Details

Detailed description of what's included...
```

3. Save and the product will appear in your shop

Available categories:
- `templates` - Website/app templates
- `ui-kits` - UI component libraries
- `icons` - Icon sets
- `fonts` - Typography packs
- `mockups` - Design mockups
- `other` - Other digital products

### Free Resources

Resources are stored in `src/content/resources/`. To add a new resource:

1. Create a new `.md` file in `src/content/resources/`
2. Add frontmatter:

```markdown
---
title: "Resource Name"
description: "What this resource includes"
image: "/images/resources/resource-image.jpg"
category: "tutorials"  # tutorials, design-packs, templates, guides, tools, other
tags: ["free", "design"]
downloadLink: "/downloads/file.zip"  # Path to download file
featured: true  # Optional
fileSize: "2.5 MB"  # Optional
fileType: "ZIP (SVG, PNG)"  # Optional
---

# About This Resource

Details about what's included...
```

3. Save and the resource will appear on the resources page

Available categories:
- `tutorials` - Step-by-step guides
- `design-packs` - Collections of design assets
- `templates` - Free templates
- `guides` - Reference guides and checklists
- `tools` - Utilities and tools
- `other` - Other resources

## File Structure

```
agency-site/
├── public/
│   ├── images/
│   │   ├── logo.png          # Your logo
│   │   ├── blog/            # Blog post images
│   │   ├── shop/            # Product images
│   │   ├── resources/       # Resource images
│   │   └── projects/        # Portfolio images
│   └── downloads/           # Downloadable files for resources
├── src/
│   ├── components/
│   │   ├── Header.astro     # Site header/navigation
│   │   ├── Footer.astro     # Site footer
│   │   ├── Hero.astro       # Homepage hero section
│   │   ├── Services.astro   # Services section
│   │   ├── Projects.astro   # Portfolio section
│   │   └── Contact.astro    # Contact form
│   ├── content/
│   │   ├── shop/           # Shop products (Markdown)
│   │   ├── resources/      # Free resources (Markdown)
│   │   └── work/           # Portfolio projects (Markdown)
│   ├── content.config.ts   # Content collections config (shop, resources, work)
│   ├── sanity/
│   │   └── lib/            # Read-only Sanity client + GROQ queries for the blog
│   ├── layouts/
│   │   └── Layout.astro    # Base layout
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro        # Blog listing (fetches from Sanity)
│   │   │   └── [...slug].astro   # Individual blog posts (fetches from Sanity)
│   │   ├── shop/
│   │   │   ├── index.astro        # Shop listing
│   │   │   └── [...slug].astro   # Individual products
│   │   └── resources/
│   │       ├── index.astro        # Resources listing
│   │       └── [...slug].astro   # Individual resources
│   └── styles/
│       └── global.css      # Global styles
├── studio/                 # Sanity Studio — blog schema only, deployed to
│   │                       # creative1818.sanity.studio (own package.json)
│   └── schemaTypes/
└── package.json
```

## Customization

### Updating Contact Information

Edit `src/components/Contact.astro` and `src/components/Footer.astro` to update:
- Email address
- Phone number
- Social media links
- Location

### Contact Form

The form in `src/components/Contact.astro` submits to [Web3Forms](https://web3forms.com).

1. Create a free access key at web3forms.com, entering the inbox address that
   should receive submissions.
2. Locally: copy `.env.example` to `.env` and set `PUBLIC_WEB3FORMS_ACCESS_KEY`.
3. In production: it's set as a build variable on the Cloudflare Worker
   (Workers & Pages → 1818creative → Settings → Builds → Variables).

Without a key the form shows a "not configured" message instead of sending.
A hidden `botcheck` honeypot field filters basic spam bots.

### Updating Services

Edit `src/components/Services.astro` to modify the services array with your offerings.

### Updating Navigation

Edit `src/components/Header.astro` to add/remove navigation items.

### Styling

Global styles are in `src/styles/global.css`. You can customize:
- Colors (CSS variables in `:root`)
- Typography
- Spacing
- Animations

## Adding Images

1. Add images to the appropriate directory in `public/images/`
2. Reference them in your content using absolute paths: `/images/folder/image.jpg`
3. Optimize images before uploading for best performance

## Deployment

The site is hosted on **Cloudflare** (a static-assets Worker named
`1818creative`) and deploys itself. You don't run a deploy command.

- **Code change:** push to `main` → Cloudflare builds (`npm run build`) and
  deploys, ~2 min.
- **Blog change:** publish in Sanity → a webhook pings Cloudflare's deploy
  hook → same build, ~2 min.
- **Preview:** every branch and PR gets its own preview URL.

Build settings (Cloudflare dashboard → Workers & Pages → 1818creative →
Settings): build command `npm run build`, output `dist`, production branch
`main`. Build variables: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`,
`PUBLIC_WEB3FORMS_ACCESS_KEY`.

`1818creative.com` and `www` are attached as custom domains on the Worker. DNS
is managed in Cloudflare; the domain is still registered at GoDaddy, and
GoDaddy email is unaffected.

To build locally (needs `.env` with the Sanity vars):

```bash
npm run build      # -> dist/
npm run preview     # serve dist/ locally
```

See `SETUP.md` for first-time setup of the Sanity project and Cloudflare
project from scratch.

## Support

For questions or issues, please refer to:
- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)

## License

This project is for 1818 Agency. All rights reserved.
