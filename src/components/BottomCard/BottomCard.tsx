import {
    StyleSheet,
    Text,
    Appearance,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'

import React, { FC } from 'react';

import Constants, { HEIGHT, WIDTH } from 'src/common/constants';

const colorScheme = Appearance.getColorScheme();
const isDark = colorScheme === 'dark';

const BottomCardContainer: FC<BottomCardTypes> = ({ children, title, subTitle, fixedHeight, subTitleComp }) => {
    const cardTitle = title ? title : "";
    const cardSubtitle = subTitle ? subTitle : '';

    return (
        <View style={{
            position: 'absolute',
            height: HEIGHT,
            bottom: 0,
            width: WIDTH,
        }}>
            <KeyboardAvoidingView
                needsOffscreenAlphaCompositing
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.bottomSheetTextContainer}>
                    <Text style={styles.bottomSheetTitle}>{cardTitle}</Text>
                    {
                        subTitleComp ? subTitleComp : <Text style={{
                            fontSize: 16,
                            color: 'white'
                        }}>{cardSubtitle} </Text>
                    }
                </View>
                <View
                    style={styles.bottomSheet}>
                    {fixedHeight ?
                        <View style={styles.bottomSheetContent}>
                            {children}
                        </View> :
                        <ScrollView
                            contentContainerStyle={styles.bottomSheetContent}
                            showsVerticalScrollIndicator={false}
                            >
                            {children}
                        </ScrollView>
                    }
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
export default BottomCardContainer;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        bottom: 0,
        width: WIDTH,
        paddingHorizontal: Constants.ResponsiveSize.f16,
    },
    bottomSheet: {
        width: '100%',
        maxHeight: HEIGHT / 1.5,
        minHeight: HEIGHT / 3,
        backgroundColor: 'rgba(255, 255, 266, 0.1)',
        borderTopStartRadius: Constants.ResponsiveSize.f20,
        borderTopEndRadius: Constants.ResponsiveSize.f20,
        padding: Constants.ResponsiveSize.f30,
    },
    bottomSheetTextContainer: {
        marginHorizontal: 25,
        marginVertical: 40,
        alignSelf: 'flex-start'
    },
    bottomSheetTitle: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 10
    },
    bottomSheetContent: {
        flexGrow: 1
    },
    containerr: {
        flex: 1
    },


})