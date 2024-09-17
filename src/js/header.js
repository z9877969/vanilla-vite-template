const openMenuBtn = document.querySelector('.open-mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const menuLink = document.querySelector('.mobile-nav-list');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('not-scrollable');
});

closeMenuBtn.addEventListener('click', () => {
  document.body.classList.remove('not-scrollable');
  mobileMenu.classList.remove('is-open');
});

menuLink.addEventListener('click', () => {
  document.body.classList.remove('not-scrollable');
  mobileMenu.classList.remove('is-open');
});
