import './App.css';
import React from 'react';
import NoteContainer from './NoteContainer';
import { useState, useEffect } from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {

  const [notes, setNotes] = useState([

  ]);

  useEffect(() => 
  {
    const savedNotes = JSON.parse(localStorage.getItem('react-note-app-data-#'));
    if (savedNotes)
    {
      setNotes(savedNotes);
    }


  }, []);

  useEffect(() => {
    localStorage.setItem('react-note-app-data-#',
      JSON.stringify(notes)
    );
  }, [notes]);

const addNote = () =>
{
  const newNote = {
    id: getRandomInt(0, 10000),
    title: '',
    text: ''
  }

  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const deleteNote = (id) =>
{
  const newNotes =  notes.filter((note) => note.id !== id);
  setNotes(newNotes);
  console.log("note deleted")
}

const printId = (id, title, text) =>
{
  const newNotes =  notes.filter((note) => note.id === id);
  newNotes.title = title;
  newNotes.text = text;

  notes.forEach(note => {
    if(note.id === id)
    {
      note.title = newNotes.title;
      note.text = newNotes.text;
      console.log(note)
    }
  });

  setNotes([...notes]);

  console.log(id)
}

  return (
    <>
    <button onClick={addNote} className='add-btn'>Add Note</button>
    <NoteContainer notes={notes} handleDelNote={deleteNote} handlePrintId={printId}/>
    </>
  );
}

export default App;


/*
    {
    id: getRandomInt(0, 10000),
    title: 'First Note of my life',
    text: 'I swear that this note is te FIRST note of my whole life!'
    },
    {
        id: getRandomInt(0, 10000),
        title: 'Explosion?',
        text: 'Does the creeper explode or implode?'
    },
    {
        id: getRandomInt(0, 10000),
        title: 'UwU',
        text: 'I love h...'
    },
    {
        id: getRandomInt(0, 10000),
        title: 'Ababau',
        text: 'NO!, Abaurepipe!'
    },
    {
        id: getRandomInt(0, 10000),
        title: 'Ok..',
        text: 'i konow that'
    }
*/
