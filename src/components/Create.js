import React, { useContext, useState } from 'react';
import firebase from '../utils/firebaseConfig';
import './style/Create.css';
import { uidContext } from './uidContext';

export default function Create() {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const uid = useContext(uidContext);

    const createQuote = () =>{
        const quotesDB = firebase.database().ref("quotesDataBase");
        const quote = {
            uid:uid,
            author:author,
            text:text
            
        };
        setAuthor('');
        setText('');
        //then we reset our elements
        quotesDB.push(quote);
        //send the data to firebase
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
                    <button onClick={createQuote}>Create Quote</button>
                </div>
            </div>
        </div>
    )
}
