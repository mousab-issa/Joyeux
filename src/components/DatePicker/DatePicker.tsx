import React, { FC, useState, useEffect, useRef, useMemo, memo, } from 'react';
import { Text, View, LayoutChangeEvent, FlatList, Pressable, TextInput as RNTextInput, StyleSheet } from 'react-native';
import Constants from 'src/common/constants';
import { theme } from 'src/common/theme/theme';

import { SvgIcon, } from 'src/components';

const Item: FC<{ i: number; onPressItem: () => any; height: number }> = memo(({ i, onPressItem, height }) => {
    return (
        <Pressable
            onLongPress={onPressItem}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: 'center',
                height: height
            }}>
            <Text style={styles.textStyle}>
                {i}
            </Text>
        </Pressable>
    )
});

const DatePickerSelectItem: FC<{ data: any[], disableScroll?: boolean }> = ({ data }) => {
    const DATA = useMemo(() => data, [data])

    const flatListRef = useRef<null | FlatList<any>>(null)

    const [choosenValue, setChoosenValue] = useState<number | null>(null)
    const [height, setHeight] = useState<number>(0);
    const [showEditingText, setShowEditingText] = useState<boolean>(false);
    const [enableTopButton, SetEnableTopButton] = useState<boolean>(true);
    const [enableBottomButton, setEnableBottomButton] = useState<boolean>(true);
    const [currIndex, setCurrIndex] = useState<number>(0);

    const onUpdateHeight = (e: LayoutChangeEvent) => {
        setHeight(e.nativeEvent.layout.height);
    };

    const onScrollEnd = (e: any) => {
        SetEnableTopButton(true);
        setEnableBottomButton(true);
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.y / viewSize.height);
        if (pageNum === 0) {
            SetEnableTopButton(false)
        } else if (pageNum === DATA.length - 1) {
            setEnableBottomButton(false)
        }
        setCurrIndex(pageNum)
    }

    const onShowEditingForm = () => {
        setShowEditingText(true);
    }

    const onFinishEditing = () => {
        setShowEditingText(false);
    }

    const onUpPressed = () => {
        if (currIndex === 0) {
            return;
        }
        setCurrIndex(prevI => prevI - 1);
    }

    const onDownClick = () => {
        if (currIndex === DATA.length - 1) {
            return;
        }
        setCurrIndex(prevI => prevI + 1);
    }

    useEffect(() => {
        console.log(choosenValue);
    }, [choosenValue]);

    useEffect(() => {
        SetEnableTopButton(false);
    }, [])

    useEffect(() => {
        setChoosenValue(DATA[currIndex])
        flatListRef.current?.scrollToIndex({ index: currIndex, animated: true })
    }, [currIndex])

    return (
        <View style={styles.container}>

            <Pressable onPress={onUpPressed} >
                <SvgIcon
                    name='chevron-up'
                    height={Constants.ResponsiveSize.f30}
                    width={Constants.ResponsiveSize.f30}
                    color={!enableTopButton ? 'grey' : theme.Colors.primary}
                />
            </Pressable>

            <View style={styles.slectItemContainer}>
                {!showEditingText ?
                    <FlatList
                        listKey={'date-list'}
                        ref={flatListRef}
                        contentContainerStyle={{ flexGrow: 1 }}
                        onMomentumScrollEnd={onScrollEnd}
                        data={DATA}
                        renderItem={({ item, index }) => (
                            <Item
                                key={index}
                                height={height}
                                onPressItem={onShowEditingForm}
                                i={item}
                            />
                        )}
                        onLayout={onUpdateHeight}
                        showsVerticalScrollIndicator={false}
                        pagingEnabled
                    /> :
                    <View style={styles.editingInputContainer}>
                        <RNTextInput
                            autoFocus
                            style={styles.textStyle}
                            keyboardType={'numeric'}
                            maxLength={4}
                            onEndEditing={onFinishEditing}
                            onPressOut={onFinishEditing}
                            onBlur={onFinishEditing}
                        />
                    </View>
                }
            </View>
            <Pressable onPress={onDownClick} >
                <SvgIcon
                    name='chevron-down'
                    height={Constants.ResponsiveSize.f30}
                    width={Constants.ResponsiveSize.f30}
                    color={!enableBottomButton ? 'grey' : theme.Colors.primary}
                />
            </Pressable>
        </View>
    )
}

const DatePicker = () => {
    return (
        <View style={styles.pickerConatiner}>
            <DatePickerSelectItem data={['01', '02', '03', '04']} />
            <DatePickerSelectItem data={['01', '02', '03', '04']} />
            <DatePickerSelectItem data={['1920', '1921', '1922', '1923']} />
        </View>
    )

}

const styles = StyleSheet.create({
    pickerConatiner: {        
        flexDirection: "row",
        flex:1,
    },
    container: {
        flex:1,
        height:30,
        alignItems: 'center',
        marginHorizontal: 10
    },
    slectItemContainer: {
        minHeight:60,
        flex: 1,
        width: '100%',
        backgroundColor: '#02201B',
        borderColor: theme.Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
    },
    editingInputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',

    },
    textStyle: {
        color: 'white',
        fontSize: Constants.ResponsiveSize.f30,
        fontWeight: 'bold',
    }
})

export default DatePicker;