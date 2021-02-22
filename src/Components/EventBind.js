import React, { Component } from 'react';
import './EventBind.css';

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        this.reactClickHandler = this.reactClickHandler.bind(this)
    }

    goodByeClickHandler() {
        this.setState({
            message: "Goodbye"
        });
    }

    helloClickHandler() {
        this.setState({
            message: "Hello"
        });
    }

    reactClickHandler() {
        this.setState({
            message: "React is really good"
        });
    }

    jsClickHandler = () => {
        this.setState({
            message: "JavaScript is good"
        });
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* Binding in Render */}
                {/* Disadvantage: the whole component re-renders */}
                <button onClick={this.goodByeClickHandler.bind(this)}>Say Goodbye</button>
                <br/>
                {/* Arrow function in Render */}
                {/* Similar to method one, though, its the easiest method */}
                <button onClick={() => this.helloClickHandler()}>Say Hello</button>
                <br/>
                {/* Binding in the class constructor; suggested by react documentation*/}
                {/* This is the best method currently because it happens in the constructor method */}
                <button onClick={this.reactClickHandler}>React</button>
                <br/>
                {/* Class property as arrow function; suggested by react documentation*/}
                <button onClick={this.jsClickHandler}>JavaScript</button>
            </div>
        )
    }
}

export default EventBind;
