document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display =
      content.style.display === 'block' ? 'none' : 'block';
  });
});
