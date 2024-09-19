const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  spaceBetween: 24,
  freeMode: true,
  grabCursor: true,
  touchRatio: 1,
});
