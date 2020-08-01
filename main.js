const lower = document.querySelector('#lower');
const add = document.querySelector('#add');
let number = document.querySelector('#number');

function addOne() {
    number.innerHTML ++;
}
function minusOne() {
    number.innerHTML --;
}

add.onclick = addOne;
lower.onclick = minusOne;