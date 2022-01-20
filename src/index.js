import './style.css';

const Todo = [
  {
    description: 'Go to the gym',
    completed: true,
    index: 0,
  },
  {
    description: 'Visit the Barbing saloon',
    completed: true,
    index: 1,
  },
  {
    description: 'Play golf',
    completed: false,
    index: 2,
  },
];

let listContent = `
  <div class="heading">
      <h2>Today's To Do</h2>
      <i class="fas fa-sync"></i>
  </div>
  <div class="add-list">
      <input class="add-input" type="text" placeholder="Add to your list">
      <i class="fas fa-level-down-alt rotate"></i>
  </div>
`;

Todo.forEach((listItem) => {
  listContent += `
  <div class="row">
      <div class="input">
      <input type="checkbox" class="check">
      <p class="list-text">${listItem.description}</p>
      </div>
      <div class="icon">
      <i class="fas fa-ellipsis-v"></i>
      </div>
  </div>
  
`;
});

const listElement = document.querySelector('.list');
listElement.innerHTML = listContent;
