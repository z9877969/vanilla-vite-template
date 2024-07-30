function toggleMenu() {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menuIcon');
  const closeIcon = document.querySelector('.closeIcon');

  menu.classList.toggle('showMenu');
  if (menu.classList.contains('showMenu')) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}
window.toggleMenu = toggleMenu;
