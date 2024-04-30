

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/drawerScreens/Home';
import AppInfo from '../screens/drawerScreens/AppInfo';
import Feedback from '../screens/drawerScreens/Feedback';


const Drawer = createDrawerNavigator();
const SideDrawer = () => {
    //yahan hum onclick py aik kuch likhein gy jis sy sidebar open hogi
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="AppInfo" component={AppInfo} />
          <Drawer.Screen name="Feedback" component={Feedback} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
    
  };
  export default SideDrawer