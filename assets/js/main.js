let menu = document.getElementById('menu');
let box = document.getElementById('box');
let xMark = document.getElementById('call');

menu.onclick = () => {
    box.style.display = 'block';
}
call.onclick = function() {
    box.style.display = 'none';
}

let head = document.getElementById('head')

window.onscroll = function () {
    if (this.scrollY >= 250) {
        head.style.background = 'transparent'
    } else {
        head.style.background = '#0f0f0f'
    }           
}