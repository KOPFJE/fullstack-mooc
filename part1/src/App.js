function App() {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const part2 = "Using props to pass data"
  const part3 = "State of a component"
  const exercises = [ 10, 7, 14 ]




  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises[0]}
      </p>
      <p>
        {part2} {exercises[1]}
      </p>
      <p>
        {part3} {exercises[2]}
      </p>
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </div>
  );
}

export default App;
