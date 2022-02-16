


import React, { FC, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, View, ScrollView, Dimensions, KeyboardAvoidingView, FlatList } from 'react-native'
import { theme } from 'src/common/theme/theme';

import { Button, DatePicker, SvgIcon, TextInput } from 'src/components';
import { AuthScreenContainer } from 'src/containers';

import { VirtualizedList } from 'src/components';
import { CommonStyles } from 'src/common/styles';
import { WIDTH } from 'src/common/constants';

const windowHeight = Dimensions.get('window').height;

const Select: FC<{ onSelectAction: () => any }> = ({ onSelectAction }) => {
    const [isSelected, setIsSelected] = useState([
        {
            id: 1,
            value: "Male",
            label: "Male",
            selected: true,
        },
        {
            id: 2,
            value: "Female",
            label: "Female",
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
        <View style={{ flexDirection: 'row', }}>
            {isSelected.map((item) => {
                return (
                    <Pressable key={item.value} style={{ marginHorizontal: 10 }} onPress={() => onButtonSelected(item)}>
                        <View style={{
                            height: 40,
                            width: 40,
                            borderColor: theme.Colors.primary,
                            backgroundColor: item.selected ? theme.Colors.secondary : 'grey',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}>
                            <SvgIcon color={item.selected ? 'orange' : 'black'} name='baby-female' height={30} width={30} />
                        </View>
                    </Pressable>
                )
            })}
        </View>
    )
}

const DetailsCard = () => {
    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <TextInput placeHolder='Kid Name' label='First Kid Name' onChange={(e) => console.log(e)} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Select onSelectAction={() => console.log('')} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <DatePicker />
            </View>
            {/* <View style={{ borderWidth: 1, borderColor: theme.Colors.primary }} /> */}
        </>
    )
}



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



const AddKidsScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const { control, register } = useForm({
        defaultValues: { kids: [{}] }
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "kids",

    });

    return (
        <AuthScreenContainer>
            <BottomCardContainer fixedHeight title='Do you kids ?' subTitle='We have a surprise gift for your kids'>
                <View style={styles.row}>
                    <DetailsCard />
                </View>

                <View style={styles.bottomSheetContentContainer}>
                    <Button iconOnly icon='chevron-right' title='' onClick={() => navigation.navigate('MartialStatus')} />
                </View>

            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

const styles = StyleSheet.create({
    bottomSheetContentContainer: {
        // flex: 1,
        justifyContent: 'center'
    },
    row: {
        flex: 1
    },
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
        height: '100%'
    }

})
export default AddKidsScreen;

