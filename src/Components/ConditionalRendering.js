import React, { Component } from 'react';

//Conditional Rendering
class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        //Method 1: If else
        /* if (this.state.isLoggedIn) {
            return <h2>Welcome Benjamin</h2>
        } else {
            return <h2>Welcome Guest</h2>
        } */

        //Method 2: Element variables

        /* let message;
        if (this.state.isLoggedIn) {
            message = <h2>Welcome Benjamin</h2>
        } else {
            message = <h2>Welcome Guest</h2>
        }
        return <div>{message}</div> */
        
        //Method 3: Ternary conditional operator
        /* return (
            this.state.isLoggedIn 
            ? <h2>Welcome Benjamin</h2>
            : <h2>Welcome Guest</h2>
        ) */
        // or
        /* return this.state.isLoggedIn ? ( 
            <h2>Welcome Benjamin</h2>
            ) : (
            <h2>Welcome Guest</h2>
        ) */

        //Method 4: Short circuit operator; if the block before && operators do not evaluate to true, the block after && operators nothing gets rendered on the screen
        return (
            this.state.isLoggedIn && <h2>Welcome Benjamin</h2>
        )
    }
}

export default UserGreeting;
