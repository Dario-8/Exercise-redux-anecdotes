const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// generate a random id
const getId = () => (100000 * Math.random()).toFixed(0)

// create anecdote as Object
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

// executes the logic based on the type of the action to modify the component's state
export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      console.log('NEW_ANCEDOTE >> ', action.payload)
      state = state.concat(action.payload)
      return state

    case 'ADD_VOTE':
      const id = action.payload.id
      const votedAnecdote = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...votedAnecdote,
        id: id,
        votes: votedAnecdote.votes + 1
      }
      
      state = state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote
      )
      state = state.sort((a,b) => b.votes - a.votes )
      return state

    default: 
      console.log('state >> ', state)
      return state
  }

}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: asObject(content)
  }
}

export const addVote = (id) => {
  console.log('addVote >> ', id)
  return {
    type: 'ADD_VOTE',
    payload: { id }
  }
}

export default reducer