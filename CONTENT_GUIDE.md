# Quick Content Management Guide

This guide shows you how to easily update your blog, shop, and resources without touching any code.

## 📝 Adding a Blog Post (Step-by-Step)

1. **Navigate to the blog folder:**
   - Go to `src/content/blog/`

2. **Create a new file:**
   - Name it something like `my-new-post.md`
   - Use lowercase and hyphens, no spaces

3. **Copy this template:**

```markdown
---
title: "Your Amazing Blog Post Title"
description: "A short description that appears in previews and search results"
pubDate: 2024-02-13
author: "Your Name"
image: "/images/blog/my-post-image.jpg"
tags: ["design", "tutorial", "web-development"]
featured: false
---

# Your Post Title Here

Write your content using Markdown. Here are some examples:

## This is a heading

This is a paragraph with some **bold text** and *italic text*.

### Lists work too

- First item
- Second item
- Third item

### Code blocks

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Links

[Visit our shop](/shop)
```

4. **Save the file** - Your post is now live!

## 🛍️ Adding a Shop Product

1. **Navigate to:** `src/content/shop/`

2. **Create a file:** `my-product-name.md`

3. **Use this template:**

```markdown
---
title: "My Awesome Template Pack"
description: "Complete UI kit with 50+ components"
price: 39
image: "/images/shop/my-product.jpg"
category: "ui-kits"
tags: ["figma", "sketch", "xd"]
featured: true
previewLink: "https://demo.yoursite.com"
---

## What's Included

- 50+ UI Components
- Dark & Light Modes
- Figma & Sketch Files
- Free Updates

## Features

Everything you need to build modern interfaces...
```

**Category Options:**
- `templates` - Website templates
- `ui-kits` - UI component libraries
- `icons` - Icon packs
- `fonts` - Font families
- `mockups` - Design mockups
- `other` - Other digital products

## 🎁 Adding Free Resources

1. **Navigate to:** `src/content/resources/`

2. **Create a file:** `my-free-resource.md`

3. **Use this template:**

```markdown
---
title: "Free Design System Template"
description: "Complete design system with components and guidelines"
image: "/images/resources/design-system.jpg"
category: "templates"
tags: ["free", "figma", "design-system"]
downloadLink: "/downloads/design-system.zip"
featured: true
fileSize: "5.2 MB"
fileType: "ZIP (Figma)"
---

## What You Get

- Complete design system
- 100+ components
- Typography guidelines
- Color palettes
- Documentation

Perfect for starting new projects!
```

**Category Options:**
- `tutorials` - Step-by-step guides
- `design-packs` - Asset collections
- `templates` - Free templates
- `guides` - Reference guides
- `tools` - Utilities
- `other` - Other resources

## 📸 Adding Images

### For Blog Posts:
1. Add image to `public/images/blog/`
2. Reference it: `image: "/images/blog/your-image.jpg"`

### For Shop Products:
1. Add image to `public/images/shop/`
2. Reference it: `image: "/images/shop/your-product.jpg"`

### For Resources:
1. Add image to `public/images/resources/`
2. Reference it: `image: "/images/resources/your-resource.jpg"`

### For Downloads:
1. Add file to `public/downloads/`
2. Reference it: `downloadLink: "/downloads/your-file.zip"`

## ✏️ Markdown Formatting Tips

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

[Link text](https://example.com)

- Bullet list item
- Another item

1. Numbered list
2. Another item

> Blockquote text

`inline code`

\`\`\`
Code block
\`\`\`
```

## 🚀 Publishing Changes

After adding or editing content:

1. **Local development:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321 to preview

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   - Commit and push to GitHub
   - Your hosting (Netlify/Vercel) will automatically deploy

## 💡 Tips

- **Featured content:** Set `featured: true` to highlight items
- **Tags:** Use relevant tags for better organization
- **Images:** Optimize images before uploading (use tools like TinyPNG)
- **File names:** Use lowercase with hyphens: `my-blog-post.md`
- **Dates:** Use format: `YYYY-MM-DD` (e.g., `2024-02-13`)

## ❓ Common Questions

**Q: How do I edit an existing post?**
A: Just open the `.md` file, make your changes, and save.

**Q: How do I delete a post?**
A: Delete the `.md` file from the content folder.

**Q: Can I schedule posts?**
A: Set a future date in `pubDate` and they'll show up sorted by date.

**Q: How do I change the order of items?**
A: Items are sorted by date (blog) or can be featured (shop/resources).

**Q: What image size should I use?**
A: Recommended sizes:
- Blog: 1200x675px (16:9 ratio)
- Shop: 1200x900px (4:3 ratio)
- Resources: 1200x900px (4:3 ratio)

## 🆘 Need Help?

Check the main `README.md` file for more detailed information about:
- File structure
- Customization options
- Deployment guides
- Technical documentation

Happy content creating! 🎉
