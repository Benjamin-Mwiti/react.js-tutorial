import React, { Component } from 'react';

class ClickCounterTwo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Count: 0
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked X times</button>
            </div>
        )
    }
}

export default ClickCounterTwo;
