export default class Tasker {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
    this.populateTodo();
  }

  populateTodo() {
    this.save();
    const listSec = document.querySelector('#list-items');
    listSec.innerHTML = '';
    this.tasksArray.forEach((taskItem) => {
      let activityItem = `
        <li class="d-flex s-between list-item" id="item-data-${taskItem.index}">`;
      activityItem += `
            <span class="material-icons  update-status"  data-id="${taskItem.index}">
              check_box_outline_blank
            </span>
            <p contenteditable="true" class="activity" data-id="${taskItem.index}">
              ${taskItem.description}
            </p>`;

      activityItem += `
          <span class="material-icons delete-activity"  data-id="${taskItem.index}">
            delete
          </span>
        </li>
      `;
      listSec.innerHTML += activityItem;
    });
    this.Actions();
  }
}
