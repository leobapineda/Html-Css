let button = document.querySelector(".button");
let buttonPosition = button.getBoundingClientRect();
// distancia al borde superior del viewport
console.log('top ' + buttonPosition.top);
// distancia al borde derecho del viewport
console.log('right ' + buttonPosition.right);
// distancia al borde inferior del viewport
console.log('bottom ' + buttonPosition.bottom);
console.log('width ' + buttonPosition.width);
console.log('height ' + buttonPosition.height);

console.log('left ' + buttonPosition.left);
console.log(buttonPosition);

let w = window.innerWidth
let h = window.innerHeight

console.log(`screenW ${w}`);
console.log(`screenH ${h}`);

1048
625

// la altura es 812.
// el bottom esta a 84.5
// restamos y sumamos 10

button.addEventListener('click', () => {
    // let www = (buttonPosition.left + (w/2) - (buttonPosition.width/2) - 10)/2
    let www = (w/2) - (buttonPosition.width/2) - 10
    let hhh = ((buttonPosition.top - h)*(-1) - buttonPosition.height - 30)
    
    console.log(www);
    document.documentElement.style.setProperty('--custom-w', `${www}px`)
    document.documentElement.style.setProperty('--custom-h', `${hhh}px`)
    console.log(hhh);
})