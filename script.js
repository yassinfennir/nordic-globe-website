// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && hamburger) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Add animation to hero elements on load
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Search functionality (placeholder)
const searchIcon = document.querySelector('.search-icon');
if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        alert('Hakutoiminto tulossa pian!');
    });
}

// Smooth scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe about section
const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
    observer.observe(aboutSection);
}

// Observe stats section
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    observer.observe(statsSection);
}

// Observe services section
const servicesSection = document.querySelector('.services-section');
if (servicesSection) {
    observer.observe(servicesSection);
}

const certificationsSection = document.querySelector('.certifications-section');
if (certificationsSection) {
    observer.observe(certificationsSection);
}

// Observe contact section
const contactSection = document.querySelector('.contact-section');
if (contactSection) {
    observer.observe(contactSection);
}

// Observe testimonials section
const testimonialsSection = document.querySelector('.testimonials-section');
if (testimonialsSection) {
    observer.observe(testimonialsSection);
}

// Testimonials Carousel functionality
class TestimonialsCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.testimonial-card');
        this.dotsContainer = document.getElementById('testimonialDots');
        this.prevBtn = document.getElementById('prevTestimonial');
        this.nextBtn = document.getElementById('nextTestimonial');
        this.track = document.getElementById('testimonialsTrack');
        this.slidesPerView = this.getSlidesPerView();
        this.totalSlides = this.slides.length;
        this.isTransitioning = false;
        
        if (this.slides.length > 0) {
            this.createDots();
            this.init();
            this.updateCarousel();
        }
        
        // Responsive resize
        window.addEventListener('resize', () => {
            this.slidesPerView = this.getSlidesPerView();
            this.updateCarousel();
        });
    }
    
    getSlidesPerView() {
        const width = window.innerWidth;
        if (width <= 768) return 1;
        if (width <= 1200) return 2;
        return 3;
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        const numDots = Math.ceil(this.totalSlides / this.slidesPerView);
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
        
        this.dots = document.querySelectorAll('.dot');
    }
    
    init() {
        // Event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        // Auto-play
        this.startAutoPlay();
        
        // Pause on hover
        const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
        if (carouselWrapper) {
            carouselWrapper.addEventListener('mouseenter', () => this.stopAutoPlay());
            carouselWrapper.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Touch/swipe support
        this.addTouchSupport();
    }
    
    updateCarousel() {
        if (this.isTransitioning || !this.track) return;
        
        const slideWidth = this.slides[0]?.offsetWidth || 0;
        const gap = 24;
        const offset = (slideWidth + gap) * this.currentSlide;
        
        this.track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        this.track.style.transform = `translateX(-${offset}px)`;
        
        this.updateDots();
    }
    
    goToSlide(slideIndex) {
        if (this.isTransitioning) return;
        
        const maxSlide = Math.max(0, this.totalSlides - this.slidesPerView);
        this.currentSlide = Math.max(0, Math.min(slideIndex, maxSlide));
        
        this.isTransitioning = true;
        this.updateCarousel();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }
    
    nextSlide() {
        const maxSlide = Math.max(0, this.totalSlides - this.slidesPerView);
        
        if (this.currentSlide >= maxSlide) {
            // Loop back to start
            this.goToSlide(0);
        } else {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    prevSlide() {
        if (this.currentSlide <= 0) {
            // Loop to end
            const maxSlide = Math.max(0, this.totalSlides - this.slidesPerView);
            this.goToSlide(maxSlide);
        } else {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    updateDots() {
        if (!this.dots) return;
        
        const activeDotIndex = Math.floor(this.currentSlide / this.slidesPerView);
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            if (!this.isTransitioning) {
                this.nextSlide();
            }
        }, 4000); // Change slide every 4 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        
        this.track?.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.stopAutoPlay();
        });
        
        this.track?.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });
        
        this.track?.addEventListener('touchend', () => {
            this.handleSwipe(startX, endX);
            this.startAutoPlay();
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialsCarousel();
    initServiceCarousel();
});

