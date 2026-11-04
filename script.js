const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    '.tech-stack, .about-section, .projects-section, .experience-section, .contact-section'
);


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(element => {

    element.classList.add('reveal');

    observer.observe(element);

});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }
    });
});

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(event) {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
});

const typingText = document.querySelector(".typing-text");

const words = [
    "Frontend Developer",
    "Creative Problem Solver",
    "Web Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


const magneticButtons = document.querySelectorAll(".magnetic");

magneticButtons.forEach(button => {
    button.addEventListener("mousemove", function(event) {
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    button.addEventListener("mouseleave", function() {
        button.style.transform = "translate(0, 0)";
    });
});

const rippleButtons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .contact-button"
);

rippleButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        const circle = document.createElement("span");

        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        circle.style.width = circle.style.height = size + "px";
        circle.style.left = event.clientX - rect.left - size / 2 + "px";
        circle.style.top = event.clientY - rect.top - size / 2 + "px";

        button.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});

const preloader = document.getElementById("preloader");
const loaderProgress = document.getElementById("loaderProgress");
const loaderPercentage = document.getElementById("loaderPercentage");

let progress = 0;

const loadingInterval = setInterval(() => {
    progress++;

    loaderProgress.style.width = progress + "%";
    loaderPercentage.textContent = progress + "%";

    if (progress >= 100) {
        clearInterval(loadingInterval);

        setTimeout(() => {
            preloader.classList.add("hidden");
        }, 300);
    }
}, 15);