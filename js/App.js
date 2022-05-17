let button = document.querySelector(".button");
let buttonPosition = button.getBoundingClientRect();
// distancia al borde superior del viewport
console.log('top ' + buttonPosition.top);
// distancia al borde derecho del viewport
console.log('right ' + buttonPosition.right);
// distancia al borde inferior del viewport
console.log('bottom ' + buttonPosition.bottom);
console.log('left ' + buttonPosition.left);
console.log('width ' + buttonPosition.width);
console.log('height ' + buttonPosition.height);


let w = window.innerWidth
let h = window.innerHeight

console.log(`screenW ${w}`);
console.log(`screenH ${h}`);


button.addEventListener('click', () => {
    // let www = (w/2) - (buttonPosition.width/2) - 10
    let www = (w/2)- (buttonPosition.width/2)
    // let hhh = ((h - buttonPosition.top) - buttonPosition.height - 30)
    let hhh = (h - buttonPosition.top) - buttonPosition.width
    // console.log(www);
    document.documentElement.style.setProperty('--custom-w', `${www}px`)
    document.documentElement.style.setProperty('--custom-h', `${hhh}px`)
    console.log(hhh);

})