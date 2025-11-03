// ==================== Mobile Navigation ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ==================== Contact Form Handling (FormSubmit) ====================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Hide any previous messages
        if (formSuccess) formSuccess.classList.remove('show');
        if (formError) formError.classList.remove('show');

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Get form data
            const formData = new FormData(contactForm);

            // Send to FormSubmit
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok || data.success !== undefined) {
                // Success
                if (formSuccess) {
                    formSuccess.classList.add('show');
                    // Scroll to success message
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                // Reset form after 1 second
                setTimeout(() => {
                    contactForm.reset();
                }, 1000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            // Show error message
            if (formError) {
                formError.classList.add('show');
                formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } finally {
            // Restore button
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show message function
function showMessage(text, type) {
    if (formMessage) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .project-card, .cert-card, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== Active Navigation Highlighting ====================
window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// ==================== Navbar Background on Scroll ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ==================== Theme Toggle ====================
function initTheme() {
    // Set default theme to dark
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        // Apply saved theme
        const savedTheme = localStorage.getItem('theme');
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle theme
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Update DOM and localStorage
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});

// ==================== Console Message ====================
console.log('%c Welcome to My Portfolio! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Feel free to explore the code! ', 'color: #667eea; font-size: 14px;');
