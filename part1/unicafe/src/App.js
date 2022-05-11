import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
    <h1></h1>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <p>{neutral}</p>
    </div>
  );
}

export default App;