// Service Carousel functionality
function initServiceCarousel() {
    const servicesGrid = document.querySelector('.services-grid');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    
    if (!servicesGrid || !leftArrow || !rightArrow) return;
    
    const serviceCards = servicesGrid.querySelectorAll('.service-card');
    let currentIndex = 0;
    const cardsToShow = getCardsToShow();
    const maxIndex = Math.max(0, serviceCards.length - cardsToShow);
    
    function getCardsToShow() {
        const width = window.innerWidth;
        if (width <= 768) return 1;
        return 2;
    }
    
    function updateCarousel() {
        const cardWidth = serviceCards[0]?.offsetWidth || 0;
        const gap = 24;
        const offset = (cardWidth + gap) * currentIndex;
        
        servicesGrid.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        servicesGrid.style.transform = `translateX(-${offset}px)`;
        
        // Update arrow states
        leftArrow.style.opacity = currentIndex === 0 ? '0.5' : '1';
        leftArrow.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
        rightArrow.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        rightArrow.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
    }
    
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    rightArrow.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newCardsToShow = getCardsToShow();
            const newMaxIndex = Math.max(0, serviceCards.length - newCardsToShow);
            if (currentIndex > newMaxIndex) {
                currentIndex = newMaxIndex;
            }
            updateCarousel();
        }, 250);
    });
    
    // Initial update
    updateCarousel();
}

// Progress bar animation
const progressFill = document.querySelector('.progress-fill');
if (progressFill) {
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 1;
        progressFill.style.width = `${progress}%`;
        
        if (progress >= 100) {
            progress = 0;
        }
    }, 100);
}

