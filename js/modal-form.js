const body = document.querySelector('body')
const backdrop = document.querySelector('.backdrop__booking')
const submitForm = document.querySelector('.modal__booking-form')

const buttonsOpenModal = document.querySelectorAll('.js-booking')
const buttonCloseModal = document.querySelector('.modal__booking-close')

buttonCloseModal.addEventListener('click', onBtnClose)
submitForm.addEventListener('submit', onSubmitForm)

for (let buttonOpenModal of buttonsOpenModal) {
    buttonOpenModal.addEventListener('click', onBtnOpenModal);
  }

function onSubmitForm (e) {
    e.preventDefault()
    e.currentTarget.reset()

    backdrop.classList.remove('is-open')
    body.classList.remove('hidden')

    console.log("click")
}

function onBtnOpenModal () {
    backdrop.classList.add('is-open')
    body.classList.add('hidden')
}

function onBtnClose () {
    backdrop.classList.remove('is-open')
    body.classList.remove('hidden')
}