// ====== MOBILE MENU TOGGLE ======
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// ====== SMOOTH SCROLL (for older browsers) ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
      // Close menu after click (mobile)
      navLinks.classList.remove("active");
    }
  });
});

// ====== CONTACT FORM (FRONT-END ONLY) ======
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulate form submission success
    formStatus.textContent = "✅ Message sent successfully!";
    formStatus.style.color = "#00adb5";

    // Clear form fields
    contactForm.reset();

    // Hide message after 4 seconds
    setTimeout(() => {
      formStatus.textContent = "";
    }, 4000);
  });
}
