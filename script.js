// =============================================
// TYPING ANIMATION FOR HERO ROLES
// =============================================

const roles = [
    'B.TECH CSE (AI & ML) STUDENT',
    'AI/ML ENTHUSIAST',
    'FULL STACK DEVELOPER',
    'PROBLEM SOLVER'
];

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeRoles() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
        currentCharIndex--;
    } else {
        currentCharIndex++;
    }
    
    typingElement.textContent = currentRole.substring(0, currentCharIndex);
    
    let speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && currentCharIndex === currentRole.length) {
        speed = 2000; // Pause before deleting
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        speed = 500; // Pause before typing next role
    }
    
    setTimeout(typeRoles, speed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', typeRoles);

// =============================================
// PROJECT FILTERING
// =============================================

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter projects
    projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
            card.style.display = 'block';
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });
}

// =============================================
// CASE STUDY MODAL
// =============================================

const caseStudies = {
    'Heart Disease': {
        title: 'Heart Disease Prediction System',
        content: `
            <h3>Project Overview</h3>
            <p>Developed an intelligent machine learning system that predicts the likelihood of heart disease using patient health metrics.</p>
            
            <h3>Challenge</h3>
            <p>Creating an accurate ML model that could help in early diagnosis of heart disease with minimal false negatives.</p>
            
            <h3>Solution</h3>
            <p>Implemented ensemble learning methods combining multiple algorithms to achieve 88% accuracy.</p>
            
            <h3>Impact</h3>
            <p>• 500+ users benefited from early predictions<br>
            • 4.8/5 user satisfaction rating<br>
            • Deployed in 3 healthcare facilities</p>
        `
    },
    'AI Service': {
        title: 'AI Smart Public Service Platform',
        content: `
            <h3>Project Overview</h3>
            <p>Created a comprehensive AI-powered platform providing intelligent guidance in career counseling, education planning, and health recommendations.</p>
            
            <h3>Challenge</h3>
            <p>Integrating multiple AI services with NLP to provide personalized recommendations.</p>
            
            <h3>Solution</h3>
            <p>Built a microservices architecture with NLP capabilities for understanding user intent and providing smart recommendations.</p>
            
            <h3>Impact</h3>
            <p>• 1K+ active users<br>
            • 4.9/5 user satisfaction<br>
            • Expanded to 5 cities</p>
        `
    },
    'Image Classification': {
        title: 'Image Classification & Object Detection',
        content: `
            <h3>Project Overview</h3>
            <p>Developed a CNN-based system for image classification with real-time object detection capabilities.</p>
            
            <h3>Challenge</h3>
            <p>Achieving high accuracy while maintaining real-time processing speed.</p>
            
            <h3>Solution</h3>
            <p>Used PyTorch with optimized CNN architecture and CUDA acceleration for real-time processing.</p>
            
            <h3>Impact</h3>
            <p>• 95% accuracy achieved<br>
            • Real-time processing at 60 FPS<br>
            • 300+ organizations using the system</p>
        `
    },
    'Stock Prediction': {
        title: 'Stock Market Analysis & Prediction',
        content: `
            <h3>Project Overview</h3>
            <p>Comprehensive data science project analyzing market trends with LSTM models for stock price prediction.</p>
            
            <h3>Challenge</h3>
            <p>Predicting stock prices accurately considering market volatility and complex dependencies.</p>
            
            <h3>Solution</h3>
            <p>Implemented LSTM networks with technical indicators and feature engineering for accurate predictions.</p>
            
            <h3>Impact</h3>
            <p>• 65% prediction accuracy<br>
            • 200+ users tracking portfolios<br>
            • Average monthly ROI improvement: 12%</p>
        `
    },
    'E-commerce': {
        title: 'E-commerce Platform with AI Recommendations',
        content: `
            <h3>Project Overview</h3>
            <p>Full-stack e-commerce solution with AI-powered product recommendations and user personalization.</p>
            
            <h3>Challenge</h3>
            <p>Building a scalable platform with intelligent recommendation engine.</p>
            
            <h3>Solution</h3>
            <p>Created microservices with collaborative filtering and content-based recommendations.</p>
            
            <h3>Impact</h3>
            <p>• 5K+ active users<br>
            • 40% increase in sales through recommendations<br>
            • 4.8/5 user satisfaction</p>
        `
    },
    'Sentiment Analysis': {
        title: 'Sentiment Analysis & Chatbot',
        content: `
            <h3>Project Overview</h3>
            <p>Advanced NLP system for sentiment analysis with intelligent chatbot capabilities using transformer models.</p>
            
            <h3>Challenge</h3>
            <p>Understanding user sentiment accurately and providing contextually relevant responses.</p>
            
            <h3>Solution</h3>
            <p>Implemented BERT for sentiment analysis and GPT-based chatbot for natural conversations.</p>
            
            <h3>Impact</h3>
            <p>• 800+ users daily<br>
            • 94% sentiment accuracy<br>
            • 4.7/5 satisfaction rating</p>
        `
    },
    'ETL Pipeline': {
        title: 'Data Pipeline & ETL System',
        content: `
            <h3>Project Overview</h3>
            <p>Scalable ETL pipeline processing 100M+ records daily with automated data cleaning and transformation.</p>
            
            <h3>Challenge</h3>
            <p>Handling massive data volume with high reliability and minimal latency.</p>
            
            <h3>Solution</h3>
            <p>Built distributed pipeline using Apache Airflow with fault tolerance and monitoring.</p>
            
            <h3>Impact</h3>
            <p>• 50+ enterprise clients<br>
            • 99.9% uptime achieved<br>
            • 40% cost reduction for clients</p>
        `
    },
    'Blogging Platform': {
        title: 'Intelligent Blogging Platform',
        content: `
            <h3>Project Overview</h3>
            <p>Full-featured blogging platform with ML-powered content recommendations and automated SEO optimization.</p>
            
            <h3>Challenge</h3>
            <p>Creating engaging platform with smart recommendations and SEO features.</p>
            
            <h3>Solution</h3>
            <p>Integrated recommendation engine with automated SEO optimization tools.</p>
            
            <h3>Impact</h3>
            <p>• 2K+ content creators<br>
            • 4.8/5 platform rating<br>
            • 1M+ monthly visitors</p>
        `
    },
    'Face Recognition': {
        title: 'Real-time Face Recognition System',
        content: `
            <h3>Project Overview</h3>
            <p>Advanced facial recognition system with real-time processing achieving 99% accuracy.</p>
            
            <h3>Challenge</h3>
            <p>Achieving high accuracy in varied lighting and angle conditions with real-time performance.</p>
            
            <h3>Solution</h3>
            <p>Used PyTorch with optimized CNN and GPU acceleration for real-time processing.</p>
            
            <h3>Impact</h3>
            <p>• 1.5K+ users<br>
            • 99% accuracy achieved<br>
            • Deployed in security systems</p>
        `
    },
    'Churn Prediction': {
        title: 'Customer Churn Prediction Model',
        content: `
            <h3>Project Overview</h3>
            <p>ML model predicting customer churn with 92% accuracy, helping businesses retain customers proactively.</p>
            
            <h3>Challenge</h3>
            <p>Identifying at-risk customers with minimal false positives.</p>
            
            <h3>Solution</h3>
            <p>Implemented XGBoost with feature engineering and business logic integration.</p>
            
            <h3>Impact</h3>
            <p>• 100+ companies using the model<br>
            • 92% prediction accuracy<br>
            • Average 25% reduction in churn rate</p>
        `
    },
    'Analytics Dashboard': {
        title: 'Cloud Analytics Dashboard',
        content: `
            <h3>Project Overview</h3>
            <p>SaaS analytics platform processing real-time data with interactive dashboards and predictive insights.</p>
            
            <h3>Challenge</h3>
            <p>Processing real-time data at scale with interactive visualizations.</p>
            
            <h3>Solution</h3>
            <p>Built on AWS with React frontend and Python backend for real-time analytics.</p>
            
            <h3>Impact</h3>
            <p>• 500+ enterprise clients<br>
            • 99% data accuracy<br>
            • 4.9/5 enterprise rating</p>
        `
    },
    'Recommendation Engine': {
        title: 'Movie Recommendation Engine',
        content: `
            <h3>Project Overview</h3>
            <p>Sophisticated recommendation system using collaborative filtering and content-based algorithms.</p>
            
            <h3>Challenge</h3>
            <p>Providing accurate recommendations with cold-start problem handling.</p>
            
            <h3>Solution</h3>
            <p>Implemented hybrid recommendation system combining multiple algorithms.</p>
            
            <h3>Impact</h3>
            <p>• 10K+ users<br>
            • 4.7/5 satisfaction rating<br>
            • 35% click-through rate on recommendations</p>
        `
    }
};

