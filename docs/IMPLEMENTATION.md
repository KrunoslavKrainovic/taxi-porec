# Implementation Guide - Taxi Poreč Website

## Technical Implementation Plan

### Phase 1: Project Setup
- [x] Create project structure
- [x] Create documentation
- [ ] Set up version control (Git)
- [ ] Prepare assets (images, icons, logos)
- [ ] Set up development environment

### Phase 2: HTML Structure
- [ ] Create semantic HTML5 structure
- [ ] Implement header and navigation
- [ ] Build hero section
- [ ] Create all content sections
- [ ] Add footer
- [ ] Implement Schema.org markup
- [ ] Add meta tags and SEO elements
- [ ] Validate HTML

### Phase 3: CSS Styling
- [ ] Set up CSS variables
- [ ] Create base styles
- [ ] Style header and navigation
- [ ] Style hero section
- [ ] Style all content sections
- [ ] Style footer
- [ ] **CRITICAL: Implement responsive design for mobile and desktop**
- [ ] Add animations and transitions
- [ ] Cross-browser testing

### Phase 4: JavaScript Functionality
- [ ] Smooth scrolling
- [ ] Mobile menu toggle
- [ ] Contact form validation
- [ ] WhatsApp integration
- [ ] Phone call tracking
- [ ] Lazy loading images
- [ ] Performance optimization

### Phase 5: SEO Optimization
- [ ] Optimize meta tags
- [ ] Add structured data
- [ ] Optimize images
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Implement Open Graph tags
- [ ] Test with SEO tools

### Phase 6: Testing & Launch
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Performance testing
- [ ] Accessibility testing
- [ ] SEO audit
- [ ] Fix issues
- [ ] Deploy to hosting
- [ ] Submit to Google Search Console

---

## File Structure

```
taxi-porec/
├── index.html                 # Main HTML file
├── css/
│   ├── variables.css         # CSS custom properties
│   ├── base.css              # Reset and base styles
│   ├── components.css        # Reusable components
│   ├── layout.css            # Layout and grid
│   ├── sections.css          # Section-specific styles
│   └── responsive.css        # Media queries
├── js/
│   ├── main.js               # Main JavaScript
│   └── analytics.js          # Analytics tracking
├── images/
│   ├── hero/
│   │   ├── hero-desktop.webp
│   │   ├── hero-desktop.jpg
│   │   ├── hero-mobile.webp
│   │   └── hero-mobile.jpg
│   ├── fleet/
│   │   ├── sedan.webp
│   │   ├── van.webp
│   │   └── premium.webp
│   ├── icons/
│   │   ├── phone.svg
│   │   ├── whatsapp.svg
│   │   ├── email.svg
│   │   └── [other icons].svg
│   └── logo/
│       ├── logo.svg
│       └── logo.png
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── SEO_STRATEGY.md
│   ├── DESIGN_SYSTEM.md
│   ├── CONTENT_GUIDE.md
│   └── IMPLEMENTATION.md
├── sitemap.xml
├── robots.txt
├── favicon.ico
└── README.md
```

---

## HTML Structure Template

