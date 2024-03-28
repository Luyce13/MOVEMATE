import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function SettingsPage() {
  return (
    <View style={[style.container]}>
      <Text style={[style.text]}>Settings</Text>
      <AppInfo/>
    </View>
  );
}
function AppInfo() {
  return (
    <View>
      <TouchableOpacity>
        <MaterialIcons name="schedule" style={style.icons} />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    fontSize:40
  },
  text: {
    fontSize: 22,
  },
});
export default SettingsPage;
