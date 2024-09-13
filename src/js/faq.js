document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', function () {
    const faqItem = this.closest('.faq-list-item');

    faqItem.classList.toggle('open');

    const isExpanded = faqItem.classList.contains('open');

    this.setAttribute('aria-expanded', isExpanded);
  });
});
