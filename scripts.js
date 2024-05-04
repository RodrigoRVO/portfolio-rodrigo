const form = document.querySelector('.form')
const button = document.querySelector('.contato')
const mascara = document.querySelector('.mascara')


function mostrarFormulario() {
    form.style.transform = 'translateY(-100%)'
    mascara.style.visibility = 'visible'
}

function esconder() {
    form.style.transform = 'translateY(0%)'
    mascara.style.visibility = 'hidden'
}


mascara.addEventListener('click', esconder)
button.addEventListener('click', mostrarFormulario)
