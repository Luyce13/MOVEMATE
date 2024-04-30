import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FixedProfile from "../screens/drawerScreens/ProfileFixed";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../authentication/Login";
import DailyProf from "../screens/drawerScreens/daily";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LoginScreen} />
      <Tab.Screen name="Prof" component={FixedProfile} />
      <Tab.Screen name="daily" component={DailyProf}/>
    
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;