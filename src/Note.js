import React from 'react';
import { useState } from 'react';

let boo1 = false;
let boo2 = false;
let edit = false;

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
            <input onFocus={() => {if(edit === true){boo1 =  true}}} onChange={getTitleInput} value={boo1 ? titleInput : title} placeholder='Title'/>
            <textarea onFocus={() => {if(edit === true){boo2 =  true}}} onChange={getTextInput} value={boo2 ? textInput : text} placeholder='Enter some text here'/>
            <div className='button-container'>
                <button onClick={() => handleDelNote(id)}>Delete</button>
                <button className='edit-btn' onClick={() => {
                    edit = !edit;

                    if(edit === true)
                    {
                        setTitleInput(title);
                        setTextInput(text);
                    }

                    if(edit === false)
                    {
                        boo1 = false;
                        boo2 = false;
                    }

                    console.log( edit + ' ' + boo1 + ' ' + boo2);

                    if(edit === false && boo1 === false && boo2 === false)
                    {
                        handlePrintId(id, titleInput, textInput)
                    }

                    
                }}>{edit ? 'Save' : 'Edit'}</button>
            </div>
        </div>
    ); 
}
