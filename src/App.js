import './App.css';
import firebase from './utils/firebaseConfig';
import {React, useEffect, useState} from 'react';
import Main from './components/Main';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//stylesFirebaseAuth to styling the page, buttons
import  {uidContext} from './components/uidContext';

const App = () => {
  const [isItConnected, setIsItConnected] = useState(false);
  const [uid, setUid] = useState(null);


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
      setIsItConnected(!!user);
      //(!!user) -> turn user into a boolean with !! which becomes true 'exclamation point'.
      // !! (exclamation point) : transform in true
      setUid(user.uid)
      //Importnant -> here we have passed the user's unique id of our user
      console.log(user)
    });
  },[]);
  return (
    <>
    <uidContext.Provider value={uid}></uidContext.Provider>
      <div className="App">
      {isItConnected ? <Main/> : 
          <div className='login-page'>
            <h1 className='title-login'> REACT QUOTES</h1>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />   
              {/* StyleFirebaseAuth to style the buttons -> from the doc */}
          </div>}
      </div>
    </>
  );
}

export default App;
