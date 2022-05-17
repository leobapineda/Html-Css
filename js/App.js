let button = document.querySelector(".button");
let buttonPosition = button.getBoundingClientRect();
let w = window.innerWidth;
let h = window.innerHeight;

button.addEventListener("click", () => {
  // let www = (w/2) - (buttonPosition.width/2) - 10
  
});

const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
    button.classList.add('button__down')
    let www = w / 2 - buttonPosition.width / 2;
  // let hhh = ((h - buttonPosition.top) - buttonPosition.height - 30)
  let hhh = h - buttonPosition.top - buttonPosition.width;
  document.documentElement.style.setProperty("--custom-w", `${www}px`);
  document.documentElement.style.setProperty("--custom-h", `${hhh}px`);



  } else {
    nav.classList.remove("nav--hidden");
    button.classList.remove('button__down')

  }

  lastScrollY = window.scrollY;
});


// tengo que cambiar como se ejecuta. ahora se ejecuta con un focus. cambialo agregando una clase
