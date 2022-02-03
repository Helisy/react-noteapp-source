import React from 'react';
import Note from './Note.js';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

export default function NoteContainer({notes, handleDelNote, handlePrintId}) {
    return(
        <div className='NoteContainer'>
            {notes.map((note) => (
               <Note key={getRandomInt(0, 10000)} id={note.id} title={note.title} text={note.text} handleDelNote={handleDelNote}
               handlePrintId={handlePrintId}/>
            ))}
        </div>
    );
}


