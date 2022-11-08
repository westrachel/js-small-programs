import { useState } from 'react'
import Stat from './Stats'
import Button from './Button'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])


  const updateVal = (type) => { 
    setAll(all.concat(type))
    if (type === 'good') {
      setGood(good + 1)
    } else if (type === 'neutral') {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  }

  return (
    <>
      <h1>Give Feedback</h1>    
      <Button handleClick={() => updateVal("good")} text="good"/>
      <Button handleClick={() => updateVal("neutral")} text="neutral"/>
      <Button handleClick={() => updateVal("bad")} text="bad"/>
      <Stat good={good} bad={bad} neutral={neutral} all={all} />
    </>
  )
}

export default App