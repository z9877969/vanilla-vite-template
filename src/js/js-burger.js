import { refs } from './js-refs';

(() => {
  const toggleMenu = () => {
    const isMenuOpen =
      refs.burgerOpen.getAttribute('aria-expanded') === true || false;
    refs.burgerOpen.setAttribute('aria-expanded', !isMenuOpen);
    refs.burgerMenu.classList.toggle('is-open');
    refs.bodyScroll.classList.toggle('no-body-scroll');
  };
  refs.burgerOpen.addEventListener('click', toggleMenu);
  refs.burgerClose.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.burgerMenu.classList.remove('is-open');
    refs.bodyScroll.classList.remove('no-body-scroll');
    refs.burgerOpen.setAttribute('aria-expanded', false);
  });
})();

refs.burgerItem.forEach(link => {
  link.addEventListener('click', () => {
    refs.burgerMenu.classList.remove('is-open');
    refs.bodyScroll.classList.remove('no-body-scroll');
    refs.burgerOpen.setAttribute('aria-expanded', false);
  });
});
