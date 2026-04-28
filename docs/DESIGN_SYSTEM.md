# Design System - Taxi Poreč Website

## Design Philosophy
**Premium, Professional, Trustworthy**
- Clean and modern aesthetic
- High-end without being flashy
- Trust-building through simplicity
- Focus on usability and clarity

## Color Palette

### Primary Colors
```css
--primary-navy: #1a2332;        /* Deep navy - professionalism */
--primary-gold: #d4af37;        /* Gold accent - premium feel */
--primary-white: #ffffff;       /* Pure white - cleanliness */
```

### Secondary Colors
```css
--secondary-charcoal: #2d3748;  /* Charcoal - text and sections */
--secondary-slate: #4a5568;     /* Slate - secondary text */
--secondary-cream: #f7f7f5;     /* Cream - subtle backgrounds */
```

### Accent Colors
```css
--accent-success: #2d7a3e;      /* Green - success states */
--accent-warning: #d97706;      /* Orange - warnings */
--accent-info: #1e5a8e;         /* Blue - information */
```

### Semantic Colors
```css
--text-primary: #1a2332;        /* Main text */
--text-secondary: #4a5568;      /* Secondary text */
--text-light: #718096;          /* Muted text */
--text-inverse: #ffffff;        /* Text on dark backgrounds */

--bg-primary: #ffffff;          /* Main background */
--bg-secondary: #f7f7f5;        /* Alternate sections */
--bg-dark: #1a2332;             /* Dark sections */

--border-light: #e2e8f0;        /* Light borders */
--border-medium: #cbd5e0;       /* Medium borders */
```

### Color Usage Rules
- **NO GRADIENTS**: Only solid colors
- High contrast ratios (WCAG AA minimum)
- Gold used sparingly for premium accents
- Navy for trust and professionalism
- White space for breathing room

## Typography

### Font Stack
```css
/* Primary Font - Headings */
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Secondary Font - Body */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace - Numbers/Prices */
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;      /* 12px - small labels */
--text-sm: 0.875rem;     /* 14px - secondary text */
--text-base: 1rem;       /* 16px - body text */
--text-lg: 1.125rem;     /* 18px - large body */
--text-xl: 1.25rem;      /* 20px - small headings */
--text-2xl: 1.5rem;      /* 24px - section headings */
--text-3xl: 1.875rem;    /* 30px - page headings */
--text-4xl: 2.25rem;     /* 36px - hero headings */
--text-5xl: 3rem;        /* 48px - main hero */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights
```css
--leading-tight: 1.25;    /* Headings */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.75;  /* Large text blocks */
```

### Typography Scale
```css
/* H1 - Hero Heading */
h1 {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

/* H2 - Section Headings */
h2 {
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
}

/* H3 - Subsection Headings */
h3 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
}

/* Body Text */
p {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}
```

## Spacing System

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Section Spacing
```css
--section-padding-mobile: var(--space-12);
--section-padding-desktop: var(--space-20);
--section-gap: var(--space-16);
```

## Layout

### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

### Grid System
```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--primary-gold);
  color: var(--primary-navy);
  padding: var(--space-4) var(--space-8);
  border: none;
  border-radius: 4px;
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #c19b2e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--primary-navy);
  border: 2px solid var(--primary-navy);
  padding: var(--space-4) var(--space-8);
  border-radius: 4px;
  font-weight: var(--font-semibold);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--primary-navy);
  color: var(--primary-white);
}
```

#### Icon Buttons (WhatsApp, Phone, Email)
```css
.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: 4px;
  font-weight: var(--font-medium);
  transition: all 0.2s ease;
}

.btn-whatsapp {
  background: #25D366;
  color: white;
}

.btn-phone {
  background: var(--primary-navy);
  color: white;
}

.btn-email {
  background: var(--secondary-charcoal);
  color: white;
}
```

### Cards
```css
.card {
  background: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: var(--space-6);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--primary-gold);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}
```

### Icons
- Use SVG icons for scalability
- Size: 24x24px standard, 32x32px for CTAs
- Color: Inherit from parent or use semantic colors
- Sources: Lucide Icons, Heroicons, or custom

## Responsive Design System

### Critical Requirement
**This website MUST be fully responsive for both mobile and desktop devices.**

### Mobile-First Approach
All styles are written for mobile devices first (320px+), then enhanced for larger screens using min-width media queries.

### Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-xs: 320px;   /* Small phones */
--breakpoint-sm: 640px;   /* Large phones / Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

### Media Queries
```css
/* Mobile: default styles (320px - 767px) */

