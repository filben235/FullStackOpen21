import React, { useState } from 'react'

//renders buttons
const Button = ({ handleClick, text }) => 
  <button onClick={handleClick}>
    {text}
  </button>

//renders all statistics
const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral || bad) {
    return (
      <>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good + bad + neutral} />
        <StatisticLine text='average' value={(good - bad) / (good + bad + neutral)} />
        <StatisticLine text='positive' value={good / (good + bad + neutral)} />
      </>
    )
  } 
  return (
    <h3>No feedback given</h3>
  )
}


//renders one line of statistics
const StatisticLine = ({ text, value }) => <p> {text} {value} </p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() =>setGood(good + 1)} text='good' />
      <Button handleClick={() =>setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() =>setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics { ...{ good, neutral, bad } } />
    </div>
  )
}

export default App