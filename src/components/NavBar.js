import React from 'react';
import firebase from '../utils/firebaseConfig';
import './style/NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar" >
			<div className="navbar-name">
                React Quotes
            </div> 
			<ul className="nav-links">
				<li className="nav-link">
                    <h4>Bonjour {firebase.auth().currentUser.displayName}</h4>
				</li>
                <li className="nav-disconnect">
                    <h4 onClick={()=>firebase.auth().signOut()}>Disconnect</h4>
                </li>
			</ul>
		</nav>
    )
}