// Contact form functionality
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.service) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('.btn-contact');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Ultra smooth interactions
document.addEventListener('DOMContentLoaded', () => {
    // Parallax scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-overlay');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }, { passive: true });
    
    // Smooth transitions for all interactive elements
    document.querySelectorAll('button, a, input, select, textarea').forEach(el => {
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    // Initialize Client Reviews Carousel with a small delay to ensure DOM is fully loaded
    setTimeout(() => {
        initClientReviewsCarousel();
    }, 100);
});

// Client Reviews Carousel functionality
function initClientReviewsCarousel() {
    console.log('Initializing Client Reviews Carousel...');
    const reviewsTrack = document.querySelector('.reviews-track');
    const prevBtn = document.querySelector('.review-nav-btn.prev-btn');
    const nextBtn = document.querySelector('.review-nav-btn.next-btn');
    const reviewCards = document.querySelectorAll('.review-card');
    
    console.log('Reviews Track:', reviewsTrack);
    console.log('Prev Button:', prevBtn);
    console.log('Next Button:', nextBtn);
    console.log('Review Cards:', reviewCards.length);
    
    if (!reviewsTrack || !prevBtn || !nextBtn || reviewCards.length === 0) {
        console.error('⚠️ Missing elements - carousel not initialized');
        console.error('Missing:', {
            track: !reviewsTrack,
            prevBtn: !prevBtn,
            nextBtn: !nextBtn,
            noCards: reviewCards.length === 0
        });
        return;
    }
    
    console.log('✅ Carousel initialized successfully!');
    
    let currentIndex = 0;
    let isTransitioning = false;
    let autoPlayInterval = null;
    
    // Get number of cards to show based on screen width
    function getCardsToShow() {
        // Always show 1 card at a time, centered
        return 1;
    }
    
    // Calculate max index
    function getMaxIndex() {
        const cardsToShow = getCardsToShow();
        return Math.max(0, reviewCards.length - cardsToShow);
    }
    
    // Update carousel position - FIXED
    function updateCarousel() {
        console.log('🔄 Updating carousel, currentIndex:', currentIndex);
        
        // Get the container width instead of card width
        const containerWidth = reviewsTrack.parentElement?.offsetWidth || 0;
        const offset = containerWidth * currentIndex;
        
        console.log('🔄 Container width:', containerWidth, 'Offset:', offset);
        
        reviewsTrack.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        reviewsTrack.style.transform = `translateX(-${offset}px)`;
        
        // Update button states
        updateButtonStates();
    }
    
    // Update button visual states
    function updateButtonStates() {
        // Buttons are always active with loop functionality
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
    
    // Go to specific index
    function goToIndex(index) {
        if (isTransitioning) return;
        
        const maxIndex = getMaxIndex();
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        
        isTransitioning = true;
        updateCarousel();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }
    
    // Next slide - FIXED
    function nextSlide() {
        console.log('🔹 nextSlide called, currentIndex:', currentIndex);
        const maxIndex = getMaxIndex();
        console.log('🔹 maxIndex:', maxIndex);
        
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            // Loop back to start
            currentIndex = 0;
        }
        
        console.log('🔹 New currentIndex:', currentIndex);
        updateCarousel();
    }
    
    // Previous slide - FIXED
    function prevSlide() {
        console.log('🔹 prevSlide called, currentIndex:', currentIndex);
        const maxIndex = getMaxIndex();
        
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Loop to end
            currentIndex = maxIndex;
        }
        
        console.log('🔹 New currentIndex:', currentIndex);
        updateCarousel();
    }
    
    // Auto-play functionality
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            if (!isTransitioning) {
                nextSlide();
            }
        }, 5000); // Change every 5 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    // Event listeners for navigation buttons - FIXED VERSION
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('⬅️ Previous button clicked! Current index:', currentIndex);
        
        stopAutoPlay();
        prevSlide();
        setTimeout(() => startAutoPlay(), 100);
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('➡️ Next button clicked! Current index:', currentIndex);
        
        stopAutoPlay();
        nextSlide();
        setTimeout(() => startAutoPlay(), 100);
    });
    
    // Pause auto-play on hover
    const reviewsWrapper = document.querySelector('.reviews-carousel-wrapper');
    if (reviewsWrapper) {
        reviewsWrapper.addEventListener('mouseenter', () => {
            stopAutoPlay();
        });
        
        reviewsWrapper.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }
    
    // Touch/swipe support
    let startX = 0;
    let endX = 0;
    let isDragging = false;
    
    reviewsTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoPlay();
    }, { passive: true });
    
    reviewsTrack.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        endX = e.touches[0].clientX;
    }, { passive: true });
    
    reviewsTrack.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        startAutoPlay();
    });
    
    // Mouse drag support for desktop
    let mouseStartX = 0;
    let mouseEndX = 0;
    let isMouseDragging = false;
    
    reviewsTrack.addEventListener('mousedown', (e) => {
        mouseStartX = e.clientX;
        isMouseDragging = true;
        reviewsTrack.style.cursor = 'grabbing';
        stopAutoPlay();
    });
    
    reviewsTrack.addEventListener('mousemove', (e) => {
        if (!isMouseDragging) return;
        mouseEndX = e.clientX;
    });
    
    reviewsTrack.addEventListener('mouseup', () => {
        if (!isMouseDragging) return;
        isMouseDragging = false;
        reviewsTrack.style.cursor = 'grab';
        
        const threshold = 50;
        const diff = mouseStartX - mouseEndX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        startAutoPlay();
    });
    
    reviewsTrack.addEventListener('mouseleave', () => {
        if (isMouseDragging) {
            isMouseDragging = false;
            reviewsTrack.style.cursor = 'grab';
            startAutoPlay();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newMaxIndex = getMaxIndex();
            if (currentIndex > newMaxIndex) {
                currentIndex = newMaxIndex;
            }
            updateCarousel();
        }, 250);
    });
    
    // Initialize
    reviewsTrack.style.cursor = 'grab';
    updateCarousel();
    startAutoPlay();
    
    // Observe reviews section for animation
    const reviewsSection = document.querySelector('.client-reviews-section');
    if (reviewsSection) {
        const reviewsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Add staggered animation to review cards
                    reviewCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        reviewsObserver.observe(reviewsSection);
        
        // Set initial state for cards
        reviewCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }
}

// ==========================================
// NUEVO CARRUSEL MODERNO DE TESTIMONIOS
// ==========================================

