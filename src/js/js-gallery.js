const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  speed: 800,
  breakpoints: {
    340: {
      slidesPerView: 2.05,
      spaceBetween: 8,
    },
    360: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    380: {
      slidesPerView: 2.3,
      spaceBetween: 12,
    },
    400: {
      slidesPerView: 2.4,
      spaceBetween: 14,
    },
    420: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    440: {
      slidesPerView: 2.6,
      spaceBetween: 18,
    },
    460: {
      slidesPerView: 2.7,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.8,
      spaceBetween: 22,
    },
    490: {
      slidesPerView: 3,
      spaceBetween: 22,
    },

    1440: {
      slidesPerView: 3.4,
      spaceBetween: 75,
    },
  },
  autoplay: {
    delay: 2500,
  },
  on: {
    init: function () {
      let swiper = this;
      swiper.slides[swiper.activeIndex].classList.add('central-slide');

      swiper.slideNext();
    },
    slideChangeTransitionStart: function () {
      let swiper = this;
      let slides = swiper.slides;
      let activeIndex = swiper.activeIndex;

      slides.forEach((slide, index) => {
        slide.classList.remove('central-slide', 'side-slide');

        if (index === activeIndex) {
          slide.classList.add('central-slide');
        } else if (index !== activeIndex) {
          slide.classList.add('side-slide');
        }
      });
    },
  },
});
