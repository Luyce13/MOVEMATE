import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import SwitchFixedDaily from '../../reuseableComponents/dailyFixedSwitch';

function FixedProfile() {
  return (
    <View style={styles.container}>
      <UserInfo />
      <Search/>
      <SwitchFixedDaily/>
      <DispDetails/>
    </View>
  );

  
}

function UserInfo() {
  return (
    <View style={styles.userInfoContainer}>
      <Image
        style={styles.img}
        source={require('/Users/user/Desktop/test/MovemateTestApp/test/images/busslider.png')}
      />
      <Text style={styles.text}>Babya Bauf 🙈</Text>
    </View>
  );
}
function Search(){
    return(
<View>
    <TextInput placeholder='search' style={styles.search}/>
</View>

    )
}
function DispDetails(){
    return(
        <View style={{backgroundColor:"pink"}}>
            <Text>Bus number</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  userInfoContainer: {
    flex:0.14,
    marginTop:"15%",
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
  },
  img: {
    width: '40%',
    height: '100%',
  },
  text: {
    marginLeft: 10, // Add some margin between image and text
    borderWidth:1,
    borderColor:"red",
    padding:10,
    
    height:50
  },
  search:{
  marginLeft:50,
  textAlign:"right",
    borderWidth:1,
    borderColor:"red",
    marginTop:"10%",
    width:"70%"
  }
});

export default FixedProfile;
