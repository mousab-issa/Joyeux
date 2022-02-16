import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BottomCardContainer, Button, TextInput } from 'src/components';
import { AuthScreenContainer } from 'src/containers';

const PhoneNumberScreen: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <AuthScreenContainer onClick={() => console.log('Hello') }>
            <BottomCardContainer title='Login' subTitle='Enter valid mobile number , we will send you Otp Verfication'>
                <View style={styles.bottomSheetContentContainer}>
                    <View style={styles.row}>
                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 16 }}>Mobile Number</Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput onChange={(e) => console.log(e)} prefix={'+91'} type='numeric' />
                    </View>
                    <View style={styles.row}>
                        <Button onClick={() => navigation.navigate('OtpVerfication')} title='Get Otp' />
                    </View>
                </View>
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

const styles = StyleSheet.create({
    bottomSheetContentContainer: {
        flex: 1
    },
    row: {
        flex: 1
    }
})
export default PhoneNumberScreen;
