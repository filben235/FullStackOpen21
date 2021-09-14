import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {

  //array of all notes
  const [notes, setNotes] = useState(props.notes)
  //to keep track of input change
  const [newNote, setNewNote] = useState('a new note...')
  //boolean that controls if all notes or only important notes are shown
  const [showAll, setShowAll] = useState(true)

  //adds the new note to notes array and sets input to ''
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  //updates value of newNote when input is changed
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  //handles if all notes should be rendered or only important ones
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}  
        />
        <button type="submit">save</button>
      </form> 
    </div>
  )
}

export default App