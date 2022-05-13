const nav = document.querySelector(".nav");

// save the current scroll value
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
 if(window.scrollY > 25) {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
 }
});
