import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useState} from 'react';
import Student from '../assets/Student.png'

const StudentList = (props) => {
    const [StudentInfo, setStudentInfo] = useState(["aaa","bbb"]);

    return (
        StudentInfo.map((item,idx) => (
            <TouchableOpacity
            style = {styles.student}
            key = {idx}
            onPress={()=>{
                props.navigation.navigate("StudentInformation")
            }}>
                <Image
                    style={{width:400,height:100}}
                    source={Student}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        ))
    );
}

const styles = StyleSheet.create({
    student:{
        padding:5,
        alignItems:'center',
        width:'100%',
    },
})

export default StudentList