import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function SplashScreen(props:any) {
  return (
    <View style={{flex:1, justifyContent:"center" ,alignItems:"center"}}>
           <Text style={style.appname} onPress={()=>props.navigation.navigate("Home")}>Movemate</Text>
      <Text style={style.tagline}>Aag Lgy universe-city main , </Text>

        
              <Image
        source={require('/Users/user/Desktop/test/MovemateTestApp/test/images/busslider.png')}
       />
            
         
    </View>
  );
}
const style=StyleSheet.create({
    appname: {
        fontSize: 47,
        fontWeight: 'bold',
        color: 'rgba(260, 42, 3, 0.70)',
       
      },
      tagline: {
        textAlign: 'center',
        marginTop: 5,
        color: 'grey',
        fontSize:15
      },
})
export default SplashScreen;
