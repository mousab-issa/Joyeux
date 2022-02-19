import { StyleSheet, Text, Pressable, View } from 'react-native'
import React, { FC } from 'react'
import LinearGradient from 'react-native-linear-gradient';

import { CommonStyles } from 'src/common/styles';
import Constants from 'src/common/constants';
import SvgIcon from '../SvgIcon/SvgIcon';
import { MainGradient, theme } from 'src/common/theme/theme';


const ButtonStyled: FC<ButtonProps> = ({ onClick, title, iconOnly, icon, showIcon, disable, disableStyle }) => {

    const COLORS = !disable && !disableStyle ? MainGradient
        : ['white', 'white', 'white', 'white']

    const borderStyle = !disable ? {} : { borderWidth: 1, borderColor: 'white' }
    const TextColor = !disable && !disableStyle ? 'white'
        : 'black'
    return (
        <Pressable onPress={!disable ? onClick : null}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={COLORS}
                style={[styles.buttonStyle, { justifyContent: 'center' }, { ...borderStyle }]}>
                {iconOnly
                    ? <SvgIcon name={icon || ''} height={Constants.ResponsiveSize.f30} width={Constants.ResponsiveSize.f30} color={'white'} />
                    :
                    <View style={{ flexDirection: 'row' }} >
                        {showIcon &&
                            <SvgIcon name={icon || ''}
                                height={Constants.ResponsiveSize.f30}
                                width={Constants.ResponsiveSize.f30}
                                color={'white'} />

                        }
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ color: TextColor, fontSize: 24, fontWeight: 'bold' }}>
                                {title}
                            </Text>
                        </View>
                    </View>
                }
            </LinearGradient>
        </Pressable>
    )
}

export default ButtonStyled;

const styles = StyleSheet.create({
    buttonStyle: {
        padding: Constants.ResponsiveSize.f20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "green",
        paddingVertical: 15,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: Constants.ResponsiveSize.f50
    },
})