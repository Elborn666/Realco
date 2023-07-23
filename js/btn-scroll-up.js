const btnScrollUp = document.querySelector('.scroll-up__button')

btnScrollUp.addEventListener('click', onBtnScrollUp)

function onBtnScrollUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}