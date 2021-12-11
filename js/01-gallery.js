import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const instance = basicLightbox.create(`
<img src="" width="800" height="600">
`);

const image = instance.element().querySelector('img');

function createGalleryItemMarkUp (cardsInform) {
    return cardsInform.map(item => {
             return `<div class="gallery__item">
             <a class="gallery__link" href="${item.original}">
                 <img
                 class="gallery__image"
                 src="${item.preview}"
                 data-source="${item.original}"
                 alt="${item.description}"
                 />
             </a>
         </div>`
     }).join('');
 };
galleryEl.innerHTML = createGalleryItemMarkUp(galleryItems);

function onClickImgElement (event) {
    event.preventDefault();

    if (event.target.nodeName != `IMG`) {
        return
    }
    const originalImgUrl = event.target.dataset.source;


    image.src = `${originalImgUrl}`; 
    instance.show();

    document.addEventListener('keydown', closeEscBtn);

    console.log(originalImgUrl);
    return originalImgUrl; 

};

function closeEscBtn (event) {
    if (event.key === 'Escape') {
       instance.close();
       document.removeEventListener('keydown', closeEscBtn);
    }
};

galleryEl.addEventListener('click', onClickImgElement);


 






