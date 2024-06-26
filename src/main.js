import './js/js-burger';

const swiper = new Swiper('.swiper-container', {
  loop: false,
  speed: 500,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 80,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 40,
    },
  },
  on: {
    init: function () {
      updateNavigationButtons(this);
    },
    slideChange: function () {
      updateNavigationButtons(this);
    },
  },
});

function updateNavigationButtons(swiper) {
  const { isBeginning, isEnd } = swiper;
  const prevButton = document.querySelector('.swiper-prev');
  const nextButton = document.querySelector('.swiper-next');

  if (isBeginning) {
    prevButton.classList.add('inactive');
  } else {
    prevButton.classList.remove('inactive');
  }

  if (isEnd) {
    nextButton.classList.add('inactive');
  } else {
    nextButton.classList.remove('inactive');
  }
}

const swiperGallery = new Swiper('.swiperGallery', {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 100000000,
    disableOnInteraction: false,
  },
});
