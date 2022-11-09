import React from 'react'

const StatLine = ({label, value}) => <tr><td> {label} </td><td> {value} </td></tr>

const Stat = ({good, bad, neutral, all}) => {

  function avg() {
    const POINTS = { "good": 1, "bad": -1, "neutral": 0 }
    const total = all.reduce((sum, type) => sum + POINTS[type], 0)
    return total / all.length
  }

  const pctPos = () => { 
    return all.length === 0 ? "0%" : `${good / all.length * 100} %`
  }

  const assessData = () => {
    if (all.length === 0) { 
      return "No feedback given"
    } else {
      return (
        <table>
          <tbody>
            <StatLine label="good" value={good} />
            <StatLine label="neutral" value={neutral}/>
            <StatLine label="bad" value={bad}/>
            <StatLine label="all" value={all.length}/>
            <StatLine label="average" value={avg()}/>
            <StatLine label="positive" value={pctPos()}/> 
          </tbody>
        </table>
      )
    }
  }

  return (
    <>
    <h2>Statistics</h2>
      {assessData()}
    </>
  )
}

export default Stat