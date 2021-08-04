import React, {useState} from 'react';
import firebase from '../utils/firebaseConfig';
import './Item.css';

export default function UpdateDelete({item}) {
    //item -> passed in props with destructuring
    const [upDate, setUpdate]  = useState(false);
    //it's a boolean it's set to false
    const [authorUpdate, setAuthorUpdate] = useState(null);
    const [textUpdate, setTextUpdate] = useState(null);
    const updateDelete = ()=>{
        let quote = firebase.database().ref("quotesDataBase").child(item.id)
        //above, this is an method from firebase
        if(authorUpdate !==null){
            //firebase method
            quote.update({
                author: authorUpdate
            })
        }
        //and we reproduce exactly the same for text update
        if(textUpdate !==null){
            //firebase method
            quote.update({
                text: textUpdate
            })
        }
        setUpdate(false)
        //once everything has been triggered it switches back to false
    }
    return (
        <li>
            {
                upDate === false &&(
                    <div className="item--section"> 
                        <p>{item.text}</p>
                        <h4>{item.author}</h4>
                    </div>
                )
            }   
        </li>
    )
}
