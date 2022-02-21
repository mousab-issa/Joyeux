import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Shadow } from 'react-native-shadow-2'

const DropShadow: FC<{ color: string }> = ({ children, color }) => {

    const COLOR = color || '#CDE8E6'
    return (
        <Shadow startColor={COLOR} finalColor={COLOR}  >
            {children}
        </Shadow>
    )
}

export default DropShadow

const styles = StyleSheet.create({})