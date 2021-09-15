import React from 'react'

const FilterCountries = ({ handleFilterChange, filterName}) => {
    return (
      <div>Find countries <input onChange={handleFilterChange} value={filterName}></input></div>
    )
}

export default FilterCountries