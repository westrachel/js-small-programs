const Person = ({props}) => {
  const { id, name, number } = {...props}

  return ( 
    <div key={id}>
      {name} {number}
    </div>
  )
}

const Persons = ({allContacts}) => {

  return (
    <>
    {allContacts.map(person =>
      <Person props={person} />
    )}
    </>
  )
}

export default Persons