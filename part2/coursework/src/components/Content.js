import React from 'react';
import Part from './Part';

const Content = (props) => {
    const parts = props.parts;
    console.log(parts);

   return(
       <div>
            { parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} /> ) }
       </div>
   ); 
} 

export default Content;