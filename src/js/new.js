document.addEventListener('DOMContentLoaded', function () {
  // Toggle accordion content
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Toggle question answers
  const questionTitles = document.querySelectorAll('.question-title');
  questionTitles.forEach(title => {
    title.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const toggle = this.querySelector('.toggle');
      content.style.display =
        content.style.display === 'block' ? 'none' : 'block';
      toggle.textContent = toggle.textContent === '+' ? '-' : '+';
    });
  });

  // Reviews navigation
  const prevButton = document.querySelector('.reviews-nav.prev');
  const nextButton = document.querySelector('.reviews-nav.next');
  const reviews = document.querySelectorAll(
    '.reviews-container .accordion-item'
  );

  let currentReviewIndex = 0;

  function showReview(index) {
    reviews.forEach((review, i) => {
      review.style.display = i === index ? 'block' : 'none';
    });
  }

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
