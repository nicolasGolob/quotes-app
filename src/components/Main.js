import React from 'react';
import firebase from '../utils/firebaseConfig';

export default function Main() {
    return (
        <>
            <nav>
                <h1>Hi There</h1>
                <h4>Bonjour {firebase.auth().currentUser.displayName}</h4>
                {/* firebase google doc */}
                <button onClick={()=>firebase.auth().signOut()}>Disconnect</button>
            </nav>
        </>
    )
}
