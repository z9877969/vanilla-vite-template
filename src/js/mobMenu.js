const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.mobile-menu-close');
const mobile = document.querySelector('.mob-bg');
const btnMobile = document.querySelector('.mobile-anchor');
const mobileListItem = document.querySelectorAll('.mobile-list-item');
const headerListItem = document.querySelectorAll('.header-list-item');
const anchorLinks = document.querySelectorAll('.header-nav-link');

// MobileMenu
btnMenu.addEventListener('click', () => {
  mobile.classList.add('is-open');
});

const mobileMenuClose = () => {
  mobile.classList.remove('is-open');
};

btnClose.addEventListener('click', mobileMenuClose);
mobileListItem.forEach(listItem => {
  listItem.addEventListener('click', mobileMenuClose);
});
btnMobile.addEventListener('click', mobileMenuClose);