```html
<!DOCTYPE html>
<html lang="hr">
<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[SEO description]">
    <meta name="keywords" content="taxi Poreč, taxi Porec, airport transfer">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Taxi Poreč">
    <meta property="og:description" content="[Description]">
    <meta property="og:image" content="[Image URL]">
    <meta property="og:url" content="https://taxiporec.com">
    
    <!-- Title -->
    <title>Taxi Poreč | 24/7 Taxi Service & Airport Transfers</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Preload Critical Resources -->
    <link rel="preload" href="images/hero/hero-desktop.webp" as="image">
    
    <!-- Schema.org Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Taxi Poreč",
        ...
    }
    </script>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav container">
            <!-- Logo and navigation -->
        </nav>
    </header>
    
    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section class="hero" id="home">
            <!-- Hero content -->
        </section>
        
        <!-- Quick Contact Bar -->
        <div class="quick-contact">
            <!-- Contact buttons -->
        </div>
        
        <!-- Why Choose Us -->
        <section class="why-choose-us" id="about">
            <!-- Features -->
        </section>
        
        <!-- Services -->
        <section class="services" id="services">
            <!-- Service cards -->
        </section>
        
        <!-- Service Areas -->
        <section class="service-areas">
            <!-- Areas content -->
        </section>
        
        <!-- Pricing -->
        <section class="pricing" id="pricing">
            <!-- Pricing table -->
        </section>
        
        <!-- Fleet -->
        <section class="fleet">
            <!-- Vehicle cards -->
        </section>
        
        <!-- How to Book -->
        <section class="how-to-book">
            <!-- Steps -->
        </section>
        
        <!-- About Us -->
        <section class="about-us">
            <!-- About content -->
        </section>
        
        <!-- FAQ -->
        <section class="faq">
            <!-- FAQ items -->
        </section>
        
        <!-- Contact -->
        <section class="contact" id="contact">
            <!-- Contact form and info -->
        </section>
    </main>
    
    <!-- Footer -->
    <footer class="footer">
        <!-- Footer content -->
    </footer>
    
    <!-- Scripts -->
    <script src="js/main.js" defer></script>
</body>
</html>
```

---

## CSS Implementation

### 1. Variables (variables.css)
```css
:root {
    /* Colors */
    --primary-navy: #1a2332;
    --primary-gold: #d4af37;
    --primary-white: #ffffff;
    /* ... all other variables from DESIGN_SYSTEM.md */
}
```

### 2. Base Styles (base.css)
```css
/* Reset */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Base */
html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    font-size: var(--text-base);
    line-height: var(--leading-normal);
    color: var(--text-primary);
    background: var(--bg-primary);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

/* Links */
a {
    color: inherit;
    text-decoration: none;
}

/* Images */
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

### 3. Components (components.css)
```css
/* Buttons */
.btn {
    display: inline-block;
    padding: var(--space-4) var(--space-8);
    border-radius: var(--border-radius-sm);
    font-weight: var(--font-semibold);
    text-align: center;
    cursor: pointer;
    transition: all var(--transition-base);
}

.btn-primary {
    background: var(--primary-gold);
    color: var(--primary-navy);
}

/* Cards */
.card {
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-md);
    padding: var(--space-6);
}

/* ... other components */
```

---

## Responsive Design Implementation

### CRITICAL REQUIREMENT
**The website MUST be fully responsive and work perfectly on both mobile devices and desktop computers.**

### 4. Responsive Styles (responsive.css)

```css
/* ============================================
   RESPONSIVE DESIGN - MOBILE FIRST APPROACH
   ============================================ */

/* Base styles are for mobile (320px+) */

/* ==========================================
   SMALL TABLETS AND UP (640px+)
   ========================================== */
