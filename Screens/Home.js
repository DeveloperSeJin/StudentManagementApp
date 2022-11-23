import {View, Text, Button, Image, TouchableOpacity, Touchable, StyleSheet, SliderComponent} from 'react-native'
import Score from '../assets/Score.png'
import MyStudent from '../assets/MyStudent.png'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'

const Home = (props) => {
    const [student, setStudent] = useState()
    const [answer, setAnswer] = useState()
    const [flag,setFlag] = useState(true);
    var labelList = []
    var dataList = []
    var result = {};

    const getStudent = async () => {
        try{
            const data = await getDocs(collection(db, "student"))
    
            setStudent(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        } catch(error) {
            console.log(error.message)
        }
    }

    const getAnswer = async () => {
        try{
            const data = await getDocs(collection(db, "answer"))
    
            setAnswer(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        } catch(error) {
            console.log(error.message)
        }
    }

    if(flag){
        getStudent()
        getAnswer()
        setFlag(false)
    }

    const getScore = (id) => {
        var score = 0;
  
        answer?.map((doc) => {
          if (doc.student_id == id) {
            score++;
          }
        })
        dataList.push(score)
      }
      
      const getData = () => {
        student?.map((item) => {
            {labelList.push(item.name)}
            {getScore(item.studentid)}
          })
          
          result = {
            labels: labelList,
            datasets: [
              {
                data: dataList
              }
            ]
        }
        labelList = []
        dataList = []
      }

    return (
        <View
            style = {styles.LoginLocation}>
            <Text>NAME</Text>
            <Text>CLASS AND STUDENTS</Text>
            <TouchableOpacity
                    onPress={ async ()=>{
                        {await getData()}
                        props.navigation.navigate("ClassInformation", 
                        {data : result})
                    }}>
                <Image
                    style={{width:400,height:100}}
                    source={Score}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("StudentList")
                    }}>
                <Image
                    style={{width:400,height:100}}
                    source={MyStudent}
                    resizeMode="contain"
                />
            </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    LoginLocation: {
      width:'70',
      marginTop:200,
      marginLeft :200,
      marginRight:200,
      fontSize:25,
      padding:10
    },
  });

export default Home