import React from 'react';
import { useState, useEffect } from 'react';

//Import models
import {Task} from '../../models/Task';

//Import components
import TaskInput from './TaskInput';
import TaskTable from './TaskTable'; 

//Import services
import TaskService from '../../services/task-service';


export default function TaskPage() { 

    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks.length) {
      onInitialLoad();
    }
  }, []);


  async function onInitialLoad() {
    try {
      const tasks = await TaskService.fetchTasks();
      setTasks(tasks);
    } catch (err) {
      console.log(err);
    }
  }

  async function onTaskCreate(name) {
    if (name === ""){
      return
    }
    
    const task = await TaskService.createTask(new Task(null, name, false));

    setTasks([...tasks, task]);
  }


  async function onTaskRemove(taskID) {
    await TaskService.deleteTask(taskID); 
    setTasks(tasks.filter((task) => task.id !== taskID));

  }

  async function onTaskComplete(taskID) {
    const taskToToggle = tasks.find((task) => task.id === taskID);
    taskToToggle.complete = !taskToToggle.complete;

    const updatedTask = await TaskService.updateTask(taskToToggle);

    setTasks(tasks.map((task) => {
      return task.id === taskID ? updatedTask : task;
    })
    );
  }

    return(
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
    )
}