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

const TextInputStyled: FC<TextInputTypes> = ({ prefix, type, onChange, placeHolder, label }) => {
    return (
        <View >
            {
                label &&
                <View style={styles.labelStyle}>
                    <Text style={{
                        color: 'white',
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
                <TextInput placeholderTextColor={'white'} placeholder={placeHolder} onChange={onChange} keyboardType={type} style={styles.textInputSyle}> </TextInput>
            </View>
        </View>
    )
}

export default TextInputStyled

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.Colors.primaryDark,
        borderRadius: Constants.ResponsiveSize.f10,
        borderWidth: Constants.ResponsiveSize.f1,
        borderColor: theme.Colors.primary,
        height: Constants.ResponsiveSize.f50
    },
    prefix: {
        flex: 1,
        padding: Constants.ResponsiveSize.f10,
        color: theme.Colors.primary,
        fontSize: Constants.ResponsiveSize.f16,
        fontWeight: 'bold',
    },
    textInputSyle: {
        flex: 4,
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