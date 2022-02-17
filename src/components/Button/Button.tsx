import { StyleSheet, Text, Pressable, View } from 'react-native'
import React, { FC } from 'react'
import LinearGradient from 'react-native-linear-gradient';

import { CommonStyles } from 'src/common/styles';
import Constants from 'src/common/constants';
import SvgIcon from '../SvgIcon/SvgIcon';
import { theme } from 'src/common/theme/theme';


const ButtonStyled: FC<ButtonProps> = ({ onClick, title, iconOnly, icon, showIcon, disable }) => {

    const COLORS = !disable ? ['#F44E4E', '#F44E4E', '#FCAE27', '#FCAE27']
        : [`${theme.Colors.primaryDark}`, `${theme.Colors.primaryDark}`, `${theme.Colors.primaryDark}`, `${theme.Colors.primaryDark}`]

    const borderStyle = !disable ? {} : { borderWidth: 1, borderColor: theme.Colors.primary }
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
                            <Text style={{ ...CommonStyles.boxShadow, color: 'white', fontSize: 24, fontWeight: 'bold' }}>
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
        borderRadius: Constants.ResponsiveSize.f50
    },
})