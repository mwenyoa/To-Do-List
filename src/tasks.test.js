/**
 * @jest-environment jsdom
 *
 */
import Tasker from './tasks.js';

document.body.innerHTML = `<section class="d-flex cols todo-list">
 <header class="header d-flex s-between">
     <h2>Today's To Do </h2>
     <span class="material-icons" id="refresh-all">autorenew</span>
     <hr>
 </header>
 <form action="#" class="d-flex s-between" id="add-task">
     <input type="text" name="activity" placeholder="Add your List" id="add-new-task">
     <button type="submit">
         <span class="material-icons">keyboard_return</span>
     </button>
 </form>
 <ul id="list-items"></ul>
 <div class="d-flex clear-completed">
   Clear All Completed
 </div>
</section>`;

describe('Testing Add function', () => {
    window.localStorage = Storage.prototype;
    test('Test: Add task', () => {
        const todoList = new Tasker();
        todoList.add('Test');
        todoList.add('Test 2');
        expect(todoList.tasksArray).toHaveLength(2);
    });

    test('Test: Delete task', () => {
        const todoList = new Tasker();
        todoList.delete(1);
        expect(todoList.tasksArray).toHaveLength(1);
    });
});

describe('Test: functions', () => {
    test('Test: Update task status', () => {
        const todoList = new Tasker();
        todoList.add('Test update function');
        todoList.add('Test2 for update function');
        todoList.updateActivityStatus(2);
        expect(todoList.tasksArray[1].completed).toBe(true);
    });

    test('Test: Edit task', () => {
        const todoList = new Tasker();
        todoList.add('Test for edit function');
        expect(todoList.tasksArray[0].description).toMatch('Test for edit function');
        todoList.edit(1, 'Edited Task');
        expect(todoList.tasksArray[0].description).toMatch('Edited Task');
    });
});