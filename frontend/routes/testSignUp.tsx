import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode'; // For decoding JWT tokens

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Make API call to sign up user
      const response = await fetch('YOUR_SIGNUP_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store JWT token in AsyncStorage
        await AsyncStorage.setItem('jwtToken', data.token);
        
        // Decode JWT token to get user data
        // const decodedToken = jwt_decode(data.token);

        // Navigate to another screen or perform desired action
        // For example, navigate to a home screen
        // navigation.navigate('Home');
      } else {
        // Handle signup error
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
