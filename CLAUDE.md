# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Midas is a premium digital agency portfolio website showcasing web development, mobile app development, and UI/UX design services. The site is built as a static HTML/CSS project using Tailwind CSS with a dark luxury theme.

**Tech Stack**: HTML5, TailwindCSS (CDN), JavaScript (vanilla)

**Key Colors**: Gold (#FFB800), Purple (#7C3AED), Orange (#F97316)

## Project Structure

```
midas-v2/
├── index.html           # Main agency homepage
├── portfolio/           # Case study pages for client projects
│   ├── citra-studio.html
│   ├── florist.html
│   ├── kain-rupa.html
│   ├── kasar-halus.html
│   └── wijaya-consulting.html
├── assets/              # Images and visual assets
└── CLAUDE.md            # This file
```

## Architecture & Key Patterns

### Single-Page HTML Structure
- Each HTML file is self-contained with inline styles and scripts
- TailwindCSS is loaded via CDN
- No build process or bundling required
- All styling is configured inline in `<script>` tags

### Design System
- **Brand Colors**: `brand-gold`, `brand-purple`, `brand-orange` defined in Tailwind config
- **Typography**: Two font families - `Manrope` (sans) for body, `Syne` (display) for headings
- **Custom Utilities**:
  - `.text-stroke` - outlined text effect with hover states
  - `.grain` - fixed noise overlay
  - `.clip-diagonal` - polygon clip-path for diagonal sections

### Interactive Elements
- Hamburger menu button with hover animation (lines animate on hover)
- Service cards with hover state expansion and icon rotation
- Project showcases with grayscale-to-color transitions on hover
- Smooth scrolling (enabled via `scroll-smooth` class)

### Animation Patterns
- `float` - vertical floating animation (6s)
- `pulse-slow` - slow pulse effect (4s)
- `marquee` - horizontal scrolling text (20s)
- All animations use CSS keyframes defined in inline styles

## Development Notes

### No Build Process
This is a static site with no build step. Edits to HTML files are immediately visible in the browser.

### Responsive Design
- Mobile-first approach with Tailwind's responsive prefixes (`md:`, `lg:`)
- Key breakpoint: `md` (768px) separates mobile and desktop layouts
- Most sections use CSS Grid with responsive column spans

### External Dependencies
- TailwindCSS: Loaded from `https://cdn.tailwindcss.com`
- Google Fonts: Manrope and Syne via `fonts.googleapis.com`
- Avatar images: Generated via `https://ui-avatars.com/api/`

### Navigation
- Fixed header with MIDAS branding
- Links reference anchor IDs (`#contact`, `#` for home)
- No routing library - all internal linking via anchors

## Common Modifications

### Changing Brand Colors
Update the Tailwind config `colors.brand` object in the `<script>` tag of each HTML file.

### Adding New Portfolio Projects
1. Create new `.html` file in `portfolio/` directory
2. Copy structure from existing project file (e.g., `florist.html`)
3. Update project title, description, and image paths
4. Add link from `index.html` showcase section

### Updating Service Descriptions
Services are in the "OUR EXPERTISE" section. Each service card uses `md:col-span-*` for layout positioning.

### Text Content Updates
All text is inline in HTML. Search for specific phrases to find and update content.

## Notes for Future Development

- **Images**: All placeholder images should be replaced with actual project screenshots and branding assets
- **Links**: Social media, contact email, and project links need to be configured
- **Accessibility**: Consider adding semantic HTML improvements and ARIA labels for screen readers
- **Performance**: Consider lazy-loading images, especially in portfolio pages
- **SEO**: Verify meta tags are complete and relevant for search indexing
