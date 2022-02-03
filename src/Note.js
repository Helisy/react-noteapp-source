import React from 'react';
import { useState, useEffect } from 'react';

var boo1 = false;
var boo2 = false;

export default function Note({id, title, text, handleDelNote, handlePrintId}) {

    const [titleInput, setTitleInput] = useState('');
    const [textInput, setTextInput] = useState('');

    

    const getTitleInput = (event) =>
    {
        setTitleInput(event.target.value);
    }

    const getTextInput = (event) =>
    {
        setTextInput(event.target.value);
    }

        /*setInterval(() => {
            
        }, 1000);*/

        //handlePrintId(id, titleInput, textInput);

    return(
        <div className='note-body'>
            <input onFocus={()=> boo1 = true} onChange={getTitleInput} value={boo1 ? titleInput : title} placeholder='Title'/>
            <textarea onFocus={()=> boo2 = true} onChange={getTextInput} value={boo2 ? textInput : text} placeholder='Enter some text here'/>
            <button onClick={() => handleDelNote(id)}>Delete Note</button>
            <button onClick={() => {
                boo1 = false;
                boo2 = false;
                handlePrintId(id, titleInput, textInput)
            }}>Save</button>
        </div>
    ); 
}
