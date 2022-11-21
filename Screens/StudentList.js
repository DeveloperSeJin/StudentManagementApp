import {View, TextInput, Text, Button} from 'react-native'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState,useEffect} from 'react'
import { TouchableOpacity } from 'react-native-web';

const StudentList =  (props) => {
    const [studentInfo, SetStuentInfo] = useState();
    const [flag,setFlag] = useState(true);



    const readfromDB = async () => {
        try{
            const data = await getDocs(collection(db, "student"))
            SetStuentInfo(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        } catch(error) {
            console.log(error.message)
        }
    }
    if(flag){
        readfromDB()
        setFlag(false)
    }

    return (
        <View>
            {studentInfo?.map((item, idx) => {
                return(
                    <TouchableOpacity key = {idx}
                        onPress = { ()=>{
                            props.navigation.navigate("StudentInformation"
                            , {stuID : item.studentid})
                        }}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

export default StudentList;