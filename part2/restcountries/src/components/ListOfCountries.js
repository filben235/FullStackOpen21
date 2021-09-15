import React from 'react'
import CountryDetail from './CountryDetail'
import CountrySimple from './CountrySimple'

const ListOfCountries = ({ countriesToShow, showAll, setFilterName }) => {
    const countryCount = countriesToShow.length

    if (showAll) return <p>Try searching for a country</p>
    if (countryCount > 10) return <p>{`Found ${countryCount} matching countries, please be more specific`}</p>
    if (countryCount === 0) return <p>No matches found!</p>
    if (countryCount === 1) return <CountryDetail {...{ countriesToShow }} />
    if (countryCount <= 10) return <CountrySimple {...{ countriesToShow, setFilterName }} />
}
  
export default ListOfCountries