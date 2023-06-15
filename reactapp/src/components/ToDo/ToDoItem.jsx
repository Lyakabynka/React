import React from 'react'

export default function ToDoItem({name,completed}) {
    

    return (
        <li>
            <input type="checkbox" defaultChecked={completed}/>
            {name}
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    )
}