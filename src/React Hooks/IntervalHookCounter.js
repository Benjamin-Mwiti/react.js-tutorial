import React, {useState, useEffect} from 'react';

function IntervalHookCounter() {
    
    const [count, setCount] = useState(0);
    
    const Tick = () => {
        setCount(count + 1);
    }

    // Alternatively, this can be achieved without the dependency but using the following method
    /* 
    const Tick = () => {
        setCount(prevCount => prevCount + 1);
    }
     */

    useEffect(() => {
        const Interval = setInterval(Tick, 1000);

        return () => {
            clearInterval(Interval);
        }
    }, [count]);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalHookCounter;
