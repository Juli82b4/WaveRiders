const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.innerHTML = navLinks.classList.contains("active")
    ? "&times;"
    : "&#9776;";
});

// Close menu when a link is clicked (mobile only)
document
  .querySelectorAll(".nav-links a, .nav-links .contact-btn")
  .forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.innerHTML = "&#9776;";
    });
  });
