import React from 'react';

function Greet(Names) {
    const {heroName} = Names;
    return (
        <div>
            <h1>Hello {Names.Name} aka {heroName}</h1>
            {Names.children}
        </div>
    )
}

export default Greet;
