import React from 'react'

const Course = ({name, parts}) => {

  const total = parts.reduce((total, currObject) => {
    return total + currObject.exercises
  }, 0)

  const nextKey = (() => {
    let key = -1
    return () => key -= 1
  })()


  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {parts.map(part => {
          return ( <li key={nextKey()}>
           {part.name} {part.exercises}
          </li> )
        })}
      </ul>
      Total of {total} exercises
    </div>
  )
}

export default Course