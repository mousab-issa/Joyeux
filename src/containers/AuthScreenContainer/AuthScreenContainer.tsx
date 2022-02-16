import React, { FC } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgIcon } from 'src/components';

import DefaultImage from 'src/lib/assets/Svg/BackGround.svg';

const AuthScreenContainer: FC<{ onClick?: () => any }> = ({ children, onClick }) => {

    return (
        <View style={styles.container}>
                <View style={{ position: 'absolute' }}>
                    <DefaultImage />
                </View>
                <SafeAreaView style={styles.container}>
                    <Pressable style={{ alignItems: 'flex-start', left: 20, position: 'relative' }} onPress={onClick}>
                        <SvgIcon
                            height={20}
                            width={20}
                            name="chevron-left"
                        />
                    </Pressable>
                    {children}
                </SafeAreaView>
        </View>
    );
};

export default AuthScreenContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    }
});