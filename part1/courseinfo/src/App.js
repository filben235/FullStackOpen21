import React from 'react'

//renders course name
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

//renders parts and their number of exercises
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1}/>
      <Part part={props.part2} exercise={props.exercises2}/>
      <Part part={props.part3} exercise={props.exercises3}/>
    </div>
  )
}

//renders name and number of one part
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

//renders total number of exercises
const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      {/* using destructuring to pass props */}
      <Content { ...{ part1, part2, part3, exercises1, exercises2, exercises3 } } />
      <Total { ...{ exercises1, exercises2, exercises3 } } />
    </div>
  )
}

export default App