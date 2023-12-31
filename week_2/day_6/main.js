class Task {
    constructor(task, complete) {
      this.task = task;
      this.complete = complete;
    }

    static fromJSON(json) {
        return new Task(json.task, json.complete);
      }
  
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.task = document.getElementById('task-input');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadTasksFromLocalStorage();  
      this.renderTaskTable();
    }

  onFormSubmit(e) {
    e.preventDefault();

    if (
        this.task.value == ''
      ) {
        return;
      }

     const task = new Task(this.task.value) 
     this.tasks.push(task);
     this.saveTasksToLocalStorage();
     this.renderTaskTable(); 
     this.task.value = '';
  }

  renderTaskTable(){
    this.tableBody.innerHTML = '';

    for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }  
  }

  createTaskTableRow(task){
    const tr = document.createElement('tr');

    const tdTask = document.createElement('td');
    const tdComplete = document.createElement('td');
    const tdDelete = document.createElement('td');

    tdTask.innerHTML = task.task;

    const actionButtons = this.createActionButton(task);
    tdComplete.appendChild(actionButtons[0]);
    tdDelete.appendChild(actionButtons[1]);
    tdDelete.appendChild(actionButtons[2]);

    tr.appendChild(tdTask);
    tr.appendChild(tdComplete);
    tr.appendChild(tdDelete);

    return tr;

  }

  createActionButton(task) {
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    const completeButton = document.createElement('input');

    deleteButton.setAttribute('class', 'btn btn-danger btn-sm me-1');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
      this.onDeleteTaskClicked(task);
    });

    editButton.setAttribute('class', 'btn btn-info btn-sm me-1');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', () => {
      this.onEditTaskClicked(task);
    });


    completeButton.setAttribute("type", "radio");




    return [completeButton, deleteButton, editButton];

  }


  onDeleteTaskClicked(task) {
    this.filterTaskArray(task);
    this.saveTasksToLocalStorage();
    this.renderTaskTable();
  }



  onEditTaskClicked(task) {
    this.filterTaskArray(task);

    this.task.value = task.task;

    this.saveTasksToLocalStorage();
    this.renderTaskTable();
  }

  filterTaskArray(task) {
    this.tasks = this.tasks.filter((currentTask) => {
      return task.task != currentTask.task;
    });
  }



  saveTasksToLocalStorage() {
    const json = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', json);
  }

  loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArray = JSON.parse(json);
      this.tasks = taskArray.map((task) => Task.fromJSON(task));
    }
  }
}
    
    const ui = new UI();