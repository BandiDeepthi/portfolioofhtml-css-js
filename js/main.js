// ===================================
// LOADER FUNCTIONALITY
// ===================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader.classList.add('hidden');
        // Remove from DOM after animation completes
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, UI_CONFIG.loaderDuration);
});

// ===================================
// TYPING EFFECT
// ===================================
class TypingEffect {
    constructor(element, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases) {
        this.element = element;
        this.phrases = phrases;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.delayBetweenPhrases = delayBetweenPhrases;
        this.currentPhraseIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.start();
    }

    start() {
        this.type();
    }

    type() {
        const currentPhrase = this.phrases[this.currentPhraseIndex];

        if (this.isDeleting) {
            this.currentText = currentPhrase.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = currentPhrase.substring(0, this.currentText.length + 1);
        }

        this.element.textContent = this.currentText;

        let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.currentText === currentPhrase) {
            // Pause at end of phrase
            typeSpeed = this.delayBetweenPhrases;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typingText');
    if (typingElement && PORTFOLIO_DATA.heroText.typingPhrases) {
        new TypingEffect(
            typingElement,
            PORTFOLIO_DATA.heroText.typingPhrases,
            UI_CONFIG.typingSpeed,
            50, // deleting speed
            UI_CONFIG.typingDelay
        );
    }
});

// ===================================
// NAVBAR FUNCTIONALITY
// ===================================
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Mobile menu toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - UI_CONFIG.scrollOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// DYNAMIC CONTENT POPULATION
// ===================================

// Populate Projects
function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid || !PORTFOLIO_DATA.projects) return;

    projectsGrid.innerHTML = PORTFOLIO_DATA.projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://via.placeholder.com/400x250/667eea/ffffff?text=${encodeURIComponent(project.title)}'">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fab fa-github"></i> GitHub</a>` : ''}
                    ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                    ${!project.github && !project.link ? `<span class="project-link" style="cursor: default; opacity: 0.7;">Demo Available on Request</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Populate Experience Timeline
function populateExperience() {
    const experienceTimeline = document.getElementById('experienceTimeline');
    if (!experienceTimeline || !PORTFOLIO_DATA.experience) return;

    experienceTimeline.innerHTML = PORTFOLIO_DATA.experience.map(item => `
        <div class="timeline-item">
            <div class="timeline-icon">${item.icon || '📌'}</div>
            <div class="timeline-content">
                <span class="timeline-type">${item.type}</span>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-organization">${item.organization}</p>
                <p class="timeline-duration">${item.duration}</p>
                <p class="timeline-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Populate Skills
function populateSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    if (!skillsContainer || !PORTFOLIO_DATA.skills) return;

    skillsContainer.innerHTML = Object.entries(PORTFOLIO_DATA.skills).map(([category, skills]) => `
        <div class="skill-category">
            <h3 class="skill-category-title">${category}</h3>
            <div class="skill-tags">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Initialize all dynamic content
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateExperience();
    populateSkills();
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category, .contact-item');
    animateElements.forEach(el => observer.observe(el));
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add parallax effect to hero orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.glass-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Console message
console.log('%c👋 Welcome to Bandi Deepthi\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'color: #764ba2; font-size: 14px;');
