import React from 'react'

const CountrySimple = ({ countriesToShow, setFilterName }) => {
    return (
      <>
        {countriesToShow.map(country => 
          <div key={country.name}>
            {country.name} <button onClick={() => {setFilterName(country.name)}}>show</button>
          </div>
        )}
      </>
    )
}
export default CountrySimple