class ModernTestimonialCarousel {
    constructor() {
        this.slidesContainer = document.getElementById('testimonialSlides');
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.prevBtn = document.getElementById('testimonialPrev');
        this.nextBtn = document.getElementById('testimonialNext');
        this.dotsContainer = document.getElementById('carouselDots');
        
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Crear dots de navegación
        this.createDots();
        
        // Event listeners para botones
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        // Auto-play
        this.startAutoPlay();
        
        // Pausar en hover
        const container = document.querySelector('.testimonial-carousel-container');
        if (container) {
            container.addEventListener('mouseenter', () => this.stopAutoPlay());
            container.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Mostrar primer slide
        this.showSlide(0);
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
        
        this.dots = document.querySelectorAll('.carousel-dot');
    }
    
    showSlide(index) {
        // Remover clase active de todos los slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Agregar clase active al slide actual
        this.slides[index].classList.add('active');
        
        // Mover el contenedor
        const offset = -100 * index;
        this.slidesContainer.style.transform = `translateX(${offset}%)`;
        
        // Actualizar dots
        this.updateDots();
    }
    
    updateDots() {
        if (!this.dots) return;
        
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.showSlide(this.currentIndex);
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(this.currentIndex);
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.showSlide(this.currentIndex);
        this.stopAutoPlay();
        this.startAutoPlay();
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Cambia cada 5 segundos
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Inicializar el nuevo carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar un momento para asegurar que todo esté cargado
    setTimeout(() => {
        const modernCarousel = new ModernTestimonialCarousel();
        console.log('✅ Modern Testimonial Carousel initialized!');
    }, 100);
});

// ==========================================
// ULTRA MODERN TESTIMONIALS SHOWCASE
// ==========================================

class RevolutionaryShowcase {
    constructor() {
        this.wrapper = document.getElementById('showcaseWrapper');
        this.items = document.querySelectorAll('.showcase-item');
        this.prevBtn = document.getElementById('showcasePrev');
        this.nextBtn = document.getElementById('showcaseNext');
        this.dotsContainer = document.getElementById('progressIndicators');
        
        this.currentIndex = 0;
        this.totalItems = this.items.length;
        this.autoPlayInterval = null;
        this.isTransitioning = false;
        
        if (this.items.length > 0) {
            console.log('🎨 Initializing Revolutionary Showcase with', this.totalItems, 'testimonials');
            this.init();
        }
    }
    
    init() {
        // Crear dots de navegación
        this.createNavigationDots();
        
        // Event listeners
        this.prevBtn?.addEventListener('click', () => this.navigate('prev'));
        this.nextBtn?.addEventListener('click', () => this.navigate('next'));
        
        // Iniciar autoplay
        this.startAutoPlay();
        
        // Pausar en hover
        const showcase = document.querySelector('.revolutionary-testimonials');
        if (showcase) {
            showcase.addEventListener('mouseenter', () => this.stopAutoPlay());
            showcase.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Mostrar el primer item
        this.showItem(0);
    }
    
    createNavigationDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalItems; i++) {
            const dot = document.createElement('div');
            dot.classList.add('nav-dot');
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.stopAutoPlay();
                this.navigateToIndex(i);
                this.startAutoPlay();
            });
            
            this.dotsContainer.appendChild(dot);
        }
        
        this.dots = document.querySelectorAll('.nav-dot');
    }
    
    showItem(index) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        // Remover clase active de todos
        this.items.forEach(item => item.classList.remove('active'));
        
        // Agregar clase active al item actual
        this.items[index].classList.add('active');
        
        // Actualizar dots
        this.updateDots();
        
        // Permitir nueva transición después de animación
        setTimeout(() => {
            this.isTransitioning = false;
        }, 900);
    }
    
    updateDots() {
        if (!this.dots) return;
        
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    navigate(direction) {
        if (this.isTransitioning) return;
        
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.totalItems;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
        }
        
        this.showItem(this.currentIndex);
    }
    
    navigateToIndex(index) {
        if (this.isTransitioning) return;
        this.currentIndex = index;
        this.showItem(this.currentIndex);
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.navigate('next');
        }, 6000); // Cambia cada 6 segundos
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Inicializar el showcase revolucionario
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRevolutionaryShowcase);
} else {
    initRevolutionaryShowcase();
}

