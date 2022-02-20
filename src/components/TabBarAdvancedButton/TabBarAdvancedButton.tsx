import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import SvgIcon from '../SvgIcon/SvgIcon';
import { Text } from 'react-native-svg';
import Svg, { Path, SvgProps } from "react-native-svg";
import LinearGradient from 'react-native-linear-gradient';
import { MainGradient } from 'src/common/theme/theme';

type Props = BottomTabBarButtonProps & {
    bgColor?: string;
};


type Propss = SvgProps & {
    color?: string;
};

export const TabBg: React.FC<Propss> = ({
    color = '#103325',
    ...props
}) => {
    return (
        <Svg
            width={75}
            height={61}
            viewBox="0 0 75 61"
            {...props}
        >
            <Path
                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                fill={color}
            />
        </Svg>
    )
};


const TabBarAdvancedButton: React.FC<Props> = ({
    bgColor,
    ...props
}) => (
    <View
        style={styles.container}
        pointerEvents="box-none"
    >
        <TabBg
            color={'transparent'}
            style={styles.background}
        />
        <Pressable
            onPress={props.onPress}
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
                colors={MainGradient}>
                <SvgIcon
                    name="gift"
                    height={40}
                    width={40}
                />
            </LinearGradient>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 75,
        alignItems: 'center'
    },
    background: {
        position: 'absolute',
        top: 0,
    },
    button: {
        top: -40.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: '#FA8C35',
    },
    buttonIcon: {
        fontSize: 16,
        color: '#F6F7EB'
    }
});


export default TabBarAdvancedButton;