const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.display =
      index >= n * 4 && index < (n + 1) * 4 ? "block" : "none";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === n);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % (slides.length / 4);
  showSlide(currentSlide);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

showSlide(0);
setInterval(nextSlide, 3000);
