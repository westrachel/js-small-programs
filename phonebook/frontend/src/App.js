import { useState } from 'react'
import { useEffect } from 'react'
import personService from './services/persons.js'
import PersonForm from './Form.js'
import Persons from './Persons.js'
import Filter from './Filter.js'


const App = () => {
  const [persons, setPersons] = useState([])
  const [selected, setSelected] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
     .retrieveAll()
     .then(responseData => {
       setPersons(responseData)
       setSelected(responseData)
     })
   }, [])

  const invalidNumber = () => {
    if (!newNumber.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)) {
      return 'Phone number should be a hyphenated 10-digit number (e.g. 888-888-8888)'
    }
  }

  const existingContact = () => {
    let existsFlag

    persons.forEach(person => {
      if (matchesExistingName(person.name)) {
        existsFlag = true
      }
    })
    return existsFlag
  }

  const matchesExistingName = (existingName) => {
    return existingName.toLowerCase() === newName.toLowerCase()
  }

  const invalidName = () => {
    return !newName.match(/[a-z]/i) ? 
           'Name must have one alphabetical character' : undefined
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

  const proposedContact = () => {
    return { name: newName, number: newNumber }
  }

  const addUpdateContact = (event) => {
    event.preventDefault()
    const errorMsg = invalidInputs()
    const exists = existingContact()

    if (errorMsg) {
      alert(errorMsg)
    } else if (exists) {
      updateContact()
    } else {
      addContact()
    }
  }

  const resetInputStates = () => {
    setNewName('')
    setNewNumber('')
  }

  const addContact = () => {
    const newPerson = proposedContact()
    personService
      .addPerson(newPerson)
      .then(response => {
        resetInputStates()
        updatePeopleStates(persons.concat(response))
      })
  }

  const updateContact = () => {  
    window.confirm(`Are you sure you want to update the phone number for: ${newName}?`)

    const newPeople = [];
    let id
    persons.forEach(person => {
      const copy = { ...person }
      if (matchesExistingName(person.name)) {
        copy.number = newNumber
        id = person.id
      }
      newPeople.push(copy)
    })

    personService.updatePerson(id, proposedContact())
    updatePeopleStates(newPeople)
  }

  const updatePeopleStates = (people) => {
    setPersons(people)
    setSelected(people)
  }
 
  const deleteContact = (event) => {
    const contact = event.target.parentNode.textContent.replace('Delete', '')
    const id = event.target.parentNode.id

    window.confirm(`Are you sure you want to delete the contact info: ${contact}?`)
    personService.deletePerson(id)

    const matches = persons.filter(person => {
      return person.id !== Number(id)
    })
    updatePeopleStates(matches)
  }

  const handleFilterChange = (event) => {
    const regex = new RegExp(event.target.value, "i")

    const matches = persons.filter(person => {
      return person.name.match(regex)
    })
    setSelected(matches)
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter onFilterChange={handleFilterChange} />
      <h2>Add New Contact</h2>
      <PersonForm
        nameValue={newName}
        numberValue={newNumber}
        addContactInfo={addUpdateContact}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange} 
      />
      <h3>Numbers</h3>
      <Persons
        allContacts={selected} 
        deleteContact={deleteContact}
      />
    </div>
  )
}

export default App


