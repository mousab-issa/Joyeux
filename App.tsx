import React, { useEffect } from 'react';
import {
  StatusBar,
  useColorScheme,
  Alert
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import NetInfo from "@react-native-community/netinfo";

import { Provider } from 'react-redux';
import store from 'src/store/store';

import Navigator from 'src/navigation/navigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
      } else {
        Alert.alert(
          "Network Error",
          "Check your network",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
          ]
        );
      }
    });
    return unsubscribe;
  }, []);


  return (

    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
};


export default App;
