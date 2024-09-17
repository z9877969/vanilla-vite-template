document.querySelectorAll('.question-title').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    const toggle = item.querySelector('.toggle');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      toggle.textContent = '+';
    } else {
      answer.style.display = 'block';
      toggle.textContent = '−';
    }
  });
});
