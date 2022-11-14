const Filter = ({onFilterChange}) => {
  return (
    <div>
      Filter By Name: <input onChange={onFilterChange} />
    </div>
  )
}

export default Filter

