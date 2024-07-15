'use strict'


const galeriaImgs = document.querySelectorAll('.Galeria-img')
const lightbox = document.querySelector('.Lightbox')
const lightboxBtn = document.querySelector('.Lightbox-btn')
const lightboxImg = document.querySelector('.Imagen-grande')

galeriaImgs.forEach((eachImg) => {
    eachImg.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = eachImg.src;
    });
});

lightboxBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

