'use strict'

// MENU RESPONSIVE

const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

headerBtn.addEventListener ('click', ()=>{
    headerNav.classList.toggle('isActive')
})





// EFECTO PARALLAX

const headerWrapper = document.querySelector ('.Header-wrapper')
const headerH1 = document.querySelector ('.Header-h1')

const parallax =  () => {
    let scrollPosition = window.scrollY
    headerWrapper.style.backgroundPosition = 'center ' + (-scrollPosition/4) + 'px'
    headerH1.style.marginTop = (scrollPosition/4) + 'px'
    headerH1.style.opacity = 1  - (scrollPosition/100)
}

window.addEventListener ('scroll', () =>{
    parallax()
})

// Ligthbox

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




