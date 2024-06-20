// https://www.youtube.com/watch?v=gBzsE0oieio&list=PLtqp6VDm2rsDZU4xDruxJ3Vmh4XEOQ0LV&index=2&ab_channel=KevinPowell
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

/*
slides[0].style.left = 0;
slides[1].style.left = `${slideWidth}px`;
slides[2].style.left = `${slideWidth * 2}px`;
*/

const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  // Move to the previous Slide
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
};

// When I click left, move slides to the left
prevButton.addEventListener('click', (event) => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  updateDots(currentDot, prevDot);
  moveToSlide(track, currentSlide, prevSlide);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// When I click right, move slides to the right
nextButton.addEventListener('click', (event) => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  updateDots(currentDot, nextDot);
  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// When I click the nav indicators move to that slide
dotsNav.addEventListener('click', (event) => {
  // What indicator was clicked on?
  const targetDot = event.target.closest('button');
  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  updateDots(currentDot, targetDot);
  moveToSlide(track, currentSlide, targetSlide);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
