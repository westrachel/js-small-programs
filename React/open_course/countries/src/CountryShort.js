const CountryShort = ({props, viewDetails}) => {

  const changeView = (event) => {
    event.preventDefault()
    viewDetails(event.target.id)
  }

  return (
    <div key={props.name.official}>
      {props.name.official}
      <button id={props.name.official} onClick={changeView}>
        show
      </button>    
    </div>
  )
}

export default CountryShort


