
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



function HomePage() {
  return (
    <View style={style.container}>
      <Text> Welcome home </Text>
      <DispTime />
      <View style={style.row}>
        <Notification />
        <Schedule />
      </View>
      <View style={style.row}>
        <Search />
        <Settings />
      </View>
    </View>
  );
}

function DispTime() {
  return (
    <View style={style.TopContainer}>
      <Text style={style.Centertext}> Bus number will be displayed here</Text>
      <Text style={style.Centertext}> Time will be displayed here </Text>
      <Text style={style.Centertext}> Time will be displayed here </Text>
    </View>
  );
}

function Schedule() {
  return (
    <TouchableOpacity style={style.Buttons}>
      <Text style={{ textAlign: "center" }}>Schedule</Text>
     

    </TouchableOpacity>
  );
}

function Search() {
  return (
    <TouchableOpacity style={style.Buttons}>
      <Text style={{ textAlign: "center" }}>Search</Text>
    </TouchableOpacity>
  );
}

function Notification() {
  return (
    <TouchableOpacity style={style.Buttons}>
      <Text style={{ textAlign: "center" }}>Notification</Text>
    </TouchableOpacity>
  );
}

function Settings() {
  return (
    <TouchableOpacity style={style.Buttons}>
      <Text style={{ textAlign: "center" }}>Settings</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 780
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  Buttons: {
    backgroundColor: 'lightgreen',
    width: 170,
    height: 90,
    borderRadius: 30,
    textAlign: 'center',
    marginTop: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  TopContainer: {
    borderWidth: 1,
    padding: 30,
    height: 250,
    marginBottom: 20,
    width: 350,
    
  },
  Centertext: {
    textAlign: 'center',
  },
});

export default HomePage;
