import React from 'react';
import {Settings, StyleSheet, Text, View,} from 'react-native';
import LoginScreen from './Login';
import Signup from './signUp';
import Home from './Home';
import { create } from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import SettingsPage from './Settings';

// const Tab = createBottomTabNavigator();


function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Monday" component={Home} />
    //     {/* ...add other screens similarly */}
    //   </Tab.Navigator>
    // </NavigationContainer>
<Home/>
  );

  
  
}
export default App;
 
// const style =StyleSheet.create({

// });
// function createBottomTabNavigator() {
//   throw new Error('Function not implemented.');
// }

