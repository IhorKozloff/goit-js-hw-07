import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');



function createGalleryItemMarkUp (cardsInform) {

return cardsInform.map(item => {
    return `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.original}" alt="${item.description}" />
    </a>
    `
}).join('');
}; 

galleryEl.innerHTML = `${createGalleryItemMarkUp(galleryItems)}`;



function onClickImgElement (event) {
    event.preventDefault()
};

const galleryFitches = new SimpleLightbox('.gallery a', {});

function findBySrc (findedObject, findedItem) {
    const descriptionValue = findedObject.find(item => item.original === findedItem).description;
 return descriptionValue;
 };

function addPictureName (className, currentImg) {
    const imageWrapper = document.querySelector(`.${className}`);
    const srcImage = document.querySelector(`.${currentImg}`).src;
    imageWrapper.insertAdjacentHTML('beforeend', `<div class="active-img"> <p style="opacity: 1"> ${findBySrc(galleryItems, srcImage)} </p> </div>`); 
};

function removePictureName (activeImg) {
    const labelEl = document.querySelector(`.${activeImg}`)
    if (labelEl) {
        labelEl.remove();
    }
};


// Срабатывает при открытии
galleryFitches.on('shown.simplelightbox', _.debounce(function () {
    addPictureName('sl-image', 'sl-image img');
}, 250));
// Срабатывает пред тем как картинка изменится
galleryFitches.on('change.simplelightbox', function () {
    removePictureName ('active-img');
});

//Срабатывает после того как картинка изменится
galleryFitches.on('changed.simplelightbox', _.debounce(function () {
    addPictureName('sl-image', 'sl-image img');
}, 250));

// Срабатывает пред закрытием
galleryFitches.on('close.simplelightbox', function () {
    removePictureName ('active-img');
});

galleryEl.addEventListener('click', onClickImgElement);
