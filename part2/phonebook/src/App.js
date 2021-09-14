import React, { useState } from 'react'

const App = () => {

  //stores all persons in array
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  //used to keep track of input states
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  //used for filtering what people to show
  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()

    //checks if newPerson has already been added to persons array
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
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    let  value = event.target.value
    //sets setShowAll to true if filter input is  empty
    value === '' ? setShowAll(true) : setShowAll(false)
    console.log(value)
    setFilterName(value)
  }

  //returns all persons if showAll is true, otherwise only returns persons that match filter
  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1)

  return (
    <div>
      <h2>Phonebook</h2>
      <div> filter shown with <input onChange={handleFilterChange} value={filterName}/> </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div> name: <input onChange={handleNameChange} value={newName}/> </div>
        <div> number: <input onChange={handleNumberChange} value={newNumber}/> </div>
        <div> 
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <li key={person.name}> {person.name} {person.number}</li>
      )}
    </div>
  )
}

export default App