import React from 'react';
import Person from './Person';

function NameList() {
    const names = ["Bruce", "Clark", "Diana"];
    const persons = [{
        id: 1,
        name: "Bruce",
        age: 30,
        skill: "React"
    }, {
        id: 2,
        name: "Clark",
        age: 25,
        skill: "Angular"
    }, {
        id: 3,
        name: "Diana",
        age: 28,
        skill: "Vue"
    }];

    const nameList = names.map((name, index) => <h2 key={index}>{index}. {name}</h2>);
    const personsList = persons.map(person => <Person key={person.id} person={person}/>,
        {/* <h2>
        My name is{person.name}, I am {person.age} and I have specialized in {person.skill}
        </h2> */}
    );
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList;

{/* {personsList} */}
{/* names.map(name => 
    <h2>
        {name}
        <br/>
        {names}
        {nameList}
    </h2> ) */}