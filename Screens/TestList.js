import {View, Text, Button, Image, TouchableOpacity, Touchable, StyleSheet, SliderComponent} from 'react-native'
import Score from '../assets/Score.png'
import MyStudent from '../assets/MyStudent.png'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'
import MainQuestion from './MainQuestion1'
import MainQuestion from './MainQuestion2'
import MainQuestion from './MainQuestion3'
import MainQuestion from './MainQuestion4'
import MainQuestion from './MainQuestion5'
import MainQuestion from './MainQuestion6'
import MainQuestion from './MainQuestion7'
import MainQuestion from './MainQuestion8'

const TestList = (props) => {
    return (
        <View>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ManQuestion1")
                    }}>
                <View style = {styles.Question}>
                    <Text>1. Todd's Problem</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ManQuestion2")
                    }}>
                <View style = {styles.Question}>
                    <Text>2. Jen's Problem</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ManQuestion3")
                    }}>
                <View style = {styles.Question}>
                    <Text>3. Jennifer's Problem</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ManQuestion4")
                    }}>
                <View style = {styles.Question}>
                    <Text>4. Elena's Problem</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ManQuestion5")
                    }}>
                <View style = {styles.Question}>
                    <Text>5. Mario's Problem</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ManQuestion6")
                    }}>
                <View style = {styles.Question}>
                    <Text>6. Rectangle Problem</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ManQuestion7")
                    }}>
                <View style = {styles.Question}>
                    <Text>7. Jim's Problem</Text>
                    </View>        
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={ ()=>{
                        props.navigation.navigate("ManQuestion8")
                    }}>
                <View style = {styles.Question}>
                    <Text>8. Owen's Problem</Text>
                    </View>        
            </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    Question: {
      height:"25%",
      fontSize:25,
      flex:1
    },
  });

export default TestList