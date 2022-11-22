import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login'
import Find from './Screens/Find'
import Authentication from './Screens/Authentication'
import Home from './Screens/Home'
import StudentList from './Screens/StudentList'
import ClassInformation from './Screens/ClassInformation'
import StudentInformation from './Screens/StudentInfomation'

const Stack = createStackNavigator();

 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name = "Login" component = {Login}/>
         <Stack.Screen name = "Find" component = {Find}/>
         <Stack.Screen name = "Authentication" component = {Authentication}/>
         <Stack.Screen name = "Home" component = {Home}/>
         <Stack.Screen name = "StudentList" component = {StudentList}/>
         <Stack.Screen name = "ClassInformation" component = {ClassInformation}/>
         <Stack.Screen name = "StudentInformation" component = {StudentInformation}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
