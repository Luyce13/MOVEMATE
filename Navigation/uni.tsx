import React from "react";
import{ StyleSheet } from 'react-native'
import { Text, View } from "react-native";

const Uni =()=>{
return(
    <View>
        <Text style={style.text}>
            Uni hoon is wkt 😪
        </Text>
    </View>
)
}
const style = StyleSheet.create(
    {
        text:{
            fontSize:40,
            color:"red",
            justifyContent:"center",
            alignItems:"center"
        }
    }
)
export default Uni;