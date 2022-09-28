const tasksList = document.querySelector('#tasks__list');

const form = document.querySelector('#tasks__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('.tasks__input');
  const userTask = input.value.trim();

  if (userTask.length === 0) {
    return;
  } 

  const task = `<div class="task">
                    <div class="task__title">
                    ${userTask}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                  </div>`;

  tasksList.insertAdjacentHTML('beforeEnd', task);
  input.value = '';

  tasksList.addEventListener(`click`, removeTask);
});

let removeTask = function(event) {
    if (event.target.classList.contains("task__remove")){
        let toRemove = event.target.closest(".task");
        toRemove.remove();
    } 
}