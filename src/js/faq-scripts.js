document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqAnswer = button.nextElementSibling;
    const plusMinus = button.querySelector('.plus');

    faqAnswer.style.display =
      faqAnswer.style.display === 'block' ? 'none' : 'block';
    plusMinus.textContent = plusMinus.textContent === '+' ? '–' : '+';
  });
});
