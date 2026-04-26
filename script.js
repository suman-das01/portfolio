// ===========================
// MOBILE MENU TOGGLE
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===========================
// SMOOTH SCROLLING
// ===========================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in, .fade-in-right').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// NAVBAR STYLING ON SCROLL
// ===========================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================

function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = navbar.offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.style.color = 'var(--light-text)');
            if (navLink) {
                navLink.style.color = 'var(--primary-color)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===========================
// DOWNLOAD RESUME
// ===========================

const downloadBtn = document.querySelector('.download-resume');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Create Resume Container
        const resumeContainer = document.createElement('div');
        resumeContainer.style.cssText = `
            width: 210mm;
            height: 297mm;
            padding: 15mm;
            background: white;
            color: #1a1a1a;
            font-family: 'Calibri', 'Arial', sans-serif;
            font-size: 11px;
            line-height: 1.4;
            position: absolute;
            left: -9999px;
            top: -9999px;
        `;

        resumeContainer.innerHTML = `
            <div style="width: 100%; height: 100%;">
                <!-- Header -->
                <div style="text-align: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 2px solid #2c3e50;">
                    <h1 style="margin: 0; font-size: 22px; color: #2c3e50; font-weight: bold;">SUMAN DAS</h1>
                    <p style="margin: 2px 0; color: #555; font-size: 10px;">AI & ML Student | Python Developer | Machine Learning Enthusiast</p>
                </div>

                <!-- Contact Information -->
                <div style="margin-bottom: 10px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #2c3e50; text-transform: uppercase; border-bottom: 1px solid #999; padding-bottom: 3px;">CONTACT INFORMATION</h3>
                    <p style="margin: 2px 0; font-size: 10px;">📧 Email: sumandas54212@gmail.com</p>
                    <p style="margin: 2px 0; font-size: 10px;">🔗 GitHub: https://github.com/suman6532</p>
                    <p style="margin: 2px 0; font-size: 10px;">💼 LinkedIn: https://linkedin.com/in/suman-das</p>
                </div>

                <!-- Education -->
                <div style="margin-bottom: 10px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #2c3e50; text-transform: uppercase; border-bottom: 1px solid #999; padding-bottom: 3px;">EDUCATION</h3>
                    <p style="margin: 2px 0; font-size: 10px;"><strong>Bachelor of Technology (B.Tech) - Computer Science Engineering</strong></p>
                    <p style="margin: 2px 0; font-size: 10px;"><strong>Specialization:</strong> Artificial Intelligence & Machine Learning</p>
                </div>

                <!-- Professional Summary -->
                <div style="margin-bottom: 10px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #2c3e50; text-transform: uppercase; border-bottom: 1px solid #999; padding-bottom: 3px;">PROFESSIONAL SUMMARY</h3>
                    <p style="margin: 2px 0; font-size: 10px; line-height: 1.35;">Passionate and driven B.Tech CSE (AI & ML) student with strong foundation in Machine Learning, Artificial Intelligence, and Web Development. Demonstrated expertise in building intelligent applications, data analysis, and solving real-world problems using cutting-edge technologies.</p>
                </div>

                <!-- Technical Skills -->
                <div style="margin-bottom: 10px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #2c3e50; text-transform: uppercase; border-bottom: 1px solid #999; padding-bottom: 3px;">TECHNICAL SKILLS</h3>
                    <p style="margin: 2px 0; font-size: 10px;"><strong>Programming:</strong> Python, C, SQL, JavaScript, HTML5, CSS3</p>
                    <p style="margin: 2px 0; font-size: 10px;"><strong>ML & AI:</strong> Machine Learning, NLP, Deep Learning, TensorFlow, Keras, Scikit-learn</p>
                    <p style="margin: 2px 0; font-size: 10px;"><strong>Web Dev:</strong> Flask, Django, REST APIs, Responsive Design, React Basics</p>
                    <p style="margin: 2px 0; font-size: 10px;"><strong>Tools:</strong> Git/GitHub, Jupyter, VS Code, Docker, Pandas, NumPy, Matplotlib</p>
                    <p style="margin: 2px 0; font-size: 10px;"><strong>Cloud & DB:</strong> AWS Basics, Google Cloud, PostgreSQL, MySQL, MongoDB</p>
                </div>

                <!-- Featured Projects -->
                <div style="margin-bottom: 10px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #2c3e50; text-transform: uppercase; border-bottom: 1px solid #999; padding-bottom: 3px;">FEATURED PROJECTS</h3>
                    <div style="margin-bottom: 3px;">
                        <p style="margin: 2px 0 0px 0; font-size: 10px; font-weight: bold;">▸ Heart Disease Prediction System (88% Accuracy)</p>
                        <p style="margin: 0px 0; font-size: 9px; color: #444;">ML web app built with Flask and Scikit-learn. Predicts heart disease likelihood using advanced algorithms on comprehensive healthcare datasets. Deployed with real-time prediction capabilities.</p>
                    </div>
                    <div style="margin-bottom: 3px;">
                        <p style="margin: 2px 0 0px 0; font-size: 10px; font-weight: bold;">▸ AI Smart Public Service Platform</p>
                        <p style="margin: 0px 0; font-size: 9px; color: #444;">AI-powered platform providing intelligent guidance in career planning, education recommendations, and health insights using NLP and ML models. Multi-domain service platform.</p>
                    </div>
                    <div>
                        <p style="margin: 2px 0 0px 0; font-size: 10px; font-weight: bold;">▸ Responsive Portfolio Website</p>
                        <p style="margin: 0px 0; font-size: 9px; color: #444;">Modern, fully responsive portfolio with dark theme, smooth animations, and mobile-first design. Built with vanilla HTML, CSS, and JavaScript. Live and production-ready.</p>
                    </div>
                </div>

                <!-- Areas of Interest -->
                <div style="margin-bottom: 8px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #2c3e50; text-transform: uppercase; border-bottom: 1px solid #999; padding-bottom: 3px;">AREAS OF INTEREST</h3>
                    <p style="margin: 2px 0; font-size: 10px;">Machine Learning & AI Development • Web Development • Cloud Computing • Natural Language Processing • Computer Vision • Data Science & Analytics • Cybersecurity</p>
                </div>

                <!-- Languages -->
                <div>
                    <h3 style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #2c3e50; text-transform: uppercase; border-bottom: 1px solid #999; padding-bottom: 3px;">LANGUAGES</h3>
                    <p style="margin: 2px 0; font-size: 10px;"><strong>English:</strong> Fluent | <strong>Hindi:</strong> Native Speaker</p>
                </div>
            </div>
        `;

        document.body.appendChild(resumeContainer);

        // Wait a moment for rendering
        setTimeout(() => {
            // PDF Options
            const opt = {
                margin: [5, 5, 5, 5],
                filename: 'Suman_Das_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, logging: false, backgroundColor: '#ffffff' },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // Generate PDF
            html2pdf().set(opt).from(resumeContainer).save().then(() => {
                document.body.removeChild(resumeContainer);
            }).catch((error) => {
                console.error('PDF Error:', error);
                if (document.body.contains(resumeContainer)) {
                    document.body.removeChild(resumeContainer);
                }
            });
        }, 100);
    });
}

