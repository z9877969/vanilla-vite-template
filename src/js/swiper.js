const swiper = new Swiper('.swiper', {
  loop: true, // Дозволяє безперервне прокручування
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 30,
  centeredSlides: true,
});

// Обробка кліку на кнопку "Далі"
const nextButton = document.querySelector('.swiper-button-next');
nextButton.addEventListener('click', () => {
  swiper.slideNext(300); // Переходить на наступні 2 слайда
});

// Обробка кліку на кнопку "Назад"
const prevButton = document.querySelector('.swiper-button-prev');
prevButton.addEventListener('click', () => {
  swiper.slidePrev(300); // Переходить на попередні 2 слайда
});
