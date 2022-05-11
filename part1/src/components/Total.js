import React from 'react';

const Total = (props) => {
    let sum = 0;
    for (let amount of props.exercises) {
       sum += amount; 
    }
    console.log(sum);

    return (
        <p>Number of exercises { sum }</p>
    );
} 

export default Total;