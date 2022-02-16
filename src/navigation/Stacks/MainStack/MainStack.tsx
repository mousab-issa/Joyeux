import React, { useEffect } from 'react'

import moment from 'moment'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from 'src/screens/Splash/Splash';

import AuthStack from '../AuthStack/AuthStack';


import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { LoginUser, CheckTokenValid } from 'src/store/auth/asyncActions';
import { clearState } from 'src/store/auth/auth';
import { getAsyncItem } from 'src/lib/helpers/utils';


type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  const dispatch = useAppDispatch();
  const {
    isInitiLoading,
    userToken,
  } = useAppSelector(state => state.authSlice);


  // use this to set an interval on the refresh token if needed
  // const checkTokenExpire = async () => {
  //   const TokenExpireDate = await getAsyncItem('TOKEN_EXPIRY');
  //   if (TokenExpireDate) {
  //     const myDate:Date = moment(TokenExpireDate).toDate();
  //     const remainingTime:Date= myDate - Date.now();
  //     setInterval(function () {
  //       return dispatch(LoginUser({ username: "ben1", password: "ben1" }));
  //     }, remainingTime);
  //   }
  //   return;
  // }

  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >
      {/* {isInitiLoading && <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />} */}
      {userToken === undefined ?
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        :
        (
          <>
          </>
        )
      }
    </Stack.Navigator>
  );
}

export default MainStack;