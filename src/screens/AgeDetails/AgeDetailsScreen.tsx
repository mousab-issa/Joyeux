import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { BottomCardContainer, Button, DatePicker } from 'src/components';
import { AuthScreenContainer } from 'src/containers';


const AgeDetailsScreen: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <AuthScreenContainer>
            <BottomCardContainer title='What is Your age' subTitle='Please Enter DOB' fixedHeight>
                <View style={styles.bottomSheetContentContainer}>
                    <DatePicker />
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ width: '50%', alignSelf: 'center' }}>
                    <Button iconOnly icon='chevron-right' title='' onClick={() => navigation.navigate('ChooseGender')} />
                </View>
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

export default AgeDetailsScreen;

const styles = StyleSheet.create({
    bottomSheetContentContainer: {
        flex: 2,
        // marginBottom:30,
        flexDirection: "row"
    },
    row: {
        flex: 1
    }
})