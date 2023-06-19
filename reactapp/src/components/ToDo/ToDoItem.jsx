import React from 'react'
import './style.css'
import classNames from 'classnames'

export default function ToDoItem({task, toggleTaskCompleted, deleteTask}) {

    return (
        <li>
            <input type="checkbox" defaultChecked={task.completed}
                onChange={() => {
                    toggleTaskCompleted(task.id)}}/>
            <span className={classNames({completed: task.completed})}>{task.name}</span>
            <div>
                <button>Edit</button>
                <button onClick={() => { deleteTask(task.id) }}>Delete</button>
            </div>
        </li>
    )
}