import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { CommonStyles } from 'src/common/styles'
import Constants from 'src/common/constants'

const ContentWrapper: FC = ({ children }) => {
    return (

        <View style={styles.contentContainer}>
            {children}
        </View>
    )
}

export default ContentWrapper

const styles = StyleSheet.create({
    contentContainer: {
        ...CommonStyles.boxShadow,
        shadowColor: '#CDE8E6',
        display: 'flex',
        backgroundColor: "white",
        padding: 30,
        marginBottom: 65,
        borderRadius: 20,
        minHeight: 195,
        maxHeight: 200
    }
})