# How to Add New Projects to Your Portfolio

This guide explains how to add new projects to your "Our Work" page.

## Quick Start

1. Create a new `.md` file in `src/content/work/` with a URL-friendly name (e.g., `my-awesome-project.md`)
2. Use the template below
3. Save - it will automatically appear on your site!

## Project Template

```markdown
---
title: 'Your Project Title'
description: 'A brief, compelling description of the project (1-2 sentences)'
category: 'web-development' # See available categories below
client: 'Client Name' # Optional
year: 2024
image: '/images/projects/your-image.jpg'
featured: false # Set to true to feature this project prominently
tags: ['Tag1', 'Tag2', 'Tag3'] # Optional
projectUrl: 'https://example.com' # Optional - link to live project
testimonial: 'A quote from the client about the project' # Optional
---

## Project Overview

Write a detailed overview of the project here. This content will appear on the individual project page.

### Key Features

- Feature 1
- Feature 2
- Feature 3

### Results

- Result metric 1
- Result metric 2
- Result metric 3

### Technologies Used

Describe the technologies, tools, or approaches used in this project.
```

## Available Categories

Choose one of these for the `category` field:

- `web-development` - Websites, web applications, etc.
- `mobile-app` - iOS, Android, or cross-platform apps
- `ui-ux-design` - Interface and experience design projects
- `branding` - Logo design, brand identity, etc.
- `photography` - Product photography, portraits, etc.
- `marketing` - Campaigns, social media, etc.
- `other` - Anything else

## Featured Projects

Set `featured: true` for your best work - these appear in a special section at the top of the Our Work page.

## Adding Project Images

1. Place your images in `/public/images/projects/`
2. Reference them as `/images/projects/your-image.jpg` in the frontmatter
3. Recommended image size: 1600x1000px (16:10 aspect ratio)

## Tips for Great Projects

- **Descriptions**: Keep them concise but compelling - they appear in project cards
- **Tags**: Use consistent tags across projects (e.g., "React", "Branding", "Photography")
- **Year**: Projects are automatically sorted by year (newest first)
- **Testimonials**: Client quotes add credibility and trust
- **Content**: Use markdown formatting for headings, lists, links, etc.

## Example Project Structure

```
src/content/work/
├── ecommerce-platform.md
├── fitness-app-design.md
├── luxury-brand-photography.md
└── social-media-campaign.md
```

## Project URLs

A project file named `awesome-project.md` will be accessible at:
- **yoursite.com/work/awesome-project**

The file name becomes the URL slug, so use descriptive, URL-friendly names!

## Filtering

Projects can be filtered by category on the Our Work page. The filter buttons are automatically generated from your available categories.

## Example Projects

Check out the 4 sample projects already in `src/content/work/` to see the structure in action. You can edit or delete these as needed.
