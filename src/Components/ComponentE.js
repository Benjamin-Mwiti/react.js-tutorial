import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

/* Points to note abount the contextTpe
// It only works with class components
// You can only subscribe to only one context using contextType; sometimes you have to read more than one context which can only be done using the Consumer component
*/

class ComponentE extends Component {
    // Line 20 can also be done as using the below method if your application supports the Public Class Rule Syntax

    // static contextType = UserContext;

    render() {
        return (
            <div>
                <ComponentF/>
                <h2>Component E context {this.context}</h2>
            </div>
        )
    }
}

ComponentE.contextType = UserContext;

export default ComponentE;
