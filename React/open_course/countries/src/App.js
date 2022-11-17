import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter.js'
import Countries from './Countries.js'


const App = () => {
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState([])
  const [switchToSingleView, setMoreDetailedView] = useState('')

  useEffect(() => {
    axios
     .get('https://restcountries.com/v3.1/all')
     .then(response => {
       setCountries(response.data)
     })
   }, [])

  const handleFilterChange = (event) => {
    setMoreDetailedView('')
    const regex = new RegExp(event.target.value, "i")
    const matches = countries.filter(country => {
      return country.name.common.match(regex)
    })
    setSelected(matches)    
  }

  return (
    <div>
      <h1>Country Lookups:</h1>
      <Filter onFilterChange={handleFilterChange} />
      <Countries 
        props={selected} 
        switchView={setMoreDetailedView}
        singleCountryView={switchToSingleView} />
    </div>
  )
}

export default App


