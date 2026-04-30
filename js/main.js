/* ============================================
   TAXI POREČ - MAIN JAVASCRIPT
   Multilingual Support: Croatian, English, Italian
   ============================================ */

(function() {
    'use strict';
    
    /* ============================================
       LANGUAGE MANAGEMENT
       ============================================ */
    let currentLang = localStorage.getItem('language') || 'hr';
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        updateContent();
        updateMetaTags();
        updateHtmlLang();
        updateLanguageSwitcher();
    }
    
    function updateHtmlLang() {
        document.documentElement.lang = currentLang;
    }
    
    function updateMetaTags() {
        const trans = translations[currentLang];
        document.title = trans.metaTitle;
        document.querySelector('meta[name="description"]').setAttribute('content', trans.metaDescription);
    }
    
    function updateContent() {
        const trans = translations[currentLang];
        
        // Navigation
        setText('[data-i18n="navServices"]', trans.navServices);
        setText('[data-i18n="navAbout"]', trans.navAbout);
        setText('[data-i18n="navContact"]', trans.navContact);
        
        // Quick Contact
        setText('[data-i18n="quickCall"]', trans.quickCall);
        setText('[data-i18n="quickWhatsApp"]', trans.quickWhatsApp);
        setText('[data-i18n="quickEmail"]', trans.quickEmail);
        
        // Hero
        setText('[data-i18n="heroTitle"]', trans.heroTitle);
        setText('[data-i18n="heroSubtitle"]', trans.heroSubtitle);
        setText('[data-i18n="heroCallNow"]', trans.heroCallNow);
        setText('[data-i18n="heroWhatsApp"]', trans.heroWhatsApp);
        
        // Why Choose Us
        setText('[data-i18n="whyChooseTitle"]', trans.whyChooseTitle);
        setText('[data-i18n="feature1Title"]', trans.feature1Title);
        setText('[data-i18n="feature1Text"]', trans.feature1Text);
        setText('[data-i18n="feature2Title"]', trans.feature2Title);
        setText('[data-i18n="feature2Text"]', trans.feature2Text);
        setText('[data-i18n="feature3Title"]', trans.feature3Title);
        setText('[data-i18n="feature3Text"]', trans.feature3Text);
        setText('[data-i18n="feature4Title"]', trans.feature4Title);
        setText('[data-i18n="feature4Text"]', trans.feature4Text);
        
        // Services
        setText('[data-i18n="servicesTitle"]', trans.servicesTitle);
        setText('[data-i18n="service1Title"]', trans.service1Title);
        setText('[data-i18n="service1Desc"]', trans.service1Desc);
        setText('[data-i18n="service1Item1"]', trans.service1Item1);
        setText('[data-i18n="service1Item2"]', trans.service1Item2);
        setText('[data-i18n="service1Item3"]', trans.service1Item3);
        
        setText('[data-i18n="service2Title"]', trans.service2Title);
        setText('[data-i18n="service2Desc"]', trans.service2Desc);
        setText('[data-i18n="service2Item1"]', trans.service2Item1);
        setText('[data-i18n="service2Item2"]', trans.service2Item2);
        setText('[data-i18n="service2Item3"]', trans.service2Item3);
        
        setText('[data-i18n="service3Title"]', trans.service3Title);
        setText('[data-i18n="service3Desc"]', trans.service3Desc);
        setText('[data-i18n="service3Item1"]', trans.service3Item1);
        setText('[data-i18n="service3Item2"]', trans.service3Item2);
        setText('[data-i18n="service3Item3"]', trans.service3Item3);
        
        setText('[data-i18n="service4Title"]', trans.service4Title);
        setText('[data-i18n="service4Desc"]', trans.service4Desc);
        setText('[data-i18n="service4Item1"]', trans.service4Item1);
        setText('[data-i18n="service4Item2"]', trans.service4Item2);
        setText('[data-i18n="service4Item3"]', trans.service4Item3);
        
        // How to Book
        setText('[data-i18n="howToBookTitle"]', trans.howToBookTitle);
        setText('[data-i18n="step1Title"]', trans.step1Title);
        setText('[data-i18n="step1Text"]', trans.step1Text);
        setText('[data-i18n="step2Title"]', trans.step2Title);
        setText('[data-i18n="step2Text"]', trans.step2Text);
        setText('[data-i18n="step3Title"]', trans.step3Title);
        setText('[data-i18n="step3Text"]', trans.step3Text);
        
        // About
        setText('[data-i18n="aboutTitle"]', trans.aboutTitle);
        setText('[data-i18n="aboutText1"]', trans.aboutText1);
        setText('[data-i18n="aboutText2"]', trans.aboutText2);
        setText('[data-i18n="aboutFeature1"]', trans.aboutFeature1);
        setText('[data-i18n="aboutFeature2"]', trans.aboutFeature2);
        setText('[data-i18n="aboutFeature3"]', trans.aboutFeature3);
        setText('[data-i18n="aboutFeature4"]', trans.aboutFeature4);
        setText('[data-i18n="aboutFeature5"]', trans.aboutFeature5);
        setText('[data-i18n="aboutFeature6"]', trans.aboutFeature6);
        
        // FAQ
        setText('[data-i18n="faqTitle"]', trans.faqTitle);
        setText('[data-i18n="faq1Q"]', trans.faq1Q);
        setText('[data-i18n="faq1A"]', trans.faq1A);
        setText('[data-i18n="faq2Q"]', trans.faq2Q);
        setText('[data-i18n="faq2A"]', trans.faq2A);
        setText('[data-i18n="faq3Q"]', trans.faq3Q);
        setText('[data-i18n="faq3A"]', trans.faq3A);
        setText('[data-i18n="faq4Q"]', trans.faq4Q);
        setText('[data-i18n="faq4A"]', trans.faq4A);
        setText('[data-i18n="faq5Q"]', trans.faq5Q);
        setText('[data-i18n="faq5A"]', trans.faq5A);
        setText('[data-i18n="faq6Q"]', trans.faq6Q);
        setText('[data-i18n="faq6A"]', trans.faq6A);
        setText('[data-i18n="faq7Q"]', trans.faq7Q);
        setText('[data-i18n="faq7A"]', trans.faq7A);
        setText('[data-i18n="faq8Q"]', trans.faq8Q);
        setText('[data-i18n="faq8A"]', trans.faq8A);
        setText('[data-i18n="faq9Q"]', trans.faq9Q);
        setText('[data-i18n="faq9A"]', trans.faq9A);
        setText('[data-i18n="faq11Q"]', trans.faq11Q);
        setText('[data-i18n="faq11A"]', trans.faq11A);
        
        // Testimonials
        setText('[data-i18n="testimonialsTitle"]', trans.testimonialsTitle);
        setText('[data-i18n="testimonialsSubtitle"]', trans.testimonialsSubtitle);
        setText('[data-i18n="testimonial1Text"]', trans.testimonial1Text);
        setText('[data-i18n="testimonial1Author"]', trans.testimonial1Author);
        setText('[data-i18n="testimonial1Location"]', trans.testimonial1Location);
        setText('[data-i18n="testimonial2Text"]', trans.testimonial2Text);
        setText('[data-i18n="testimonial2Author"]', trans.testimonial2Author);
        setText('[data-i18n="testimonial2Location"]', trans.testimonial2Location);
        setText('[data-i18n="testimonial3Text"]', trans.testimonial3Text);
        setText('[data-i18n="testimonial3Author"]', trans.testimonial3Author);
        setText('[data-i18n="testimonial3Location"]', trans.testimonial3Location);
        setHTML('[data-i18n="testimonialsRating"]', trans.testimonialsRating);
        setText('[data-i18n="testimonialsBookBtn"]', trans.testimonialsBookBtn);
        
        // Business Summary
        setHTML('[data-i18n="businessSummary1"]', trans.businessSummary1);
        setText('[data-i18n="businessSummary2"]', trans.businessSummary2);
        
        // Routes
        setText('[data-i18n="routesTitle"]', trans.routesTitle);
        setText('[data-i18n="route1Title"]', trans.route1Title);
        setText('[data-i18n="route1Desc"]', trans.route1Desc);
        setText('[data-i18n="route2Title"]', trans.route2Title);
        setText('[data-i18n="route2Desc"]', trans.route2Desc);
        setText('[data-i18n="route3Title"]', trans.route3Title);
        setText('[data-i18n="route3Desc"]', trans.route3Desc);
        setText('[data-i18n="route4Title"]', trans.route4Title);
        setText('[data-i18n="route4Desc"]', trans.route4Desc);
        
        // Coverage
        setText('[data-i18n="coverageTitle"]', trans.coverageTitle);
        setHTML('[data-i18n="coverageDesc"]', trans.coverageDesc);
        setText('[data-i18n="coverageLocal"]', trans.coverageLocal);
        setText('[data-i18n="coverageAirports"]', trans.coverageAirports);
        setText('[data-i18n="coverageInternational"]', trans.coverageInternational);
        
        // Contact
        setText('[data-i18n="contactTitle"]', trans.contactTitle);
        setText('[data-i18n="contactPhone"]', trans.contactPhone);
        setText('[data-i18n="contactPhoneNote"]', trans.contactPhoneNote);
        setText('[data-i18n="contactWhatsApp"]', trans.contactWhatsApp);
        setText('[data-i18n="contactWhatsAppNote"]', trans.contactWhatsAppNote);
        setText('[data-i18n="contactEmail"]', trans.contactEmail);
        setText('[data-i18n="contactEmailNote"]', trans.contactEmailNote);
        setText('[data-i18n="contactAddress"]', trans.contactAddress);
        
        // Footer
        setText('[data-i18n="footerTagline"]', trans.footerTagline);
        setText('[data-i18n="footerQuickLinks"]', trans.footerQuickLinks);
        setText('[data-i18n="footerContact"]', trans.footerContact);
        setText('[data-i18n="footerHours"]', trans.footerHours);
        setText('[data-i18n="footerHoursText"]', trans.footerHoursText);
        setText('[data-i18n="footerAvailability"]', trans.footerAvailability);
        setText('[data-i18n="footerCopyright"]', trans.footerCopyright);
    }
    
    function setText(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (el) el.textContent = text;
        });
    }
    
    function setHTML(selector, html) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (el) el.innerHTML = html;
        });
    }
    
    function updateLanguageSwitcher() {
        const langMap = {
            'hr': { flag: '🇭🇷', code: 'HR' },
            'en': { flag: '🇬🇧', code: 'EN' },
            'it': { flag: '🇮🇹', code: 'IT' }
        };
        
        // Update current language button
        const currentBtn = document.getElementById('langDropdownBtn');
        if (currentBtn) {
            const flagSpan = currentBtn.querySelector('.lang-flag');
            const codeSpan = currentBtn.querySelector('.lang-code');
            if (flagSpan) flagSpan.textContent = langMap[currentLang].flag;
            if (codeSpan) codeSpan.textContent = langMap[currentLang].code;
        }
        
        // Update active state in dropdown options
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.lang === currentLang) {
                option.classList.add('active');
            }
        });
    }
    
    // Language dropdown handlers
    document.addEventListener('DOMContentLoaded', function() {
        const dropdownBtn = document.getElementById('langDropdownBtn');
        const dropdownMenu = document.getElementById('langDropdownMenu');
        
        // Toggle dropdown
        if (dropdownBtn && dropdownMenu) {
            dropdownBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdownBtn.classList.toggle('active');
                dropdownMenu.classList.toggle('active');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function() {
                dropdownBtn.classList.remove('active');
                dropdownMenu.classList.remove('active');
            });
            
            // Prevent dropdown from closing when clicking inside
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
        
        // Language option click handlers
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function() {
                setLanguage(this.dataset.lang);
                // Close dropdown
                dropdownBtn.classList.remove('active');
                dropdownMenu.classList.remove('active');
            });
        });
        
        // Initialize with saved or default language
        setLanguage(currentLang);
    });
    
    /* ============================================
       MOBILE MENU TOGGLE
       ============================================ */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    /* ============================================
       SMOOTH SCROLLING
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    /* ============================================
       STICKY HEADER
       ============================================ */
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    /* ============================================
       CONTACT FORM HANDLING
       ============================================ */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Molimo popunite sva obavezna polja.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Molimo unesite valjanu email adresu.');
                return;
            }
            
            const formData = {
                name: name,
                email: email,
                phone: phone,
                message: message,
                timestamp: new Date().toISOString()
            };
            
            console.log('Form submitted:', formData);
            
            alert('Hvala vam! Vaša poruka je poslana. Kontaktirat ćemo vas uskoro.');
            
            contactForm.reset();
        });
    }
    
    /* ============================================
       PHONE CALL TRACKING
       ============================================ */
    window.trackPhoneCall = function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_call', {
                'event_category': 'contact',
                'event_label': 'phone_click'
            });
        }
        
        console.log('Phone call tracked');
    };
    
    /* ============================================
       WHATSAPP TRACKING
       ============================================ */
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');
    whatsappLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'contact',
                    'event_label': 'whatsapp_message'
                });
            }
            
            console.log('WhatsApp link clicked');
        });
    });
    
    /* ============================================
       EMAIL TRACKING
       ============================================ */
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'email_click', {
                    'event_category': 'contact',
                    'event_label': 'email_click'
                });
            }
            
            console.log('Email link clicked');
        });
    });
    
    /* ============================================
       LAZY LOADING IMAGES (if implemented)
       ============================================ */
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(function(img) {
            imageObserver.observe(img);
        });
    }
    
    /* ============================================
       FAQ ACCORDION (Optional Enhancement)
       ============================================ */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.style.cursor = 'pointer';
            question.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        }
    });
    
    /* ============================================
       SCROLL ANIMATIONS (Optional)
       ============================================ */
    if ('IntersectionObserver' in window) {
        const animateOnScroll = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.feature-card, .service-card, .fleet-card, .step-card').forEach(function(el) {
            animateOnScroll.observe(el);
        });
    }
    
    /* ============================================
       PERFORMANCE MONITORING
       ============================================ */
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log('Page Load Time:', pageLoadTime + 'ms');
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'timing_complete', {
                    'name': 'page_load',
                    'value': pageLoadTime,
                    'event_category': 'Performance'
                });
            }
        }
    });
    
    /* ============================================
       CLOSE MOBILE MENU ON OUTSIDE CLICK
       ============================================ */
    document.addEventListener('click', function(e) {
        if (navLinks && menuToggle) {
            const isClickInsideMenu = navLinks.contains(e.target);
            const isClickOnToggle = menuToggle.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
    
    /* ============================================
       INITIALIZE
       ============================================ */
    console.log('Taxi Poreč website initialized');
    console.log('Contact: +385 98743679');
    console.log('Email: info@porectaxi.com');
    
})();
