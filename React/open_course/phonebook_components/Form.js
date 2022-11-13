const PersonForm = ({addContact, name, handleChange}) => {

  return (
    <form onSubmit={addContact}>
      <div>
        name: 
        <input value={name} 
          onChange={handleChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm


