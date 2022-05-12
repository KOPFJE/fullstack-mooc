import { useState } from 'react';

const App = () => {

  const [anecdotes, setAnecdotes] = useState([
    {
      title: 'If it hurts, do it more often.',
      likes: 0
    },
    {
      title: 'Adding manpower to a late software project makes it later!',
      likes: 0
    },
    {
      title: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      likes: 0
    },
    {
      title: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      likes: 0
    },
    {
      title: 'Premature optimization is the root of all evil.',
      likes: 0
    },
    { 
      title:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      likes: 0
    },
    {
      title: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
      likes: 0
    }
  ]);

  const [selected, setSelected] = useState(0);
  const [best, setBest] = useState(0);

  const getMostVotes = () => {
    let mostVotesIndex = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if(anecdotes[i].likes > anecdotes[mostVotesIndex].likes) {
        mostVotesIndex = i;
      }
    }
    setBest(mostVotesIndex);
  }

  const handleVote = (event) => {
    let newArr = [...anecdotes];
    newArr[selected].likes += 1;
    setAnecdotes(newArr);
    getMostVotes();
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].title}</p>
      <p>has {anecdotes[selected].likes} votes.</p>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} >Next anecdote</button> <button onClick={handleVote} >Vote for the anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[best].title}</p>
      <p>has {anecdotes[best].likes} votes.</p>
    </div>
  )
}

export default App