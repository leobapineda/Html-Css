{
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;
  console.log(window.scrollY);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
        console.log(window.scrollY);
      } else {
        nav.classList.remove("nav--hidden");
      }
    }

    lastScrollY = window.scrollY;
  });
}
