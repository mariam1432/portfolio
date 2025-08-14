// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });

    // Close mobile menu if open
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Active Link Highlighting
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// Intersection Observer for Scroll Animations
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

hiddenElements.forEach((el) => observer.observe(el));

// Initialize EmailJS with your PUBLIC KEY
emailjs.init("y9URLg-gM62IJD6YM");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formStatus = document.getElementById("form-status");
    formStatus.textContent = "Sending your message...";
    formStatus.style.color = "#4a8eff";
    formStatus.classList.remove("hidden");

    emailjs.sendForm("service_phnkskw", "template_y3c4rwm", e.target).then(
      function () {
        formStatus.textContent =
          "Thanks! Your message is on its way. I’ll get back to you shortly.";
        formStatus.style.color = "#4CAF50";
        e.target.reset();

        setTimeout(() => {
          formStatus.classList.add("hidden");
        }, 5000);
      },
      function (error) {
        formStatus.textContent =
          "Something went wrong. Please try again or message me on LinkedIn.";
        formStatus.style.color = "#f44336";
        console.error("Full error:", error);
      }
    );
  });
