/* main.js */

// 1. Navigation: Smooth Scroll Logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for the fixed nav
                behavior: 'smooth'
            });
        }
    });
});

// 2. Call to Action: Access Button Logic
const accessBtn = document.querySelector('.btn-access');
if (accessBtn) {
    accessBtn.addEventListener('click', () => {
        // Replace with your actual destination (Whop, Discord, etc.)
        window.location.href = 'https://your-discord-or-form-link.com';
    });
}

// 3. Visual Polish: Intersection Observer for Fade-in Effect
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Select elements to animate (Pillars and Table Rows)
document.querySelectorAll('.pillar, .syllabus-table tr').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

/* main.js */

// Handle the "Apply for Access" button
const accessBtn = document.querySelector('.btn-access');

if (accessBtn) {
    accessBtn.addEventListener('click', () => {
        // OPTION 1: Direct to Whop/Payment
        // window.location.href = 'https://whop.com/your-store-link';

        // OPTION 2: Direct to Application Form (Recommended for high-trust)
        window.location.href = 'https://forms.gle/your-application-form-link';
        
        // OPTION 3: Direct to Discord (Not recommended for institutional look, but works)
        // window.location.href = 'https://discord.gg/your-invite-code';
    });
}