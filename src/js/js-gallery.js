export const swiperGallery = new Swiper('.swiperGallery', {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 100000000,
    disableOnInteraction: false,
  },
});
