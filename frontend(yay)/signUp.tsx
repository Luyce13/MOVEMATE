import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

const Signup = () => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={style.heading}>Sign UP</Text>
        <Text style={{fontSize: 20, padding: 10}}>
          {' '}
          sign up to track your bus
        </Text>
      </View>
      <View style={{marginTop: 40, marginLeft: 35}}>
        <TextInput placeholder="username " style={style.input} />
        <TextInput placeholder="Password " style={style.input} />
        <TextInput placeholder="Confirm password " style={style.input} />
        <TextInput placeholder="Phone number " style={style.input} />
        <TextInput placeholder="session" style={style.input} />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={style.buttonText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={style.footer}> Already habe account ?  </Text>
        <Text style={style.loginOpt} >Login</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    marginLeft: 60,
    margin: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    width: 241,
    height: 48,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16, // Font size
    marginLeft: 150,
    marginTop: 40,
    backgroundColor: 'lightgreen',
    color: 'black',
    width: 120,
    height: 50,
    textAlign: 'center',
    borderRadius: 50,
    padding: 10,
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
    marginTop: 20,
  },
  heading: {
    fontSize: 40,
    color: 'lightgreen',
    fontWeight: 'bold',
    marginTop:35
  },
  loginOpt :{
  color : "green",
  marginLeft : 310,
  
  }
});
export default Signup;
