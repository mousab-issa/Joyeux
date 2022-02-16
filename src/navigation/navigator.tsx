import React from "react";
import Toast from 'react-native-toast-message';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
//Stacks
import HomeStack from 'src/navigation/Stacks/HomeStack/home';
import { getAsyncItem } from "src/lib/helpers/utils";
import MainStack from "./Stacks/MainStack/MainStack";


axios.interceptors.request.use(async (config) => {
    const token = await getAsyncItem('USER_TOKEN');
    if (token) {
        console.log(token);
    }

}, function (error) {
    return Promise.reject(error);
});


const Navigator = () => {
    return (
        <NavigationContainer>
            <MainStack />
            {/* <Toast ref={(ref:any) => Toast.setRef(ref)} /> */}
        </NavigationContainer>
    );
}
export default Navigator;