import Swiper from 'swiper';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
});
