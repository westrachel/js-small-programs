import { useState } from 'react'
import PersonForm from './Form.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const invalidName = () => {
    let invalidFlag
    persons.forEach(person => {
      if (person.name === newName) {
        invalidFlag = `${newName} has already been added to the phonebook.`
      }
    })
    return invalidFlag
  }

  const addPerson = (event) => {
    event.preventDefault()
    const errorMsg = invalidName()

    if (errorMsg) {
      alert(errorMsg)
    } else {
      const newPerson = { name: newName }
      setPersons(persons.concat(newPerson))
    }
  }

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const formDetails = () => {
    return ({
      addContact: addPerson,
      name: newName,
      handleChange: handleInputChange
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm formDetails={() => formDetails()} />
      <h2>Numbers</h2>
      {persons.map(person => 
         <div key={person.name}>{person.name}</div>
       )}
    </div>
  )
}

export default App


