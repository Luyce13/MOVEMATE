import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function SwitchLoginScreen(props:any) {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={[style.container]}>
      <View style={[style.textInput]}>
        <TouchableOpacity
          style={{
            backgroundColor:
              selectedTab == 0 ? 'rgba(235, 47, 6, 0.83)' : 'white',
            width: '30%',
            height: '100%',
            borderRadius: 50,
          }}
          onPress={() => setSelectedTab(0)}>
          <Text style={style.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              selectedTab == 1 ? 'rgba(235, 47, 6, 0.83)' : 'white',
            width: '30%',
            height: '100%',
            borderRadius: 50,
          }}
          onPress={() => setSelectedTab(1)}>
          <Text style={style.text}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',

    
  },
  textInput: {
    borderColor: 'rgba(235, 47, 6, 0.83)',
    borderWidth: 0.4,
    textAlign: 'center',
    borderRadius: 50,
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    padding: 2,
    backgroundColor: 'White',
    elevation: 2,
  },
 
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
export default SwitchLoginScreen;
