const Person = ({details, deletePerson}) => {
  const { id, name, number } = {...details}

  return ( 
    <div id={id} key={id}>
      {name} {number}
      <button onClick={deletePerson}>Delete</button>
    </div>
  )
}

const Persons = ({allContacts, deleteContact}) => {

  return (
    <>
    {allContacts.map(person =>
      <Person 
        key={person.name}
        details={person} 
        deletePerson={deleteContact} 
      />
    )}
    </>
  )
}

export default Persons