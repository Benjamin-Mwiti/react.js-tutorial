import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
            break;
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};
            break;
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
            break;
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};
            break;
        case 'reset':
            return initialState;
            break;
    
        default:
            return state;
            break;
    }
}

function CounterTwo() {
    
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>First Counter - {count.firstCounter}</h2>
            <h2>Second Counter - {count.secondCounter}</h2>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <div>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>2<sup>nd</sup> Increment Counter</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>2<sup>nd</sup> Decrement Counter</button>
            </div>
        </div>
    )
}

export default CounterTwo;
