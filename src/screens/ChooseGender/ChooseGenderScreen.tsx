

import React, { FC, useState } from 'react';
import { View } from 'react-native';
import Constants from 'src/common/constants';

import { BottomCardContainer, Button } from 'src/components';
import { AuthScreenContainer } from 'src/containers';


const ChooseGenderScreen: FC<{ navigation: any }> = ({ navigation }) => {

    const [isSelected, setIsSelected] = useState([
        {
            id: 1,
            value: "male",
            label: "Male",
            selected: true,
            icon: 'male'
        },
        {
            id: 2,
            value: "female",
            selected: false,

            label: "Female",
            icon: "female"
        },
        {
            id: 3,
            value: "nonbinary",
            selected: false,
            label: "Non-Binary",
            icon: 'non-binary'
        },
    ]);

    const onButtonSelected = (item: any) => {
        let updatedState = isSelected.map((isLikedItem) =>
            isLikedItem.id === item.id
                ? { ...isLikedItem, selected: true }
                : { ...isLikedItem, selected: false }
        );
        setIsSelected(updatedState);
        onGenderClicked(item.value)
    };


    const onGenderClicked = (gender: string) => {
        navigation.navigate('UsernameDetails')
    }

    return (
        <AuthScreenContainer>
            <BottomCardContainer title='What is your gender' subTitle='Select your gender and procceed' >
                {isSelected.map((item) => {
                    return (
                        <View key={item.value} style={{ width: '70%', marginVertical: Constants.ResponsiveSize.f10, alignSelf: 'center' }} >
                            <Button disableStyle={!item.selected} onClick={() => onButtonSelected(item)} title={item.label} />
                        </View>
                    )
                })}
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

export default ChooseGenderScreen;