document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.slider-img');
  const sliderLine = document.querySelector('.slider-line');
  const prevButton = document.querySelector('.btn-prev');
  const nextButton = document.querySelector('.btn-next');

  let count = 0;
  let width;

  function init() {
    width = document.querySelector('.slider').offsetWidth;

    sliderLine.style.width = width * images.length + 'px';

    images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });

    flipSlider();
  }

  window.addEventListener('resize', init);
  init();

  function flipSlider() {
    sliderLine.style.transform = `translateX(-${count * width}px)`;
  }

  prevButton.addEventListener('click', () => {
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    flipSlider();
  });

  nextButton.addEventListener('click', () => {
    count++;
    if (count >= images.length) {
      count = 0;
    }
    flipSlider();
  });
});
