import {View, Text, Image, TouchableOpacity, Touchable, StyleSheet, SliderComponent} from 'react-native'
import Score from '../assets/Score.png'
import MyStudent from '../assets/MyStudent.png'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'

const MainQuestion1 = (props) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={Answer}
                onChangeText={(text) => setAnswer(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="Submit"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
            />
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("StrategyA")
                    }}>
                <View style = {styles.Strategy}>
                    <Text>Write an equation to solve the problem</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("StrategyB")
                    }}>
                <View style = {styles.Strategy}>
                    <Text>Add on the shipping fee until I get to $85,75.</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("StrategyC")
                    }}>
                <View style = {styles.Strategy}>
                    <Text>Subtract away from $85,75 until I get to O.</Text>
                    </View>        
            </TouchableOpacity>
                    </View>
    );
}

const [AnswerValid, setAnswerValid] = useState(false);
const AnswerChangeHandler = (text) => {
  if (text.trim().length === 0) {
    setTitleValid(false);
  } else {
    setTitleValid(true);
  }
  setTitle(text);
};

return (
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => AnswerHandler(text)}
          />
               {!titleValid && <Text>정답을 입력해 주세요.</Text>}
)

const styles = StyleSheet.create({
    Question: {
      height:"25%",
      fontSize:25,
      flex:1
    },
  });

export default MainQuestion1