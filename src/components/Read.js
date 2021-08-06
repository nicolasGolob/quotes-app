import React,{useState, useEffect} from 'react';
import firebase from '../utils/firebaseConfig';
import './style/Read.css';
import UpdateDelete from './UpdateDelete';

export default function Read() {
    
const [quoteList, setQuoteList] = useState([])
useEffect(()=>{
    //important -> useEffect each time the component is triggered this is activated
    const quotesDB = firebase.database().ref("quotesDataBase");
    quotesDB.on('value', (snapshot)=>{
        //doc -> firebase
        //snapshot -> takes a snapshot of the bbd at the time -> firebase.database.DataSnapshot to get data that are in the database from firebase
        //After we create an unique id to the datas
        let data = snapshot.val();
        let list = [];
        for(let id in data){
        //important -> use the loop 'for in' only with a table like 'list =[]'
            list.push({ id,...data[id]})
            //push -> The push() method adds elements to an array
            //and after you push this result in this empty new table 'data'
            //with the spread operator we take what is in the list and we incorporate an id
        }
        setQuoteList(list);
    })
},[])
//final use this empty table -> never forget the callback
    return (
        <div className="read-container">
            <ul>
                {
                    quoteList &&
                        quoteList.map((item, index)=>(
                        <UpdateDelete item={item} key={index} />
                    ))
                }
            </ul>
        </div>
    )
}
