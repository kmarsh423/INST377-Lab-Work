let slidePostition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;
const buttons = document.querySelectorAll('.button');

buttons.forEach((btn) => {
  btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'orange';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '';
  });
});

document.querySelector('#next').addEventListener('click', () => {
  nextSlide();
});

document.querySelector('#prev').addEventListener('click', () => {
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