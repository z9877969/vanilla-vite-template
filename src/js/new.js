const scrollLeft = document.querySelector('.left');
const scrollRight = document.querySelector('.right');
const reviewsList = document.querySelector('.accordion-list');
const items = document.querySelectorAll('.accordion-item');

const itemWidth = items[0].offsetWidth + 24;
let scrollPosition = 0;

scrollLeft.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - itemWidth, 0);
  reviewsList.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });
});

scrollRight.addEventListener('click', () => {
  scrollPosition = Math.min(
    scrollPosition + itemWidth,
    reviewsList.scrollWidth - reviewsList.clientWidth
  );
  reviewsList.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Toggle accordion content
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === 'flex' ? 'none' : 'flex';
    });
  });

  // Toggle question answers
  const questionTitles = document.querySelectorAll('.question-title');
  questionTitles.forEach(title => {
    title.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const toggle = this.querySelector('.toggle');
      content.style.display =
        content.style.display === 'flex' ? 'none' : 'flex';
      toggle.textContent = toggle.textContent === '+' ? '-' : '+';
    });
  });

  // // Reviews navigation
  // const prevButton = document.querySelector('.reviews-nav.prev');
  // const nextButton = document.querySelector('.reviews-nav.next');
  // const reviews = document.querySelectorAll(
  //   '.reviews-container .accordion-item'
  // );

  // let currentReviewIndex = 0;

  // function showReview(index) {
  //   reviews.forEach((review, i) => {
  //     review.style.display = i === index ? 'flex' : 'none';
  //   });
  // }

  prevButton.addEventListener('click', function () {
    currentReviewIndex =
      (currentReviewIndex - 1 + reviews.length) % reviews.length;
    showReview(currentReviewIndex);
  });

  nextButton.addEventListener('click', function () {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(currentReviewIndex);
  });

  // Show first review initially
  showReview(currentReviewIndex);
});
