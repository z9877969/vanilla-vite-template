const reviewsList = document.querySelector('.accordion-list');
const scrollLeftReviews = document.querySelector('.left-reviews');
const scrollRightReviews = document.querySelector('.right-reviews');

const itemWidth = document.querySelector('.accordion-item').offsetWidth;
const gap = 24;
const scrollAmount = itemWidth + gap * 1.5;

function checkScrollPosition() {
  const scrollLeft = reviewsList.scrollLeft;
  const scrollWidth = reviewsList.scrollWidth;
  const clientWidth = reviewsList.clientWidth;

  if (scrollLeft === 0) {
    scrollLeftReviews.setAttribute('disabled', 'true');
  } else {
    scrollLeftReviews.removeAttribute('disabled');
  }

  if (scrollLeft + clientWidth >= scrollWidth) {
    scrollRightReviews.setAttribute('disabled', 'true');
  } else {
    scrollRightReviews.removeAttribute('disabled');
  }
}

function handleButtonScroll() {
  scrollRightReviews.addEventListener('click', () => {
    reviewsList.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(checkScrollPosition, 300);
  });

  scrollLeftReviews.addEventListener('click', () => {
    reviewsList.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(checkScrollPosition, 300);
  });
}

reviewsList.addEventListener('scroll', checkScrollPosition);

handleButtonScroll();
checkScrollPosition();

function handleTouchScroll() {
  let startX;
  let scrollLeft;

  reviewsList.addEventListener('touchstart', e => {
    startX = e.touches[0].pageX;
    scrollLeft = reviewsList.scrollLeft;
  });

  reviewsList.addEventListener('touchmove', e => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    reviewsList.scrollLeft = scrollLeft - walk;
  });
}

function initScrollHandler() {
  if (window.innerWidth <= 1440) {
    handleTouchScroll();
  } else {
    handleButtonScroll();
  }
}

initScrollHandler();

window.addEventListener('resize', initScrollHandler);

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
