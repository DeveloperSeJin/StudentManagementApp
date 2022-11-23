import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'

const Database = () => {
    const [info, setInfo] = useState();
    var result = {};
    const readfromDB = async (table) => {
        try{
            const data = await getDocs(collection(db, table))
    
            result.push(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        } catch(error) {
            console.log(error.message)
        }
        return result;
    }
}