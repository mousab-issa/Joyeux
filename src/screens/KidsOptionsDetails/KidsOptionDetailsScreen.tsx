
import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { BottomCardContainer, Button, TextInput } from 'src/components';
import { AuthScreenContainer } from 'src/containers';


const Select: FC<{ onSelectAction: () => any }> = ({ onSelectAction }) => {
    const [isSelected, setIsSelected] = useState([
        {
            id: 1,
            value: "Yes",
            label: "Yes",
            selected: true,
        },
        {
            id: 2,
            value: "No",
            label: "No",
            selected: false,
        },
    ]);

    const onButtonSelected = (item: any) => {
        let updatedState = isSelected.map((isLikedItem) =>
            isLikedItem.id === item.id
                ? { ...isLikedItem, selected: true }
                : { ...isLikedItem, selected: false }
        );
        setIsSelected(updatedState);
        onSelectAction();
    };

    return (
        <>
            {isSelected.map((item) => {
                return (
                    <View key={item.value} style={{ marginVertical: 10 }} >
                        <Button disable={!item.selected} onClick={() => onButtonSelected(item)} title={item.label} />
                    </View>
                )
            })}
        </>
    )
}

const KidsOptionDetailsScreen: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <AuthScreenContainer>
            <BottomCardContainer title='Do you kids ?' subTitle='We have a surprise gift for your kids'>
                <View style={styles.bottomSheetContentContainer}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Select onSelectAction={() => navigation.navigate('AddKids')} />
                    </View>
                </View>
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

const styles = StyleSheet.create({
    bottomSheetContentContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    row: {
        flex: 1
    }
})
export default KidsOptionDetailsScreen;

