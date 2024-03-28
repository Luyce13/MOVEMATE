import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Flex = () => {
  return (
    <View style={{height: '100%', flexDirection: 'column'}}>
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
    <View>
      <TouchableOpacity>
        <MaterialIcons name="schedule" style={style.icons} />
        <Ionicons name="reorder-three-outline" style={style.listIcon} />
      </TouchableOpacity>
    </View>
  );
}
function Schedule() {
  return (
    <View style={style.schedule}>
      <TouchableOpacity>
        <MaterialIcons name="schedule" style={style.icons} />
      </TouchableOpacity>
    </View>
  );
}
function Settings() {
  return (
    <View style={style.settings}>
      <TouchableOpacity>
        <Ionicons name="settings-sharp" style={style.icons} />
      </TouchableOpacity>
    </View>
  );
}
function Search() {
  return (
    <View style={style.search}>
      <TouchableOpacity>
        <FontAwesome name="search" style={style.icons} />
      </TouchableOpacity>
    </View>
  );
}

function Notification() {
  return (
    <TouchableOpacity style={style.notification}>
      <Ionicons name="notifications" style={style.icons} />
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  busInfo: {
    flex: 1,
    backgroundColor: 'rgba(235, 47, 6, 0.83)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  icons: {
    fontSize: 30,
  },
  schedule: {
    backgroundColor: 'rgba(255, 221, 89, 1)',
    flex: 1,
    alignSelf: 'flex-start',
    height: 180,
    marginLeft: 15,
    marginTop: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    backgroundColor: 'rgba(61, 193, 211, 1)',
    flex: 3,
    alignSelf: 'flex-start',
    width: 180,
   marginTop:20,
    marginLeft: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notification: {
    backgroundColor: 'rgba(255, 77, 77, 1)',
    flex: 1,
    alignSelf: 'flex-start',
    height: 380,
    marginRight: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 25,
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
    flexDirection:"row",
       height:50,
    marginTop: 10,
    marginLeft:10,
    marginRight:10
  },
  listIcon: {
    alignSelf: 'flex-start',
    fontSize: 30,
  },
  settingParent: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
export default Flex;
