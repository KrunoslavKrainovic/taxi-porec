# Quick Reference: Add data-i18n Attributes to HTML

This guide shows exactly where to add `data-i18n` attributes in your HTML file.

## 🎯 Quick Contact Bar (Lines ~85-100)

```html
<span class="quick-btn-text" data-i18n="quickCall">Pozovi</span>
<span class="quick-btn-text" data-i18n="quickWhatsApp">WhatsApp</span>
<span class="quick-btn-text" data-i18n="quickEmail">Email</span>
```

## 🎯 Hero Section (Lines ~105-125)

```html
<h1 class="hero-title" data-i18n="heroTitle">Taxi Poreč - Vaš Pouzdani Partner za Prijevoz u Istri</h1>
<p class="hero-subtitle" data-i18n="heroSubtitle">Profesionalna taxi usluga dostupna 24/7...</p>

<!-- Buttons -->
<span data-i18n="heroCallNow">Pozovi Odmah</span>
<span data-i18n="heroWhatsApp">WhatsApp</span>
```

## 🎯 Why Choose Us Section (Lines ~130-175)

```html
<h2 class="section-title" data-i18n="whyChooseTitle">Zašto Odabrati Taxi Poreč?</h2>

<!-- Feature 1 -->
<h3 class="feature-title" data-i18n="feature1Title">Dostupnost 24/7</h3>
<p class="feature-text" data-i18n="feature1Text">Usluga non-stop...</p>

<!-- Feature 2 -->
<h3 class="feature-title" data-i18n="feature2Title">Profesionalni Vozači</h3>
<p class="feature-text" data-i18n="feature2Text">Licencirani, iskusni vozači...</p>

<!-- Feature 3 -->
<h3 class="feature-title" data-i18n="feature3Title">Moderna Flota</h3>
<p class="feature-text" data-i18n="feature3Text">Čista, udobna...</p>

<!-- Feature 4 -->
<h3 class="feature-title" data-i18n="feature4Title">Fiksne Cijene</h3>
<p class="feature-text" data-i18n="feature4Text">Transparentne cijene...</p>
```

## 🎯 Services Section (Lines ~180-245)

```html
<h2 class="section-title" data-i18n="servicesTitle">Naše Usluge</h2>

<!-- Service 1: Airport Transfers -->
<h3 class="service-title" data-i18n="service1Title">Transferi do Aerodroma</h3>
<p class="service-description" data-i18n="service1Desc">Pouzdani transferi...</p>
<li data-i18n="service1Item1">Aerodrom Pula → Poreč: ~60 min</li>
<li data-i18n="service1Item2">Aerodrom Trst → Poreč: ~90 min</li>
<li data-i18n="service1Item3">Aerodrom Zagreb → Poreč: ~3 sata</li>

<!-- Service 2: City Transfers -->
<h3 class="service-title" data-i18n="service2Title">Gradski Transferi</h3>
<p class="service-description" data-i18n="service2Desc">Lokalni prijevoz...</p>
<li data-i18n="service2Item1">Poreč, Tar-Vabriga, Vrsar</li>
<li data-i18n="service2Item2">Funtana, Novigrad</li>
<li data-i18n="service2Item3">Brzi odaziv</li>

<!-- Service 3: Istria Tours -->
<h3 class="service-title" data-i18n="service3Title">Obilasci Istre</h3>
<p class="service-description" data-i18n="service3Desc">Otkrijte ljepotu Istre...</p>
<li data-i18n="service3Item1">Rovinj, Motovun, Pula Arena</li>
<li data-i18n="service3Item2">Brijunski otoci</li>
<li data-i18n="service3Item3">Prilagođene ture</li>

<!-- Service 4: Long Distance -->
<h3 class="service-title" data-i18n="service4Title">Transferi na Duge Relacije</h3>
<p class="service-description" data-i18n="service4Desc">Udobne vožnje...</p>
<li data-i18n="service4Item1">Zagreb, Ljubljana, Trst</li>
<li data-i18n="service4Item2">Venecija, Split</li>
<li data-i18n="service4Item3">Komforna vožnja</li>
```

## 🎯 How to Book Section (Lines ~250-270)

```html
<h2 class="section-title" data-i18n="howToBookTitle">Jednostavna Rezervacija u 3 Koraka</h2>

<!-- Step 1 -->
<h3 class="step-title" data-i18n="step1Title">Kontaktirajte Nas</h3>
<p class="step-text" data-i18n="step1Text">Pozovite, pošaljite WhatsApp...</p>

<!-- Step 2 -->
<h3 class="step-title" data-i18n="step2Title">Dobijte Potvrdu</h3>
<p class="step-text" data-i18n="step2Text">Primite trenutnu potvrdu...</p>

<!-- Step 3 -->
<h3 class="step-title" data-i18n="step3Title">Uživajte u Vožnji</h3>
<p class="step-text" data-i18n="step3Text">Naš vozač će biti tamo...</p>
```

## 🎯 About Section (Lines ~275-310)

