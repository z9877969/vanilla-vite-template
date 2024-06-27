import { refs } from './js-refs';

document.addEventListener('DOMContentLoaded', () => {
  refs.accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      const isOpen = header.classList.contains('active');

      document
        .querySelectorAll('.accordion-header.active')
        .forEach(activeHeader => {
          activeHeader.classList.remove('active');
          const activeContent = activeHeader.nextElementSibling;
          activeContent.style.maxHeight = null;
        });

      if (!isOpen) {
        header.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        header.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
});
