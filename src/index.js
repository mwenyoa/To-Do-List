import './style.css';
// select todo list class
const toDoList = document.querySelector('#list-items');
const tasksArray = [
  {
    description: 'Attend morning session',
    completed: false,
    index: 0,
  },
  {
    description: 'Install webpack',
    completed: false,
    index: 1,
  },
  {
    description: 'Practice coding challenges',
    completed: false,
    index: 2,
  },
  {
    description: 'Watch Wrestling',
    completed: false,
    index: 3,
  },
  {
    description: 'Structure Todo List',
    completed: false,
    index: 4,
  },
];

const sortedTasks = tasksArray.sort((x, y) => x.index - y.index);

const populateTodo = () => {
  const li = [];
  const template = [];
  for (let j = 0; j < sortedTasks.length; j += 1) {
    li[j] = document.createElement('li');
    li[j].className = 'list-item';
    template[j] = `
          <span class="task-item"><input type="checkbox"  id="task-check" name="task-check"><label for="task-check" class="m-left">${sortedTasks[j].description}</label></span>
          <a href="#" class="task-option"><span class="material-icons">more_vert</span></a>
        `;
    li[j].innerHTML = template[j];
    toDoList.appendChild(li[j]);
  }
};

populateTodo();