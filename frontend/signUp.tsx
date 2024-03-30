import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Switch
} from 'react-native';

const Signup = () => {
  
 

 
  //   try {
  //     // Send sign-up request to backend API
  //     const response = await fetch('https://movemate.vercel.app/signUp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 
  //         'application/json'
  //       },
  //       body:JSON.stringify({email,})
  //     });

  //     if (!response.ok) {
  //       throw new Error('Sign-up failed');
  //     }

  //     // Handle successful sign-up, e.g., show success message, navigate to login screen
  //     console.log('Sign-up successful');
  //   } catch (error) {
  //     // setError(error.message);
  //   }
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const Savedata =  async ()  =>{
  console.warn(email, password);
  const url = "https://movemate.vercel.app/signUp"
 const result =  await fetch(url , {
   method :"POST",
   headers:{
    "Content-Type": "application/json",

   },
   body:JSON.stringify({email,password})
 })
 } 
  return (
    // <View>
      
    //   <View style={{alignItems: 'center'}}>
    //     <Text style={style.heading}>Sign UP</Text>
    //     <Text style={{fontSize: 20, padding: 10}}>
    //       {' '}
    //       sign up to track your bus
    //     </Text>
    //   </View>
    //   <View style={{marginTop: 40, marginLeft: 35}}>
    //     <TextInput placeholder="username " style={style.input}  />
    //     <TextInput placeholder="Password " style={style.input} />
    //     <TextInput placeholder="Confirm password " style={style.input} />
    //     <TextInput placeholder="Phone number " style={style.input} />
    //     <TextInput placeholder="session" style={style.input} />
    //   </View>
    //   <View>
    //     <TouchableOpacity onPress={handleSignUp}>
    //       <Text style={style.buttonText}> Sign Up</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //     <Text style={style.footer}> Already habe account ?  </Text>
    //     <Text style={style.loginOpt} >Login</Text>
    //   </View>
      
    // </View>
    
    <View>
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

      <TouchableOpacity onPress={Savedata} >
<Text style={style.buttonText}> Click  Me 🥵</Text>
      </TouchableOpacity>
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
  
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgba(235, 47, 6, 0.83)',
    borderRadius: 25,
    width: '40%',
    padding: 18,
    alignItems: 'center',
  },
 
});
export default Signup;
