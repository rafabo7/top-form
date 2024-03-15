const fields = document.querySelectorAll('.field.control')
const psFields = document.querySelectorAll('.field.pw')

const pws = document.querySelectorAll('[type="password"]')

function checkInput(e) {
   const target = e.target
   const field = target.closest('.field')

   if (target.type == "password") {
    checkPassword(target, field)
   } else if (target.value === "") {
        field.classList.add('error')
    } else {
        field.classList.remove('error')
    }
}

fields.forEach(e => e.addEventListener('focusout', (e) => checkInput(e)))

pws.forEach(e => e.addEventListener('change', () => {
    const pw1 = document.querySelector('#password-1')
    const pw2 = document.querySelector('#password-2')

    if (pw1.value != pw2.value) {
        psFields.forEach(e => e.classList.add('error'))
    } else {
        psFields.forEach(e => e.classList.remove('error'))
    }
}))
