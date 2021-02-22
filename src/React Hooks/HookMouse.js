import React, {useState, useEffect} from 'react';

function HookMouse() {
    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("Mouse event");
        setX(e.clientX);
        setY(e.clientY);
    }
    
    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousePosition);
        
        // Code for component clean up
        // Using effectHook with clean up code
        return () => {
            console.log("Component is unmounting");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <div>
            <h2>X - {x} <br/>Y - {y}</h2>
        </div>
    )
}

export default HookMouse;
