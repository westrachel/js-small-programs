const Anecdote = ({anecdote}) => {

  return (
    <div>
      <h2>"{anecdote.content}" - {anecdote.author}</h2>
      <div>has {anecdote.votes} votes</div>
      <div>for more info see: {anecdote.info}</div>
    </div>
  )
}

export default Anecdote
