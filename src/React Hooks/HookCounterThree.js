import React, {useState} from 'react';

function HookCounterThree() {
    const [Name, setName] = useState({firstName: "", lastName: ""});

    return (
        <div>
            <form>
                <input type="text" value={Name.firstName} onChange={e => setName({...Name, firstName: e.target.value})}/>
                <input type="text" value={Name.lastName} onChange={e => setName({...Name, lastName: e.target.value})}/>
                <h2>Your first name is - {Name.firstName}</h2>
                <h2>Your last name is - {Name.lastName}</h2>
                <h2>{JSON.stringify(Name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree;
