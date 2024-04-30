import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import MyStack from '../routes/stack';
import ScheduleTable from '../reuseableComponents/ScheduleTable';


 
function App() {
  return (
    <View style={{flex:1 , justifyContent:"center", }}>
<ScheduleTable/>
     </View>
  );
}
export default App;
