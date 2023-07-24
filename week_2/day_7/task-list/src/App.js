import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';
import { useState, useEffect } from 'react';
import {Task} from './models/Task'; 

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
     if(!tasks.length) {
      loadTasksFromLocalStorage();
     }
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks]);

  function onTaskCreate(name) {
    if (name === ""){
      return
    }
    const id = new Date().getTime();
    const task = new Task(id, name, false);

    setTasks([...tasks, task]);
  }


  function onTaskRemove(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));

  }

  function onTaskComplete(taskID) {
    const taskToToggle = tasks.find((task) => task.id === taskID);
    taskToToggle.complete = !taskToToggle.complete;

    setTasks(tasks.map((task) => {
      return task.id == taskID ? taskToToggle : task;
    })
    );
  }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }


  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArray = JSON.parse(json);
      if (taskArray.length) {
        setTasks(taskArray.map((x) => Task.fromJson(x)));
      }
    }
  }
  return (
    <div className="container mt -5">
      <div class="card-header">
      <h1>Task List</h1>
      </div>
      <div className="card card-body text-center">
        <TaskInput onTaskCreate={onTaskCreate}/>
        <TaskTable tasks={tasks}
        onTaskRemove={onTaskRemove}
        onTaskComplete={onTaskComplete}
        />
      </div>
    </div>
    
  );
}

export default App;
