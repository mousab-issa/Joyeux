import React, { FC, useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    Platform,
    View,
    Dimensions
} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';

import { BottomCardContainer } from 'src/components';
import { AuthScreenContainer } from 'src/containers';

import OTPInputView from 'src/components/OTPINPUT';
import { theme } from 'src/common/theme/theme';
import Constants from 'src/common/constants';

let totalTime = 60;

const { height, width } = Dimensions.get('window');

const OtpVerficationScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const [otp_entered, setotp_entered] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [countDownTime, setCountDownTime] = useState(totalTime);
    const [isFirstTime, setIsFirstTime] = useState(false);
    const [showNotification, setShowNotification] = useState(true);

    const OtpRef = useRef<any>(null);

    useEffect(() => {
        if (!isFirstTime) {
            setIsFirstTime(true)
            totalTime = 60;
        }
        let timer = setInterval(() => onTimerTick(), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        onInitScreen();
        return () => {
            if (Platform.OS === 'android') {
                RNOtpVerify.removeListener();
            }
        };
    }, []);

    const onInitScreen = async () => {
        try {
            if (Platform.OS == 'android') {
                const OTP = await RNOtpVerify.getOtp();
                RNOtpVerify.addListener(message => {
                    try {
                        if (message) {
                            console.log(message);
                            // setotpCode(message)
                            OtpRef.current.pullDataFromSms();
                        }
                    } catch (error) {
                    }
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    const onTimerTick = () => {
        totalTime = totalTime - 1
        setCountDownTime(totalTime);
        if (totalTime <= 1) {
            setCountDownTime(1);
            if (totalTime > 0) {
                onResendCode();
            }
        }
    }

    const onResendCode = () => {
        // const lang = selectedLanguage;
        setShowNotification(true)
        // const data = ResendVerificationCode + '?lang=' + selectedLanguage + '&otphash=' + otpHash
        // callResendVerificationUserCode(data, auth_token)
    }

    const onOTPCOdeFilled = (code: any) => {
        navigation.navigate('AgeDetails')
        setotp_entered(true);
    };

    const onOTPCodeChanged = (code: any) => {
        setOtpCode(code)
    };


    return (
        <AuthScreenContainer>
            <BottomCardContainer title='Login' subTitle='Enter valid mobile number , we will send you Otp Verfication'>
                <Text style={{ color: "white", fontWeight: 'bold', fontSize: 16 }} onPress={onOTPCOdeFilled}> Enter OTP</Text>
                <View style={styles.bottomSheetContentContainer}>
                    <OTPInputView
                        style={{ width: "95%" }}
                        ref={OtpRef}
                        pinCount={5}
                        code={otpCode}
                        placeholderCharacter="0"
                        placeholderTextColor={'#A09A9A'}
                        codeInputFieldStyle={styles.otpInput}
                        onCodeChanged={(code) => {
                            onOTPCodeChanged(code);
                        }}
                        onCodeFilled={(code) => {
                            onOTPCOdeFilled(code);
                        }}
                    />
                </View>
                <View style={styles.centerRow}>
                    <Text style={{ color: 'white', marginHorizontal: 15 }}>
                        Resend OTP
                    </Text>
                    <Text style={{ color: "yellow" }}>
                        {countDownTime ? countDownTime : 10}
                    </Text>
                </View>
                <View style={styles.centerRow}>
                    <Text style={{ color: 'white', marginHorizontal: 15 }}>
                        Resend SMS
                    </Text>
                </View>
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

export default OtpVerficationScreen;

const styles = StyleSheet.create({
    bottomSheetContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flex: 1
    },
    otpInput: {
        backgroundColor: '#02201B',
        borderColor: theme.Colors.primary,
        borderWidth: .2,
        color: 'white',
        borderRadius: 5
    },
    textStyle: {
        fontSize: Constants.ResponsiveSize.f15,
        textAlign: 'left',
        lineHeight: 25,
        color: theme.Colors.text,
    },
    centerRow: {
        flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    }
})