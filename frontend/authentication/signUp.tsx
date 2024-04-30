import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Switch,
} from 'react-native';
import SwitchLoginScreen from './Switch';
function DispComponents(props:any){
  return(
    <View style={{flex:1,}}> 
   <AppName/>
      <Signup/>
    </View>
  )
}
const Signup = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[session , setSession] = useState('');
  const [phoneNo , setPhoneNo] =useState("");

  const Savedata = async () => {
    
    console.warn(email, password);
    try {
      const url = 'https://movemate.vercel.app/signUp';
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password ,}),
      }).then(res => {
        res.json().then(async result => {
          console.log(result, ' token' );
         
        
        });
      });
    } catch (error) {
      console.warn("kuch to grr bar ho r " ,error);
    }
  };
  return (
   

    <View style={style.container}>
     <SwitchLoginScreen/>
      <TextInput
        placeholder="Email btawooo jldiii 🐱‍👤"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
        style={style.input}
      />

      <TextInput
        placeholder="Password chupa k likhna 👀✔"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={style.input}
      />
      
      <TextInput
        placeholder="Session kon sa hy sir😪😌"
        value={password}
        onChangeText={text => setSession(text)}
        secureTextEntry
        style={style.input}
      />
      
      <TextInput
        placeholder="Phone Number likho 🔫😉"
        value={password}
        onChangeText={text => setPhoneNo(text)}
        secureTextEntry
        style={style.input}
      />

      <TouchableOpacity onPress={Savedata} style={style.button}>
        <Text style={{fontWeight:"bold", fontSize:16 , color:"white"}}> SignUp </Text>
      </TouchableOpacity>
    </View>
  );
};
function AppName(){
  return(
    <View>
       <Text style={style.appname}>Movemate</Text>
      <Text style={style.tagline}>Aag Lgy universe-city main , </Text>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",

  
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
    elevation:3,
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
    marginTop: 35,
  },
  loginOpt: {
    color: 'green',
    marginLeft: 310,
  },
  button:{
    marginTop: 20,
    backgroundColor: 'rgba(235, 47, 6, 0.83)',
    borderRadius: 25,
    width: '40%',
    padding: 18,
    alignItems: 'center',
    elevation:2
  },
  appname: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'rgba(235, 47, 6, 0.83)',
    marginBottom: 10,
  },
  tagline: {
    textAlign: 'center',
    marginTop: 5,
    color: 'grey',
    margin:5
  },
});
export default DispComponents;
