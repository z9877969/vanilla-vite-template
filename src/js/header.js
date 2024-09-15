const burgerBtn = document.querySelector('.burger-btn');
const modalOverlay = document.querySelector('.modal-overlay');

function openModal() {
  modalOverlay.classList.add('is-open');
}

burgerBtn.addEventListener('click', openModal);
