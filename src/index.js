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
        index: 2
    },
]

const listcontainer = document.querySelector('list');
const deleteAll = document.querySelector('remove');
const inputfield = document.querySelector('form');

function tasklist() {
    Todo.forEach((e) => {
       listcontainer.innerHTML = ''; 
       listcontainer.innerHTML += `
         <li id="task-${e.index}" dragdrop="true">
            <div class="content">
               <input type="checkbox" class="input" ${e.completed ? 'checked' : ''}/>
               <input type="text" class="input" value='${e.description}' readonly/>
            </div>
            <div class="action">
              <span class="material-icons drag"></span>
              <span class="material-icons delete"></span>
            </div>

         </li>
       `
    });
    
}

tasklist();


// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     return element;
//   }
  
//   document.body.appendChild(component());