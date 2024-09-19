const galleryList = document.querySelector('.gallery-images-list');

const scrollLeft = document.querySelector('.left');

const scrollRight = document.querySelector('.right');

let currentElem = 0;

function handleScrollLeft() {
  currentElem = (currentElem - 1 + galleryItems.length) % galleryItems.length;
  updateGallery();
}

function handleScrollRight() {
  currentElem = (currentElem + 1) % galleryItems.length;
  updateGallery();
}

scrollLeft.addEventListener('click', handleScrollLeft);

scrollRight.addEventListener('click', handleScrollRight);
