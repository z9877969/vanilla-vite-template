const modalOverlay = document.querySelector('.modal-overlay');

function closeModal(e) {
  if (
    e.target.closest('.close-menu-button') ||
    e.target === modalOverlay ||
    e.target.closest('.mobile-menu-link')
  ) {
    modalOverlay.classList.remove('is-open');
  }
}

modalOverlay.addEventListener('click', closeModal);
