const button = document.querySelector('button')
const buttonClass = document.querySelector('.button')
let darkMode = true

button.addEventListener('click', () => {
    if(darkMode) {
        document.documentElement.style.setProperty('--lightest-slate', '#0a192f')
        document.documentElement.style.setProperty('--navy-color', '#ccd6f6')
        darkMode = false
    } else {
        document.documentElement.style.setProperty('--lightest-slate', '#ccd6f6')
        document.documentElement.style.setProperty('--navy-color', '#0a192f')
        darkMode = true
    }
    
    console.log(darkMode);
})

