import React from 'react'
import Person from './Person'

const Persons = ({ personsToShow, deletePerson }) => {
    return (
        <>
        {personsToShow.map(person => 
            <Person key={person.name} {...{ person, deletePerson }} />
        )}
        </>
    ) 
}

export default Persons