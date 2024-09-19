import Swiper from 'swiper/bundle';

const nextButton = document.querySelector('.right');

const prevButton = document.querySelector('.left');

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  freeMode: true,
  grabCursor: true,
  touchRatio: 1,

  breakpoints: {
    1440: { slidesPerView: 1, spaceBetween: (508 - 302) / 2 },
  },
});

nextButton.addEventListener('click', () => {
  swiper.slideNext();

  if (swiper.isEnd) {
    nextButton.setAttribute('disabled', true);
  } else {
    prevButton.getAttribute('disabled') &&
      prevButton.removeAttribute('disabled');
  }
});

prevButton.addEventListener('click', () => {
  swiper.slidePrev();

  if (swiper.isBeginning) {
    prevButton.setAttribute('disabled', true);
  } else {
    nextButton.getAttribute('disabled') &&
      nextButton.removeAttribute('disabled');
  }

  console.log(prevButton.getAttribute('disabled'));
});
