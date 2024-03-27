
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
  // const [emailErr, setEmailErr] = useState(false); //handling  email err
  const handleLogin = async () => {
    try {
      // if (!emailErr) {
      //   setEmailErr(true);
      // }
      // if (!emailErr) {
      //   return false;
      // }
      // console.warn('istoppp gee ruko jara sbarr taroo ');

    
      // const [isFocused, setIsFocused] = useState(false);

      // const handleFocus = () => {
      //   setIsFocused(true);
      // };
    
      // const handleBlur = () => {
      //   setIsFocused(false);
      // };
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
      <Text style={styles.tagline}>Aag Lgy universe-city main , </Text>
      {/* Username */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
        
      />
      {/* {emailErr ? <Text>apni email btawo gee , asshhy kashy </Text> : null} */}
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
      <TouchableOpacity >
        <Text style={styles.signp}>SignUp krna hy to krein lein !!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 130,
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
    marginTop: 5,
    color: 'grey',
    margin:5
  },
  img:{
    width:120,
    height:120,
    borderRadius:40,
    resizeMode:"contain"

  },
  signp:{
    fontSize:16,
    color:"green",
    marginTop:10
  }
});

export default LoginScreen;
