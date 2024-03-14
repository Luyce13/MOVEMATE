import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
function Mapdisp() {
  return (
    <View>
      <MapComponent />
      <Search/>
      <DispInfo/>
    </View>
  );
}
function MapComponent() {
  return (
    <View>
      <Text style={style.map}>Map ho ga yahan</Text>
      <Text></Text>
    </View>
  );
}
function Search() {
  return (
    <View>
      <TextInput
      style={style.search}
        placeholder="Search route"
        autoCapitalize="none"
        keyboardType="email-address"
      />
    </View>
  );
}
function DispInfo(){
    return(
        <View>
            <Text style={style.map}>
                data
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    search :{
        borderColor: "lightgreen",
        borderWidth:1,
        borderRadius : 50,
        width:300,
        textAlign:"center",
        margin: 40,
        marginLeft:70
    },
    map:{
      height: 100,
      borderColor: "green",
      borderWidth :3,
      marginTop:40,
      padding: 20,
      textAlign: "center"
    },

})
export default Mapdisp;
