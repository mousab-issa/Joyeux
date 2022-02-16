

import React, { FC } from 'react';
import { View } from 'react-native';
import Constants from 'src/common/constants';

import { BottomCardContainer, Button } from 'src/components';
import { AuthScreenContainer } from 'src/containers';


const ChooseGenderScreen: FC<{ navigation: any }> = ({ navigation }) => {

    const onGenderClicked = (gender: string) => {
        navigation.navigate('UsernameDetails')
    }

    return (
        <AuthScreenContainer>
            <BottomCardContainer title='What is your gender' subTitle='Select your gender and procceed' >
                <View style={{ width: '70%', marginVertical: Constants.ResponsiveSize.f10, alignSelf: 'center' }}>
                    <Button showIcon icon='chevron-right' title='Male' onClick={() => onGenderClicked('Male')} />
                </View>
                <View style={{ width: '70%', marginVertical: Constants.ResponsiveSize.f10, alignSelf: 'center' }}>
                    <Button showIcon icon='chevron-right' title='Female' onClick={() => onGenderClicked('Female')} />
                </View>
                <View style={{ width: '70%', marginVertical: Constants.ResponsiveSize.f10, alignSelf: 'center' }}>
                    <Button showIcon icon='chevron-right' title='Non-binary' onClick={() => onGenderClicked('Non-Binary')} />
                </View>
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

export default ChooseGenderScreen;