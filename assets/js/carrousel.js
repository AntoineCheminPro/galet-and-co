let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function startCarousel() {
  setInterval(() => {
    changeSlide(1);
  }, 3000); // 3000 milliseconds = 3 seconds
}

showSlide(slideIndex);
startCarousel();
