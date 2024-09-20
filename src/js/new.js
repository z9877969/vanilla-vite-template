const reviewsList = document.querySelector('.accordion-list');
const scrollLeftReviews = document.querySelector('.left-reviews');
const scrollRightReviews = document.querySelector('.right-reviews');

const itemWidth = document.querySelector('.accordion-item').offsetWidth;

const gap = 24;
const scrollAmount = itemWidth + gap;

scrollRightReviews.addEventListener('click', () => {
  reviewsList.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });
});

scrollLeftReviews.addEventListener('click', () => {
  reviewsList.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
  });
});
