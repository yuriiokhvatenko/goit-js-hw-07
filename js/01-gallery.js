import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

// Creating Markup
const markupForTaks = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('');

// adding markup to the page

galleryRef.innerHTML = markupForTaks;

// Adding an eventlistener to the gallery
galleryRef.addEventListener('click', onGalleryClick);


// Image click processing function

function onGalleryClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    // Creating a modal
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
    instance.show()
    if (!instance) {
        return;
    }
    // Closing the modal when escape pressed
    galleryRef.addEventListener('keydown', (e) => {
        console.log(e.key);
        if (e.key === 'Escape') {
            instance.close();
        }

    })
}

