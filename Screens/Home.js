import {View, Text, Button, Image, TouchableOpacity, Touchable, StyleSheet} from 'react-native'
import Score from '../assets/Score.png'
import MyStudent from '../assets/MyStudent.png'

const Home = (props) => {
    return (
        <View
            style = {styles.LoginLocation}>
            <Text>NAME</Text>
            <Text>CLASS AND STUDENTS</Text>
            <TouchableOpacity
                    onPress={()=>{
                        props.navigation.navigate("ClassInformation")
                    }}>
                <Image
                    style={{width:400,height:100}}
                    source={Score}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>{
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