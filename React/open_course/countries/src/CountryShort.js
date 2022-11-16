const CountryShort = ({props}) => {

  const changeView = (event) => event.preventDefault()

  return (
    <div key={props.name.official}>
      {props.name.official}
      <button onClick={changeView}>
        show
      </button>    
    </div>
  )
}

export default CountryShort


