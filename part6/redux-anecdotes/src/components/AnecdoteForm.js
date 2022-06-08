import reducer, {actionCreator} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux';

const AnecdoteForm = () => {
    const dispatch = useDispatch(reducer);

    const add = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = "";
        dispatch(actionCreator("ADD", {content, votes : 0}))
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={add}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
            </form>
        </div>
    )
};

export default AnecdoteForm;