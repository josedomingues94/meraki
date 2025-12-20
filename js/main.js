// ===== MENÚ MÓVIL =====
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".menu-overlay");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});

function closeMenu() {
  menuToggle.classList.remove("active");
  navMenu.classList.remove("show");
  overlay.classList.remove("show");
}

// Cerrar al hacer click en un enlace
navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Cerrar al tocar fuera
overlay.addEventListener("click", closeMenu);
