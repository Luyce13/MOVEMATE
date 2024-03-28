
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';



function HomePage() {
  return (
 
    <View style={style.container}>
      
     
      {/* <Text> Welcome home </Text> */}
      <DispTime />
      <View style={style.row}>
        <Notification />
        <Schedule />
      </View>
      <View style={style.row}>
        <Search />
        <Settings />
      </View>
    </View>
  );
}

function DispTime() {
  return (
    <View style={style.TopContainer}>
      {/* <Image
        source={require('./images/bus.jpg')} 
       style={style.img}
      /> */}
      <Image
        source={require('./images/busslider2.jpg')} 
       style={style.img}
      />
      {/* <Text style={style.Centertext}> Bus number will be displayed here</Text>
      <Text style={style.Centertext}> Time will be displayed here </Text>
      <Text style={style.Centertext}> Time will be displayed here </Text> */}
    </View>
  );
}

function Schedule() {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity style={style.ButtonsLeft}>
      {/* <Text style={{ textAlign: "center" }}>Schedule</Text> */}
      <MaterialIcons name= "schedule" style={style.icons}/> 
     </TouchableOpacity>  //style = {isHovered?style.onHover:style.ButtonsRight}
  );
}

function Search() {
  return (
    <TouchableOpacity style={style.ButtonsLeft}>
      {/* <Text style={{ textAlign: "center" }}>Search</Text> */}
      <FontAwesome name= "search"  style = {style.icons}/>
    </TouchableOpacity>
  );
}

function Notification() {
  return (
    <TouchableOpacity style={style.ButtonsLeft}>
      {/* <Text style={{ textAlign: "center" }}>Notification</Text> */}
      <Ionicons name ="notifications" style = {style.icons}/>
    </TouchableOpacity>
  );
}

function Settings() {
  return (
    <TouchableOpacity style={style.ButtonsRight } >
      {/* <Text style={{ textAlign: "center" }}>Settings</Text> */}
      <Ionicons name ="settings-sharp" style = {style.icons}/>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  
  container: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 780
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  ButtonsLeft: {
    backgroundColor: 'rgba(128, 255, 171, 0.39)',
  
    width: 100,
    height: 100,
    borderRadius: 50,
    textAlign: 'center',
    marginTop: 10,
    marginRight: 10,
    justifyContent: 'center',
    marginLeft: 50,
    shadowColor: "green",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // elevation:1,
    // shadowOpacity:100
    
    
  },
  ButtonsRight: {
    backgroundColor: 'rgba(128, 255, 171, 0.39)',
    width: 100,
    height: 100,
    borderRadius: 50,
    textAlign: 'center',
    marginTop: 10,
    marginRight: 10,
    justifyContent: 'center',
    marginLeft: 50,
    borderColor: "green",
    borderWidth:1
    
  },

  TopContainer: {
  
    padding: 10,
    height: 250,
    marginBottom: 10,
    width: 400,
   
  
    
  },
  Centertext: {
    textAlign: 'center',
  },
  img:{
   width:380,
   height:200,
  
  },
  icons:{
    color : "green",
   textAlign:"center",
   fontSize:60
  },
  onHover:{
    backgroundColor:"green",
    color:"white",

  }
});

export default HomePage;
