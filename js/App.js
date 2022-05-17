let button = document.querySelector(".button");

const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    button.classList.add("button__down");
  }

  if (lastScrollY < window.scrollY && window.scrollY >= 35) {
    nav.classList.add("nav--hidden");
    
  } else {
    nav.classList.remove("nav--hidden");
    if(window.scrollY <= 30){
      button.classList.remove("button__down");
    }
  }
  lastScrollY = window.scrollY;
  console.log( window.scrollY);
});


// necesito que te quedes ahi

// tengo que hacer un div que cubra todo el primer vh
// 