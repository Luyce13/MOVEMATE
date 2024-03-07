import React, {useState} from 'react';
import HomePage from './Home';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Perform login logic here, including JWT authentication
      const response = await fetch('http://192.168.18.164:4567/movemate/logIn ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      }).then(res => {
        res.json().then(result => {
          console.log(result, ' resultttt');
        });
      });

      // Handle JWT token received in the response
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appname}>Movemate</Text>
      <Text style={styles.tagline}>Your tag line goes here</Text>
      {/* Username */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    alignItems: 'center',
  },
  appname: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'lightgreen',
    marginBottom: 10,
  },
  input: {
    marginVertical: 10,
    padding: 13,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    width: '70%',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'lightgreen',
    borderRadius: 25,
    width: '40%',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  tagline: {
    textAlign: 'center',
    marginTop: 20,
    color: 'grey',
  },
});

export default LoginScreen;
