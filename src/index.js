import './style.css';
import Tasks from './task.js';
import showAllTodo from './function.js';
import { remove } from 'lodash';

const todos = new Tasks();

const form = document.querySelector('.add-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const items = {
    description: form.elements.todo.value,
  };
  form.reset();
  todos.addTodo(items);
  showAllTodo(todos);
});

showAllTodo(todos);


const clear = document.querySelector('.remove');

clear.addEventListener('click', () => {
  todos.clearAll();
  showAllTodo(todos);
})