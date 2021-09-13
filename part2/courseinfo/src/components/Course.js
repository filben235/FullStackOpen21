import React from 'react'

const Header = ({ name }) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  const Total = ({ parts }) => {
    const exercises = parts.map(part => part.exercises)
    return(
      <strong>total of {exercises.reduce((s, p) => s + p)} exercises</strong>
    ) 
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <>
        {parts.map(part => 
          <Part key={part.id} part={part} />
        )}
      </>
    )
  }
  
  const Course = ({ course }) => {
    return(
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }

  export default Course