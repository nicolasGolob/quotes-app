import React, { useState } from 'react';
import firebase from '../utils/firebaseConfig'

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
    }

    return (
        <div>
            
        </div>
    )
}
