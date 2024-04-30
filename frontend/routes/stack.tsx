import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/StackNavigationScreens/Settings';
import Notificaton from '../screens/StackNavigationScreens/Notificaton';
import { NavigationContainer } from '@react-navigation/native';
import Search from '../screens/StackNavigationScreens/Search';
import Schedule from '../screens/StackNavigationScreens/Schedule';
import Home from '../screens/drawerScreens/Home';
import SideDrawer from './sideDrawer';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="sideDrawer" component={SideDrawer} />
      <Stack.Screen name="Notifications" component={Notificaton} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default MyStack;