const Weather = ({props}) => {
  let { temperature, windspeed } = ''
  if (props) {
    ({ temperature, windspeed } = props)
  }

  return (
    <>
      <h3>Weather Based on Country's Lat/Long:</h3>
      Temperature: {temperature} Celsius <br />
      Wind: {windspeed} m/s
    </>
  )
}

export default Weather





