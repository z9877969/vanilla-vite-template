const galleryList = document.querySelector('.gallery-images-list');

const scrollLeft = document.querySelector('.left');

const scrollRight = document.querySelector('.right');

let currentElem = 0;

const galleryItems = [
  'gallery-first',
  'gallery-second',
  'gallery-third',
  'gallery-fourth',
  'gallery-fifth',
];

function updateGallery() {
  galleryList.innerHTML = `<li class="gallery-item">
  <img class="gallery-image" src="./img/gallery/${galleryItems[currentElem]}.jpg"/>
  </li>`;
}

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

updateGallery();
