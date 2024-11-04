import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

const AnecdotesList = () => {
  // This dispatch is used to send information to the ActionCreator function/Reducer
  const dispatch = useDispatch()
  
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if(filter === 'ALL'){
      return anecdotes
    }
    return anecdotes.filter(x => x.content.toLowerCase().includes(filter.toLowerCase()))
  })


  const vote = (id) => {
    dispatch(addVote(id))
  }

  const anecdoteStyle = {
    marginBottom: 10
  }

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div className="anecdote" key={anecdote.id} style={anecdoteStyle}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdotesList
