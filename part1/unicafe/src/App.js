import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
      <h1>Give feedback!</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  );
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad;
  let average = (props.good - props.bad) / all;
  let positive = props.good / all * 100 ;
  let lineInfos = [
    {
      text : "Good",
      value : props.good
    },
    {
      text : "Neutral",
      value : props.neutral
    },
    {
      text : "Bad",
      value : props.bad
    },
    {
      text : "All",
      value : all
    },
    {
      text : "Average",
      value : average.toFixed(1)
    },
    {
      text : "Positive",
      value : positive.toFixed(1) + '%'
    }
  ];

  if(all > 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <table>
          {
            lineInfos.map(line => <StatisticLine key={line.text} text={line.text} value={line.value} /> )
          }
        </table>
      </div>
    );
  } else {
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given.</p>
      </div>
    );
  }
}

const StatisticLine = (props) => {
  return(
    <tbody>
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
    </tbody>
  );
}

export default App;
