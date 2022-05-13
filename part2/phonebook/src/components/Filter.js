import React from 'react';



const Filter = (props) => {

    return(
        <div>
            <p>Filter shown with <input onChange={props.filter}/></p>
        </div>
    );
}

export default Filter