import CountryDetailed from './CountryDetailed.js'
import CountryShort from './CountryShort.js'

const Countries = ({props}) => {

  const shortDesc = (country) => <CountryShort props={country} />
  const detailedDesc = (country) => <CountryDetailed props={country} />


  const setDisplay = () => {
    if (props.length === 1) { 
      return detailedDesc(props[0]) 
    } else if (props.length <= 10) {
      return props.map(shortDesc)
    } else {
      return "too many matches; refine search"
    }
  }

  return (
    <>
    {setDisplay()}
    </>
  )
}

export default Countries