// =========================================
// Nezlomné - JavaScript funkcionalita
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializácia všetkých funkcií
    initNavigation();
    initTestimonialCarousel();
    initContactForm();
    initEmergencyFeatures();
    initScrollAnimations();
});

// =========================================
// Navigácia
// =========================================

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Zatvorenie menu pri kliknutí na link
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Zatvorenie menu pri kliknutí mimo
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// =========================================
// Smooth scrolling pre anchor linky
// =========================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// =========================================
// Testimonial Carousel
// =========================================

let currentTestimonial = 0;
let testimonialInterval;

function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const navBtns = document.querySelectorAll('.testimonial-nav-btn');
    
    if (slides.length > 0) {
        // Automatické prepínanie po 8 sekundách
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % slides.length;
            showTestimonial(currentTestimonial);
        }, 8000);
        
        // Pozastavenie automatického prepínania pri hover
        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                clearInterval(testimonialInterval);
            });
            
            carousel.addEventListener('mouseleave', () => {
                testimonialInterval = setInterval(() => {
                    currentTestimonial = (currentTestimonial + 1) % slides.length;
                    showTestimonial(currentTestimonial);
                }, 8000);
            });
        }
    }
}

function showTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const navBtns = document.querySelectorAll('.testimonial-nav-btn');
    
    // Skrytie všetkých slide-ov
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Deaktivácia všetkých navigation buttons
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Zobrazenie aktívneho slide-u
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    // Aktivácia príslušného navigation button
    if (navBtns[index]) {
        navBtns[index].classList.add('active');
    }
    
    currentTestimonial = index;
}

// =========================================
// Kontaktný formulár
// =========================================

function initContactForm() {
    const form = document.getElementById('consultation-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validácia formulára
            if (validateForm(form)) {
                // Zobrazenie loading stavu
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Odosiela sa...';
                submitBtn.disabled = true;
                
                // Simulácia odoslania (v reálnej aplikácii by sa to odoslalo na server)
                setTimeout(() => {
                    showFormSuccess();
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
        
        // Real-time validácia polí
        const requiredFields = form.querySelectorAll('input[required], textarea[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(field);
            });
            
            field.addEventListener('input', function() {
                if (field.classList.contains('error')) {
                    validateField(field);
                }
            });
        });
    }
}

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('input[required], textarea[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Validácia súhlasu so spracovaním údajov
    const privacyCheckbox = form.querySelector('input[name="privacy"]');
    if (privacyCheckbox && !privacyCheckbox.checked) {
        showFieldError(privacyCheckbox, 'Musíte súhlasiť so spracovaním osobných údajov');
        isValid = false;
    } else if (privacyCheckbox) {
        clearFieldError(privacyCheckbox);
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    // Vymazanie predchádzajúcej chyby
    clearFieldError(field);
    
    // Kontrola povinných polí
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Toto pole je povinné');
        return false;
    }
    
    // Validácia emailu
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Zadajte platný email');
            return false;
        }
    }
    
    // Validácia telefónu
    if (fieldType === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Zadajte platné telefónne číslo');
            return false;
        }
    }
    
    // Validácia mena
    if (fieldName === 'name' && value) {
        if (value.length < 2) {
            showFieldError(field, 'Meno musí mať aspoň 2 znaky');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Odstránenie existujúcej chybovej správy
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Pridanie novej chybovej správy
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showFormSuccess() {
    // Vytvorenie success notifikácie
    const successDiv = document.createElement('div');
    successDiv.className = 'success-notification';
    successDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            z-index: 1000;
            font-weight: 500;
        ">
            ✓ Vaša žiadosť bola úspešne odoslaná. Kontaktujeme vás do 24 hodín.
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    // Odstránenie notifikácie po 5 sekundách
    setTimeout(() => {
        if (document.body.contains(successDiv)) {
            document.body.removeChild(successDiv);
        }
    }, 5000);
    
    // Scroll k vrchu formulára
    scrollToSection('contact-form');
}

// =========================================
// Bezpečnostné funkcie
// =========================================

function initEmergencyFeatures() {
    // Klávesové skratky pre núdzový odchod
    document.addEventListener('keydown', function(e) {
        // Alt + F4 (Windows) alebo Cmd + W (Mac)
        if ((e.altKey && e.key === 'F4') || (e.metaKey && e.key === 'w')) {
            emergencyExit();
        }
        
        // ESC + ESC (dvojité stlačenie ESC)
        if (e.key === 'Escape') {
            if (window.lastEscapeTime && (Date.now() - window.lastEscapeTime) < 1000) {
                emergencyExit();
            } else {
                window.lastEscapeTime = Date.now();
            }
        }
    });
    
    // Varovanie pri zatváraní stránky
    window.addEventListener('beforeunload', function(e) {
        // Toto varovanie sa zobrazí len ak používateľ manuálne zatvorí stránku
        if (!window.emergencyExitTriggered) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        }
    });
}

function emergencyExit() {
    window.emergencyExitTriggered = true;
    
    // Vyčistenie história prehliadača
    if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', 'about:blank');
    }
    
    // Presmerovanie na neutrálnu stránku
    window.location.replace('https://www.google.com');
}

// =========================================
// Scroll animácie
// =========================================

function initScrollAnimations() {
    // Intersection Observer pre fade-in animácie
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Elementy na animovanie
    const animateElements = document.querySelectorAll(
        '.situation-card, .resource-item, .testimonial-slide, .about-content'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Plynulé zobrazovanie navigácie pri scrolle
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// =========================================
// Utility funkcie
// =========================================

// Detekcia mobilného zariadenia
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Debounce funkcia pre optimalizáciu výkonu
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle funkcia pre scroll eventy
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// =========================================
// Accessibility enhancements
// =========================================

// Odstránenie focus outline pri kliknutí myšou
document.addEventListener('mousedown', () => {
    document.body.classList.add('using-mouse');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.remove('using-mouse');
    }
});

// Skip link pre screen readery
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Preskočiť na hlavný obsah';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        border-radius: 4px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// =========================================
// Error handling
// =========================================

window.addEventListener('error', function(e) {
    console.error('Chyba na stránke:', e.error);
    // V produkčnom prostredí by sa chyby mohli logovať na server
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Nezachytená chyba Promise:', e.reason);
});

// =========================================
// CSS animácie pre lepší UX
// =========================================

// Pridanie CSS tried pre animácie
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .using-mouse *:focus {
        outline: none !important;
    }
    
    .form-group input.error,
    .form-group textarea.error {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
    
    .header {
        transition: transform 0.3s ease;
    }
    
    .success-notification {
        animation: slideInRight 0.4s ease-out;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    /* Loading spinner pre formulár */
    .btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        position: relative;
    }
    
    .btn:disabled::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        margin: auto;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

document.head.appendChild(style);