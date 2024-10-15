'use strict'

// MENU RESPONSIVE

const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

headerBtn.addEventListener ('click', ()=>{
    headerNav.classList.toggle('isActive')
})


// TABLA DE CONTENIDO CON BOTONES

const tabla = document.querySelector('.Section-tabla');
const tabsBtns = tabla.querySelectorAll('.Tabla-boton');
const tabsPs = tabla.querySelectorAll('.Tabla-p');

tabsBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        
        tabsBtns.forEach((btn, i) => {
            btn.classList.remove('isActive');
            tabsPs[i].classList.remove('isActive');
        });
        
        btn.classList.add('isActive');
        tabsPs[index].classList.add('isActive');
    });
});



