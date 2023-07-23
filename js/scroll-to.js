function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let aboutRefs = document.querySelector('.js-about')
let aboutTop = document.querySelector('.about')

aboutRefs.addEventListener('click', () => {
    scrollTo(aboutTop);
    console.log('Click for button')
})

//====================================================================================

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let servicesRef = document.querySelector('.js-services')
let servicesTop = document.querySelector('.price')

servicesRef.addEventListener('click', () => {
    scrollTo(servicesTop);
    console.log('Click for button')
})

//====================================================================================

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let barbersRef = document.querySelector('.js-barbers')
let barbersTop = document.querySelector('.team')

barbersRef.addEventListener('click', () => {
    scrollTo(barbersTop);
    console.log('Click for button')
})

//=================================================================================

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let contactsRef = document.querySelector('.js-contacts')
let contactsTop = document.querySelector('.contact')

contactsRef.addEventListener('click', () => {
    scrollTo(contactsTop);
    console.log('Click for button')
})