import './App.css';
import React from 'react';
import NoteContainer from './NoteContainer';
import { useState } from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {

  const [notes, setNotes] = useState([

]);

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

  return (
    <>
    <button onClick={addNote} className='add-btn'>Add Note</button>
    <NoteContainer notes={notes} handleDelNote={deleteNote}/>
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
