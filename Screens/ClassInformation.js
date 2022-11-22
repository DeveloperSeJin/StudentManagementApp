import { View, Dimensions, Text, } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'




const ClassInformation = () => {
    const [student, setStudent] = useState()
    const [answer, setAnswer] = useState()
    const [flag,setFlag] = useState(true);
    const [data, setData] = useState();

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
    
        let labelList = []
        let dataList = []
        student?.map((item) => {
            labelList.push(item.name)
            let score = 0
            answer?.map((doc) => {
                if (item.student_id === doc.student_id) {
                    if(doc.answer_check) {
                        score++;
                    }
                }
            })
            dataList.push(score)
        })
        console.log(labelList)
        console.log(dataList)
        setData({
            labels: labelList,
            datasets: [
              {
                data: dataList
              }
            ]
        })
    }

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }
    return (
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={data}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    );
  }
export default ClassInformation