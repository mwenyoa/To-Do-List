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