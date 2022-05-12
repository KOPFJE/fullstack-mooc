import React from 'react';

const Total = (props) => {
    //let sum = 0;
    let initialValue = 0;
    let sum = props.parts.reduce((pValue, cValue) => pValue + cValue.exercises, initialValue);
    console.log(sum);

    return (
        <p><strong>Number of exercises { sum }</strong></p>
    );
} 

export default Total;