function initRevolutionaryShowcase() {
    setTimeout(() => {
        const showcase = new RevolutionaryShowcase();
        console.log('✨ Revolutionary Testimonials Showcase initialized!');
    }, 150);
}

// ==========================================
// OTHER SERVICES CAROUSEL (Muut Palvelut)
// ==========================================

class OtherServicesCarousel {
    constructor() {
        this.track = document.querySelector('.services-track');
        this.cards = document.querySelectorAll('.service-card-modern');
        this.prevBtn = document.querySelector('.carousel-nav.prev-nav');
        this.nextBtn = document.querySelector('.carousel-nav.next-nav');
        this.dotsContainer = document.querySelector('.carousel-dots-container');
        
        this.currentIndex = 0;
        this.totalCards = this.cards.length;
        this.cardsPerView = this.getCardsPerView();
        this.isTransitioning = false;
        this.autoPlayInterval = null;
        
        if (this.cards.length > 0 && this.track) {
            console.log('🎯 Initializing Other Services Carousel with', this.totalCards, 'services');
            this.init();
        }
    }
    
    getCardsPerView() {
        const width = window.innerWidth;
        if (width <= 768) return 1;
        if (width <= 1024) return 2;
        if (width <= 1200) return 3;
        return 4;
    }
    
    getMaxIndex() {
        return Math.max(0, this.totalCards - this.cardsPerView);
    }
    
