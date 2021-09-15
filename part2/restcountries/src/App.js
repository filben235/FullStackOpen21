import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FilterCountries from './components/FilterCountries'
import ListOfCountries from './components/ListOfCountries'

const App = () => {
  
  //gets a list of countries and fills countries array with them
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, []) //useEffect only gets called after first render

  
  //array of all countries from restcountries
  const [ countries, setCountries ] = useState([])

  //used to track input state
  const [ filterName, setFilterName ] = useState('')

  //boolean used for filtering
  const [showAll, setShowAll] = useState(true)

  //returns all countries if showAll is true, otherwise only returns countries that match filter
  const countriesToShow = showAll ? countries : countries.filter(country => country.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)

  //event handler for filter input
  const handleFilterChange = (event) => {
    let  value = event.target.value
    value === '' ? setShowAll(true) : setShowAll(false)
    setFilterName(value)
  }

  return (
    <div>
      <FilterCountries {...{ handleFilterChange, filterName }} />
      <ListOfCountries {...{ countriesToShow, showAll, setFilterName }} />
    </div>
  )
}

export default App;
