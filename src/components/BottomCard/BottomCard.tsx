import { StyleSheet, Text, Appearance, View, ScrollView, Dimensions, KeyboardAvoidingView, FlatList } from 'react-native'
import React, { FC } from 'react';

import { CommonStyles } from 'src/common/styles';
import { theme } from 'src/common/theme/theme';
import Constants, { WIDTH } from 'src/common/constants';
import VirtualizedList from '../VirtualizedList/VirtualizedList';

const { height } = Dimensions.get('window');
const colorScheme = Appearance.getColorScheme();
const isDark = colorScheme === 'dark';

const BottomCardContainer: FC<BottomCardTypes> = ({ children, title, subTitle, fixedHeight, subTitleComp }) => {
    const cardTitle = title ? title : "";
    const cardSubtitle = subTitle ? subTitle : '';

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 25, marginVertical: 40, alignSelf: 'flex-start' }}>
                <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold', marginVertical: 10 }}>{cardTitle}</Text>
                {
                    subTitleComp ? subTitleComp : <Text style={{ fontSize: 16, color: 'white' }}>{cardSubtitle} </Text>
                }
            </View>

            <KeyboardAvoidingView style={styles.bottomSheet}>
                {fixedHeight ?
                    <View style={styles.bottomSheetContent}>
                        {children}
                    </View> :
                    <ScrollView contentContainerStyle={styles.bottomSheetContent} >
                        {children}
                    </ScrollView>
                }
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
        maxHeight: height / 1.5,
        minHeight: height / 2.8,
        backgroundColor: isDark ? theme.Colors.primaryDark : theme.Colors.primaryDark,
        borderTopStartRadius: Constants.ResponsiveSize.f20,
        borderTopEndRadius: Constants.ResponsiveSize.f20,
        padding: Constants.ResponsiveSize.f30,
        ...CommonStyles.boxShadow
    },
    bottomSheetContent: {
        flexGrow: 1
    }
})