@media (min-width: 640px) {
    .container {
        padding: 0 var(--space-8);
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .grid-2 {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* ==========================================
   TABLETS AND UP (768px+)
   ========================================== */
@media (min-width: 768px) {
    /* Typography */
    h1 { font-size: 2.5rem; }
    h2 { font-size: 1.875rem; }
    h3 { font-size: 1.5rem; }
    
    /* Navigation */
    .nav {
        display: flex;
        justify-content: space-between;
    }
    
    .menu-toggle {
        display: none; /* Hide mobile menu button */
    }
    
    .nav-links {
        display: flex;
        flex-direction: row;
        gap: var(--space-6);
    }
    
    /* Hero Section */
    .hero {
        min-height: 600px;
    }
    
    /* Grid Layouts */
    .grid-3 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* Sections */
    section {
        padding: var(--space-20) 0;
    }
}

/* ==========================================
   LAPTOPS AND UP (1024px+)
   ========================================== */
@media (min-width: 1024px) {
    /* Typography */
    h1 { font-size: 3rem; }
    h2 { font-size: 2.25rem; }
    h3 { font-size: 1.875rem; }
    
    /* Hero Section */
    .hero {
        min-height: 700px;
    }
    
    .hero h1 {
        font-size: 3.5rem;
    }
    
    /* Grid Layouts */
    .grid-3 {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .grid-4 {
        grid-template-columns: repeat(4, 1fr);
    }
    
    /* Two-column layouts */
    .two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-12);
        align-items: center;
    }
}

/* ==========================================
   DESKTOPS AND UP (1280px+)
   ========================================== */
@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
    
    .hero h1 {
        font-size: 4rem;
    }
    
    section {
        padding: var(--space-24) 0;
    }
}

/* ==========================================
   MOBILE-SPECIFIC STYLES
   ========================================== */
@media (max-width: 767px) {
    /* Mobile Navigation */
    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-primary);
        padding: var(--space-4);
        box-shadow: var(--shadow-lg);
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .menu-toggle {
        display: block;
    }
    
    /* Stack all grids on mobile */
    .grid-2,
    .grid-3,
    .grid-4 {
        grid-template-columns: 1fr;
    }
    
    /* Mobile-friendly buttons */
    .btn {
        width: 100%;
        text-align: center;
    }
    
    /* Mobile hero */
    .hero {
        min-height: 500px;
        text-align: center;
    }
    
    /* Mobile contact buttons */
    .quick-contact {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        gap: var(--space-2);
        padding: var(--space-3);
        background: var(--bg-primary);
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        z-index: 100;
    }
}

/* ==========================================
   TOUCH-FRIENDLY DESIGN
   ========================================== */
@media (hover: none) and (pointer: coarse) {
    /* Increase touch targets on touch devices */
    .btn,
    a,
    button {
        min-height: 44px;
        min-width: 44px;
    }
    
    /* Remove hover effects on touch devices */
    .btn:hover,
    .card:hover {
        transform: none;
    }
}

/* ==========================================
   PRINT STYLES
   ========================================== */
@media print {
    .header,
    .footer,
    .quick-contact,
    .menu-toggle {
        display: none;
    }
    
    body {
        font-size: 12pt;
        color: #000;
        background: #fff;
    }
}
```

### Responsive Testing Requirements

#### Mobile Devices (Portrait)
- [ ] iPhone SE (375x667)
- [ ] iPhone 12/13 (390x844)
- [ ] iPhone 14 Pro Max (430x932)
- [ ] Samsung Galaxy S21 (360x800)
- [ ] Google Pixel 5 (393x851)

#### Mobile Devices (Landscape)
- [ ] iPhone 12 landscape (844x390)
- [ ] Samsung Galaxy landscape (800x360)

#### Tablets
- [ ] iPad Mini (768x1024)
- [ ] iPad Air (820x1180)
- [ ] iPad Pro 11" (834x1194)
- [ ] Samsung Galaxy Tab (800x1280)

#### Desktop/Laptop
- [ ] 1366x768 (Common laptop)
- [ ] 1920x1080 (Full HD)
- [ ] 2560x1440 (2K)
- [ ] 3840x2160 (4K)

### Responsive Design Checklist
- [ ] Mobile navigation menu works properly
- [ ] All text is readable on small screens
- [ ] Images scale properly on all devices
- [ ] Buttons are large enough to tap (44x44px minimum)
- [ ] No horizontal scrolling on any device
- [ ] Content stacks properly on mobile
- [ ] Grid layouts adapt to screen size
- [ ] Hero section looks good on all devices
- [ ] Contact buttons are accessible on mobile
- [ ] Forms are easy to fill on mobile
- [ ] Footer content is organized on mobile
- [ ] All interactive elements work on touch devices

---

## JavaScript Implementation

### Main Functionality (main.js)

```javascript
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Sticky Header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email');
        return;
    }
    
    // Submit form (implement backend)
    console.log('Form submitted:', { name, email, message });
    alert('Thank you! We will contact you soon.');
    contactForm.reset();
});

