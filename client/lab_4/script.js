let slidePostition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document.querySelector('#carousel_button--next').addEventListener('click', function() {
  nextSlide();
});

document.querySelector('#carousel_button--prev').addEventListener('click', function() {
  prevSlide();
});

function nextSlide() {
  if (slidePostition === totalSlides - 1) {
    slidePostition = 0;
  } else {
    slidePostition++;
  }
  updateSlidePostion();
}

function prevSlide() {
  if (slidePostition === 0) {
    slidePostition = totalSlides - 1;
  } else {
    slidePostition--;
  }
  updateSlidePostion();
}

function updateSlidePostion() {
  for (let slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item');
  }

  slides[slidePostition].classList.add('carousel_item--visible');
}