import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

//Main home component hega
function TestHome(): JSX.Element {
  const Mode = useColorScheme() === 'light';
  return (
    <View style={style.container}>
      <View style={style.verticalContainer}>
        <Text style={Mode ? style.light : style.dark}>home hoon</Text>
        <DispBusInfo />
        <Schedule />
        <Settings />
        <Search />
        <Notification />
      </View>
    </View>
  );
}

//bus ka time aur number show hoga yahan
function DispBusInfo() {
  return (
    <View style={style.TopContainer}>
      <Text> bus #</Text>
      <Text> Time</Text>
    </View>
  );
}

function Schedule() {
  return (
    <TouchableOpacity>
      <Text style={style.buttons}>
        Schedule
      </Text>
    </TouchableOpacity>
  );
}

function Notification() {
  return (
    <TouchableOpacity>
      <Text style={style.buttons}>
        Notification
      </Text>
    </TouchableOpacity>
  );
}

function Settings() {
  return (
    <TouchableOpacity>
      <Text style={style.buttons}>
        Settings
      </Text>
    </TouchableOpacity>
  );
}

function Search() {
  return (
    <TouchableOpacity>
      <Text style={style.buttons}>
        Search
      </Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  verticalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  light: {
    color: 'orange',
    fontSize: 30,
  },
  dark: {
    color: 'green',
    fontSize: 30,
  },
  TopContainer: {
    height: 250,
    width: 250,
    borderColor: 'green',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 255, 171, 0.39)',
    margin: 10,
    fontSize: 20,
    height: 100,
    width: 100,
    borderRadius: 50,
    flexDirection: 'row',
  },
  leftButtons: {
    color: 'orange',
  },
  rightButtons: {
    color: 'green',
  },
});

export default TestHome;