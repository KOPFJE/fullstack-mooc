import { useSelector, useDispatch } from 'react-redux'
import reducer, { actionCreator } from '../reducers/anecdoteReducer'

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdoteReducer);
    const dispatch = useDispatch(reducer);
    console.log(anecdotes)

    const vote = (id) => {
        console.log('vote', id)
        dispatch(actionCreator("VOTE", {id}));
    }

    return(
        <div>
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Anecdotes;