import {TouchableOpacity, Text, View, TextInput, Button} from 'react-native';
import {useState} from 'react';
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";


const SignUp = () => {
    const [flag,setFlag] = useState(true);
    const [ID, setID] = useState("");
    const [name, setName] = useState("");
    const [myClass, setClass] = useState("");
    const [password, setPassword] = useState("");
    const [studentInfo, setStudentInfo] = useState();
    
    const getAnswer = async() => {
        try{
            const data = await getDocs(collection(db, "student"))
            
            setStudentInfo(data.docs.map(doc=>(
                {...doc.data(), id: doc.id}
                )))
        } catch(error) {
            console.log(error.message)
        }
    }

    const changeID = (event) => {
        setID(event)
      }
    const changePassword = (event) => {
        setPassword(event)
    }
    const changeClass = (event) => {
        setClass(event)
    }
    const changeName = (event) => {
        setName(event)
    }  
    
    if (flag) {
        getAnswer()
    }

    const signupAccount = () => {
        let idList = []
        studentInfo?.map((item) => {
            idList.push(item.id)
        })
        if (idList.includes(ID)) {
            alert("이미 있는 아이디입니다.")
        } else {
            
        }
    }

    return (
        <View>
            <Text>enter your ID</Text>
            <TextInput
                value = {ID}
                onChangeText = {changeID}
            />
            <Text>enter your Password</Text>
            <TextInput
                value = {password}
                onChangeText = {changePassword}
            />
            <Text>enter your name</Text>
            <TextInput
                value = {name}
                onChangeText = {changeName}
            />
            <Text>enter your Class</Text>
            <TextInput
                value = {myClass}
                onChangeText = {changeClass}
            />
            <Button
                title = "signUp"
                onPress={signupAccount}
            />
        </View>
    );
}

export default SignUp