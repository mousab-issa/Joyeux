


import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { BottomCardContainer, Button, DatePicker } from 'src/components';
import { AuthScreenContainer } from 'src/containers';

const SpouseAgeDetailsScreen: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <AuthScreenContainer>
            <BottomCardContainer title='Spouse Age Details' subTitle='' fixedHeight>
                <View style={styles.bottomSheetContentContainer}>
                    <DatePicker />
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ width: '50%', alignSelf: 'center' }}>
                    <Button iconOnly icon='chevron-right' title='' onClick={() => navigation.navigate('KidsOptionDetails')} />
                </View>
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

export default SpouseAgeDetailsScreen;

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