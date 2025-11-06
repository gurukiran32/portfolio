// ====== DOM READY ======
document.addEventListener("DOMContentLoaded", () => {
  // ====== MOBILE MENU TOGGLE ======
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
        if (menuToggle) menuToggle.classList.remove("open");
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

  // ====== TIMELINE: AUTO ALTERNATE SIDES ======
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("left");
    } else {
      item.classList.add("right");
    }
  });

  // ====== TIMELINE REVEAL ON SCROLL ======
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
