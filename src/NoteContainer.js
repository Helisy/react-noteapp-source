import React from 'react';
import Note from './Note.js';

export default function NoteContainer({notes, handleDelNote}) {
    return(
        <div className='NoteContainer'>
            {notes.map((note) => (
               <Note key={note.id} id={note.id} title={note.title} text={note.text} handleDelNote={handleDelNote}/>
            ))}
        </div>
    );
}


