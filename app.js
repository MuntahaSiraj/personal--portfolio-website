
/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("ri-menu-3-line");
        icon.classList.add("ri-close-line");
    } else {
        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-3-line");
    }

});


/* Close menu when clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-3-line");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= TYPING EFFECT ================= */

const typingText = document.querySelector(".typing-text");

const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Creative Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}

typeEffect();


/* ================= SERVICES ACCORDION ================= */

const serviceItems =
    document.querySelectorAll(".service-item");

serviceItems.forEach(item => {

    const header =
        item.querySelector(".service-header");

    header.addEventListener("click", () => {

        const alreadyActive =
            item.classList.contains("active");


        /* Close all */

        serviceItems.forEach(service => {
            service.classList.remove("active");
        });


        /* Open clicked one */

        if (!alreadyActive) {
            item.classList.add("active");
        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".glass, .section-heading, .project-card, .skill-icon"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal-hidden");

    revealObserver.observe(element);

});


/* ================= DYNAMIC REVEAL CSS ================= */

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.reveal-hidden {
    opacity: 0;
    transform: translateY(35px);
}

.reveal {
    opacity: 1;
    transform: translateY(0);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

`;

document.head.appendChild(revealStyle);


/* ================= PROJECT CARD DUPLICATION ================= */

/*
   Extra cards create a continuous
   automatic moving effect.
*/

const projectTrack =
    document.querySelector(".projects-track");

if (projectTrack) {

    const projectCards =
        projectTrack.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        const clone = card.cloneNode(true);

        projectTrack.appendChild(clone);

    });

}


/* ================= SKILL DUPLICATION ================= */

const skillsTrack =
    document.querySelector(".skills-track");

if (skillsTrack) {

    const skills =
        skillsTrack.querySelectorAll(".skill-icon");

    skills.forEach(skill => {

        const clone = skill.cloneNode(true);

        skillsTrack.appendChild(clone);

    });

}


/* ================= PARALLAX GLOW ================= */

document.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    const heroGlow =
        document.querySelector(".profile-glow");

    if (heroGlow) {

        heroGlow.style.transform =
            `translate(${x}px, ${y}px)`;

    }

});


/* ================= BUTTON RIPPLE ================= */

document.querySelectorAll(
    ".primary-btn, .secondary-btn"
).forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple =
            document.createElement("span");

        const rect =
            this.getBoundingClientRect();

        const size =
            Math.max(rect.width, rect.height);

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;

        ripple.style.left =
            `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
            `${event.clientY - rect.top - size / 2}px`;

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});
/* ==========================================
   SILKY GLOWING CURSOR TRAIL
========================================== */


const cursorGlow =
    document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});
/* ================= EXTRA ANIMATION CSS ================= */

const extraStyle =
    document.createElement("style");

extraStyle.innerHTML = `

.primary-btn,
.secondary-btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;

    border-radius: 50%;

    background: rgba(255,255,255,0.45);

    transform: scale(0);

    animation: rippleEffect 0.6s linear;

    pointer-events: none;
}

@keyframes rippleEffect {

    to {
        transform: scale(4);
        opacity: 0;
    }

}

.cursor-glow {

    position: fixed;

    width: 120px;
    height: 120px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(145,220,240,0.16),
            transparent 70%
        );

    transform:
        translate(-50%, -50%);

    pointer-events: none;

    z-index: 9999;

    transition:
        left 0.08s linear,
        top 0.08s linear;

}

@media (max-width: 800px) {

    .cursor-glow {
        display: none;
    }

}

`;

document.head.appendChild(extraStyle);


/* ================= PAGE LOADED ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "✨ Muntaha Portfolio Loaded Successfully!"
    );

});

/* Create extra random micro-stars so the white twinkle field stays lively. */
const starLayer = document.querySelector(".space-bg");
for (let i = 0; i < 85; i++) {
  const star = document.createElement("span");
  star.className = "micro-star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.setProperty("--delay", `${(Math.random() * 5).toFixed(2)}s`);
  star.style.setProperty("--duration", `${(2 + Math.random() * 4).toFixed(2)}s`);
  starLayer.appendChild(star);
}

/* ================= VIEW RESUME ================= */

const viewResumeBtn = document.getElementById("viewResumeBtn");

if (viewResumeBtn) {
    viewResumeBtn.addEventListener("click", (event) => {

        event.preventDefault();

        window.open(
            "YOUR-RESUME-LINK-HERE",
            "_blank",
            "noopener,noreferrer"
        );

    });
}

