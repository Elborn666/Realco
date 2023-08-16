const openBurgerBtn = document.querySelector('.header__burger-open')
const closeBurgerBtn = document.querySelector('.header__burger-close')
const menuBurger = document.querySelector('.burger__menu')
const body = document.querySelector('body')
const eventsClose = document.querySelectorAll('.burger__link')

openBurgerBtn.addEventListener('click', onOpenBurger)
closeBurgerBtn.addEventListener('click', onCloseBurger)

function onOpenBurger (){
    menuBurger.classList.add('active__burger')
    body.classList.add('hidden')
    closeBurgerBtn.classList.add('active__burger')
}

function onCloseBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden')
    closeBurgerBtn.classList.remove('active__burger')
}

for (let eventClose of eventsClose) {
    eventClose.addEventListener('click', onCloseModalBurger);
  }
function onCloseModalBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden')
}