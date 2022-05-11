import React from 'react';

const Total = (props) => {
    let sum = 0;
    for (let part of props.parts) {
       sum += part.exercises; 
    }
    console.log(sum);

    return (
        <p>Number of exercises { sum }</p>
    );
} 

export default Total;