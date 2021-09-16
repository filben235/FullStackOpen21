import React, { useState, useEffect } from 'react'

//axios requests
import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  //useEffect is only called after first render
  useEffect(() => {
    personService
      //gets all persons from db adn updates persons array with new values
      .getAll()
      .then(response => {
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

  //handles adding a new person
  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    //if person doesn't already exist, add to db
    if (!persons.some(person => person.name === newName)) {

      //adds person to persons db and updates persons array which rerenders list
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    } 
    //if person already exists, let user update persons phone number
    else {
      
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
        const personToUpdate = persons.find(person => person.name === newName )
        
        personService
          .update(personToUpdate.id, personObject)
          .then(returnedPersonObject => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPersonObject))
          })
      }
    }
    setNewName('')
    setNewNumber('')
  }


  //deletes person from db and gets new list of persons 
  const deletePerson = id => {
    personService
      .remove(id)
      .then( () => {
        console.log(`person with id ${id} was removed`)

        personService
          .getAll()
          .then(response => {
            console.log('after deletion persons db looks like: ', response.data)
            setPersons(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })    
  }
  

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    let  value = event.target.value
    //shows all persons if no filter is used
    value === '' ? setShowAll(true) : setShowAll(false)
    setFilterName(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter {...{ handleFilterChange, filterName }} />
      <h2>add a new</h2>
      <PersonForm {...{ addPerson, handleNameChange, newName, handleNumberChange, newNumber }} />
      <h2>Numbers</h2>
      <Persons {...{ personsToShow, deletePerson }} />
    </div>
  )
}

export default App