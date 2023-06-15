import React from "react";
import AddToDo from "./AddToDo";
import FilterToDo from "./FilterToDo";
import ToDoItem from "./ToDoItem";
import { toDoItems } from "./toDoItems";
import './style.css';

export default function ToDo() {
    return (
        <>
            <h2 className="heading">Todo List</h2>

            <AddToDo />

            <FilterToDo />

            <div>
                <h3> tasks remaining</h3>
                <ul>
                    {toDoItems.map(task =>
                            <ToDoItem key={task.id} name={task.name} completed={task.completed} />)}
                    {/* <ToDoItem name="Coffee" completed={true} />
                    <ToDoItem name="Eat" />
                    <ToDoItem name="Sleep" /> */}
                </ul>
            </div>
        </>
    );
}