import { StyleSheet, Text, View, ScrollView, Dimensions, KeyboardAvoidingView, FlatList } from 'react-native'
import React, { FC } from 'react';

import { CommonStyles } from 'src/common/styles';
import { theme } from 'src/common/theme/theme';
import Constants, { WIDTH } from 'src/common/constants';
import VirtualizedList from '../VirtualizedList/VirtualizedList';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BottomCardContainer: FC<BottomCardTypes> = ({ children, title, subTitle, fixedHeight }) => {
    const cardTitle = title ? title : "";
    const cardSubtitle = subTitle ? subTitle : '';


    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 25, marginVertical: 40, alignSelf: 'flex-start' }}>
                <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold', marginVertical: 10 }}>{cardTitle}</Text>
                <Text style={{ fontSize: 16, color: 'white' }}>{cardSubtitle} </Text>
            </View>

            <KeyboardAvoidingView style={[styles.bottomSheet, { ...CommonStyles.boxShadow, }]}>
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
        display: 'flex',
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        width: WIDTH,
        paddingHorizontal: 10,
    },
    bottomSheet: {
        width: '100%',
        maxHeight: windowHeight / 1.5,
        minHeight: windowHeight / 2.8,
        backgroundColor: theme.Colors.primaryDark,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 30
    },
    bottomSheetContent: {
        flexGrow: 1

    }
})