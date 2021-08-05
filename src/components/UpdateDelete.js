import React, {useState} from 'react';
import firebase from '../utils/firebaseConfig';
import './UpdateDelete.css';

export default function UpdateDelete({item}) {
    //item -> passed in props with destructuring
    const [upDate, setUpdate]  = useState(false);
    //it's a boolean it's set to false
    const [authorUpdate, setAuthorUpdate] = useState(null);
    const [textUpdate, setTextUpdate] = useState(null);

    const updateItem = () =>{
        let quote = firebase.database().ref("quotesDataBase").child(item.id)
        //above, this is an method from firebase -> child take the props item and its id
        if(authorUpdate !==null){
            //quote corresponds to firebase above
            quote.update({
                //here update will be true
                author: authorUpdate
                //here author will take the value of the second state authorUpdate
            })
        }
        //and we reproduce exactly the same to text update
        if(textUpdate !==null){
            //firebase method
            quote.update({
                text: textUpdate
            })
        }
        setUpdate(false)
        //ah this moment all of this is false but when you click on the button setUpdate code at the bottom, everything goes to true + checking all elements
    }
    return (
        <li>
            {
                upDate === false &&(
                    <>
                    <div className="item--container"> 
                        <p>{item.text}</p>
                        <h6>{item.author}</h6>
                    </div>
                    <div className="button--container">
                        <button className="button--quote"onClick={()=>setUpdate(true)}>Update</button>
                        <button className="button--quote">Delete</button>
                    </div>
                    </>
                )
            } 
            {
                upDate &&(
                    <div className="item--container--update">
                        <textarea 
                            className="item--update"
                            defaultValue={item.text}
                            onChange={(event)=>setTextUpdate(event.target.value)} 
                        />
                        <input 
                            className="item--update"
                            defaultValue={item.author}
                            onChange={(event)=>setAuthorUpdate(event.target.value)} 
                        />
                        <button onClick={updateItem} >Validate Update</button>
                    </div>
                )
            }  
        </li>
    )
}
