import React from 'react';

export default function TaskInput(props) {
    return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Complete</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tasks.map((task) => {
                        return <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>
                                <div onClick={() => props.onTaskComplete(task.id)}>
                                    <i 
                                    className={
                                        task.complete ? 'bi bi-circle-fill' : 'bi bi-circle'}
                                    ></i>
                                </div>
                            </td>
                            <td>
                                <div onClick={() => props.onTaskRemove(task.id)}>
                                    <i className="bi bi-trash"></i>
                                </div>
                            </td>

                        </tr>
                    })
                }
            </tbody>

        </table>
    </div>
    );
}