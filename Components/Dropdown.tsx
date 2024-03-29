import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TestHome from './Testhome';
import LoginScreen from '../Login';
import Flex from './FlexTest';
import {View , Text, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../Home';
import { NavigationContainer } from '@react-navigation/native';

 
const Drawer = createDrawerNavigator();
const Drop = () => {
    //yahan hum onclick py aik kuch likhein gy jis sy sidebar open hogi
    return (
  <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginScreen">
     

        <Drawer.Screen name="Flex" component={Flex} />
        <Drawer.Screen name="Home" component={HomePage} />
      
      </Drawer.Navigator>
  
      </NavigationContainer>
    )
    
  };
  export default Drop;