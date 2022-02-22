import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import React, { FC } from 'react';

import { theme } from 'src/common/theme/theme';

import { TextInputTypes } from './types';
import Constants from 'src/common/constants';
import { CommonStyles } from 'src/common/styles';

const TextInputStyled: FC<TextInputTypes> = ({ prefix, type, onChange, placeHolder, label }) => {
    return (
        <View >
            {
                label &&
                <View style={styles.labelStyle}>
                    <Text style={{
                        color: theme.Colors.primary,
                        fontWeight: "bold",
                        fontSize: Constants.ResponsiveSize.f16,
                    }}>{label}</Text>
                </View>
            }
            <View style={styles.textInputContainer}>
                {prefix &&
                    <Text style={styles.prefix}>
                        {prefix}
                    </Text>
                }
                <TextInput placeholderTextColor={'white'} placeholder={placeHolder} onChangeText={onChange} keyboardType={type} style={styles.textInputSyle}> </TextInput>
            </View>
        </View>
    )
}

export default TextInputStyled

const styles = StyleSheet.create({
    textInputContainer: {
        ...CommonStyles.boxShadow,
        shadowColor: theme.Colors.primaryLight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAF4F3',
        borderColor: theme.Colors.primaryLight,
        borderRadius: Constants.ResponsiveSize.f10,
        borderWidth: 2,
        height: Constants.ResponsiveSize.f70,
        paddingHorizontal: Constants.ResponsiveSize.f28,
        paddingVertical: Constants.ResponsiveSize.f5,
    },
    prefix: {
        ...theme.Fonts.Main.header2,
        flex: 1,
        padding: Constants.ResponsiveSize.f10,
        color: theme.Colors.secondaryLight,
        fontWeight: 'bold',
    },
    textInputSyle: {
        flex: 4,
        ...theme.Fonts.Main.header2,
        alignSelf: 'center',
        color: theme.Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        height: '100%',
        padding: 10,

    },
    labelStyle: {
        marginBottom: 20
    }
})