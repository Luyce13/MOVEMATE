import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';

const Ghar = (props: any) => {
  return (
    <View>
      <Text style={style.text}>Ghar hoon is wkt 😋</Text>
      <TouchableOpacity
        style={{backgroundColor: 'purple', width: 180, height: 40}}
        onPress={() => props.navigation.navigate('Fun')}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Chl yr park chlll 🙈
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Ghar;