```html
<h2 class="section-title" data-i18n="aboutTitle">O Taxi Poreč</h2>
<p class="about-text" data-i18n="aboutText1">S dugogodišnjim iskustvom...</p>
<p class="about-text" data-i18n="aboutText2">Bilo da stižete na aerodrom...</p>

<!-- Features -->
<span data-i18n="aboutFeature1">Licencirani i osigurani</span>
<span data-i18n="aboutFeature2">Iskusni lokalni vozači</span>
<span data-i18n="aboutFeature3">Višejezična usluga...</span>
<span data-i18n="aboutFeature4">Moderna, dobro održavana vozila</span>
<span data-i18n="aboutFeature5">Konkurentne cijene</span>
<span data-i18n="aboutFeature6">Dostupno 24/7, 365 dana godišnje</span>
```

## 🎯 FAQ Section (Lines ~315-365)

```html
<h2 class="section-title" data-i18n="faqTitle">Često Postavljana Pitanja</h2>

<!-- FAQ 1 -->
<h3 class="faq-question" data-i18n="faq1Q">Kako rezervirati taksi?</h3>
<p class="faq-answer" data-i18n="faq1A">Možete nas nazvati...</p>

<!-- FAQ 2 -->
<h3 class="faq-question" data-i18n="faq2Q">Radite li 24/7?</h3>
<p class="faq-answer" data-i18n="faq2A">Da, dostupni smo...</p>

<!-- FAQ 3 -->
<h3 class="faq-question" data-i18n="faq3Q">Govore li vaši vozači engleski?</h3>
<p class="faq-answer" data-i18n="faq3A">Da, svi naši vozači...</p>

<!-- FAQ 4 -->
<h3 class="faq-question" data-i18n="faq4Q">Mogu li platiti karticom?</h3>
<p class="faq-answer" data-i18n="faq4A">Da, prihvaćamo...</p>

<!-- FAQ 5 -->
<h3 class="faq-question" data-i18n="faq5Q">Pružate li dječje sjedalice?</h3>
<p class="faq-answer" data-i18n="faq5A">Da, dječje sjedalice...</p>

<!-- FAQ 6 -->
<h3 class="faq-question" data-i18n="faq6Q">Što ako moj let kasni?</h3>
<p class="faq-answer" data-i18n="faq6A">Pratimo dolaske letova...</p>

<!-- FAQ 7 -->
<h3 class="faq-question" data-i18n="faq7Q">Možete li primiti velike grupe?</h3>
<p class="faq-answer" data-i18n="faq7A">Da, imamo kombije...</p>
```

## 🎯 Contact Section (Lines ~370-425)

```html
<h2 class="section-title" data-i18n="contactTitle">Kontaktirajte Nas</h2>

<!-- Phone -->
<h3 data-i18n="contactPhone">Telefon</h3>
<p class="contact-note" data-i18n="contactPhoneNote">Dostupno 24/7</p>

<!-- WhatsApp -->
<h3 data-i18n="contactWhatsApp">WhatsApp</h3>
<p class="contact-note" data-i18n="contactWhatsAppNote">Brz odgovor...</p>

<!-- Email -->
<h3 data-i18n="contactEmail">Email</h3>
<p class="contact-note" data-i18n="contactEmailNote">Odgovaramo u roku...</p>

<!-- Address -->
<h3 data-i18n="contactAddress">Adresa</h3>
```

## 🎯 Footer (Lines ~430-470)

```html
<p class="footer-tagline" data-i18n="footerTagline">Affordable, Reliable and Safe...</p>

<h4 class="footer-title" data-i18n="footerQuickLinks">Brzi Linkovi</h4>

<h4 class="footer-title" data-i18n="footerContact">Kontakt</h4>

<h4 class="footer-title" data-i18n="footerHours">Radno Vrijeme</h4>
<p class="footer-hours" data-i18n="footerHoursText">24/7 - Svaki Dan</p>
<p class="footer-availability" data-i18n="footerAvailability">Uvijek dostupni za vas</p>

<p class="footer-copyright" data-i18n="footerCopyright">&copy; 2024 Poreč Taxi...</p>
```

## ✅ Testing Checklist

After adding all attributes:

1. ✅ Open website in browser
2. ✅ Open browser console (F12)
3. ✅ Click HR button - check all text is Croatian
4. ✅ Click EN button - check all text is English
5. ✅ Click IT button - check all text is Italian
6. ✅ Reload page - check language persists
7. ✅ Check meta tags update (in Elements tab)

## 🚀 Quick Test

Open browser console and run:
```javascript
// Test Croatian
document.querySelector('[data-lang="hr"]').click();

// Test English
document.querySelector('[data-lang="en"]').click();

// Test Italian
document.querySelector('[data-lang="it"]').click();
```

---

**Tip**: Use Find & Replace in your editor to add attributes quickly!

Example:
- Find: `<h2 class="section-title">`
- Replace with: `<h2 class="section-title" data-i18n="KEYNAME">`
