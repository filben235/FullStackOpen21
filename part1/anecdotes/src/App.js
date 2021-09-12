import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ({ anecdotes, selected, points }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <h3>{anecdotes[selected]}</h3>
      <h4>has {points[selected]} votes</h4>
    </>
  )
}

const HighestVoted = ({ highestVotedIndex, anecdotes, points }) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <h3>{anecdotes[highestVotedIndex]}</h3>
      <h4>has {points[highestVotedIndex]} votes</h4>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  //the currently selected anecdote's index
  const [selected, setSelected] = useState(0)
  //stores anecdote's number of votes
  const [points, setPoints] = useState(new Uint8Array(7))
  //index of the anecdote with most votes
  const [highestVotedIndex, setHighestVotedIndex] = useState(0)

  const handleVoteClick = () => {
    const tempArray = [...points]
    tempArray[selected] += 1
    setPoints(tempArray)

    if (points[selected] > points[highestVotedIndex]) setHighestVotedIndex(selected)
  }

  const handleNextClick = () => {
    let newNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(newNumber)
  }

  return (
    <div>
      <Anecdote { ...{ anecdotes, selected, points } } />
      <Button handleClick={handleVoteClick} text="vote"/>
      <Button handleClick={handleNextClick} text="next anecdote"/>
      <HighestVoted { ...{ highestVotedIndex, anecdotes, points } } />
    </div>
  )
}

export default App