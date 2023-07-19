class Task {
    constructor(task) {
      this.task = task;
    }
  
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.task = document.getElementById('task-input');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];

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

    tr.appendChild(tdTask);
    tr.appendChild(tdComplete);
    tr.appendChild(tdDelete);

    return tr;

  }

  createActionButton(task) {
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('input');

    deleteButton.setAttribute('class', 'btn btn-danger btn-sm me-1');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
      this.onDeleteTaskClicked(task);
    });


    completeButton.setAttribute("type", "radio");




    return [completeButton, deleteButton];

  }
 
}
    
    const ui = new UI();