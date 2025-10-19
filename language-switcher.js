// ==========================================
// NORDIC GLOBE - LANGUAGE SWITCHER SYSTEM
// Multi-Language Support: FI, EN, SV
// ==========================================

class LanguageSwitcher {
    constructor() {
        this.currentLang = this.getSavedLanguage() || 'fi';
        this.translations = window.translations || {};
        
        this.init();
    }
    
    init() {
        // Apply saved language
        this.applyLanguage(this.currentLang);
        
        // Setup language selector
        this.setupLanguageSelector();
        
        // Update page language attribute
        document.documentElement.lang = this.currentLang;
        
        console.log(`🌍 Language Switcher initialized - Current: ${this.currentLang.toUpperCase()}`);
    }
    
    setupLanguageSelector() {
        const languageButtons = document.querySelectorAll('.lang-btn');
        
        languageButtons.forEach(btn => {
            // Set active state
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            }
            
            // Add click event
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = btn.dataset.lang;
                
                if (newLang !== this.currentLang) {
                    this.switchLanguage(newLang);
                    
                    // Update active state
                    languageButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
            });
        });
    }
    
    switchLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`❌ Language ${lang} not found`);
            return;
        }
        
        this.currentLang = lang;
        this.saveLanguage(lang);
        this.applyLanguage(lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Track language change
        this.trackLanguageChange(lang);
        
        console.log(`✅ Language switched to: ${lang.toUpperCase()}`);
    }
    
    applyLanguage(lang) {
        const t = this.translations[lang];
        if (!t) return;
        
        // Update meta tags
        this.updateMetaTags(t.meta);
        
        // Update header
        this.updateHeader(t.header);
        
        // Update hero
        this.updateHero(t.hero);
        
        // Update about section
        this.updateAbout(t.about);
        
        // Update stats
        this.updateStats(t.stats);
        
        // Update services
        this.updateServices(t.services);
        
        // Update other services
        this.updateOtherServices(t.otherServices);
        
        // Update contact
        this.updateContact(t.contact);
        
        // Update testimonials
        this.updateTestimonials(t.testimonials);
        
        // Update footer
        this.updateFooter(t.footer);
        
        // Update chatbot
        this.updateChatbot(t.chatbot);
        
        // Update buttons
        this.updateButtons(t.buttons);
    }
    
    updateMetaTags(meta) {
        document.title = meta.title;
        
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) descMeta.content = meta.description;
        
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta) keywordsMeta.content = meta.keywords;
    }
    
    updateHeader(header) {
        // Contact info
        const emailSpan = document.querySelector('.contact-item:first-child .contact-text span');
        if (emailSpan) emailSpan.textContent = header.email;
        
        const phoneSpan = document.querySelector('.contact-item:last-child .contact-text span');
        if (phoneSpan) phoneSpan.textContent = header.phone;
        
        // Navigation menu
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks[0]) navLinks[0].textContent = header.menu.home;
        
        // Dropdown services
        const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
        const servicesKeys = Object.keys(header.services);
        dropdownLinks.forEach((link, index) => {
            const key = servicesKeys[index];
            if (key && header.services[key]) {
                link.textContent = header.services[key];
            }
        });
    }
    
    updateHero(hero) {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) heroTitle.textContent = hero.title;
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = hero.subtitle;
        
        const heroBtn = document.querySelector('.hero .btn-primary');
        if (heroBtn) heroBtn.textContent = hero.cta;
    }
    
    updateAbout(about) {
        const subtitle = document.querySelector('.about-subtitle');
        if (subtitle) subtitle.textContent = about.subtitle;
        
        const title = document.querySelector('.about-title');
        if (title) title.textContent = about.title;
        
        const description = document.querySelector('.about-description p');
        if (description) description.textContent = about.description;
        
        // Services list
        const serviceItems = document.querySelectorAll('.about-section .service-item span');
        if (serviceItems[0]) serviceItems[0].textContent = about.servicesList.maintenance;
        if (serviceItems[1]) serviceItems[1].textContent = about.servicesList.final;
        if (serviceItems[2]) serviceItems[2].textContent = about.servicesList.construction;
    }
    
    updateStats(stats) {
        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels[0]) statLabels[0].textContent = stats.projects;
        if (statLabels[1]) statLabels[1].textContent = stats.customers;
        if (statLabels[2]) statLabels[2].textContent = stats.awards;
        
        const badgeCustomers = document.querySelector('.badge-customers .badge-label');
        if (badgeCustomers) badgeCustomers.textContent = stats.badge1;
        
        const badgeExperience = document.querySelector('.badge-experience .badge-label');
        if (badgeExperience) badgeExperience.textContent = stats.badge2;
    }
    
    updateServices(services) {
        const servicesSubtitle = document.querySelector('.services-subtitle');
        if (servicesSubtitle) servicesSubtitle.textContent = services.subtitle;
        
        const servicesTitle = document.querySelector('.services-title');
        if (servicesTitle) servicesTitle.textContent = services.title;
        
        const servicesDesc = document.querySelector('.services-description');
        if (servicesDesc) servicesDesc.textContent = services.description;
        
        // Individual service cards
        const serviceCards = document.querySelectorAll('.services-section .service-card');
        const servicesList = [
            services.deepCleaning,
            services.windowCleaning,
            services.stairCleaning,
            services.specialCleaning,
            services.shopCleaning,
            services.restaurantCleaning
        ];
        
        serviceCards.forEach((card, index) => {
            if (servicesList[index]) {
                const title = card.querySelector('.service-title');
                const text = card.querySelector('.service-text');
                const readMore = card.querySelector('.read-more-link');
                
                if (title) title.textContent = servicesList[index].title;
                if (text) text.textContent = servicesList[index].description;
                if (readMore) readMore.innerHTML = `${services.readMore} <span class="arrow">→</span>`;
            }
        });
        
        // Show more button
        const showMoreBtn = document.querySelector('.services-cta .btn-secondary');
        if (showMoreBtn) showMoreBtn.textContent = services.showMore;
    }
    
    updateOtherServices(otherServices) {
        const title = document.querySelector('.other-services-header .section-title');
        if (title) title.textContent = otherServices.title;
        
        const subtitle = document.querySelector('.other-services-header .section-subtitle');
        if (subtitle) subtitle.textContent = otherServices.subtitle;
        
        // Read more links
        const readMoreLinks = document.querySelectorAll('.service-link-modern span');
        readMoreLinks.forEach(link => {
            link.textContent = otherServices.readMore;
        });
    }
    
    updateContact(contact) {
        const contactSubtitle = document.querySelector('.contact-subtitle');
        if (contactSubtitle) contactSubtitle.textContent = contact.subtitle;
        
        const contactTitle = document.querySelector('.contact-title');
        if (contactTitle) contactTitle.textContent = contact.title;
        
        // Contact details
        const detailItems = document.querySelectorAll('.contact-detail-text strong');
        if (detailItems[0]) detailItems[0].textContent = contact.phone;
        if (detailItems[1]) detailItems[1].textContent = contact.email;
        if (detailItems[2]) detailItems[2].textContent = contact.address;
        
        // Form
        const form = contact.form;
        const firstNameInput = document.querySelector('#firstName');
        if (firstNameInput) firstNameInput.placeholder = form.firstName + '*';
        
        const lastNameInput = document.querySelector('#lastName');
        if (lastNameInput) lastNameInput.placeholder = form.lastName + '*';
        
        const emailInput = document.querySelector('#email');
        if (emailInput) emailInput.placeholder = form.emailLabel + '*';
        
        const phoneInput = document.querySelector('#phone');
        if (phoneInput) phoneInput.placeholder = form.phoneLabel + '*';
        
        const serviceSelect = document.querySelector('#service');
        if (serviceSelect && serviceSelect.options[0]) {
            serviceSelect.options[0].text = form.selectService;
        }
        
        const messageTextarea = document.querySelector('#message');
        if (messageTextarea) messageTextarea.placeholder = form.message;
        
        const submitBtn = document.querySelector('.btn-contact');
        if (submitBtn) submitBtn.textContent = form.send;
    }
    
    updateTestimonials(testimonials) {
        const title = document.querySelector('.testimonials-main-title');
        if (title) title.textContent = testimonials.title;
        
        const subtitle = document.querySelector('.testimonials-subtitle-text');
        if (subtitle) subtitle.textContent = testimonials.subtitle;
        
        // Navigation buttons aria-labels
        const prevBtn = document.getElementById('testimonialPrevBtn');
        if (prevBtn) prevBtn.setAttribute('aria-label', testimonials.previous);
        
        const nextBtn = document.getElementById('testimonialNextBtn');
        if (nextBtn) nextBtn.setAttribute('aria-label', testimonials.next);
    }
    
    updateFooter(footer) {
        const brandTitle = document.querySelector('.footer-brand h3');
        if (brandTitle) brandTitle.textContent = footer.brand;
        
        const brandTagline = document.querySelector('.footer-brand p');
        if (brandTagline) brandTagline.textContent = footer.tagline;
        
        const quickLinksTitle = document.querySelector('.footer-quick h4');
        if (quickLinksTitle) quickLinksTitle.textContent = footer.quickLinks;
        
        const quickLinksItems = document.querySelectorAll('.footer-quick a');
        if (quickLinksItems[0]) quickLinksItems[0].textContent = footer.services;
        if (quickLinksItems[1]) quickLinksItems[1].textContent = footer.about;
        if (quickLinksItems[2]) quickLinksItems[2].textContent = footer.contact;
        
        const contactTitle = document.querySelector('.footer-contact-mini h4');
        if (contactTitle) contactTitle.textContent = footer.contact;
        
        const followTitle = document.querySelector('.footer-social-mini h4');
        if (followTitle) followTitle.textContent = footer.followUs;
        
        const copyright = document.querySelector('.footer-bottom-bar p');
        if (copyright) copyright.textContent = footer.copyright;
        
        const privacyLink = document.querySelector('.footer-legal a:first-child');
        if (privacyLink) privacyLink.textContent = footer.privacy;
        
        const termsLink = document.querySelector('.footer-legal a:last-child');
        if (termsLink) termsLink.textContent = footer.terms;
    }
    
    updateChatbot(chatbot) {
        const chatbotTitle = document.querySelector('.chatbot-info h3');
        if (chatbotTitle) chatbotTitle.textContent = chatbot.title;
        
        const chatbotStatus = document.querySelector('.chatbot-status');
        if (chatbotStatus) {
            // Limpiar y agregar solo el texto
            const existingText = chatbotStatus.childNodes;
            existingText.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.remove();
                }
            });
            chatbotStatus.appendChild(document.createTextNode(' ' + chatbot.status));
        }
        
        // Welcome message
        const welcomeMsg = document.querySelector('.bot-message .message-content');
        if (welcomeMsg) {
            welcomeMsg.innerHTML = `
                <p>${chatbot.welcome}</p>
                <p>${chatbot.welcomeMsg}</p>
                <span class="message-time">Ahora</span>
            `;
        }
        
        // Quick actions
        const quickActionsTitle = document.querySelector('.quick-actions-title');
        if (quickActionsTitle) quickActionsTitle.textContent = chatbot.quickActions.title;
        
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        const actions = ['services', 'prices', 'book', 'location'];
        quickActionBtns.forEach((btn, index) => {
            if (actions[index] && chatbot.quickActions[actions[index]]) {
                const text = btn.querySelector('span') || btn.childNodes[btn.childNodes.length - 1];
                if (text) {
                    if (text.nodeType === Node.TEXT_NODE) {
                        text.textContent = ' ' + chatbot.quickActions[actions[index]];
                    } else {
                        btn.appendChild(document.createTextNode(' ' + chatbot.quickActions[actions[index]]));
                    }
                }
            }
        });
        
        // Input placeholder
        const chatInput = document.querySelector('.chatbot-input');
        if (chatInput) chatInput.placeholder = chatbot.placeholder;
        
        // Typing indicator
        const typingText = document.querySelector('.chatbot-typing p');
        if (typingText) typingText.textContent = chatbot.typing;
        
        // Footer
        const footerText = document.querySelector('.chatbot-footer-text');
        if (footerText) {
            footerText.innerHTML = `${chatbot.poweredBy} • <a href="#" class="privacy-link">${chatbot.privacy}</a>`;
        }
    }
    
    updateButtons(buttons) {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) whatsappBtn.setAttribute('aria-label', buttons.whatsapp);
        
        const callBtn = document.querySelector('.call-float');
        if (callBtn) callBtn.setAttribute('aria-label', buttons.call);
        
        const scrollTopBtn = document.querySelector('.scroll-to-top');
        if (scrollTopBtn) scrollTopBtn.setAttribute('aria-label', buttons.scrollTop);
        
        const chatbotBtn = document.querySelector('.chatbot-toggle-btn');
        if (chatbotBtn) chatbotBtn.setAttribute('aria-label', buttons.chatbot);
    }
    
    getSavedLanguage() {
        return localStorage.getItem('nordic_globe_language');
    }
    
    saveLanguage(lang) {
        localStorage.setItem('nordic_globe_language', lang);
    }
    
    trackLanguageChange(lang) {
        if (typeof trackEvent === 'function') {
            trackEvent('Language', 'Change', lang.toUpperCase());
        }
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'language_change', {
                'event_category': 'User Preference',
                'event_label': lang.toUpperCase()
            });
        }
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key;
            }
        }
        
        return value;
    }
}

// Initialize language switcher when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.languageSwitcher = new LanguageSwitcher();
    });
} else {
    window.languageSwitcher = new LanguageSwitcher();
}

console.log('🌍 Language Switcher System loaded');

