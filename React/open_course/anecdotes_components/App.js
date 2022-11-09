import { useState } from 'react'
import Button from './Button.js'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, updatePoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

  function changeAnecdote() {
    setSelected(shuffle([...Array(anecdotes.length).keys()])[0])
  }

  function addVote() {
    const newPoints = { ...points }
    newPoints[selected] += 1
    updatePoints(newPoints)
  }

  function idxMostPoints() {
    let idx = 0
    let maxPoints = 0

    for (let anecdoteIdx in points) {
      if (points[anecdoteIdx] > maxPoints) {
        idx = Number(anecdoteIdx)
        maxPoints = points[anecdoteIdx]
      }
    }
    return idx
  }

  function numVotes(maxFlag) {
    const anecdoteIdx = maxFlag ? idxMostPoints() : selected
    const count = points[anecdoteIdx]
    return count === 1 ? "has 1 vote" : `has ${count} votes`
  }

  function shuffle(arr) {
    let currIdx = arr.length,  randomIdx;

    while (currIdx != 0) {
      randomIdx = Math.floor(Math.random() * currIdx);
      currIdx--;

      [arr[currIdx], arr[randomIdx]] = [arr[randomIdx], arr[currIdx]];
    }

    return arr;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      {numVotes()}
      <br />
      <Button handleClick={() => addVote()} text="vote" />
      <Button handleClick={() => changeAnecdote()} text="next anecdote"/>
      <h2>Anecdote with the most votes</h2>
      {anecdotes[idxMostPoints()]}
      <br />
      {numVotes(true)}
    </div>
  )
}

export default App