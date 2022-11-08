import React from 'react'

const StatLine = ({label, value}) => <li>{label} {value}</li>

const Stat = ({good, bad, neutral, all}) => {

  function avg() {
    if (all.length === 0) { 
      return "No feedback given"
    } else {
      const POINTS = { "good": 1, "bad": -1, "neutral": 0 }
      const total = all.reduce((sum, type) => sum + POINTS[type], 0)
      return `average: ${total / all.length}`
    }
  }

  const pctPos = () => { 
    return all.length === 0 ? "0%" : `${good / all.length * 100} %`
  }

  return (
    <div>
      <ul><h2>Statistics</h2></ul>
      <StatLine label="good" value={good} />
      <StatLine label="neutral" value={neutral}/>
      <StatLine label="bad" value={bad}/>
      <StatLine label="all" value={all.length}/>
      <StatLine label="" value={avg()}/>
      <StatLine label="positive" value={pctPos()}/>
    </div>
  )
}

export default Stat