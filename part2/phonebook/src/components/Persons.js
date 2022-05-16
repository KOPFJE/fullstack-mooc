import React from 'react';

const Persons = (props) => {

    return(
        <div>
        <ul>
        {props.persons
        .filter(person => person.name.toLowerCase().includes(props.searchName.toLowerCase()))
        .map(person => <li key={person.name}>{person.name} {person.phoneNumber}</li>)}
        </ul>
        </div>
    );
}

export default Persons