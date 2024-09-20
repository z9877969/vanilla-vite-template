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
  const questionButton = item.querySelector('.question-button');
  const plusIcon = item.querySelector('.plus-icon');
  const answer = item.querySelector('.answer-content');

  item.querySelector('.question-title').addEventListener('click', () => {
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      plusIcon.classList.remove('rotate');
    } else {
      document.querySelectorAll('.answer-content').forEach(answerContent => {
        answerContent.style.display = 'none';
      });
      document.querySelectorAll('.plus-icon').forEach(icon => {
        icon.classList.remove('rotate');
      });

      answer.style.display = 'block';
      plusIcon.classList.add('rotate');
    }
  });
});
