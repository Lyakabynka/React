import React from 'react'
import { useState } from 'react';
import Forma from '../Forms/Forma';
import Forms from '../Forms/Forms';

export default function Counter() {
    
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count-1);
    }

    const increment = () => {
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={() => { decrement() }}>-</button>
            <span>{count}</span>
            <button onClick={() => { increment() }}>+</button>

            <Forma/>
            <Forms/>
        </div>
    )
}