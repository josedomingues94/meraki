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

const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = carousel.querySelector(".carousel-btn.next");
const prevBtn = carousel.querySelector(".carousel-btn.prev");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});


document.addEventListener("DOMContentLoaded", () => {

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (!scrollTopBtn) return; // seguridad extra

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  const form = document.getElementById("contact-form");

  if (!form) {
    console.warn("Formulario no encontrado");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbz46z1vc3GldEIoVRQiAfVvZqQHH4pr_xCPEtZK4M1lAaIgcBLVUovjDevc32tgpJYipw/exec", {
      method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value})
    })
    .then(res => res.json())
    .then(data => {
      alert("Mensaje enviado correctamente ✅");
      form.reset();
    })
    .catch(err => {
      console.error(err);
      alert("Error al enviar ❌");
    });

  })


  


});




 