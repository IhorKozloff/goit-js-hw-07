import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
// 1 Создание Галереи
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


function noFollowByImgLinkClick (e) {
    e.preventDefault();
};

function getOriginalImgUrl (event) {
    if (event.target.nodeName != `IMG`) {
        return
    }
    console.log(event.target.dataset.source);
};

galleryEl.addEventListener('click', noFollowByImgLinkClick);
galleryEl.addEventListener('click', getOriginalImgUrl);