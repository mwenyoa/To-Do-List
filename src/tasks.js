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

  // Add activity
  add(actv) {
    if (actv || actv === 0) {
      const newActivity = {
        description: actv,
        completed: false,
        index: this.tasksArray.length,
      };
      this.tasksArray.push(newActivity);
      this.populateTodo();
    }
  }

  // Add logic to delete item
  delete(activityIndex) {
    if (activityIndex) {
      this.tasksArray.splice((activityIndex - 1), 1);
      this.populateTodo();
    }
  }

  // Save data to local storage
  save() {
    this.tasksArray.forEach((task, index) => {
      this.tasksArray[index].index = (index + 1);
    });

    this.tasksArray.sort((x, y) => x.index - y.index);

    localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
  }
}
