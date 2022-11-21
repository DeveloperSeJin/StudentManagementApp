import {View, Text, Button, Image, TouchableOpacity, Touchable, StyleSheet, SliderComponent} from 'react-native'
import Score from '../assets/Score.png'
import MyStudent from '../assets/MyStudent.png'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'
import TestList from './TestList'
import Home from './Home'

const GradedQuestionList = (props) => {
    return (
        <View
            style = {styles.LoginLocation}>
            <Text>NAME</Text>
            <Text>CLASS AND STUDENTS</Text>
            
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("TestList")
                    }}>
                <Text
                    Go to TestList
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

export default GradedQuestionList