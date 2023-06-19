import React from 'react';
import { useState } from 'react';

export default function AddToDo({ addTask }) {

    const [name, setName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if(name.trim().length)
        {
            addTask(name);
            setName('');
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={name} onChange={(e)=>{ setName(e.target.value) }}/>
                <button>Add</button>
            </form>
        </div>
    )
}
