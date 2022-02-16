import React, { useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from "src/store/hooks";


type RootStackParamList = {
  Splash: undefined;
  Profile: undefined;
  Feed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' },
      }}
    >

    </Stack.Navigator>
  );
}

export default HomeStack;