import React from 'react';

export default function AddToDo() {
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form action="">
                <input type="text" />
                <button>Add</button>
            </form>
        </div>
    )
}
