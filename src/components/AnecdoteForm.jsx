import { createAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from 'react-redux'
const AnecdoteForm = () => {

    // This dispatch is used to send information to the ActionCreator function/Reducer
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        console.log('vediamo event >>> ', event.target.anecdote.value)
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}


export default AnecdoteForm