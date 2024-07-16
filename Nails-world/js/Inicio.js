'use strict'

// MENU RESPONSIVE

const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

headerBtn.addEventListener ('click', ()=>{
    headerNav.classList.toggle('isActive')
})


