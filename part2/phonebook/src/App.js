import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  //array storing all persons
  const [ persons, setPersons ] = useState([])

  //used to keep track of input states
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  //boolean used for filtering
  const [showAll, setShowAll] = useState(true)

  //returns all persons if showAll is true, otherwise only returns persons that match filter
  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)

  //handles the form submit
  const addName = (event) => {
    event.preventDefault()

    //checks if newName has already been added to persons array
    if (!persons.some(person => person.name === newName)) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    let  value = event.target.value
    //sets setShowAll to true if filter input is  empty
    value === '' ? setShowAll(true) : setShowAll(false)
    setFilterName(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter {...{ handleFilterChange, filterName }} />
      <h2>add a new</h2>
      <PersonForm {...{ addName, handleNameChange, newName, handleNumberChange, newNumber }} />
      <h2>Numbers</h2>
      <Persons {...{ personsToShow }} />
    </div>
  )
}

export default App