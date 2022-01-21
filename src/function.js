export default function showAllTodo(tasks) {
  const listElement = document.querySelector('.list');
  listElement.innerHTML = '';

  tasks.list.forEach((listItem) => {
    listElement.innerHTML += `
        <div class="row" id="${listItem.index}">
            <div class="input">
            <input type="checkbox" class="check" ${listItem.completed ? 'checked' : ''}>
            <input class="list-text" value="${listItem.description}" readonly>
            </div>
            <div class="icon">
            <i class="fas fa-ellipsis-v"></i>
            <i class="far fa-trash-alt hidden"></i>
            </div>
        </div>
        
      `;
  });

  document.querySelectorAll('.list-text').forEach((inp) => {
    inp.addEventListener('click', () => {
      inp.readOnly = false;
      inp.focus();
      inp.parentNode.parentNode.querySelector('.fa-trash-alt').classList.remove('hidden');
      inp.parentNode.parentNode.querySelector('.fa-ellipsis-v').classList.add('hidden');
    });
    inp.addEventListener('change', () => {
      const { id } = inp.parentNode.parentNode;
      const currentTask = tasks.list.find((t) => t.index === +id);
      currentTask.description = inp.value;

      tasks.updateTodo(currentTask);

      setTimeout(() => {
        inp.parentNode.parentNode.querySelector('.fa-trash-alt').classList.add('hidden');
        inp.parentNode.parentNode.querySelector('.fa-ellipsis-v').classList.remove('hidden');
        inp.readOnly = true;
      }, 200);
    });
  });

  document.querySelectorAll('.fa-trash-alt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const { id } = btn.parentNode.parentNode;
      tasks.removeTodo(+id);
      showAllTodo(tasks);
    });
  });

  document.querySelectorAll('.check').forEach((box) => {
    box.addEventListener('change', () => {
      const { id } = box.parentNode.parentNode;
      const currentTask = tasks.list.find((t) => t.index === +id);
      currentTask.completed = box.checked;
      tasks.updateTodo(currentTask);
    });
  });
}