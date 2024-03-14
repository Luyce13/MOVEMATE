
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false); //handling  email err
  const handleLogin = async () => {
    try {
      if (!emailErr) {
        setEmailErr(true);
      }
      if (!emailErr) {
        return false;
      }
      console.warn('istoppp gee ruko jara sbarr taroo ');

      // Perform login logic here, including JWT authentication
      await fetch('https://movemate.vercel.app/logIn ', {
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
     <Image
        source={require('./images/bus.jpg')} // Change the path accordingly
       style={styles.img}
      />
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
      {emailErr ? <Text>apni email btawo gee , asshhy kashy </Text> : null}
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
    color: 'rgba(4, 222, 78, 1)',
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
    padding: 18,
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
  img:{
    width:120,
    height:120,
    borderRadius:40,
    marginTop: 30,
    resizeMode:"contain"

  }
});

export default LoginScreen;
