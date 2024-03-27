import React from "react";
import NavigationBar from 'react-native-navbar';
import { View, } from "react-native";
const styles = {
    container: {
      flex: 1,
    },
  };
   
  const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };
   
  const titleConfig = {
    title: 'Hello, world',
  };
  function ComponentWithNavigationBar() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
        />
      </View>
    );
  }
  export default ComponentWithNavigationBar;