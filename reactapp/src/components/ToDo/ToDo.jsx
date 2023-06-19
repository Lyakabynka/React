import React from "react";
import AddToDo from "./AddToDo";
import FilterToDo from "./FilterToDo";
import ToDoItem from "./ToDoItem";
import { toDoItems } from "./toDoItems";
import './style.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

export default function ToDo() {

    const [taskList, setTaskList] = useState(toDoItems);

    const addTask = (name) => {
        let newTask = {
            id: uuidv4(),
            name: name,
            completed: false,
        };

        setTaskList([...taskList, newTask]);
        // new arr with the content of existing one
    }

    const toggleTaskCompleted = (id) => {
        const updatedTasks = taskList.map(task => {
            if(task.id === id)
            {
                return {...task, completed: !task.completed};
            }
            return task;
        })
        setTaskList(updatedTasks);
    }

    const tasksWord = taskList.length === 1 ? 'task' : 'tasks';
    const taskHeading = `${taskList.length} ${tasksWord}`


    const deleteTask = (id) => {

        setTaskList(taskList.filter(t=>t.id !== id));
    }

    return (
        <>
            <h2 className="heading">Todo List</h2>

            <AddToDo addTask={addTask} />

            <FilterToDo />

            <div>
                <h3> {taskHeading}</h3>
                <ul>
                    {taskList.map(task =>
                        <ToDoItem
                            task = {task}
                            key={task.id} 
                            toggleTaskCompleted = {toggleTaskCompleted}
                            deleteTask = {deleteTask}/>)}
                </ul>
            </div>
        </>
    );
}