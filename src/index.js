import './style.css';
import Tasker from './tasks.js';

// tasker object
const todoList = new Tasker();
todoList.populateTodo();
// Add new Activity
document.querySelector('#add-task').addEventListener('submit', (e) => {
  e.preventDefault();
  const action = e.target.elements.activity.value;
  todoList.add(action);
  e.target.reset();
});