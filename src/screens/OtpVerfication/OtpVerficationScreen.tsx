import React, {
    FC,
    useState,
    useRef,
    useEffect
} from 'react';
import {
    StyleSheet,
    Text,
    Platform,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';

import { BottomCardContainer, SvgIcon } from 'src/components';
import { AuthScreenContainer } from 'src/containers';

import OTPInputView from 'src/components/OTPINPUT';
import { theme } from 'src/common/theme/theme';
import Constants from 'src/common/constants';

let totalTime = 60;

const { height, width } = Dimensions.get('window');


const PhoneEditingComp: FC<{ phoneNumber: string, onEdit: () => any }> = ({ phoneNumber, onEdit }) => {

    return (
        <View>
            <Text style={{
                color: "white",
                marginVertical: Constants.ResponsiveSize.f15,
                fontSize: 18,
            }}>We have sent the otp on</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                    style={{
                        color: "white",
                        marginRight: Constants.ResponsiveSize.f15,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }} >{phoneNumber}</Text>
                <SvgIcon
                    onPress={onEdit}
                    name='editing-pen'
                    height={Constants.ResponsiveSize.f24}
                    width={Constants.ResponsiveSize.f24} />

            </View>
        </View>
    )
}
const OtpVerficationScreen: FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [otpCode, setOtpCode] = useState('');
    const [countDownTime, setCountDownTime] = useState(totalTime);
    const [isFirstTime, setIsFirstTime] = useState(false);
    const [showNotification, setShowNotification] = useState(true);

    const { phoneNumber } = route.params;

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
                await RNOtpVerify.getOtp();
                RNOtpVerify.addListener(message => {
                    try {
                        if (message) {
                            1
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
        setShowNotification(true)
    }

    const onOTPCOdeFilled = (code: any) => {
        navigation.navigate('AgeDetails')
    };

    const onOTPCodeChanged = (code: any) => {
        setOtpCode(code)
    };

    return (
        <AuthScreenContainer showBackBtm>
            <BottomCardContainer
                title='Verify Otp'
                subTitle=''
                subTitleComp={<PhoneEditingComp phoneNumber={phoneNumber} onEdit={() => {
                    console.log('Hello')
                }} />}>
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
                        Reading OTP
                    </Text>
                    <Text style={{ ...theme.Fonts.Main.header2, color: theme.Colors.yellow.default }}>
                        {countDownTime ? countDownTime : 10}
                    </Text>
                </View>
                <TouchableOpacity style={styles.centerRow} onPress={onResendCode}>
                    <SvgIcon name='chat' height={Constants.ResponsiveSize.f26} width={Constants.ResponsiveSize.f26} />
                    <Text style={{ color: 'white', marginHorizontal: 15 }}>
                        Resend SMS
                    </Text>
                </TouchableOpacity>
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
        ...theme.Fonts.Main.header1,
        backgroundColor: '#02201B',
        borderColor: theme.Colors.primary,
        borderWidth: .2,
        color: 'white',
        height: Constants.ResponsiveSize.f70,
        width: Constants.ResponsiveSize.f70,
        borderRadius: 5
    },
    textStyle: {
        fontSize: Constants.ResponsiveSize.f15,
        textAlign: 'left',
        lineHeight: 25,
        color: theme.Colors.text,
    },
    centerRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})