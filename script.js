// Highlight the active page link based on the current URL
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    if (link.href === window.location.href || link.href.endsWith(window.location.pathname)) {
      link.classList.add("active");
    }
  });
});

// Optional: Smooth scroll for anchor links (if used within same page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Toggle mobile nav (if using a hamburger menu icon)
const toggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector("nav");

if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
