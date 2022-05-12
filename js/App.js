const menuButton = document.querySelector('#boton-menu')
const contenedor =  document.querySelector('#contenedor')

menuButton.addEventListener('click', () =>  {
    contenedor.classList.toggle('active')
})

const comprobarAncho = () => {
    if(window.innerWidth <= 768) {
        contenedor.classList.remove('active')
    }
    else {
        contenedor.classList.add('active')
    }
}

comprobarAncho()
    window.addEventListener('resize', () => {
        comprobarAncho()
})