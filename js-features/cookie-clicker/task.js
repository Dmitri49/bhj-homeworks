const click = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

let check = 0;

cookie.onclick = function() {
    click.textContent++;

    if(check % 2 === 0) {
        cookie.width = 250;
        check++;
    } else {
        cookie.width = 200;
        check++;
    }
}


// const element = document.getElementById("clicker__counter");

// const cookie = document.getElementById("cookie");

// let check = false;

// function changeSizes() {
//     element.textContent++;
//     if (!check) {
//         cookie.width = 250;
//         check = true;
//     } else {
//         cookie.width = 200;
//         check = false;
//     }
// }

// cookie.addEventListener('click', changeSizes);