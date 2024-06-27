const swiper = new Swiper('.swiperGallery', {
  centeredSlides: true,
  loop: true,
  speed: 700,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 90,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
  autoplay: {
    delay: 2000,
  },
  on: {
    init: function () {
      let swiper = this;
      swiper.slides[swiper.activeIndex].classList.add('central-slide');
      swiper.slides[swiper.activeIndex + 1].classList.add('side-slide');
      swiper.slides[swiper.activeIndex - 1].classList.add('side-slide');
      swiper.slides[swiper.activeIndex + 2].classList.add('backside-slide');
      swiper.slides[swiper.activeIndex - 2].classList.add('backside-slide');
    },
    slideChangeTransitionStart: function () {
      let swiper = this;
      let slides = swiper.slides;
      let activeIndex = swiper.activeIndex;

      slides.forEach((slide, index) => {
        slide.classList.remove('central-slide', 'side-slide', 'backside-slide');

        if (index === activeIndex) {
          slide.classList.add('central-slide');
        } else if (
          index === (activeIndex + 1) % slides.length ||
          index === (activeIndex - 1 + slides.length) % slides.length
        ) {
          slide.classList.add('side-slide');
        } else if (
          index === (activeIndex + 2) % slides.length ||
          index === (activeIndex - 2 + slides.length) % slides.length
        ) {
          slide.classList.add('backside-slide');
        }
      });
    },
  },
});