/* Small tablets and up */
@media (min-width: 640px) { }

/* Tablets and up */
@media (min-width: 768px) { }

/* Laptops and up */
@media (min-width: 1024px) { }

/* Desktop and up */
@media (min-width: 1280px) { }
```

### Responsive Typography
```css
/* Mobile */
h1 { font-size: 2rem; }      /* 32px */
h2 { font-size: 1.5rem; }    /* 24px */
h3 { font-size: 1.25rem; }   /* 20px */
p { font-size: 1rem; }       /* 16px */

/* Tablet and up */
@media (min-width: 768px) {
  h1 { font-size: 2.5rem; }  /* 40px */
  h2 { font-size: 1.875rem; } /* 30px */
  h3 { font-size: 1.5rem; }  /* 24px */
}

/* Desktop and up */
@media (min-width: 1024px) {
  h1 { font-size: 3rem; }    /* 48px */
  h2 { font-size: 2.25rem; } /* 36px */
  h3 { font-size: 1.875rem; } /* 30px */
}
```

### Responsive Spacing
```css
/* Mobile */
--section-padding: 3rem 1.5rem;

/* Tablet and up */
@media (min-width: 768px) {
  --section-padding: 4rem 2rem;
}

/* Desktop and up */
@media (min-width: 1024px) {
  --section-padding: 5rem 2rem;
}
```

### Touch-Friendly Design
- **Minimum touch target**: 44x44px for all interactive elements
- **Adequate spacing**: Minimum 8px between touch targets
- **Large buttons**: CTAs should be easy to tap on mobile
- **Swipe gestures**: Consider for image galleries (optional)

### Responsive Images
```css
img {
  max-width: 100%;
  height: auto;
}

/* Responsive image sets */
<img 
  srcset="image-320w.jpg 320w,
          image-640w.jpg 640w,
          image-1024w.jpg 1024w,
          image-1920w.jpg 1920w"
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  src="image-1024w.jpg"
  alt="Description"
/>
```

## Imagery

### Photo Guidelines
- **Hero Image**: High-quality photo of Poreč (old town, marina, or coastline)
- **Vehicle Photos**: Professional, clean, well-lit
- **Driver Photos**: Professional, friendly, trustworthy
- **Aspect Ratios**: 16:9 for hero, 4:3 for cards, 1:1 for avatars

### Image Optimization
- Format: WebP with JPG fallback
- Compression: 80% quality
- Responsive sizes: 320w, 640w, 1024w, 1920w
- Lazy loading for below-the-fold images

### Placeholder Strategy
```css
.image-placeholder {
  background: var(--secondary-cream);
  aspect-ratio: 16/9;
}
```

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

## Borders

```css
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
--border-radius-full: 9999px;

--border-width: 1px;
--border-width-thick: 2px;
```

## Animations

### Transitions
```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

### Hover Effects
- Subtle lift: `transform: translateY(-2px)`
- Shadow increase on hover
- Color transitions
- No jarring movements

### Loading States
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

## Accessibility

### Focus States
```css
*:focus {
  outline: 2px solid var(--primary-gold);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}
```

### Color Contrast
- Text on white: minimum 4.5:1 ratio
- Large text: minimum 3:1 ratio
- Interactive elements: clear visual feedback

### Touch Targets
- Minimum size: 44x44px
- Adequate spacing between clickable elements
- Clear hover/active states

## Design Patterns

### Hero Section
- Full-width background image
- Overlay for text readability
- Clear headline and CTA
- Contact buttons prominently displayed

### Service Cards
- Icon + Title + Description
- Consistent sizing
- Hover effects
- Clear visual hierarchy

### Testimonials
- Quote marks
- Customer name and location
- Star ratings (if applicable)
- Photo (optional)

### Footer
- Dark background (navy)
- White/light text
- Contact information
- Social media links
- Copyright notice

## Brand Voice
- **Professional**: Reliable, experienced, trustworthy
- **Friendly**: Approachable, helpful, welcoming
- **Local**: Knowledge of Poreč and Istria
- **Efficient**: Quick response, punctual service
