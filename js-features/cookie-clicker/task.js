const element = document.getElementById("clicker__counter");

const cookie = document.getElementById("cookie");

let check = false;

function changeSizes() {
    element.textContent++;
    if (!check) {
        cookie.width = 250;
        check = true;
    } else {
        cookie.width = 200;
        check = false;
    }
}

cookie.addEventListener('click', changeSizes);