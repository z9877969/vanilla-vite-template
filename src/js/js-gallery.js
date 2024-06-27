const swiper = new Swiper('.swiperGallery', {
  loop: true,
  centeredSlides: true,
  speed: 800,
  breakpoints: {
    1440: {
      slidesPerView: 3.3,
      spaceBetween: 80,
    },
    0: {
      slidesPerView: 2.1,
      spaceBetween: 15,
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
