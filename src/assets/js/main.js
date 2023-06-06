const serviceId = 'service_7w757kr'
const templateId = 'template_v5aow3t'
const userId = 'E6haNCxwwlI-tMYbc'

const nameElement = document.querySelector('#name')
const surnameElement = document.querySelector('#surname')
const emailElement = document.querySelector('#email')
const messageElement = document.querySelector('#message')

document.querySelector('#form-email').addEventListener("submit", e => {
    e.preventDefault();
    const nameElement = document.querySelector('#name')
    const surnameElement = document.querySelector('#surname')
    const emailElement = document.querySelector('#email')
    const messageElement = document.querySelector('#message')

    let params = {
        name: nameElement.value,
        surname: surnameElement.value,
        email: emailElement.value,
        message: messageElement.value,
    }
    
    emailjs.send(serviceId, templateId, params, userId)
        .then(response => {
            console.log(response.status)
            console.log(response.text)
            nameElement.value = ''
            surnameElement.value = ''
            emailElement.value = ''
            messageElement.value = ''
        })
        .catch( error => {
            console.log(error)
        })
    })