// WhatsApp Integration
function openWhatsApp() {
    const phone = '385911997551';
    const message = 'Hello, I would like to book a taxi.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Phone Call Tracking
function trackPhoneCall() {
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_call', {
            'event_category': 'contact',
            'event_label': 'header_phone'
        });
    }
}

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
```

---

## Contact Integration

### Phone Call
```html
<a href="tel:+385911997551" class="btn btn-phone" onclick="trackPhoneCall()">
    <svg><!-- Phone icon --></svg>
    <span>+385 91 199 7551</span>
</a>
```

### WhatsApp
```html
<a href="https://wa.me/385911997551?text=Hello,%20I%20would%20like%20to%20book%20a%20taxi" 
   class="btn btn-whatsapp" 
   target="_blank" 
   rel="noopener">
    <svg><!-- WhatsApp icon --></svg>
    <span>WhatsApp</span>
</a>
```

### Email
```html
<a href="mailto:info@porectaxi.com" class="btn btn-email">
    <svg><!-- Email icon --></svg>
    <span>Email Us</span>
</a>
```

---

## Performance Optimization

### 1. Image Optimization
- Use WebP format with JPG fallback
- Implement responsive images with `srcset`
- Lazy load below-the-fold images
- Compress images (80% quality)

### 2. CSS Optimization
- Minify CSS files
- Combine into single file for production
- Inline critical CSS
- Remove unused styles

### 3. JavaScript Optimization
- Minify JavaScript
- Defer non-critical scripts
- Use async loading where appropriate
- Minimize DOM manipulation

### 4. Caching Strategy
```
# .htaccess (for Apache)
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## SEO Implementation Checklist

- [ ] Semantic HTML5 structure
- [ ] One H1 per page with primary keyword
- [ ] Descriptive H2/H3 hierarchy
- [ ] Meta title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Schema.org LocalBusiness markup
- [ ] Alt text for all images
- [ ] Internal linking structure
- [ ] Mobile-responsive design
- [ ] Fast loading speed (<3s)
- [ ] HTTPS enabled
- [ ] XML sitemap
- [ ] Robots.txt
- [ ] Open Graph tags
- [ ] Canonical URLs
- [ ] Structured data validation

---

## Testing Checklist

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Mobile (414x896)

### Performance Testing
- [ ] Google PageSpeed Insights (>90)
- [ ] GTmetrix
- [ ] WebPageTest
- [ ] Lighthouse audit

### SEO Testing
- [ ] Google Search Console
- [ ] Bing Webmaster Tools
- [ ] Schema markup validator
- [ ] Mobile-friendly test
- [ ] Rich results test

### Accessibility Testing
- [ ] WAVE tool
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast checker

---

## Deployment

### Pre-Deployment
1. Minify all CSS and JavaScript
2. Optimize and compress all images
3. Test all functionality
4. Validate HTML, CSS
5. Run SEO audit
6. Check all links

### Hosting Requirements
- HTTPS/SSL certificate
- PHP support (for contact form)
- .htaccess support (Apache)
- FTP/SFTP access
- Domain name setup

### Post-Deployment
1. Submit sitemap to Google Search Console
2. Submit sitemap to Bing Webmaster Tools
3. Set up Google Analytics
4. Set up Google Business Profile
5. Monitor performance
6. Track rankings

---

## Maintenance Plan

### Weekly
- Monitor Google Analytics
- Check for broken links
- Review contact form submissions

### Monthly
- Update content if needed
- Check SEO rankings
- Review performance metrics
- Update pricing if changed

### Quarterly
- Comprehensive SEO audit
- Update images/content
- Review competitor sites
- Optimize based on data

---

## Contact Information

Actual contact details:
- Phone number: +385 91 199 7551
- Email: info@porectaxi.com
- WhatsApp number: 385911997551
- Physical address: Poreč, 52440, Croatia
- Website: https://porectaxi.com
- Logo: https://porectaxi.com/wp-content/uploads/2024/06/TRANSFER-OPATIJA-7.png

Still to update:
- Social media links (Facebook, Instagram)
- Actual pricing details
- Years of experience
- Specific credentials/licenses
