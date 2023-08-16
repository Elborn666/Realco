const openBurgerBtn = document.querySelector('.header__burger-icon')
const menuBurger = document.querySelector('.burger__menu')
const body = document.querySelector('body')
const eventsClose = document.querySelectorAll('.burger__link')

openBurgerBtn.addEventListener('click', toggleOpenBurger)

function toggleOpenBurger (){
    menuBurger.classList.toggle('active__burger')
    body.classList.toggle('hidden')
}

for (let eventClose of eventsClose) {
    eventClose.addEventListener('click', onCloseModalBurger);
  }
function onCloseModalBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden')
}