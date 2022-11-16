const CountryDetailed = ({props}) => {

  const newId = (() => {
    let id = 0
    return () => id += 1
  })();

  return (
    <div key={props.name.official}>
      <h2>{props.name.official}</h2>
      Capital: {props.capital[0]} <br />
      Area: {props.area}
      <h3>Languages Spoken:</h3>
      <ul>
        {Object.values(props.languages).map(lang => 
          <li key={newId()}>{lang}</li>
        )}
      </ul>
    </div>
  )
}

export default CountryDetailed


