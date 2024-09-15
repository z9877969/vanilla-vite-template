const modalOverlay = document.querySelector('.modal-overlay');

function closeModal(e) {
  if (e.target.closest('.close-menu-button')) {
    modalOverlay.classList.remove('is-open');
  }
}

modalOverlay.addEventListener('click', closeModal);