// ===========================
// CONTACT FORM HANDLING
// ===========================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll('input, textarea');
        const isValid = Array.from(inputs).every(input => input.value.trim() !== '');

        if (isValid) {
            // Show success message
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #6bcf7f, #00d4ff)';

            // Reset form
            contactForm.reset();

            // Restore button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);

            // You can add form submission logic here (e.g., send to backend)
            console.log('Form submitted successfully');
        } else {
            alert('Please fill in all fields');
        }
    });
}

// ===========================
// TYPING ANIMATION FOR HERO
// ===========================

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';

    let i = 0;
    function typeText() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeText, 30);
        }
    }

    // Start typing animation when hero comes into view
    const heroObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && i === 0) {
            typeText();
            heroObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });

    const hero = document.querySelector('.hero');
    if (hero) {
        heroObserver.observe(hero);
    }
}

// ===========================
// PARTICLE EFFECT (STARS)
// ===========================

function createStars() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'stars';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heroSection.appendChild(star);
    }
}

createStars();

// ===========================
// PROJECT CARD CLICK ANIMATION
// ===========================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// SCROLL PROGRESS BAR (Optional Enhancement)
// ===========================

function updateScrollProgress() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    // You can use this value for a progress bar if added to HTML
}

window.addEventListener('scroll', updateScrollProgress);

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Debounce function for optimized event handling
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Handle window resize for responsive behavior
const handleResize = debounce(() => {
    // Add any resize-specific logic here
}, 250);

window.addEventListener('resize', handleResize);

// ===========================
// PAGE LOAD ANIMATIONS
// ===========================

window.addEventListener('load', () => {
    // Add any post-load animations here
    document.body.style.opacity = '1';
});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log('%c Welcome to Suman Das Portfolio! ', 'background: linear-gradient(135deg, #00d4ff, #8338ec); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Made with ❤️ and 💻 ', 'color: #ff006e; font-size: 14px;');
console.log('Feel free to explore the code and get in touch!');
