# UI Style Landing Page Template

## File Location
`top-13/[filename].html`

## Required Page Structure

### 1. HTML Head
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Style Name] - UI Style Catalogue</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="[Google Font URLs]" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '[primary-hex]',
            secondary: '[secondary-hex]',
            accent: '[accent-hex]',
            background: '[background-hex]',
            surface: '[surface-hex]',
            muted: '[muted-text-hex]',
          },
          fontFamily: {
            heading: ['[Heading Font]', 'sans-serif'],
            body: ['[Body Font]', 'sans-serif'],
          }
        }
      }
    }
  </script>
</head>
<body class="bg-background text-slate-900 min-h-screen">
```

### 2. Navigation (Back Link)
```html
<nav class="fixed top-4 left-4 z-50">
  <a href="/top-13/index.html" class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors cursor-pointer text-[muted-color] hover:text-primary">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
    <span class="text-sm font-medium">Back to Catalogue</span>
  </a>
</nav>
```

### 3. Hero Section
```html
<header class="min-h-screen flex items-center justify-center relative overflow-hidden">
  <!-- Background Effects (style-specific) -->
  <div class="absolute inset-0 z-0">
    <!-- Add style-specific background elements here -->
  </div>

  <div class="max-w-6xl mx-auto px-6 relative z-10 text-center">
    <p class="text-accent tracking-[0.2em] mb-4 text-sm md:text-base uppercase font-semibold">
      [Product Category]
    </p>
    <h1 class="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
      [Product Name]
    </h1>
    <p class="font-body text-slate-600 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
      [Product Tagline/Description]
    </p>
    <a href="#" class="inline-block px-8 py-4 bg-primary text-white font-heading font-bold text-lg rounded-lg cursor-pointer hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
      Get Started
    </a>
  </div>
</header>
```

### 4. Design System Card
```html
<section class="py-24 bg-surface">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="font-heading font-bold text-4xl md:text-5xl mb-12 text-center">Design System</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <!-- Color Palette -->
      <div class="bg-white p-6 rounded-xl shadow-lg">
        <h3 class="font-heading font-bold text-xl mb-4">Color Palette</h3>
        <div class="flex gap-3">
          <div class="flex-1">
            <div class="h-16 rounded-lg bg-primary"></div>
            <p class="text-xs mt-2 font-medium text-slate-600">Primary</p>
          </div>
          <div class="flex-1">
            <div class="h-16 rounded-lg bg-secondary"></div>
            <p class="text-xs mt-2 font-medium text-slate-600">Secondary</p>
          </div>
          <div class="flex-1">
            <div class="h-16 rounded-lg bg-accent"></div>
            <p class="text-xs mt-2 font-medium text-slate-600">Accent</p>
          </div>
          <div class="flex-1">
            <div class="h-16 rounded-lg bg-muted"></div>
            <p class="text-xs mt-2 font-medium text-slate-600">Muted</p>
          </div>
        </div>
      </div>

      <!-- Typography -->
      <div class="bg-white p-6 rounded-xl shadow-lg">
        <h3 class="font-heading font-bold text-xl mb-4">Typography</h3>
        <p class="text-2xl font-heading font-bold text-slate-900 mb-2">Heading Font</p>
        <p class="text-lg font-heading">[Heading Font Name]</p>
        <hr class="my-4 border-slate-200">
        <p class="text-lg font-body text-slate-700 mb-2">Body Font</p>
        <p class="font-body">[Body Font Name]</p>
      </div>
    </div>

    <!-- Style Info Card -->
    <div class="bg-white p-8 rounded-xl shadow-lg">
      <div class="flex items-start gap-6">
        <div class="text-6xl font-heading font-black text-slate-200">#[rank]</div>
        <div class="flex-1">
          <h3 class="font-heading font-bold text-3xl text-slate-900 mb-2">[Style Name]</h3>
          <p class="text-accent font-semibold mb-4">[Usage Score] • [Primary Use Cases]</p>
          <p class="font-body text-slate-600 leading-relaxed">
            [Style Description from README]
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 5. Footer
```html
<footer class="py-12 bg-background border-t border-slate-200">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <p class="font-body text-slate-500 text-sm">
      Part of the UI Style Catalogue • Top 13 Most Used UI Styles
    </p>
  </div>
</footer>

</body>
</html>
```

## Design System Generation (CRITICAL STEP)

