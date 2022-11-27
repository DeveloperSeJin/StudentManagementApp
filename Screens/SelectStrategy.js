import {TouchableOpacity, Text, View, Button} from 'react-native';
import {useState} from 'react';
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";

const SelectStrategy = (props) => {
    const {params} = props.route
    const question_id = params? params.question_id:null;
    const stu_id = params?params.stu_id:null;
    const [strategy, setStrategy] = useState()
    const [flag,setFlag] = useState(true);

    const sortJSON = function(data, key, type) {
        if (type == undefined) {
          type = "asc";
        }
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
      const getStrategy = async() => {
        try{
            const data = await getDocs(collection(db, "strategy"))
            let itemList = []
            data.docs.map(
                doc => {
                    if (doc.data().question_id == question_id) {
                        itemList.push(doc.data())
                    }
                })
            setStrategy(sortJSON(itemList,"strategy_num"))
        } catch(error) {
            console.log(error.message)
        }
    }

    if(flag){
        getStrategy()
        setFlag(false)
    }
    
    // const showCheck = (id) => {
    //     if(strategyCheck.includes(id)){
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }

    return (
        <View>
            {strategy?.map((item, idx) => {
                if (item.question_id == question_id) {
                    return (
                        <TouchableOpacity
                            key = {idx}
                            // disabled = {showCheck(item.strategy_id)}
                            onPress={()=>{
                            props.navigation.navigate("Question", 
                            {strategy_id : item.strategy_id,
                             question_id : question_id,
                             stu_id:stu_id})
                        }}>
                            <Text>{item.strategy_num} </Text>
                            <Text>{item.strategy_content}</Text>
                            <Text>--------------------------</Text>
                        </TouchableOpacity>
                    )
                }
            })}
            <Button
                title = "go2Question"
                onPress={()=>{
                    props.navigation.navigate("StudentInformation", {
                        stuID : stu_id
                    })
                }}
            />
        </View>
    );
}

export default SelectStrategy