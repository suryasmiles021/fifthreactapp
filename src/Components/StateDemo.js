//functional component  state

import React, {useState} from 'react';

const StateDemo = () => {
    const initialCount = 0;
    const[count,setCount] = useState(initialCount)

    return (
        <div>
            <h2>welcome to state Demo</h2>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(initialCount)}> Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        </div>
    );
};

export default StateDemo;