import React from 'react'
import Weather from './Weather'

const CountryDetail = ({ countriesToShow }) => {
    const country = countriesToShow[0]
    return (
      <>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        
        <h4>Languages spoken</h4>
        {country.languages.map(language => 
          <li key={language.name}>{language.name}</li>
        )}
  
        <img style={{width: '100px'}}src={country.flag} alt={`The flag of ${country.name}`} />
        <Weather capital={country.capital} />
      </>
    )
}

export default CountryDetail