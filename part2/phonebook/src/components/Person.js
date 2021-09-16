import React from 'react'

const Person = ({ person, deletePerson }) => {
    return (
        <li style={{ listStyleType: "none" }}> 
            {person.name} {person.number} 
            <button onClick={() => deletePerson(person)}>delete</button>
        </li>
    )
}

export default Person