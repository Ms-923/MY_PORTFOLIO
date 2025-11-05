// DOM Elements
const navIcons = document.querySelectorAll('.nav-icon');
const themeToggle = document.querySelector('.theme-toggle');
const sections = document.querySelectorAll('section');

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Active navigation icon based on scroll position
function setActiveNavIcon() {
    let current = '';
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navIcons.forEach(icon => {
        icon.classList.remove('active');
        if (icon.getAttribute('href') === `#${current}`) {
            icon.classList.add('active');
        }
    });
}

// Theme toggle functionality
if (themeToggle) {
    // Check for saved theme preference or use default dark theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // If the current theme is light, apply it on page load
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Add click event to toggle theme
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Toggle light-theme class on body
        document.body.classList.toggle('light-theme');
        
        // Toggle icon
        const icon = themeToggle.querySelector('i');
        let theme = 'dark';
        
        if (icon.classList.contains('fa-moon')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            theme = 'light';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            theme = 'dark';
        }
        
        // Save theme preference
        localStorage.setItem('theme', theme);
    });
}

// Add scroll event listener
window.addEventListener('scroll', setActiveNavIcon);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavIcon();
    
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Animate shapes randomly
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        // Random animation duration between 15-30s
        const duration = Math.random() * 15 + 15;
        // Random delay between 0-10s
        const delay = Math.random() * 10;
        
        shape.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide any previous status messages
            formStatus.style.display = 'none';
            formSuccess.style.display = 'none';
            formError.style.display = 'none';
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send form data to Web3Forms API
            fetch(contactForm.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                formStatus.style.display = 'block';
                
                if (data.success) {
                    // Show success message
                    formSuccess.style.display = 'block';
                    contactForm.reset();
                } else {
                    // Show error message
                    formError.style.display = 'block';
                    console.error('Form submission error:', data);
                }
            })
            .catch(error => {
                // Show error message
                formStatus.style.display = 'block';
                formError.style.display = 'block';
                console.error('Form submission error:', error);
            });
        });
    }
});

// Add floating animation for shapes
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        50% {
            transform: translate(15px, -15px) rotate(5deg);
        }
        100% {
            transform: translate(-15px, 15px) rotate(-5deg);
        }
    }
`;
document.head.appendChild(style);
