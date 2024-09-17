// js/new.js

// відгук
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle');

    content.style.maxHeight
      ? (content.style.maxHeight = null)
      : (content.style.maxHeight = content.scrollHeight + 'px');

    icon.textContent === '+'
      ? (icon.textContent = '-')
      : (icon.textContent = '+');
  });
});

// питання
const questionTitles = document.querySelectorAll('.question-title');
questionTitles.forEach(title => {
  title.addEventListener('click', () => {
    const answer = title.nextElementSibling;
    const icon = title.querySelector('.toggle');

    answer.style.maxHeight
      ? (answer.style.maxHeight = null)
      : (answer.style.maxHeight = answer.scrollHeight + 'px');

    icon.textContent === '+'
      ? (icon.textContent = '-')
      : (icon.textContent = '-');
  });
});

// Горизонт. прокрут. відгук.
const reviewsContainer = document.querySelector('.reviews-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  reviewsContainer.scrollBy({
    left: -reviewsContainer.clientWidth,
    behavior: 'smooth',
  });
});

nextButton.addEventListener('click', () => {
  reviewsContainer.scrollBy({
    left: reviewsContainer.clientWidth,
    behavior: 'smooth',
  });
});
