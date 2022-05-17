import React from 'react';

const Persons = (props) => {

    return(
        <div>
            <ul>
                {props.persons
                    .filter(person => person.name.toLowerCase().includes(props.searchName.toLowerCase()))
                        .map(person => 
                            <li key={person.id}>{person.name} {person.number} <button onClick={() => props.handleDelete(person)}>Delete</button></li>
                        ) 
                }
            </ul>
        </div>
    );
}

export default Persons