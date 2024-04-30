import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Schedule() {
  return (
    <View style={style.container}>
      <Text style={style.heading}>Schedule</Text>
      <Search />
    </View>
  );
}
function Search() {
  return( <TextInput placeholder="Search " style={style.search} >
     <Ionicons name="search" style={style.icon} />
  </TextInput>);
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 50,
    color: 'tomato',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
    letterSpacing: 5.5,
  },
  search: {
    borderWidth: 1,
    borderColor: 'tomato',
    flex: 0.05,
    width: '70%',
    marginLeft: '15%',
    borderRadius: 50,
    marginTop: '15%',

  },
  icon:{
     fontSize:30,
     color:"tomato"
  }
});
