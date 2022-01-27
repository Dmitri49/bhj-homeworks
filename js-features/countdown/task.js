let time = 6;

const element = document.getElementById("timer");

function timer() {
    --time;
    element.textContent = time;
    if (time === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
    }
}

let timerId = setInterval(timer, 1000);
