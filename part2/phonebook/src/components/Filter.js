import React from 'react'

const Filter = ({ handleFilterChange, filterName }) => 
    <div> filter shown with <input onChange={handleFilterChange} value={filterName}/> </div>

export default Filter