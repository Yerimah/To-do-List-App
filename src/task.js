export default class Tasks {
  constructor() {
    this.list = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  }

  addTodo(task) {
    task.index = this.list.length + 1;
    task.completed = false;
    this.list.push(task);

    localStorage.setItem('items', JSON.stringify(this.list));
  }

  removeTodo(index) {
    this.list = this.list.filter((t) => t.index !== index).map((t, i) => ({
      ...t, index: i + 1,
    }));

    localStorage.setItem('items', JSON.stringify(this.list));
  }

  updateTodo(task) {
    this.list[task.index - 1] = task;
    localStorage.setItem('items', JSON.stringify(this.list));
  }
}