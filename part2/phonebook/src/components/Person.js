import React from 'react'

const Person = ({ person }) => {
    return (
        <li style={{ listStyleType: "none" }}> {person.name} {person.number}</li>
    )
}

export default Person