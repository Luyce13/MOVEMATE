import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Login';
import DispComponents from './signUp';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{title: 'login'}}
        />
         <Stack.Screen
          name="signUp"
          component={DispComponents}
          options={{title: 'signup'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
