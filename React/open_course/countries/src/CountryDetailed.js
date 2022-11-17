import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Weather from './Weather.js'

const CountryDetailed = ({props}) => {
  const [weather, setWeather] = useState('')

  const newId = (() => {
    let id = 0
    return () => id += 1
  })();

  useEffect(() => {
    (async () => {
      await axios
      .get(`https://api.open-meteo.com/v1/forecast?latitude=${props.latlng[0]}&longitude=${props.latlng[1]}&current_weather=true&windspeed_unit=ms`)
      .then(response => {
        setWeather(response.data)
      })
    })()
  }, [])
      

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
        <Weather props={weather.current_weather}/>
    </div>
  )
}

export default CountryDetailed


