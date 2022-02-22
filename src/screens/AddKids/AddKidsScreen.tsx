


import React, { FC, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Pressable, StyleSheet, View, Text, ScrollView } from 'react-native'
import { theme } from 'src/common/theme/theme';

import { BottomCardContainer, Button, ContentWrapper, DatePicker, SvgIcon, TextInput } from 'src/components';
import { AuthScreenContainer } from 'src/containers';

import Constants, { HEIGHT, WIDTH } from 'src/common/constants';


const Select: FC<{ onSelectAction: () => any }> = ({ onSelectAction }) => {
    const [isSelected, setIsSelected] = useState([
        {
            id: 1,
            value: "Male",
            label: "Male",
            selected: true,
            icon: 'baby-male'
        },
        {
            id: 2,
            value: "Female",
            label: "Female",
            selected: false,
            icon: 'baby-female'
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
                            <SvgIcon color={item.selected ? 'orange' : 'white'} name={item.icon} height={30} width={30} />
                        </View>
                    </Pressable>
                )
            })}
        </View>
    )
}

const DetailsCard = () => {
    const [date, setDate] = useState();

    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <TextInput placeHolder='Kid Name' label='First Kid Name' onChange={(e) => console.log(e)} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Select onSelectAction={() => console.log('')} />
            </View>
            <View style={{ marginVertical: 20 }}>
                <DatePicker
                    height={150}
                    value={date}
                    onChange={(value: any) => setDate(value)}
                    format="dd-mm-yyyy"

                    startYear={1950}
                    endYear={2022}
                />
            </View>
            <View
                style={{
                    borderWidth: 1,
                    borderColor: theme.Colors.primary,
                    marginVertical: Constants.ResponsiveSize.f30
                }}
            />
        </>
    )
}

const AddKidsScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const [KidsArray, setKidsArray] = useState<number[]>([1]);

    const { control, register } = useForm({
        defaultValues: { kids: [{}] }
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "kids",

    });

    const addKid = () => {
        const newElement = 1
        setKidsArray(oldArray => [...oldArray, newElement]);
    }

    return (
        <AuthScreenContainer showLogo={false}>
            <BottomCardContainer title='Do you kids ?' subTitle='We have a surprise gift for your kids'>
                {
                    KidsArray.map((nKid, index) => {
                        return (
                            <ContentWrapper key={index}>
                                <View style={styles.row}>
                                    <DetailsCard />
                                </View>
                            </ContentWrapper>

                        )
                    })
                }
                <View style={styles.bottomSheetContentContainer}>
                    <Pressable
                        onPress={addKid}
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: "center"
                        }}>
                        <SvgIcon name="add-kid" height={30} width={30} />
                        <Text style={{ color: "white", marginLeft: 16, fontWeight: "bold" }}>add kid</Text>
                    </Pressable>
                    <View style={{ flex: 1, }}>
                        <Button iconOnly icon='chevron-right' title='' onClick={() => navigation.navigate('MartialStatus')} />
                    </View>
                </View>
            </BottomCardContainer>
        </AuthScreenContainer>
    );
};

const styles = StyleSheet.create({

    bottomSheetContentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        maxHeight: HEIGHT / 1.5,
        minHeight: HEIGHT / 2.8,
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




