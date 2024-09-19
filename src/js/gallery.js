const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1, // Показувати одну картинку
  spaceBetween: 0, // Відстань між слайдами
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // На вьюпорті менше 1440px показувати всі слайди
    1440: {
      slidesPerView: 1, // Показувати одну картинку
    },
    0: {
      slidesPerView: 'auto', // Для менших екранів показувати кілька
      spaceBetween: 20, // Відстань між слайдами
    },
  },
});
