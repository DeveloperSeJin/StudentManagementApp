import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login'
import Find from './Screens/Find'
import Authentication from './Screens/Authentication'
import Home from './Screens/Home'

const Stack = createStackNavigator();

 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen name = "Login" component = {Login}/>
         <Stack.Screen name = "Find" component = {Find}/>
         <Stack.Screen name = "Authentication" component = {Authentication}/>
         <Stack.Screen name = "Home" component = {Home}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
