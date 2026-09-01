# 1818 Agency Website

A modern, responsive website for a design and development agency built with Astro.js.

## Features

- ✨ Modern, minimalist design inspired by high-end agency sites
- 📱 Fully responsive across all devices
- ⚡ Lightning-fast performance with Astro
- 📝 Easy-to-manage blog system
- 🛍️ Digital shop for selling products
- 🎁 Free resources section
- 🎨 Clean, maintainable code structure

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to view the site.

## Managing Content

### Blog Posts

Blog posts are stored as Markdown files in `src/content/blog/`. To add a new blog post:

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with the required fields:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2024-02-13  # YYYY-MM-DD format
author: "Author Name"
image: "/images/blog/your-image.jpg"  # Optional
tags: ["design", "development"]  # Optional
featured: true  # Set to true to feature on blog page
---

# Your Content Here

Write your blog post content using Markdown...
```

3. Save the file and it will automatically appear on the blog page

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
│   │   ├── blog/           # Blog posts (Markdown)
│   │   ├── shop/           # Shop products (Markdown)
│   │   ├── resources/      # Free resources (Markdown)
│   │   └── config.ts       # Content collections config
│   ├── layouts/
│   │   └── Layout.astro    # Base layout
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro        # Blog listing
│   │   │   └── [...slug].astro   # Individual blog posts
│   │   ├── shop/
│   │   │   ├── index.astro        # Shop listing
│   │   │   └── [...slug].astro   # Individual products
│   │   └── resources/
│   │       ├── index.astro        # Resources listing
│   │       └── [...slug].astro   # Individual resources
│   └── styles/
│       └── global.css      # Global styles
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
3. In production: set the same `PUBLIC_WEB3FORMS_ACCESS_KEY` variable in the
   host's environment settings (Cloudflare Pages / Netlify) so it is available
   at build time.

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

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

## Support

For questions or issues, please refer to:
- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)

## License

This project is for 1818 Agency. All rights reserved.
