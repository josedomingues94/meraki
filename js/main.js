const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".carousel-track");
const nextBtn = carousel.querySelector(".carousel-btn.next");
const prevBtn = carousel.querySelector(".carousel-btn.prev");

// ARRAY DE IMÁGENES
const images = [
  "assets/img/meraki.jpg",
  "assets/img/machine1.jpg",
  "assets/img/machine2.JPG",
  "assets/img/machine3.JPG",
  "assets/img/machine4.jpg"
];

// Crear slides dinámicamente
images.forEach((src, index) => {
  const slide = document.createElement("div");
  slide.classList.add("carousel-slide");

  const img = document.createElement("img");
  img.src = src;
  img.alt = "Instalación " + (index + 1);

  slide.appendChild(img);
  track.appendChild(slide);
});

// IMPORTANTE → seleccionar slides después de crearlos
const slides = track.querySelectorAll(".carousel-slide");

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

    fetch("https://script.google.com/macros/s/AKfycbzrjM5LqFrfKnDikhqbE9By9m6KB35VpBn33CI-Z7pfBdhCYzRJG9NsOoMU8VbU2LFsng/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  })
})
.then(res => res.json())
.then(() => {
  alert("Mensaje enviado correctamente ✅");
  form.reset();
})
.catch(err => {
  console.error(err);
  alert("Error al enviar ❌");
});

  })


  


});




 