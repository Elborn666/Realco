const body = document.querySelector('body')
const form = document.querySelector('.form__booking-form')
const modalSubmit = document.querySelector('.backdrop__submit')
const closeBtn = document.querySelector('.modal__submit-button-close')

form.addEventListener('submit', onSubmitForm)
closeBtn.addEventListener('click', onCloseModal)

function onSubmitForm(e) {
    e.preventDefault()
    e.currentTarget.reset()
    modalForm()
}

function modalForm() {
    modalSubmit.classList.add('is-open')
    body.classList.add('hidden')
}

function onCloseModal() {
    modalSubmit.classList.remove('is-open')
    body.classList.remove('hidden')
}