import Header from './components/Header.js';
import Content from './components/Header.js';
import Total from './components/Header.js';

function App() {
  const course = "Half Stack application development";
  const parts = [ "Fundamentals of React", "Using props to pass data", "State of a component" ];
  const exercises = [ 10, 7, 14 ];




  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
}

export default App;
