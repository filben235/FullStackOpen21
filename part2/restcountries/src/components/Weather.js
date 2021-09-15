import React, { useState } from 'react'
import axios from 'axios'

//sadly I reached my weatherstack call limit so couldn't test wind and weather image
//but everything should be working

const Weather = ({ capital }) => {
    //api key for weatherstack
    const api_key = process.env.REACT_APP_API_KEY
    
    const [ weather, setWeather ] = useState()

    //gets weather data
    axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
        .then(response => {
            setWeather(response.data.current)
    })
    
    if (weather === undefined) return <p>couldn't get weather data</p> 
    
    return (
      <>
        <h4>Weather in {capital}</h4>
        <p>temperature: {weather.temperature}</p>
        <img style={{width: '100px'}} src={weather.weather_icons[0]} alt={`The weather right now in ${capital}`} />
        <p>wind: {weather.wind_speed} m/s direction {weather.wind_dir}</p>
      </>
    )
}

export default Weather

