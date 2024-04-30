
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TestHome from '../../routes/Testhome';
import LoginScreen from '../../authentication/Login';
import  {NativeStackNavigationProp}  from "@react-navigation/native-stack"



const Home = () => {

  return (
    <View style={{height: '100%', flexDirection: 'column' , marginTop:"1%"}}>
      <View style={style.busInfo}>
        <Text style={style.text}>BusInfo</Text>
        <BusInfo />
      </View>
      <View style={{flex: 2}}>
        <View style={[style.centerButtons]}>
          <Schedule />
          <Notification />
        </View>
        <Settings />
      </View>
      <View style={{flex: 1}}>
        <Search />
      </View>
    </View>
  );
};
function BusInfo() {
  return (
    <View style={{flex: 1 , justifyContent:"center",
    alignItems:"flex-end"}}>
      {/* <Image
        source={require('/Users/user/Desktop/test/MovemateTestApp/test/images/busslider.png')}
        style={style.img}></Image> */}
    </View>
  );
}
function Schedule({navigation}) {
 
  return (
    <View style={style.schedule}>
      <TouchableOpacity   onPress={ () =>navigation.navigate('Schedule')}> 
        {/* <MaterialIcons name="schedule" style={style.icons} /> */}
        <Text> Schedule </Text>
      </TouchableOpacity>
    </View>
  );
}
function Settings() {
  return (
    <View style={style.settings}>
      <TouchableOpacity>
        {/* <Ionicons name="settings-sharp" style={style.icons} /> */}
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
function Search() {
  return (
    <View style={style.search}>
      <TouchableOpacity>
        {/* <FontAwesome name="search" style={style.icons} /> */}
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

function Notification() {
  return (
    <TouchableOpacity style={style.notification}>
      {/* <Ionicons name="notifications" style={style.icons} /> */}
      <Text>Notification</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  busInfo: {
    flex: 1,
    backgroundColor: 'rgba(235, 47, 6, 0.83)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'rgba(85, 239, 196, 0.96)',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  icons: {
    fontSize: 40,
  },
  schedule: {
    backgroundColor: 'rgba(255, 221, 89, 1)',
    flex: 1,
    alignSelf: 'flex-start',
    height: 180,
    marginLeft: 15,
    marginTop: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'rgba(255, 221, 89, 1)',
  },
  settings: {
    backgroundColor: 'rgba(61, 193, 211, 1)',
    flex: 2.5,
    alignSelf: 'flex-start',
    width: 180,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'rgba(61, 193, 211, 1)',
  },
  notification: {
    backgroundColor: 'rgba(255, 77, 77, 1)',
    flex: 1,
    alignSelf: 'flex-start',
    height: 380,
    marginRight: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 25,
    elevation: 4,
    shadowColor: 'rgba(255, 77, 77, 1)',
  },
  centerButtons: {
    flex: 3,
    flexDirection: 'row',
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(85, 239, 196, 0.96)',
    flexDirection: 'row',
    height: 90,
    marginTop: 18,
    marginLeft: 10,
    marginRight: 10,
    elevation: 2,
    shadowColor: 'rgba(85, 239, 196, 0.96)',
  },
 
  
  settingParent: {
    flex: 1,
    backgroundColor: 'pink',
  },
  img: {
    height: 100,
    width: 120,
  },
});

export default Home;