import { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import PersonForm from './Form.js'
import Persons from './Persons.js'
import Filter from './Filter.js'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
     .get('http://localhost:3001/persons')
     .then(response => {
       setPersons(response.data)
     })
   }, [])

  const invalidNumber = () => {
    if (!newNumber.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)) {
      return 'Phone number should be a hyphenated 10-digit number (e.g. 888-888-8888)'
    }
  }

  const invalidName = () => {
    let invalidMsg = !newName.match(/[a-z]/i) ? 
                     'Name must have one alphabetical character' : undefined
    
     persons.forEach(person => {
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        invalidMsg = `${newName} has already been added to the phonebook.`
      }
    })
    return invalidMsg
  }

  const invalidInputs = () => {
    let allMsgs = invalidName()
    let invalidNum = invalidNumber()
    if (invalidNum && allMsgs) {
      allMsgs = `${allMsgs} ${invalidNum}`
    } else if (invalidNum && !allMsgs) {
      allMsgs = invalidNum
    }
    return allMsgs
  }

  const addContact = (event) => {
    event.preventDefault()
    const errorMsg = invalidInputs()

    if (errorMsg) {
      alert(errorMsg)
    } else {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat(newPerson))
    }
  }

  const handleFilterChange = (event) => {
    const regex = new RegExp(event.target.value, "i")
    const matches = persons.filter(person => {
      return person.name.match(regex)
    })
    setPersons(matches)
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter onFilterChange={handleFilterChange} />
      <h2>Add New Contact</h2>
      <PersonForm
        addContactInfo={addContact}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange} 
      />
      <h3>Numbers</h3>
      <Persons allContacts={persons} />
    </div>
  )
}

export default App


