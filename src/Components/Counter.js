import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Count: 0,
             countFive: 0
        }
    }
    
    Increment() {
        this.setState({
            Count: this.state.Count + 1
        }, () => {
            console.log("Callback value", this.state.Count);
        });
        /* this.state.Count = this.state.Count + 1 */
        console.log(this.state.Count);
    }
    
    incrementFive() {
        this.setState((fivePrevState) => ({
            countFive: fivePrevState.countFive + 1
        }), () => {
            console.log("Callback value", this.state.countFive);
        });
    }
    
    increment_Five() {
        this.incrementFive()
        this.incrementFive()
        this.incrementFive()
        this.incrementFive()
        this.incrementFive()
    }

    render() {
        return (
            <div>
                <span>Plus 1 Count - {this.state.Count} </span>
                <button onClick={() => this.Increment()}>Increment</button>
                <br/>
                <span>Plus 5 Count - {this.state.countFive} </span>
                <button onClick={() => this.increment_Five()}>Increment</button>
            </div>
        )
    }
}

export default Counter;
