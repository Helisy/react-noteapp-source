import React from 'react';

export default function note({id, title, text, handleDelNote}) {
    return(
        <div className='note-body'>
            <input defaultValue={title}/>
            <textarea defaultValue={text}placeholder='Enter some text here'/>
            <button onClick={() => handleDelNote(id)}>Delete Note</button>
        </div>
    ); 
}
