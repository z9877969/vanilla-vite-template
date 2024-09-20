const reviewsList = document.querySelector('.accordion-list');
const scrollLeftReviews = document.querySelector('.left-reviews');
const scrollRightReviews = document.querySelector('.right-reviews');

const itemWidth = document.querySelector('.accordion-item').offsetWidth;

const gap = 24;
const scrollAmount = itemWidth + gap * 2;

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

const questionItems = document.querySelectorAll('.question-item');

questionItems.forEach(item => {
  item.querySelector('.question-title').addEventListener('click', () => {
    const answer = item.querySelector('.answer-content');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      document.querySelectorAll('.answer-content').forEach(answerContent => {
        answerContent.style.display = 'none';
      });

      answer.style.display = 'block';
    }
  });
});
