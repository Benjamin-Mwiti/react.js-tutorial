import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {Name, heroName} = this.Names;
        return (
            <div>
                <h1>Welcome {Name} aka {heroName}</h1>
            </div>
        )
    }
}

export default Welcome;
