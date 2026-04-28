# SEO Strategy - Taxi Poreč Website

## Target Keywords

### Primary Keywords (Croatian)
- taxi Poreč
- taxi Porec
- taksi Poreč
- taksi usluge Poreč
- prijevoz Poreč

### Primary Keywords (English)
- taxi Poreč
- Poreč taxi service
- airport transfer Poreč
- taxi Porec Croatia

### Secondary Keywords
- transfer Pula aerodrom Poreč
- taxi Poreč cijene
- taxi to Poreč
- reliable taxi Poreč
- 24/7 taxi Poreč
- Istria taxi service

### Long-tail Keywords
- taxi from Pula airport to Poreč
- how much is taxi from Poreč to airport
- best taxi service in Poreč
- book taxi Poreč online
- private transfer Poreč

## On-Page SEO Elements

### 1. Title Tag
```html
<title>Taxi Poreč | 24/7 Taxi Service & Airport Transfers | +385 91 199 7551</title>
```
- Length: 50-60 characters
- Include primary keyword
- Include phone number for trust
- Compelling call-to-action

### 2. Meta Description
```html
<meta name="description" content="Professional taxi service in Poreč, Croatia. Airport transfers, 24/7 availability, experienced drivers. Book now via WhatsApp or call +385 91 199 7551. Fast, reliable, affordable.">
```
- Length: 150-160 characters
- Include primary keyword
- Clear value proposition
- Call-to-action

### 3. Header Structure
```
H1: Taxi Poreč - Your Reliable Transport Partner (only one H1)
H2: Our Services
H2: Why Choose Us
H2: Service Areas
H2: Pricing
H2: Contact Us
H3: Airport Transfers
H3: City Tours
H3: etc.
```

### 4. Semantic HTML5
```html
<header> - Site header with logo and navigation
<nav> - Main navigation menu
<main> - Primary content
<section> - Content sections
<article> - Service descriptions
<aside> - Sidebar content
<footer> - Contact info and links
```

### 5. Schema.org Markup

#### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Poreč Taxi",
  "image": "https://porectaxi.com/wp-content/uploads/2024/06/TRANSFER-OPATIJA-7.png",
  "description": "Affordable, reliable and safe taxi and transfers service in Poreč",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Poreč",
    "postalCode": "52440",
    "addressCountry": "HR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.2272",
    "longitude": "13.5947"
  },
  "telephone": "+385-91-199-7551",
  "email": "info@porectaxi.com",
  "url": "https://porectaxi.com",
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-24:00",
  "areaServed": ["Poreč", "Istria", "Pula"],
  "hasMap": "https://maps.google.com/?q=Poreč"
}
```

#### Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Airport Transfer",
  "provider": {
    "@type": "TaxiService",
    "name": "Poreč Taxi"
  },
  "areaServed": {
    "@type": "City",
    "name": "Poreč"
  }
}
```

### 6. Image Optimization
- **File names**: taxi-porec-airport-transfer.jpg (keyword-rich)
- **Alt text**: "Taxi Poreč professional vehicle for airport transfers"
- **Format**: WebP with JPG fallback
- **Size**: Compressed, <200KB per image
- **Dimensions**: Responsive sizes
- **Lazy loading**: Below-the-fold images

### 7. URL Structure
```
https://taxiporec.com/
https://taxiporec.com/#services
https://taxiporec.com/#pricing
https://taxiporec.com/#contact
```
- Clean, descriptive URLs
- Use hyphens, not underscores
- Lowercase only
- Include keywords where natural

## Technical SEO

### 1. Performance Optimization
- **Minify CSS/JS**: Remove whitespace and comments
- **Combine files**: Single CSS and JS file
- **Inline critical CSS**: Above-the-fold styles
- **Defer non-critical JS**: Load after page render
- **Enable compression**: Gzip/Brotli
- **Browser caching**: Set cache headers
- **CDN**: Consider for static assets

### 2. Mobile Optimization
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Responsive design (CSS Grid, Flexbox)
- Touch-friendly buttons (min 44x44px)
- Readable font sizes (16px minimum)
- No horizontal scrolling
- Fast mobile load time

### 3. Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### 4. Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://taxiporec.com/sitemap.xml
```

### 5. Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://taxiporec.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Local SEO

### 1. Google Business Profile
- Claim and optimize listing
- Add photos of vehicles
- Collect customer reviews
- Post updates regularly
- Accurate business hours
- Service area definition

### 2. Local Citations
- List on local directories
- Consistent NAP (Name, Address, Phone)
- Croatian business directories
- Tourism websites
- TripAdvisor presence

### 3. Local Content
- Mention Poreč landmarks
- Service area descriptions
- Local events coverage
- Istria region information

## Content Strategy

### 1. Keyword Density
- Primary keyword: 2-3% density
- Natural language, not stuffing
- Variations and synonyms
- Long-tail phrases

### 2. Content Length
- Homepage: 800-1200 words
- Service descriptions: 300-500 words each
- Quality over quantity
- Scannable format

### 3. Internal Linking
- Link to all major sections
- Descriptive anchor text
- Logical hierarchy
- No broken links

## Off-Page SEO

### 1. Backlink Strategy
- Local tourism websites
- Hotel partnerships
- Travel blogs
- Local news sites
- Chamber of commerce

### 2. Social Signals
- Facebook business page
- Instagram presence
- Share buttons on site
- Regular posting

## Monitoring & Analytics

### 1. Google Search Console
- Submit sitemap
- Monitor crawl errors
- Track search queries
- Check mobile usability

### 2. Google Analytics
- Track conversions
- Monitor bounce rate
- Analyze user behavior
- Mobile vs desktop traffic

### 3. Key Metrics to Track
- Organic search traffic
- Keyword rankings
- Click-through rate
- Phone call conversions
- WhatsApp message rate
- Page load speed
- Bounce rate

## Multilingual SEO

### 1. Language Implementation
```html
<html lang="hr">
<link rel="alternate" hreflang="hr" href="https://taxiporec.com/" />
<link rel="alternate" hreflang="en" href="https://taxiporec.com/en/" />
```

### 2. Content Translation
- Professional translation
- Localized keywords
- Cultural adaptation
- Native speaker review

## Competitive Analysis

### Research Competitors
- Analyze top-ranking taxi sites in Poreč
- Identify their keyword strategy
- Study their backlink profile
- Learn from their design
- Find content gaps to exploit