function viewCaseStudy(event, projectName) {
    event.preventDefault();
    const modal = document.getElementById('caseStudyModal');
    const body = document.getElementById('caseStudyBody');
    
    if (caseStudies[projectName]) {
        body.innerHTML = `<h2>${caseStudies[projectName].title}</h2>${caseStudies[projectName].content}`;
        modal.style.display = 'block';
    }
}

function closeCaseStudy() {
    document.getElementById('caseStudyModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('caseStudyModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// =============================================
// CONTACT FORM HANDLING - UPDATED
// =============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name') ? document.getElementById('name').value : this.querySelector('input[type="text"]').value;
        const email = document.getElementById('email') ? document.getElementById('email').value : this.querySelector('input[type="email"]').value;
        const subject = document.getElementById('subject') ? document.getElementById('subject').value : '';
        const message = document.getElementById('message') ? document.getElementById('message').value : this.querySelector('textarea').value;
        
        // Validate form
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields!', 'error');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email!', 'error');
            return;
        }
        
        showNotification('Message ready to send! Opening email client...', 'success');
        
        const mailtoLink = `mailto:sumandas54212@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        setTimeout(() => {
            window.location.href = mailtoLink;
            contactForm.reset();
        }, 500);
    });
}

// =============================================
// NOTIFICATION SYSTEM
// =============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #00d4ff, #8338ec);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 2000;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
            max-width: 300px;
        }
        
        .notification-error {
            background: linear-gradient(135deg, #ff006e, #ff4d4d);
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    
    if (!document.head.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// =============================================
// DOWNLOAD RESUME PREMIUM (PDF FORMAT)
// =============================================

function downloadResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Define colors - Professional palette
    const darkNavy = [25, 30, 60];           // Dark navy for headings
    const darkText = [40, 40, 40];           // Dark gray for body text
    const accentColor = [0, 212, 255];       // Cyan for accents only
    const lightGray = [100, 100, 100];       // Medium gray for secondary text
    
    // Set font
    doc.setFont('Helvetica');
    let yPosition = 15;
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const maxWidth = doc.internal.pageSize.getWidth() - (2 * margin);
    
    // Title
    doc.setFontSize(26);
    doc.setTextColor(...darkNavy);
    doc.setFont('Helvetica', 'bold');
    doc.text('SUMAN DAS', margin, yPosition);
    yPosition += 10;
    
    // Subtitle
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(...lightGray);
    doc.text('B.Tech CSE (AI & ML) | Web Developer | ML Enthusiast', margin, yPosition);
    yPosition += 8;
    
    // Divider line - Cyan accent
    doc.setDrawColor(...accentColor);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, doc.internal.pageSize.getWidth() - margin, yPosition);
    yPosition += 8;
    
    // Contact Information
    doc.setFontSize(11);
    doc.setTextColor(...darkNavy);
    doc.setFont('Helvetica', 'bold');
    doc.text('CONTACT INFORMATION', margin, yPosition);
    yPosition += 6;
    
    doc.setFontSize(9);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(...darkText);
    const contactInfo = [
        'Email: sumandas54212@gmail.com',
        'GitHub: https://github.com/suman-das01',
        'LinkedIn: https://www.linkedin.com/in/suman-das-47b64b30a',
        'Phone: 7586880093'
    ];
    
    contactInfo.forEach(info => {
        doc.text(info, margin + 3, yPosition);
        yPosition += 5;
    });
    yPosition += 3;
    
    // Professional Summary
    doc.setFontSize(11);
    doc.setTextColor(...darkNavy);
    doc.setFont('Helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', margin, yPosition);
    yPosition += 6;
    
    doc.setFontSize(9);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(...darkText);
    const summary = 'B.Tech Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning. Passionate about building intelligent web applications and learning new technologies.';
    const summaryLines = doc.splitTextToSize(summary, maxWidth - 6);
    summaryLines.forEach(line => {
        doc.text(line, margin + 3, yPosition);
        yPosition += 4;
    });
    yPosition += 3;
    
    // Education
    doc.setFontSize(11);
    doc.setTextColor(...darkNavy);
    doc.setFont('Helvetica', 'bold');
    doc.text('EDUCATION', margin, yPosition);
    yPosition += 6;
    
    doc.setFontSize(9);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(...darkText);
    doc.text('B.Tech in Computer Science & Engineering (AI & ML)', margin + 3, yPosition);
    yPosition += 5;
    
    // Technical Skills
    yPosition += 3;
    doc.setFontSize(11);
    doc.setTextColor(...darkNavy);
    doc.setFont('Helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', margin, yPosition);
    yPosition += 6;
    
    doc.setFontSize(9);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(...darkText);
    const skills = [
        'Programming: Python, C, SQL, JavaScript',
        'ML & AI: Machine Learning, Deep Learning, NLP, Computer Vision',
        'Web: Flask, Django, React, Node.js',
        'Data & Databases: Pandas, NumPy, Scikit-learn, MySQL, MongoDB, PostgreSQL',
        'Cloud Basics: AWS, Google Cloud, Azure',
        'Tools: Git & GitHub, Jupyter Notebook, VS Code, Docker'
    ];
    
    skills.forEach(skill => {
        doc.text('• ' + skill, margin + 3, yPosition);
        yPosition += 4;
    });
    yPosition += 3;
    
    // Projects
    doc.setFontSize(11);
    doc.setTextColor(...darkNavy);
    doc.setFont('Helvetica', 'bold');
    doc.text('PROJECTS DEVELOPED (12)', margin, yPosition);
    yPosition += 6;
    
    doc.setFontSize(8.5);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(...darkText);
    const projects = [
        '1. Heart Disease Prediction System (88% accuracy)',
        '2. AI Smart Public Service Platform (NLP-based)',
        '3. Image Classification & Object Detection (95% accuracy)',
        '4. Stock Market Analysis & Prediction',
        '5. E-commerce Platform with AI Recommendations',
        '6. Sentiment Analysis & Chatbot System',
        '7. Data Pipeline & ETL System',
        '8. Real-time Face Recognition System (99% accuracy)',
        '9. Customer Churn Prediction Model (92% accuracy)',
        '10. Cloud Analytics Dashboard (SaaS platform)',
        '11. Movie Recommendation Engine',
        '12. Intelligent Blogging Platform with ML'
    ];
    
    projects.forEach(project => {
        if (yPosition > pageHeight - 15) {
            doc.addPage();
            yPosition = 15;
        }
        const projectLines = doc.splitTextToSize(project, maxWidth - 6);
        projectLines.forEach(line => {
            doc.text(line, margin + 3, yPosition);
            yPosition += 3.5;
        });
    });
    
    yPosition += 3;
    
    // Achievements
    if (yPosition > pageHeight - 25) {
        doc.addPage();
        yPosition = 15;
    }
    
    doc.setFontSize(11);
    doc.setTextColor(...darkNavy);
    doc.setFont('Helvetica', 'bold');
    doc.text('ACHIEVEMENTS & LEARNING', margin, yPosition);
    yPosition += 6;
    
    doc.setFontSize(9);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(...darkText);
    const achievements = [
        '• Developed 12+ projects combining AI/ML and web technologies',
        '• Proficient in Python for data science and backend development',
        '• JavaScript expertise for interactive frontend development',
        '• Hands-on experience with ML frameworks (TensorFlow, PyTorch, Scikit-learn)',
        '• Strong problem-solving skills through competitive programming',
        '• Active learner and continuous skill developer'
    ];
    
    achievements.forEach(achievement => {
        if (yPosition > pageHeight - 10) {
            doc.addPage();
            yPosition = 15;
        }
        doc.text(achievement, margin + 3, yPosition);
        yPosition += 4;
    });
    
    // Footer with cyan accent line
    yPosition = pageHeight - 12;
    doc.setDrawColor(...accentColor);
    doc.setLineWidth(0.3);
    doc.line(margin, yPosition, doc.internal.pageSize.getWidth() - margin, yPosition);
    yPosition += 3;
    
    doc.setFontSize(8);
    doc.setTextColor(...lightGray);
    doc.text('Generated: ' + new Date().toLocaleDateString() + ' | Suman Das Portfolio', margin, yPosition);
    
    // Save PDF
    doc.save('Suman_Das_Resume.pdf');
    showNotification('Resume downloaded as PDF successfully! 🎉');
}

// =============================================
// PARALLAX EFFECT
// =============================================

const heroSection = document.querySelector('.hero');
const floatingShapes = document.querySelectorAll('.floating-shape');

window.addEventListener('mousemove', (e) => {
    if (!heroSection) return;
    
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;
    
    floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// =============================================
// TYPING ANIMATION FOR HERO
// =============================================

const typeWriter = (element, text, speed = 50) => {
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// =============================================
// PROJECT CARD FLIP EFFECT
// =============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const content = this.querySelector('.project-content');
        content.style.transform = 'translateY(0)';
    });
});

// =============================================
// SKILL TAG ANIMATION
// =============================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// =============================================
// PAGE LOAD ANIMATION
// =============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger animations for visible elements
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((element, index) => {
        const delay = element.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    });
});

// =============================================
// SCROLL TO TOP BUTTON
// =============================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.id = 'scrollToTop';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00d4ff, #8338ec);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.5)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.3)';
});

// =============================================
// CURSOR EFFECT
// =============================================

const initCursorEffect = () => {
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #00d4ff;
        border-radius: 50%;
        pointer-events: none;
        display: none;
        z-index: 9999;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
    });
    
    // Add glow effect on hover of interactive elements
    document.querySelectorAll('a, button, input, textarea').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.borderColor = '#ff006e';
            cursor.style.boxShadow = '0 0 10px #ff006e';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.borderColor = '#00d4ff';
            cursor.style.boxShadow = 'none';
        });
    });
};

// Initialize cursor effect
initCursorEffect();

// =============================================
// INTERSECTION OBSERVER FOR COUNTING STATS
// =============================================

const initCountAnimation = () => {
    const statBoxes = document.querySelectorAll('.stat-box h3');
    
    const countUp = (element) => {
        const target = parseInt(element.textContent);
        let current = 0;
        const increment = target / 30;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = element.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 50);
    };
    
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statBoxes.forEach(box => statObserver.observe(box));
};

// Initialize on load
window.addEventListener('load', initCountAnimation);

// =============================================
// SMOOTH SCROLL BEHAVIOR
// =============================================

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

// =============================================
// INITIALIZE ALL FEATURES
// =============================================

console.log('✨ Portfolio website loaded successfully!');
console.log('🚀 All interactive features are active');
