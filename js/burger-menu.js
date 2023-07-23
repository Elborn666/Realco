const openBurgerBtn = document.querySelector('.menu__burger-icon')
const closedBurgerBtn = document.querySelector('.menu__burger-closed')
const menuBurger = document.querySelector('.menu__burger')
const body = document.querySelector('body')
const eventsClose = document.querySelectorAll('.menu__burger-link')

openBurgerBtn.addEventListener('click', onOpenBurger)
closedBurgerBtn.addEventListener('click', onClosedBurger)

function onOpenBurger (){
    menuBurger.classList.add('active__burger')
    body.classList.add('hidden')
}

function onClosedBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden')
}


for (let eventClose of eventsClose) {
    eventClose.addEventListener('click', onCloseModalBurger);
  }
function onCloseModalBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden')
}