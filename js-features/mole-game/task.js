const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
    return `hole${index}`;
}

function checkWinner() {
    if(dead.textContent == 10) {
        alert('Вы выиграли!');
        dead.textContent = 0;
        lost.textContent = 0;
    }

    if(lost.textContent == 5) {
        alert('Вы проиграли!');
        dead.textContent = 0;
        lost.textContent = 0;
    }
}

for (let i = 1; i <= 9; i += 1) {
    const hole = document.getElementById(getHole(i));

    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        checkWinner();
    }
}
