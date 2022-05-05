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
      if (taskItem.completed) {
        activityItem += `
                <span class="material-icons done update-status" data-id="${taskItem.index}">
                  done
                </span>
                <p contenteditable="true" class="completed activity" data-id="${taskItem.index}">
                  ${taskItem.description}
                </p>
                `;
      } else {
        activityItem += `
            <span class="material-icons  update-status"  data-id="${taskItem.index}">
              check_box_outline_blank
            </span>
            <p contenteditable="true" class="activity" data-id="${taskItem.index}">
              ${taskItem.description}
            </p>`;
      }
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
    }
  }

  // Add logic to delete item
  delete(activityIndex) {
    if (activityIndex) {
      this.tasksArray.splice((activityIndex - 1), 1);
      this.populateTodo();
    }
  }

  // update  completed  task status
  updateActivityStatus(activityIndex) {
    if (activityIndex !== undefined) {
      if (this.tasksArray[activityIndex - 1].completed === true) {
        this.tasksArray[activityIndex - 1].completed = false;
      } else {
        this.tasksArray[activityIndex - 1].completed = true;
      }
    }
    this.populateTodo();
  }

  // Clear completed items
  clearCompleted() {
    this.tasksArray = this.tasksArray.filter((activity) => activity.completed === false);
    this.populateTodo();
  }

  // Save data to local storage
  save() {
    this.tasksArray.forEach((task, index) => {
      this.tasksArray[index].index = (index + 1);
    });

    this.tasksArray.sort((x, y) => x.index - y.index);

    localStorage.setItem('tasks', JSON.stringify(this.tasksArray));
  }

  // edit task description
  edit(index, description) {
    this.tasksArray[index - 1].description = description;
    this.save();
  }

  // function to listen to activity
  Actions() {
    const updateStatusBtns = document.querySelectorAll('.update-status');
    if (updateStatusBtns !== null) {
      updateStatusBtns.forEach((item) => {
        item.addEventListener('click', () => this.updateActivityStatus(item.getAttribute('data-id')));
      });
      // Delete Activity
      const deleteBtns = document.querySelectorAll('.delete-activity');
      if (deleteBtns) {
        deleteBtns.forEach((activity) => {
          activity.addEventListener('click', () => this.delete(activity.getAttribute('data-id')));
        });
      }
      // edit activity
      const activities = document.querySelectorAll('.activity');
      if (activities) {
        activities.forEach((activity) => {
          activity.addEventListener('input', (e) => {
            const description = e.target.innerText;
            const index = e.target.getAttribute('data-id');
            this.edit(index, description);
          });
        });
      }
    }
  }
}