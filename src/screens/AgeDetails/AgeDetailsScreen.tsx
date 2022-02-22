import React, { FC, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from 'src/common/theme/theme';

import { BottomCardContainer, Button, ContentWrapper, DatePicker } from 'src/components';
import { AuthScreenContainer } from 'src/containers';


const AgeDetailsScreen: FC<{ navigation: any }> = ({ navigation }) => {
    const [date, setDate] = useState();


    return (
        <AuthScreenContainer>
            <BottomCardContainer title='What is Your age' subTitle='Please Enter DOB' fixedHeight>
                <ContentWrapper>
                    <Text
                        style={{
                            color: theme.Colors.secondaryLight,
                            fontWeight: 'bold',
                            fontSize: 16,
                            marginBottom: 30
                        }}>Your birthday
                    </Text>
                    <DatePicker
                        height={150}
                        value={date}
                        onChange={(value: any) => setDate(value)}
                        format="dd-mm-yyyy"
                        startYear={1950}
                        endYear={2022}
                    />
                    <View style={{ flex: 1 }} />
                </ContentWrapper>
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