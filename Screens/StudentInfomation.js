import {View, TextInput, Text, Button} from 'react-native'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState,useEffect} from 'react'


const StudentInformation = (props) => {
    const {params} = props.route
    const stuID = params? params.stuID:null;

    const [Question, SetQeustion] = useState();
    const [flag,setFlag] = useState(true);


    var sortJSON = function(data, key, type) {
        if (type == undefined) {
          type = "asc";
        }
        console.log("data : ", data)
        return data.sort(function(a, b) {
          var x = a[key];
          var y = b[key];
          if (type == "desc") {
            return x > y ? -1 : x < y ? 1 : 0;
          } else if (type == "asc") {
            return x < y ? -1 : x > y ? 1 : 0;
          }
        });
      };

    const readfromDB = async () => {
        try{
            const data = await getDocs(collection(db, "question"))
            let itemList = []
            data.docs.map( 
                (doc) => {itemList.push(doc.data())})
            SetQeustion(sortJSON(itemList,"question_id"))

            // SetQeustion(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        } catch(error) {
            console.log(error.message)
        }
    }
    if(flag){
        readfromDB()
        setFlag(false)
    }

    const showReport = () => {
        let show;
        if (stuID == "001") {
            show = <Text>hi</Text>
        }
        return(show);
    }

    
      
    return (
        <View>
            <Text>{stuID}</Text>
            {showReport()}
            {Question?.map((item, idx) => {
                return(
                    <View>
                        <Text>{item.question_id} {item.main_question}</Text>
                        <Text>-------------------------------------------------------</Text>
                    </View>
                )
            })}
        </View>
    );
}

export default StudentInformation