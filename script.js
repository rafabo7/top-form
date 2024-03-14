const fields = document.querySelectorAll('.field')

function checkInput(e) {
   const target = e.target
   const field = target.closest('.field')
   console.log(target)

    if (target.value === "") {
        field.classList.add('error')
    } else {
        field.classList.remove('error')
    }
}

fields.forEach(e => e.addEventListener('focusout', (e) => checkInput(e)))