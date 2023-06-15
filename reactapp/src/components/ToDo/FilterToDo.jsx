import React from 'react'

export default function FilterToDo() {
    const hello = () => {
        alert('Hello');
    };

    return (
        <div>
            <button onClick={() => { alert('Hello') }}>Show All</button>
            <button onClick={hello}>Show active</button>
            <button>Show completed</button>
        </div>
    )
}
