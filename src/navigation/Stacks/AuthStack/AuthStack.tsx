import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PhoneNumberScreen from 'src/screens/PhoneNumber/PhoneNumberScreen';
import OtpVerficationScreen from 'src/screens/OtpVerfication/OtpVerficationScreen';
import AgeDetailsScreen from 'src/screens/AgeDetails/AgeDetailsScreen';
import ChooseGenderScreen from 'src/screens/ChooseGender/ChooseGenderScreen';
import UsernameDetailsScreen from 'src/screens/UsernameDetails/UsernameDetailsScreen';

import SpouseAgeDetailsScreen from 'src/screens/SpouseAgeDetails/SpouseAgeDetailsScreen';
import KidsOptionDetailsScreen from 'src/screens/KidsOptionsDetails/KidsOptionDetailsScreen';
import AddKidsScreen from 'src/screens/AddKids/AddKidsScreen';
import AnniversaryDetailsScreen from 'src/screens/AnniversaryDetails/AnniversaryDetailsScreen';
import SpouseNameDetailsScreen from 'src/screens/SpouseNameDetails/SpouseNameDetailsScreen';
import { HomeTabs } from '../HomeStack/homeTabs';

type RootStackParamList = {
    PhoneNumber: undefined;
    OtpVerfication: { phoneNumber: string };
    AgeDetails: undefined;
    ChooseGender: undefined;
    UsernameDetails: undefined;
    AnniversaryDetails: undefined;
    SpouseAgeDetails: undefined;
    SpouseNameDetails: undefined;
    MartialStatus: undefined;
    KidsOptionDetails: undefined;
    AddKids: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {

    return (
        <Stack.Navigator
            initialRouteName="PhoneNumber"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}
        >
            <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OtpVerfication" component={OtpVerficationScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="AgeDetails" component={AgeDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ChooseGender" component={ChooseGenderScreen} options={{ headerShown: false }} />
            <Stack.Screen name="UsernameDetails" component={UsernameDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AnniversaryDetails" component={AnniversaryDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SpouseNameDetails" component={SpouseNameDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SpouseAgeDetails" component={SpouseAgeDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="KidsOptionDetails" component={KidsOptionDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddKids" component={AddKidsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MartialStatus" component={HomeTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AuthStack;