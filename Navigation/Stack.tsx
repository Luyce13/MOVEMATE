import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Ghar from './ghar';
import Park from './park';
import Uni from './uni';
// import Ghar from './ghar';
// import Uni from './uni';
// import Park from './park';

const Stack = createNativeStackNavigator();

export default function Apa() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ghar'  
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
        <Stack.Screen name="Home" component={Ghar} options={{title:"MEra Ghar😘"}} />
        <Stack.Screen name="Fun" component={Park}  options={{title:"PArkkk🙄"}} />
        <Stack.Screen name="Study" component={Uni}   options={{title:"Uniiii😫"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// function Kuto() {
//   return(
//     <View>
//       <Text>kuto kamino 😫😘</Text>
//     </View>
//   )
// }
// function Veeni() {
//   return(
//     <View>
//       <Text>
//         MEla veenu 😚😛
//       </Text>
//     </View>
//   )
// }

// function Bhalu() {
//   return(
//     <View>
//       <Text>AAlllluuuu motaaa bhaluuuuu veeniii😪😽</Text>
//     </View>
//   )
// }