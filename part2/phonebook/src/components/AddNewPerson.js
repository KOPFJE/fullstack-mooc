import React from 'react';

const AddNewPerson = (props) => {

    return(
        <div>
            <form onSubmit={props.addnewperson}>
            <div>
            name: <input onChange={props.name}/>
            </div>
            <div>
            number: <input onChange={props.number}/>
            </div>
            <div>
          <button type="submit">add</button>
        </div>
        </form>     
        </div>
    );
}

export default AddNewPerson