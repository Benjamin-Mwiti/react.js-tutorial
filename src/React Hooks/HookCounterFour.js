import React, {useState} from 'react';

function HookCounterFour() {
    const [Items, setItems] = useState([]);
    const addItem = () => {
        setItems([...Items, {
            id: Items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    
    return (
        <div>
            <button onClick={addItem}>Random number rendering</button>
            <ul>
                {
                    Items.map(Item => (
                        <li key={Item.id}>{Item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounterFour;
