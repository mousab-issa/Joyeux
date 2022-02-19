import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'src/common/constants';
import { CommonStyles } from 'src/common/styles';
import { theme } from 'src/common/theme/theme';

import { BottomCardContainer, Button, ContentWrapper, TextInput } from 'src/components';
import { AuthScreenContainer } from 'src/containers';

const PhoneNumberScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null)

    const onGetOtpClicked = () => navigation.navigate('OtpVerfication', { phoneNumber })

    const onEditingPhone = (phone: string) => {
        const prefix = '0091';
        setPhoneNumber(`${prefix}${phone}`)
    }

    return (
        <AuthScreenContainer onClick={() => console.log('Hello')}>
            <BottomCardContainer title='Login' subTitle='Enter valid mobile number , we will send you Otp Verfication'>
                <View style={styles.bottomSheetContentContainer}>
                    <ContentWrapper>
                        <View style={styles.row}>
                            <Text
                                style={{
                                    color: theme.Colors.secondaryLight,
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    marginBottom: 28
                                }}>Mobile Number</Text>
                        </View>
                        <View style={styles.row}>
                            <TextInput onChange={onEditingPhone} prefix={'+91'} type='numeric' />
                        </View>
                    </ContentWrapper>
                    <View style={styles.row}>
                        <Button onClick={onGetOtpClicked} title='Get OTP' disable={!phoneNumber} />
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
    },
})
export default PhoneNumberScreen;