**You MUST use ui-ux-pro-max skill to generate the design system first:**

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "[keywords]" --design-system -p "[product-name]"
```

Extract from the output:
- **Colors**: Primary, secondary, accent, background, surface, muted text
- **Typography**: Heading font (Google Font URL), Body font (Google Font URL)
- **Effects**: Any style-specific effects (gradients, shadows, glass, etc.)
- **Anti-patterns**: What to avoid

## Style-Specific Customizations

### Minimalism & Swiss
- Clean, lots of white space
- Strong typography hierarchy
- Minimal colors (2-3 max)
- No decorative elements

### Flat Design
- Flat colors, no shadows
- Bold, vibrant colors
- Simple geometric shapes
- Google Material Design influence

### Hero-Centric
- Large hero section (80%+ viewport)
- Big headline + single CTA
- Minimal below fold
- Background image/video

### Dark Mode (OLED)
- Pure black background (#000000)
- High contrast text
- Vibrant accent colors
- OLED-optimized (true black)

### Glassmorphism
- Semi-transparent cards (bg-white/10 to bg-white/30)
- Backdrop blur (backdrop-blur-lg)
- Gradient backgrounds
- White borders (border-white/20)

### Bento Box Grid
- Grid layout with rounded cards
- Clean borders or subtle shadows
- Organized, structured feel
- Apple-style layouts

### Neubrutalism
- Thick black borders (border-4 border-black)
- Bold, clashing colors
- Offset shadows (shadow-4xl offset-4)
- Rounded corners but with sharp edges

### Conversion-Optimized
- Clear CTAs above fold
- Trust badges/logos
- Pricing prominently displayed
- Social proof testimonials

### Feature-Rich Showcase
- Feature grid (3-4 columns)
- Icons + descriptions
- Screenshots/mockups
- Benefits-focused

### Social Proof-Focused
- Large testimonial cards
- Client logos grid
- Star ratings
- Case study links

### Minimal & Direct
- Very sparse layout
- Single focused message
- Minimal navigation
- Direct conversion path

### AI-Native UI
- Chat interface patterns
- Typing indicators
- Prompt/input focused
- Modern dark/light toggle

### Soft UI Evolution
- Soft shadows, subtle depth
- Light gray backgrounds
- Smooth rounded corners
- Calming color palette

## Accessibility Requirements

### Color Contrast
- Text must have 4.5:1 contrast ratio minimum
- Use contrast checker for verification
- Light mode: Avoid light gray text on white

### Focus States
- All interactive elements need visible focus ring
- Use `focus:ring-2 focus:ring-accent focus:outline-none`

### Alt Text
- All images must have descriptive alt text
- Decorative images: `alt=""`

### Touch Targets
- Minimum 44x44px for buttons/links
- Add padding to small elements

### Cursor Pointer
- All clickable elements: `cursor-pointer`
- Hover states for visual feedback

## Responsive Design

### Mobile (375px+)
- Stack everything vertically
- Touch-friendly buttons (min-height 48px)
- Readable text (min 16px)
- Hamburger menu if needed

### Tablet (768px+)
- 2-column layouts where appropriate
- Larger text sizes
- More spacing

### Desktop (1024px+)
- Full layout revealed
- Max-width containers (max-w-6xl or max-w-7xl)
- Hover effects enabled

## Quality Checklist

Before completing, verify:

- [ ] Design system generated via ui-ux-pro-max
- [ ] Tailwind config includes all colors from design system
- [ ] Google Fonts loaded correctly
- [ ] Hero section showcases mock product
- [ ] Design system card shows colors, fonts, style info
- [ ] Back to catalogue link works
- [ ] Contrast ratio ≥ 4.5:1 for all text
- [ ] Responsive at 375px, 768px, 1024px
- [ ] All interactive elements have cursor-pointer
- [ ] Focus states visible
- [ ] No emojis used as icons (use SVG)
- [ ] Style-specific effects applied (glass, gradient, etc.)
- [ ] File saved in correct location: `top-13/[filename].html`

## Example Color Extraction

From ui-ux-pro-max output:
```
Colors:
- Primary: #3B82F6 (blue-500)
- Secondary: #10B981 (emerald-500)
- Accent: #F59E0B (amber-500)
- Background: #FFFFFF (white)
- Surface: #F3F4F6 (gray-100)
- Muted Text: #6B7280 (gray-500)
```

Convert to Tailwind config:
```javascript
colors: {
  primary: '#3B82F6',
  secondary: '#10B981',
  accent: '#F59E0B',
  background: '#FFFFFF',
  surface: '#F3F4F6',
  muted: '#6B7280',
}
```

## Example Typography Extraction

From ui-ux-pro-max output:
```
Typography:
- Heading: Inter (Google Fonts)
- Body: Inter (Google Fonts)
```

Add to HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Config in Tailwind:
```javascript
fontFamily: {
  heading: ['Inter', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
}
```

---

## Final Notes

1. **Always generate design system first** - This is the foundation
2. **Match the style characteristics** - Each style has unique traits
3. **Keep it simple** - Hero + Design Card is all that's needed
4. **Make it accessible** - Don't skip accessibility requirements
5. **Test responsiveness** - Check at mobile, tablet, desktop breakpoints
6. **Verify links** - Back to catalogue link must work
7. **Follow the template** - Consistency across all 13 styles

Good luck! 🎨
