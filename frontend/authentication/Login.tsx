import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Switch,
} from 'react-native';
import SwitchLoginScreen from './Switch';

const LoginScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <AppName />

      <LoginForm />
    </View>
  );
};

function AppName() {
  return (
    <View style={styles.topComponent}>
      <Text style={styles.appname}>Movemate</Text>
      <Text style={styles.tagline}>Aag Lgy universe-city main , </Text>
    </View>
  );
}
// function LoginSwitch() {
// return(
//   <View style={{flex:0.9, justifyContent:"center", }}>
//   <SwitchLoginScreen/>
// </View>
// )

// }
function LoginForm(props:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      console.error('Login Error sss:', error);
    }
  };
  return (
    <View style={styles.form}>
      <SwitchLoginScreen />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  appname: {
    fontSize: 47,
    fontWeight: 'bold',
    color: 'rgba(235, 47, 6, 0.83)',
   
  },
  input: {
    marginVertical: 10,
    padding: 13,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 10,
    width: '70%',
    backgroundColor: 'white',
    textAlign: 'center',
    elevation: 3,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgba(235, 47, 6, 0.83)',
    borderRadius: 25,
    width: '40%',
    padding: 18,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  tagline: {
    textAlign: 'center',
    marginTop: 5,
    color: 'grey',
    fontSize:15
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 40,
    resizeMode: 'contain',
  },
  signp: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
  },
  form: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topComponent: {
    flex: 0.4,
    marginTop: '40%',
 
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
