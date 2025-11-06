// ====== MOBILE MENU TOGGLE ======
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }

  // ====== SMOOTH SCROLL ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        if (navLinks) navLinks.classList.remove("active");
      }
    });
  });

  // ====== CONTACT FORM ======
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formStatus.textContent = "✅ Message sent successfully!";
      formStatus.style.color = "#00adb5";
      contactForm.reset();
      setTimeout(() => formStatus.textContent = "", 4000);
    });
  }

  // ====== TIMELINE REVEAL ======
  const timelineItems = document.querySelectorAll(".timeline-item");

  function revealOnScroll() {
    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
