import './App.css';
import firebase from './utils/firebaseConfig';
import {React, useEffect, useState} from 'react';
import Main from './components/Main'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//stylesFirebaseAuth to styling the page, buttons

const App = () => {
  const [isItConnected, setIsItConnected] = useState(false);

  const uiConfig = {
    //this object will be the config of our firebase, the entire code below is just a doc
    signInFlow : "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signInSuccess : () => false,
    },
  };
  //useEffect that we know well -> life cycle -> at page load, no need to didmount, is sufficient on its own
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      //connect user to firebase ->if we can connect the user
      //(!!user) -> turn user into a boolean with !! which becomes true 'exclamation point'.
      setIsItConnected(!!user);
      console.log(user)
    });
  },[]);

  return (
    <div className="App">
     {isItConnected ? <Main/> : 
        <div className='login-page'>
          <h1>React Crud</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />   
            {/* StyleFirebaseAuth to style the buttons -> from the doc */}
        </div>}
    </div>
  );
}

export default App;