    init() {
        // Create navigation dots
        this.createDots();
        
        // Event listeners for buttons
        this.prevBtn?.addEventListener('click', () => this.navigate('prev'));
        this.nextBtn?.addEventListener('click', () => this.navigate('next'));
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause on hover
        const section = document.querySelector('.other-services-section');
        if (section) {
            section.addEventListener('mouseenter', () => this.stopAutoPlay());
            section.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.cardsPerView = this.getCardsPerView();
                const maxIndex = this.getMaxIndex();
                if (this.currentIndex > maxIndex) {
                    this.currentIndex = maxIndex;
                }
                this.updateCarousel();
                this.createDots();
            }, 250);
        });
        
        // Touch/swipe support
        this.addTouchSupport();
        
        // Initial update
        this.updateCarousel();
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        const numDots = Math.ceil(this.totalCards / this.cardsPerView);
        
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Ir al grupo ${i + 1}`);
            
            dot.addEventListener('click', () => {
                this.stopAutoPlay();
                this.goToIndex(i * this.cardsPerView);
                setTimeout(() => this.startAutoPlay(), 100);
            });
            
            this.dotsContainer.appendChild(dot);
        }
        
        this.dots = document.querySelectorAll('.carousel-dot');
    }
    
    updateCarousel() {
        if (!this.track || this.cards.length === 0) return;
        
        const cardWidth = this.cards[0].offsetWidth;
        const gap = 32; // Must match the gap in CSS
        const offset = (cardWidth + gap) * this.currentIndex;
        
        this.track.style.transform = `translateX(-${offset}px)`;
        
        // Update dots
        this.updateDots();
        
        // Update button states
        this.updateButtonStates();
    }
    
    updateDots() {
        if (!this.dots) return;
        
        const activeDotIndex = Math.floor(this.currentIndex / this.cardsPerView);
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }
    
    updateButtonStates() {
        const maxIndex = this.getMaxIndex();
        
        // Always enable buttons with loop functionality
        if (this.prevBtn) {
            this.prevBtn.disabled = false;
            this.prevBtn.style.opacity = '1';
            this.prevBtn.style.cursor = 'pointer';
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = false;
            this.nextBtn.style.opacity = '1';
            this.nextBtn.style.cursor = 'pointer';
        }
    }
    
    navigate(direction) {
        if (this.isTransitioning) return;
        
        const maxIndex = this.getMaxIndex();
        
        this.isTransitioning = true;
        
        if (direction === 'next') {
            if (this.currentIndex >= maxIndex) {
                // Loop back to start
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        } else {
            if (this.currentIndex <= 0) {
                // Loop to end
                this.currentIndex = maxIndex;
            } else {
                this.currentIndex--;
            }
        }
        
        this.updateCarousel();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }
    
    goToIndex(index) {
        if (this.isTransitioning) return;
        
        const maxIndex = this.getMaxIndex();
        this.currentIndex = Math.max(0, Math.min(index, maxIndex));
        
        this.isTransitioning = true;
        this.updateCarousel();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            if (!this.isTransitioning) {
                this.navigate('next');
            }
        }, 4000); // Change every 4 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        let isDragging = false;
        
        this.track?.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoPlay();
        }, { passive: true });
        
        this.track?.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            endX = e.touches[0].clientX;
        }, { passive: true });
        
        this.track?.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const threshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.navigate('next');
                } else {
                    this.navigate('prev');
                }
            }
            
            this.startAutoPlay();
        });
    }
}

// Initialize Other Services Carousel when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOtherServicesCarousel);
} else {
    initOtherServicesCarousel();
}

function initOtherServicesCarousel() {
    setTimeout(() => {
        const carousel = new OtherServicesCarousel();
        console.log('✅ Other Services Carousel initialized!');
    }, 200);
}

// ==========================================
// SCROLL TO TOP BUTTON FUNCTIONALITY
// ==========================================

const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================

// Native lazy loading fallback for older browsers
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Image loaded event
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
});

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================

// Preload critical resources
const preloadCriticalResources = () => {
    const criticalImages = [
        'images/nordic-globe-logo.png',
        'images/nordic-globe-new.png.png'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
};

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalResources);
} else {
    preloadCriticalResources();
}

// ==========================================
// ANALYTICS & TRACKING (Ready for implementation)
// ==========================================

// Track button clicks
const trackEvent = (category, action, label) => {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
};

// WhatsApp and Call buttons removed per user request

// Track contact form submissions
const contactFormTracking = document.querySelector('.contact-form');
if (contactFormTracking) {
    contactFormTracking.addEventListener('submit', () => {
        trackEvent('Lead', 'Submit', 'Contact Form');
    });
}

// ==========================================
// SMOOTH REVEAL ON SCROLL
// ==========================================

const revealElements = document.querySelectorAll('.service-card, .testimonial-card, .review-card, .cert-badge');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    revealObserver.observe(el);
});

// ==========================================
// COOKIE CONSENT (Basic implementation)
// ==========================================

const checkCookieConsent = () => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        // You can implement a cookie banner here
        console.log('Cookie consent not found - implement banner if needed');
    }
};

checkCookieConsent();

// ==========================================
// PAGE LOAD PERFORMANCE
// ==========================================

window.addEventListener('load', () => {
    console.log('✅ Page fully loaded');
    
    // Hide loading spinner if you have one
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    // Trigger any deferred animations
    document.body.classList.add('page-loaded');
});

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

// Keyboard navigation for modals
document.addEventListener('keydown', (e) => {
    // Close modal on ESC key
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.search-modal.active');
        if (activeModal) {
            const closeBtn = document.getElementById('searchCloseBtn');
            if (closeBtn) closeBtn.click();
        }
    }
});

// Focus trap for modals
const trapFocus = (element) => {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
};

// Apply focus trap to search modal when active
const searchModal = document.getElementById('searchModal');
if (searchModal) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                if (searchModal.classList.contains('active')) {
                    trapFocus(searchModal);
                }
            }
        });
    });
    
    observer.observe(searchModal, { attributes: true });
}

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', (e) => {
    console.error('Error captured:', e.message);
    // You can send errors to a logging service here
});

// ==========================================
// CONSOLE WELCOME MESSAGE
// ==========================================

console.log('%c🌟 Nordic Globe - Professional Cleaning Services 🌟', 
    'font-size: 20px; color: #0071e3; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%cWebsite crafted with ❤️ for excellence', 
    'font-size: 14px; color: #666;');
console.log('%c12+ years of experience | 11,500+ happy customers', 
    'font-size: 12px; color: #00C49A; font-weight: bold;');

// ==========================================
// READY STATE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ All systems ready - Nordic Globe website loaded successfully!');
});
