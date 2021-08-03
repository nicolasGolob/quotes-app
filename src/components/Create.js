import React, { useState } from 'react';
import firebase from '../utils/firebaseConfig';
import './Create.css';

export default function Create() {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const createQuote = () =>{

        const quotesDB = firebase.database().ref("quotesDB");

        const quote = {
            author:author,
            text:text
        };
        setAuthor('');
        setText('');

        quotesDB.push(quote);
        //send the data to firebase

        setAuthor('');
        setText('');
        //then we reset our elements
    }
    return (
        <div className="create-container">
            <div className="create-form">
            <h3 className="create-title">Submit A Quote</h3>
                <div className="create-content">
                    <input 
                        type="text"
                        placeholder="Quote's Author"
                        value={author}
                        onChange={(event)=>setAuthor(event.target.value)}
                    />
                    <textarea
                        type="text"
                        placeholder="Quote's Text"
                        value={text}
                        onChange={(event)=>setText(event.target.value)}
                    />
                </div>
                <button onClick={createQuote}>Create Quote</button>
            </div>
        </div>
    )
}
