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
      <Text>Map ho ga yahan</Text>
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
            <Text>
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
    }
})
export default Mapdisp;
