
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'src/common/constants';

import { BottomCardContainer, Button, TextInput } from 'src/components';
import { AuthScreenContainer } from 'src/containers';

const SpouseNameDetailsScreen: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <AuthScreenContainer>
            <BottomCardContainer title="What's your spouse name" subTitle='Please enter full name' >
                <View style={styles.row}>
                    <TextInput placeHolder='Given Name' label='Spouse Name' onChange={(e) => console.log(e)} />
                </View>
                <View style={styles.row}>
                    <TextInput placeHolder='Given Name' label='Spouse Last name' onChange={(e) => console.log(e)} />
                </View>
                <View style={{ width: '50%', marginVertical: Constants.ResponsiveSize.f10, alignSelf: 'center' }}>
                    <Button iconOnly icon='chevron-right' title='' onClick={() => navigation.navigate('SpouseAgeDetails')} />
                </View>
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};


const styles = StyleSheet.create({
    row: {
        flex: 1,
        marginVertical: Constants.ResponsiveSize.f10,
    }
})
export default SpouseNameDetailsScreen;