import React, { FC } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants, { WIDTH } from 'src/common/constants';
import { SvgIcon } from 'src/components';

import BackgroundImage from 'src/lib/assets/Svg/BackGround.svg';
import Logo from 'src/lib/assets/Svg/WordMark.svg';


const HomeScreenContainer: FC<{ onClick?: () => any, showBackBtm?: boolean }> = ({ children, onClick, showBackBtm }) => {
    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute' }}>
                <BackgroundImage />
            </View>

            <SafeAreaView style={styles.container}>
                {
                    showBackBtm &&
                    <Pressable style={{ alignItems: 'flex-start', left: 20, position: 'relative' }} onPress={onClick}>
                        <SvgIcon
                            height={20}
                            width={20}
                            name="chevron-left"
                        />
                    </Pressable>
                }
                {children}
            </SafeAreaView>
        </View>
    );
};

export default HomeScreenContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    LogoContainer: {
        display: 'flex', alignItems: 'center', position: "absolute", width: WIDTH, top: 123,
    }
});