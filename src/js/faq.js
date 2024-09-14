document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const listItem = button.closest('.faq-list-item');
    const answer = listItem.querySelector('.faq-answer');

    answer.classList.toggle('show');
    button.classList.toggle('rotated');

    document.querySelectorAll('.faq-answer.show').forEach(openAnswer => {
      if (openAnswer !== answer) {
        openAnswer.classList.remove('show');
        openAnswer
          .closest('.faq-list-item')
          .querySelector('.toggle-button')
          .classList.remove('rotated');
      }
    });
  });
});
